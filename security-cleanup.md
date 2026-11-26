# Security cleanup with AI as your guide

Two prompts. The first one only counts how your accounts sign you in. The second one walks you through fixing them, one tap at a time.

> Works in: ChatGPT, Claude, Gemini · Mode: the check is read-only, you make every change · Tested: 24.10.2026 and 25.11.2026

## 1. Quick 2FA check (read-only, 3 lines)

```
I'm not technical. Walk me through checking two-factor login on my accounts, one at a time: email, money, social.
For each one, tell me where to tap and what to write down: no 2FA, SMS only, app or passkey, or app with SMS as a backup.
Read only. Don't tell me to change anything yet, and never ask for a password, a code or a screenshot of one.
```

Write down one of four answers for each account:

| What you see | Write |
|---|---|
| No two-step login at all | no 2FA |
| Only text-message codes | SMS only |
| An authenticator app, passkey or security key, and SMS is still on as a backup | app + SMS |
| An app, passkey or key, and no SMS | app only |

My result (25.11.2026): 10 accounts in 7 minutes. 1 had no 2FA, 6 still accepted SMS codes (2 of them SMS only), 2 used only an app or passkey, 1 used a PIN lock.

When you share your numbers, leave out which account is which. A public list of your accounts without 2FA is a gift to anyone trying to get in.

## 2. 20-minute cleanup (you make the changes)

```
I'm not technical. walk me through a 20-minute security cleanup, one step at a time.
my phone: [model]. my email: [Gmail / Outlook / iCloud]. where I get paid: [bank, PayPal, Upwork...].
for each step tell me exactly where to tap, what "done" looks like, then wait until I say "done".
order: email, money accounts, phone, browser extensions.
never ask me for a password, a code or a screenshot of one.
```

My result (24.10.2026): 17 minutes, 3 accounts I get paid through were still on SMS codes.

## Before you switch SMS codes to an authenticator app

Save your backup codes first (Google gives you 10 one-time codes). Print them or keep them in your password manager, so a broken phone screen doesn't lock you out.

## Rules

- Never type a password or a code into an AI chat, and never send a screenshot of one.
- Do the email account first: it can reset the passwords of everything else.
- 2FA makes a stolen password less useful. It does not make an account safe on its own.

---

[All prompts](README.md) · [@lateascent on X](https://x.com/lateascent)
