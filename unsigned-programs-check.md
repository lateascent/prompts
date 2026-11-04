# Which programs on your Windows PC have no digital signature (read-only)

A digital signature shows who published a program. Most normal programs have one. This check counts how many .exe files in Downloads and Program Files are signed, and lists the ones that are not. It only reads, nothing is changed or run.

## 2 minutes, no tools

1. Press Start, type PowerShell, open it (a normal window, not "as administrator").
2. Paste this line and press Enter. It takes about a minute.

```
Get-ChildItem "$env:USERPROFILE\Downloads","C:\Program Files","C:\Program Files (x86)" -Recurse -Filter *.exe -File -ErrorAction SilentlyContinue | Get-AuthenticodeSignature | Group-Object Status -NoElement
```

3. Look at the line "NotSigned". "Valid" is the normal case.

## List the names of the unsigned ones

```
Get-ChildItem "$env:USERPROFILE\Downloads","C:\Program Files","C:\Program Files (x86)" -Recurse -Filter *.exe -File -ErrorAction SilentlyContinue | Get-AuthenticodeSignature | Where-Object Status -eq 'NotSigned' | Select-Object -ExpandProperty Path
```

## Prompt for any AI chat

```
Unsigned programs on my Windows PC: [paste file names only].
For each one, say what it most likely is and how I check the publisher.
Advice only. I decide what to delete.
```

## Rules

- Unsigned does not mean dangerous: many small tools, old games and open source players have no signature.
- A valid signature shows who published a file, not that it is safe. Do not run an installer you got from a stranger, signed or not.
- Do not paste full paths with your user name or any passwords into an AI chat. Names only.
