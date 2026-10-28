# Downloads folder check for AI agents (read-only)

A web page can drop a plain text file (AGENTS.md, CLAUDE.md) into your Downloads folder without asking. If you start Claude Code or Codex there, the agent reads that file as your instructions. Write-up: The Hacker News, "Malicious File in Downloads Folder Tries to Trick AI Coding Agent Into Installing Malware" (26.10.2026).

## Prompt

Start Claude Code or Codex in an EMPTY folder (not Downloads, not your home folder) and paste:

```
Read-only. Do not change, delete or run anything.
1. List any AGENTS.md, CLAUDE.md, GEMINI.md, .cursorrules or .mcp.json in my Downloads folder and its subfolders.
2. Show every MCP server in my Codex config.toml and the file each one points to.
3. Check my Claude Code settings.json for ANTHROPIC_BASE_URL or any custom env.
4. Tell me if my browser asks where to save each download.
5. List the folders my agent sessions were started in.
Answer as a table: check / result / what to do.
```

## No agent?

Open Downloads, turn on hidden files, and look for any .md file you never saved yourself.

## Fix

- Make an empty folder called Projects and only start agents there.
- Chrome → Settings → Downloads → turn on "Ask where to save each file".
- Never accept "trust this folder" for Downloads or your home folder.

My result (28.10.2026): 4/4 passed. Downloads had 8 files and no agent files; Claude Code settings clean; 2 MCP servers in Codex, both Codex's own; Chrome already asked where to save.
