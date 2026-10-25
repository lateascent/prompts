# Back up your AI accounts before you need to

I ran this on 25.10.2026. Claude: email in 2 minutes, 35 chats, 657 messages, 209 files, 8 projects, 101 MB. ChatGPT: requested at the same minute, no email after 6 hours (OpenAI says up to 7 days).

## 5 steps, on a computer

1. **ChatGPT:** Settings → Data controls → Export data. The download link comes by email and expires after 24 hours. OpenAI says the email can take up to 7 days.
2. **Claude:** Settings → Privacy → Export data. Works on the web and in the desktop app, not in the phone app. The email holds 5 separate downloads: conversations, projects, memories, feedback and light metadata. Each link expires after 24 hours and may stop working once used, so let every download finish.
3. **Instructions:** copy your custom instructions and project instructions into one document. They are the part you spent hours on.
4. **Client files:** keep them in a normal folder or cloud drive, not only inside a chat.
5. **Separate account:** if you take apart devices or apps, do it on a different account from the one that holds your client work.

## Count your chats without opening them

Unzip the export, then run (needs Node.js):

```
node count-chats.js path/to/conversations.json client,proposal,invoice
```

It prints only numbers: how many chats, file size, oldest and newest date, and how many chat titles contain your keywords. No chat text is shown.
