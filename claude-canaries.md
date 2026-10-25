# Canaries for CLAUDE.md

A single "start every reply with my name" line catches drift (Claude dropping your rules), not hallucinations. These 3 lines catch both.

## Paste at the top of CLAUDE.md (or your project instructions on claude.ai)

```
## canaries
1. start every reply with "[your name]:"
2. end every reply with "files read:" and the files you actually opened in this session, or "none"
3. before you use any function, setting or command, name the file or doc it comes from. if you can't, write "not verified"
```

- Name gone → `/compact` or start a new chat.
- "not verified" → check it before you run it.
- In Claude Code every file it opens shows up as a Read step, so you can check the "files read:" line against it.
