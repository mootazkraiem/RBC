@echo off
REM Starts a Cloudflare quick tunnel pointed at the local RKC server.
REM
REM IMPORTANT: this is the fast, zero-account way to get a public HTTPS URL
REM working today. It has a real limitation: the https://*.trycloudflare.com
REM URL is randomly generated EVERY time cloudflared (re)starts -- including
REM after a machine reboot. If that happens, every client's config.json
REM server_url goes stale and needs to be updated with the new URL.
REM
REM Before this goes past a short-term pilot: create a free Cloudflare
REM account, add a domain (or buy a cheap one), and switch this to a named
REM tunnel with a fixed hostname -- see:
REM https://developers.cloudflare.com/cloudflare-one/connections/connect-apps
REM Once that's done this script's --url quick-tunnel invocation goes away
REM in favor of `cloudflared tunnel run <name>`.
cloudflared tunnel --url https://localhost:8443 --no-tls-verify >> "%~dp0tunnel.log" 2>&1
