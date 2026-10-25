# Read-only PC audit

I ran this on my Windows laptop on 22.10.2026. The biggest memory user after Chrome was the Claude app itself: 3 GB across 13 processes.

## Prompt (Claude Code on Windows)

```
audit this PC for what slows it down. read-only: don't change, delete or install anything.
1. RAM: top apps by memory, grouped by app, not by process
2. startup apps and where they launch from
3. running services not made by Microsoft, with start mode
4. scheduled tasks not made by Microsoft
5. CPU over 10 seconds: anything above 20%?
6. free space on each drive
7. ping the router and 1.1.1.1 30 times, report loss and jitter
then give me one table: what it is, why it runs, safe to turn off? yes / no / ask me
```

On a Mac, swap services and tasks for launch agents and login items.
