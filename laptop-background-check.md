# Laptop background check (read-only)

What is talking to the internet on your computer right now, what runs with no window, and what starts on its own. Nothing is closed, deleted or changed.

## Prompt (Claude Code, Codex or any agent that can run commands)

```
Audit my computer in read-only mode. Do not close, delete or change anything.
1. List every app with a live internet connection right now and how many connections each has.
2. List apps running with no open window and when each one started.
3. List everything that starts automatically at login.
4. Tell me when the computer was last restarted.
5. Mark what I probably forgot about and tell me how to turn it off by hand.
Answer as a short table.
```

## No agent? Run one command and paste the result into ChatGPT or Claude with the prompt above

Windows (PowerShell):

```
Get-NetTCPConnection -State Established | ForEach-Object { (Get-Process -Id $_.OwningProcess).ProcessName } | Group-Object | Sort-Object Count -Descending
```

Mac (Terminal):

```
lsof -i -P | grep ESTABLISHED
```

## Fix by hand

- Quit apps from the tray / menu bar, not the X button.
- Windows: Task Manager → Startup apps → Disable what you never open. Mac: System Settings → General → Login Items.
- Restart once a week.

My result (27.10.2026): 42 live connections from 9 apps, Zoom running 5 days with no window, 24 background programs with no window, 7 apps starting at login.
