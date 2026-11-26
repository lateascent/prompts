# Check a draft before you send it (3 lines)

"Workslop" is AI output that looks polished but someone else has to fix. Before a draft goes to a client, a boss or a colleague, run this check. The AI only points at lines. You decide what to change.

> Works in: ChatGPT, Claude, Gemini · Mode: the AI points at lines, you edit · Tested: 24.11.2026

## The 3 lines

Paste this into any AI chat (ChatGPT, Claude, Gemini), then paste your draft under it:

```
Find lines in this draft a colleague would have to fix: vague words, missing numbers, facts I did not give you.
Quote each line, say what is wrong in a few words.
Do not rewrite anything and do not add facts.
```

## What it catches

- Vague words: "so proud", "always", "whatever it takes", "the depth of my gratitude".
- Missing numbers: "long months" (how many?), "every deployment" (how many?).
- Claims the AI cannot check: names, dates, events and scenes the draft states as true.
- Grammar and logic slips: who the text is addressed to, "he who" instead of "him who".

## My test (24.11.2026, Claude Sonnet 5.5)

One long thank-you letter draft. Claude quoted 26 lines:

| Type | Lines |
|---|---|
| Vague words | 12 |
| Claims it could not verify | 6 |
| Grammar and logic | 5 |
| Missing numbers | 3 |

Examples it gave:
- "those long months of silence": how many months?
- "please don't leave, daddy": invented scene presented as real.
- "I am so proud of you": "so" is empty.
- "thankful for he who": should be "him who".

One test, one draft, one model. Your numbers will differ.

## Rules

- Remove names, amounts, emails and client details before you paste a draft.
- The AI points at lines. You make the edits, in your own words.
- Check the facts yourself. A clean list does not mean the text is correct.
- Check your company's or client's AI policy before you use any AI tool on their material.

---

[All prompts](README.md) · [@lateascent on X](https://x.com/lateascent)
