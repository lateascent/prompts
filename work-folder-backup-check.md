# Does your work folder have a second copy? (read-only check, 2 minutes)

An AI tool with access to a folder can delete files in it, and a mistake can reach the files you care about. A second copy is what lets you undo it. This check counts the files in your work folder, tells you whether the folder sits inside OneDrive, and shows whether File History is running. It only reads, nothing is deleted or moved.

## 1. Check, 3 lines

1. Press Start, type PowerShell, open it (a normal window, not "as administrator").
2. Put the path of your work folder into the first line, then paste all three lines and press Enter:

```
$w = "C:\your\work\folder"
(Get-ChildItem $w -Recurse -File).Count
$w.StartsWith($env:OneDrive, 'OrdinalIgnoreCase')
```

3. The first number is how many files are in the folder. On a big folder it can take a minute.
4. `True` means the folder is inside OneDrive. `False` means OneDrive does not cover it.

## Also check File History (optional, read-only)

```
Get-Service fhsvc -ErrorAction SilentlyContinue | Where-Object Status -eq 'Running'
```

No output means File History is not running.

## 2. Make a second copy

Copy what you cannot lose to a place that is not this folder: an external drive, or a cloud folder. A free OneDrive account has about 5 GB, so on a large folder pick the files you cannot replace instead of copying everything. Do this with Explorer copy and paste, not by moving the files.

## 3. Give an AI tool a copy, not the original

Prompt to say before an AI tool works in a folder:

```
Work only in a copy of this folder. List what you will delete and wait for my yes.
```

If the tool cannot follow this, do not give it write access to the folder.

## 4. Check that the cloud restore works

OneDrive keeps deleted files in its recycle bin for 30 days on personal accounts ([Microsoft: Restore your OneDrive files](https://support.microsoft.com/en-US/onedrive/restore-your-onedrive-files)). Put one test file in a cloud folder, delete it, and restore it from the recycle bin. Do this once so you know where the button is.

## Rules

- Step 1 only reads. Steps 2 and 4 change things, so do them yourself.
- A cloud folder that syncs is not a backup if a deleted file is deleted everywhere. Keep one copy that does not sync.
- Do not paste folder paths with your user name, passwords or keys into an AI chat.
