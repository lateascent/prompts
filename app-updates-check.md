# Which apps on your Windows PC are behind on updates (read-only check)

A fix for a bug only helps after you install it. This check lists the apps that have a newer version waiting and shows when Windows last updated itself. The first command only reads. The next two only open Settings pages.

## 2 minutes, no tools

1. Press Start, type PowerShell, open it (a normal window, not "as administrator").
2. Paste these 3 lines, one at a time, and press Enter after each:

```
winget upgrade
start ms-settings:windowsupdate-history
start ms-settings:windowsupdate
```

3. In the first result, look at the last line: "N upgrades available". That N is your number.
4. On the Update history page, look at the date of the newest update.
5. On the Windows Update page, press "Check for updates". Restart if it asks.

## Prompt for any AI chat

```
Apps on my Windows laptop with updates waiting: [paste app names only].
Which ones are worth updating first and which can wait? Advice only. I run the updates myself.
```

## Update one app at a time

When you decide, update the apps you actually use, one by one. Take the Id from the second column of the `winget upgrade` list:

```
winget upgrade --id <Id>
```

Update everything at once only when you have read the list and are fine with every line:

```
winget upgrade --all
```

## Rules

- `winget upgrade` alone changes nothing. It only lists.
- Updating can restart or close an app. Save your work first.
- Do not paste anything with your user name, passwords or keys into an AI chat. App names only.
- Some packages show "version numbers that cannot be determined". They are not in the count. `winget upgrade --include-unknown` shows them.
