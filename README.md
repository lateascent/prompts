# lateascent / prompts

[![prompts](https://img.shields.io/badge/prompts-17-111111)](#prompts) [![tested](https://img.shields.io/badge/each%20one-tested%20before%20posting-111111)](#prompts) [![read-only](https://img.shields.io/badge/default-read--only-111111)](#rules) [![license](https://img.shields.io/badge/license-MIT-111111)](LICENSE) [![X](https://img.shields.io/badge/follow-%40lateascent-111111?logo=x)](https://x.com/lateascent)

Copy-paste AI prompts for beginners and freelancers. I run each one on my own devices before I post about it on [X](https://x.com/lateascent).

## Prompts

Tap a category, then a prompt. Copy the grey block into ChatGPT, Claude or Gemini.

<details>
<summary><b>Accounts and money</b> (4)</summary>
<br>

<details>
<summary><b>security-cleanup</b>: which of your accounts still use SMS codes</summary>

Checks how each account signs you in: no 2FA, SMS only, app or passkey. Read-only.

```
I'm not technical. Walk me through checking two-factor login on my accounts, one at a time: email, money, social.
For each one, tell me where to tap and what to write down: no 2FA, SMS only, app or passkey, or app with SMS as a backup.
Read only. Don't tell me to change anything yet, and never ask for a password, a code or a screenshot of one.
```

My result: 6 of 10 accounts still accepted SMS codes, 1 had no 2FA. [Full file, with a 20-minute guided cleanup](security-cleanup.md)

</details>

<details>
<summary><b>password-leak-check</b>: how many of your passwords already leaked</summary>

Check in Google Password Checkup or iPhone Security Recommendations first, then give the AI only the site names.

```
Here is a list of sites where my passwords were found in data leaks or reused. I will not share any passwords.
[paste site names]
1. Sort them by risk: email, bank and payments, Apple or Google account, work, shopping, everything else.
2. For the top 5, tell me exactly where to change the password and how to turn on 2FA.
3. Tell me which accounts I can just delete instead of fixing.
4. Give me a 15-minute plan as a checklist, most dangerous first.
```

My result: 217 leaked, 84 reused, 96 weak. [Full file](password-leak-check.md)

</details>

<details>
<summary><b>subscription-audit</b>: everything you pay for every month</summary>

A browser agent (Claude in Chrome) reads your Gmail receipts and builds a table. It only reads. You cancel.

```
Work only inside the Gmail tab in this browser so I can watch. Do not use the Gmail connector. Do not click links inside emails, do not reply, cancel or change anything in Gmail.
Use the Gmail search bar to find receipts and invoices from the last 3 months, open each one, and note every recurring subscription: service, price, billing period, last charge date.
Then open a new tab at sheets.new, type the table there, and add the total per month in USD in the last row. Answer in English.
```

My result: 5 subscriptions, $87.23 a month, 1 failing for a month. [Full file](subscription-audit.md)

</details>

<details>
<summary><b>ai-account-backup</b>: back up ChatGPT and Claude before you need to</summary>

No prompt, 2 menus:

- ChatGPT: Settings → Data controls → Export data
- Claude: Settings → Privacy → Export data (web or desktop app)

My result: Claude export in 2 minutes, ChatGPT nothing after 6 hours. [Full file, with a script that counts your chats](ai-account-backup.md)

</details>

</details>

<details>
<summary><b>Phone and TV</b> (4)</summary>
<br>

<details>
<summary><b>phone-photos-check</b>: where "deleted" photos still sit on your phone</summary>

Start with the places you can check by hand:

- iPhone: Photos → Albums → Recently Deleted
- Samsung: Gallery → Menu → Recycle bin
- Telegram / WhatsApp → Storage
- Screenshots album: cards, IDs, bank apps, recovery codes

My result: 674 photos in Recently Deleted, 10,798 screenshots. [Full file, with a read-only Claude Code check](phone-photos-check.md)

</details>

<details>
<summary><b>permission-usage-check</b>: which apps used your camera, mic or location</summary>

Samsung: Settings → Security and privacy → Privacy → Permission usage. iPhone: App Privacy Report. Type the app names, no screenshot.

```
Apps that used my camera, mic or location in the last 24 hours: [paste names].
For each one, does it need that access to work? Say which to set to "only while using the app" and give the exact setting for my phone: [Samsung model or iPhone model].
Advice only. I change the settings myself.
```

[Full file](permission-usage-check.md)

</details>

<details>
<summary><b>wifi-devices-check</b>: what is connected to your home Wi-Fi</summary>

Open the device list in your router app and type the names. Never send a photo of the router sticker.

```
Devices on my home Wi-Fi: [paste names].
Sort them into phones and computers, TV and smart home, and unknown. For each unknown one, tell me how to find out what it is.
Advice only. I change the settings myself.
```

[Full file](wifi-devices-check.md)

</details>

<details>
<summary><b>tv-privacy-check</b>: is your smart TV reporting what you watch</summary>

```
my TV: [brand, model, year]. walk me through its privacy settings one step at a time.
find: viewing information / content recognition (ACR), voice and microphone, interest-based ads, and which connected devices (soundbar, bluetooth speaker, remote) have a microphone.
for each step give me the exact menu path and what "off" looks like, then wait until I say "done".
```

A reader's Samsung: 320 requests to the ACR server in 24 hours. [Full file, with menu paths by brand](tv-privacy-check.md)

</details>

</details>

<details>
<summary><b>Windows and Mac</b> (5)</summary>
<br>

<details>
<summary><b>unsigned-programs-check</b>: programs on your PC with no digital signature</summary>

Paste into PowerShell (a normal window). It only reads.

```
Get-ChildItem "$env:USERPROFILE\Downloads","C:\Program Files","C:\Program Files (x86)" -Recurse -Filter *.exe -File -ErrorAction SilentlyContinue | Get-AuthenticodeSignature | Group-Object Status -NoElement
```

My result: 6 of 388 unsigned. [Full file, with the AI prompt for the names](unsigned-programs-check.md)

</details>

<details>
<summary><b>app-updates-check</b>: which apps are behind on updates</summary>

Paste into PowerShell. `winget upgrade` alone only lists, it changes nothing.

```
winget upgrade
start ms-settings:windowsupdate-history
```

My result: 9 apps behind. [Full file](app-updates-check.md)

</details>

<details>
<summary><b>work-folder-backup-check</b>: does your work folder have a second copy</summary>

Put your folder path in the first line, then paste into PowerShell. It only reads.

```
$w = "C:\your\work\folder"
(Get-ChildItem $w -Recurse -File).Count
$w.StartsWith($env:OneDrive, 'OrdinalIgnoreCase')
```

My result: 80,136 files with no second copy. [Full file](work-folder-backup-check.md)

</details>

<details>
<summary><b>laptop-background-check</b>: what runs and talks to the internet right now</summary>

For Claude Code, Codex or any agent that can run commands:

```
Audit my computer in read-only mode. Do not close, delete or change anything.
1. List every app with a live internet connection right now and how many connections each has.
2. List apps running with no open window and when each one started.
3. List everything that starts automatically at login.
4. Tell me when the computer was last restarted.
5. Mark what I probably forgot about and tell me how to turn it off by hand.
Answer as a short table.
```

My result: 42 live connections, Zoom running 5 days with no window. [Full file](laptop-background-check.md)

</details>

<details>
<summary><b>pc-audit-read-only</b>: what slows your Windows PC down</summary>

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

My result: the Claude app used 3 GB in 13 processes. [Full file](pc-audit-read-only.md)

</details>

</details>

<details>
<summary><b>AI agents</b> (2)</summary>
<br>

<details>
<summary><b>downloads-agent-check</b>: did a web page plant instructions for your AI agent</summary>

Start Claude Code or Codex in an empty folder and paste:

```
Read-only. Do not change, delete or run anything.
1. List any AGENTS.md, CLAUDE.md, GEMINI.md, .cursorrules or .mcp.json in my Downloads folder and its subfolders.
2. Show every MCP server in my Codex config.toml and the file each one points to.
3. Check my Claude Code settings.json for ANTHROPIC_BASE_URL or any custom env.
4. Tell me if my browser asks where to save each download.
5. List the folders my agent sessions were started in.
Answer as a table: check / result / what to do.
```

My result: 4 of 4 checks passed. [Full file](downloads-agent-check.md)

</details>

<details>
<summary><b>claude-canaries</b>: see when Claude drops your rules</summary>

Paste at the top of CLAUDE.md or your project instructions:

```
## canaries
1. start every reply with "[your name]:"
2. end every reply with "files read:" and the files you actually opened in this session, or "none"
3. before you use any function, setting or command, name the file or doc it comes from. if you can't, write "not verified"
```

[Full file](claude-canaries.md)

</details>

</details>

<details>
<summary><b>Writing</b> (2)</summary>
<br>

<details>
<summary><b>workslop-check</b>: lines a colleague would have to fix in your draft</summary>

Paste this, then your draft under it:

```
Find lines in this draft a colleague would have to fix: vague words, missing numbers, facts I did not give you.
Quote each line, say what is wrong in a few words.
Do not rewrite anything and do not add facts.
```

My result: 26 lines flagged in one letter. [Full file](workslop-check.md)

</details>

<details>
<summary><b>ai-writing-check</b>: which lines in your text sound like AI</summary>

Paste this, then your text under it:

```
Find every line in my text that sounds like AI writing.
Quote it, name the pattern, give a plainer version in a few words.
Do not rewrite anything else and do not add facts.
```

My result: AI grammar fix scored 100% human, AI rewrite scored 100% AI. [Full file, with the patterns I cut](ai-writing-check.md)

</details>

</details>

## Rules

- Every prompt starts read-only. Anything you can't undo (deleting, paying, sending, changing settings) stays with you.
- Never paste passwords, codes, card numbers or screenshots of them into any AI chat.
- Each result comes from one test on my own devices. Yours will be different.

New: 25.11 [2FA check](security-cleanup.md), 24.11 [workslop-check](workslop-check.md). MIT license, copy and share.
