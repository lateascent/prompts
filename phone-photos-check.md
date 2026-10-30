# Where "deleted" photos still are on your phone (read-only)

Photos you deleted, screenshots of cards and IDs, and media people sent you often stay on the phone longer than you think. Check the obvious places first, then let Claude Code do a deeper read-only pass.

## 2 minutes, no tools

- **Photos → Albums → Recently Deleted.** Kept for 30 days. Delete All if you don't need them.
- **Settings → Privacy → Photos.** Switch apps from Full Access to Limited or None.
- **Settings → Privacy → Camera.** Turn it off for apps that don't need it.
- **Telegram / WhatsApp → Storage.** Clear the media cache.
- **Screenshots album.** Look for cards, IDs, bank apps, recovery codes.
- Backing up your phone to a computer? Turn on **Encrypt local backup**.

## Android with Claude Code

Phone on USB, USB debugging on, adb installed, Claude Code started in an empty folder:

```
My Android phone is connected over adb. Read-only: only use adb shell ls, du, find and stat. Do not delete, move, pull or open any file.
1. Count files and size in /sdcard/DCIM/.thumbnails, /sdcard/Android/.Trash, /sdcard/Pictures/Screenshots and /sdcard/Download.
2. Count files and size in WhatsApp and Telegram media: /sdcard/Android/media/com.whatsapp and /sdcard/Android/data/org.telegram.messenger. Skip any folder that is blocked.
3. List file names only, no contents, that contain passport, id, card, bank, statement, seed, recovery or password.
4. Show the oldest file date in each folder.
Answer as a table: folder / files / size / oldest / what to do.
```

## iPhone with Claude Code

The easiest place to start is the backup copy on your computer:

```
Read-only. Find iPhone backups on this computer (Windows: %APPDATA%\Apple Computer\MobileSync\Backup and %USERPROFILE%\Apple\MobileSync\Backup, Mac: ~/Library/Application Support/MobileSync/Backup). For each one show the date, size, file count and whether it is encrypted. If it is not encrypted, open Manifest.db read-only and count the files in CameraRollDomain. Do not open or copy any photo.
```

My result (29.10.2026, iPhone): 674 photos in Recently Deleted, 12 apps with full photo access, 3.8 GB Telegram cache, 10,798 screenshots going back to July 2015.
