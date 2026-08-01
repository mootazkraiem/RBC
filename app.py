"""
Release Knowledge Capture - team desktop client.

Stack: pywebview (native OS window -- Edge WebView2 on Windows, WebKit
on macOS, GTK/Qt WebKit on Linux; ships with the OS, no runtime download).
Data lives on the shared team server (see server/main.py), not on this
machine -- this app is a thin, authenticated client. Configure which
server to talk to in config.json (see client_config.py).

Run:
    pip install -r requirements.txt
    python app.py
"""

import os
import subprocess
import sys
import time

import requests
import webview

from api import Api
from client_config import APP_DIR, load_config

_LOCAL_HOSTS = ("localhost", "127.0.0.1", "0.0.0.0")
_FROZEN = getattr(sys, "frozen", False)

# ui/ is read-only bundled data, so it belongs wherever PyInstaller
# actually extracted/placed the bundle (sys._MEIPASS -- correct for both
# onefile and onedir, including onedir's default "_internal" layout).
# config.json and server_cert.pem are different: those must be editable
# per machine, so client_config.py resolves APP_DIR to the .exe's own
# folder for those, never into the bundle.
if _FROZEN:
    UI_DIR = os.path.join(sys._MEIPASS, "ui")
else:
    UI_DIR = os.path.join(APP_DIR, "ui")


def _is_local_server(url: str) -> bool:
    return any(host in url for host in _LOCAL_HOSTS)


def _server_responding(url: str) -> bool:
    try:
        # verify=False here is deliberate and narrow: this only checks
        # whether *something* is listening on /health (no credentials, no
        # data), before we necessarily have a pinned cert file in place on
        # a brand-new install. The real login/data calls in api.py still
        # verify against the pinned certificate -- this probe never does.
        r = requests.get(f"{url}/health", timeout=1.5, verify=False)
        return r.status_code == 200
    except requests.exceptions.RequestException:
        return False


def _autostart_local_server_if_needed(config):
    """Convenience for local development/testing only -- never in a
    packaged build.

    If the configured server is on this machine and nothing is answering
    on it yet, start one. This is never attempted for a real team server
    on another machine -- a client can't (and shouldn't) launch someone
    else's server process; it should just connect to what's already
    running there.

    Also never attempted when packaged: sys.executable is this app's own
    .exe in that case, not a Python interpreter, so trying to relaunch it
    with "-m server.main" would be nonsense (and the server/ package
    isn't even bundled into a client-only build).
    """
    if _FROZEN:
        return
    url = config["server_url"].rstrip("/")
    if not _is_local_server(url):
        return
    if _server_responding(url):
        return

    print(f"[app] No server responding at {url} yet -- starting one locally for development.", flush=True)
    creationflags = subprocess.CREATE_NEW_PROCESS_GROUP if os.name == "nt" else 0
    subprocess.Popen(
        [sys.executable, "-m", "server.main"],
        cwd=APP_DIR,
        creationflags=creationflags,
    )
    for _ in range(20):
        time.sleep(0.5)
        if _server_responding(url):
            print("[app] Local server is up.", flush=True)
            return
    print("[app] Warning: local server did not respond in time; continuing anyway.", flush=True)


def main():
    config = load_config()
    _autostart_local_server_if_needed(config)

    api = Api()
    index_path = os.path.join(UI_DIR, "index.html")
    window = webview.create_window(
        "Release Knowledge Capture",
        url=index_path,
        js_api=api,
        width=1400,
        height=920,
        min_size=(1080, 720),
        maximized=True,
    )
    api.window = window  # needed for native file-picker dialogs
    webview.start(debug=False)


if __name__ == "__main__":
    main()
