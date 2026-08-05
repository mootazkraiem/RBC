"""
Small Windows updater for the packaged Release Knowledge Capture client.

Usage:
    python updater.py

Or build as a standalone executable with PyInstaller using
`ReleaseKnowledgeCaptureUpdater.spec`.
"""

from __future__ import annotations

import shutil
import sys
import tempfile
import zipfile
from pathlib import Path
from tkinter import Tk, filedialog, messagebox


APP_EXE_NAME = "ReleaseKnowledgeCapture.exe"
DEFAULT_ZIP_NAME = "ReleaseKnowledgeCapture.zip"
PRESERVED_FILES = ("config.json", "server_cert.pem")


def main() -> int:
    root = Tk()
    root.withdraw()
    root.update()

    try:
        zip_path = pick_zip(root)
        if zip_path is None:
            return 0

        install_dir = pick_install_dir(root)
        if install_dir is None:
            return 0

        app_dir = normalize_install_dir(install_dir)
        if app_dir is None:
            messagebox.showerror(
                "Update failed",
                f"Could not find {APP_EXE_NAME} in the selected folder.",
                parent=root,
            )
            return 1

        if is_app_running(app_dir):
            messagebox.showerror(
                "Close the app first",
                "Release Knowledge Capture is still running.\n\n"
                "Please close it on this PC, then run the updater again.",
                parent=root,
            )
            return 1

        with tempfile.TemporaryDirectory(prefix="rkc-update-") as temp_dir:
            extracted_app_dir = extract_release(zip_path, Path(temp_dir))
            apply_update(extracted_app_dir, app_dir)

        messagebox.showinfo(
            "Update complete",
            "Release Knowledge Capture was updated successfully.\n\n"
            "Your local config was kept in place.",
            parent=root,
        )
        return 0
    except Exception as exc:  # noqa: BLE001 - updater should surface a friendly error
        messagebox.showerror("Update failed", str(exc), parent=root)
        return 1
    finally:
        root.destroy()


def pick_zip(root: Tk) -> Path | None:
    updater_dir = Path(sys.executable if getattr(sys, "frozen", False) else __file__).resolve().parent
    default_zip = updater_dir / DEFAULT_ZIP_NAME
    if default_zip.is_file():
        return default_zip

    selected = filedialog.askopenfilename(
        parent=root,
        title="Select the update zip",
        filetypes=[("Zip files", "*.zip")],
    )
    return Path(selected) if selected else None


def pick_install_dir(root: Tk) -> Path | None:
    selected = filedialog.askdirectory(
        parent=root,
        title="Select the installed Release Knowledge Capture folder",
    )
    return Path(selected) if selected else None


def normalize_install_dir(selected_dir: Path) -> Path | None:
    if (selected_dir / APP_EXE_NAME).is_file():
        return selected_dir
    nested = selected_dir / "ReleaseKnowledgeCapture"
    if (nested / APP_EXE_NAME).is_file():
        return nested
    return None


def is_app_running(app_dir: Path) -> bool:
    try:
        import subprocess

        result = subprocess.run(
            [
                "powershell",
                "-NoProfile",
                "-Command",
                (
                    "$target = [System.IO.Path]::GetFullPath($args[0]); "
                    "Get-CimInstance Win32_Process | "
                    "Where-Object { $_.Name -eq 'ReleaseKnowledgeCapture.exe' -and "
                    "$_.ExecutablePath -and "
                    "([System.IO.Path]::GetFullPath($_.ExecutablePath) -eq $target) } | "
                    "Select-Object -First 1 -ExpandProperty ProcessId"
                ),
                str((app_dir / APP_EXE_NAME).resolve()),
            ],
            capture_output=True,
            text=True,
            check=False,
        )
        return bool(result.stdout.strip())
    except Exception:
        return False


def extract_release(zip_path: Path, temp_dir: Path) -> Path:
    with zipfile.ZipFile(zip_path) as archive:
        archive.extractall(temp_dir)

    candidates = [
        path for path in temp_dir.rglob(APP_EXE_NAME)
        if path.is_file()
    ]
    if not candidates:
        raise RuntimeError(f"{zip_path.name} does not contain {APP_EXE_NAME}.")
    return candidates[0].parent


def apply_update(source_dir: Path, target_dir: Path) -> None:
    backup_dir = target_dir.with_name(f"{target_dir.name}.backup")
    if backup_dir.exists():
        shutil.rmtree(backup_dir)
    shutil.copytree(target_dir, backup_dir)

    try:
        for child in target_dir.iterdir():
            if child.name in PRESERVED_FILES:
                continue
            if child.is_dir():
                shutil.rmtree(child)
            else:
                child.unlink()

        for child in source_dir.iterdir():
            destination = target_dir / child.name
            if child.is_dir():
                shutil.copytree(child, destination)
            else:
                if destination.exists():
                    destination.unlink()
                shutil.copy2(child, destination)
    except Exception:
        restore_backup(backup_dir, target_dir)
        raise
    else:
        shutil.rmtree(backup_dir)


def restore_backup(backup_dir: Path, target_dir: Path) -> None:
    for child in list(target_dir.iterdir()):
        if child.is_dir():
            shutil.rmtree(child)
        else:
            child.unlink()
    for child in backup_dir.iterdir():
        destination = target_dir / child.name
        if child.is_dir():
            shutil.copytree(child, destination)
        else:
            shutil.copy2(child, destination)


if __name__ == "__main__":
    raise SystemExit(main())
