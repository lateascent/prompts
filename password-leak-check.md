# Leaked password check (60 seconds + a 15-minute plan)

Find out how many of your saved passwords already showed up in data leaks, then let AI sort the fixes by risk. You never give AI a password, only site names.

## 1. Check, 60 seconds

- **iPhone:** Settings → Passwords → Security Recommendations
- **Android, Chrome, any PC:** [passwords.google.com](https://passwords.google.com) → Password Checkup
- **Any email address:** [haveibeenpwned.com](https://haveibeenpwned.com)

Write down four numbers: leaked, reused, weak, and how many breaches your email was in.

## 2. Turn it into a plan

Copy only the **site names** from the leaked and reused lists. Never the passwords. Paste them into ChatGPT, Claude or Gemini with this prompt:

```
Here is a list of sites where my passwords were found in data leaks or reused. I will not share any passwords.
[paste site names]
1. Sort them by risk: email, bank and payments, Apple or Google account, work, shopping, everything else.
2. For the top 5, tell me exactly where to change the password and how to turn on 2FA.
3. Tell me which accounts I can just delete instead of fixing.
4. Give me a 15-minute plan as a checklist, most dangerous first.
```

## 3. Fix first

- Email, bank, Apple or Google account: new password and 2FA today.
- Never reuse your email password anywhere.
- Delete old accounts you don't use instead of fixing them.

My result (30.10.2026, Google Password Checkup + haveibeenpwned): 217 leaked, 84 reused, 96 weak, email in 2 breaches.
