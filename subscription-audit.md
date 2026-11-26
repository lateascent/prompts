# Subscription audit with an AI agent (read-only)

Let an AI agent go through your Gmail receipts and build a table of everything you pay for every month. It only reads. You do the canceling.

> Works in: Claude in Chrome or any browser agent, Gmail · Mode: read-only, you cancel · Tested: 14.11.2026

Works with Claude in Chrome (or any browser agent). Start a new chat with your Gmail tab open.

## Step 1: find the subscriptions

```
Work only inside the Gmail tab in this browser so I can watch. Do not use the Gmail connector. Do not click links inside emails, do not reply, cancel or change anything in Gmail.
Use the Gmail search bar to find receipts and invoices from the last 3 months, open each one, and note every recurring subscription: service, price, billing period, last charge date.
Then open a new tab at sheets.new, type the table there, and add the total per month in USD in the last row. Answer in English.
```

## Step 2 (if it stops before the table)

```
Continue from where you stopped. Open a new tab at sheets.new and type the table with what you found: service, price, billing period, last charge date. Add the total per month in USD in the last row.
```

## Safety rules
- Read-only. Never let the agent cancel, pay or reply. It finds, you press the button.
- Emails can contain hidden instructions. The prompt tells the agent not to click links inside them. If it asks to click one, deny.
- Check every row against the receipt yourself before you cancel anything.

## My test (14.11.2026)
Claude in Chrome, Fable 5.2 Medium. 5 subscriptions, $87.23 a month (UAH prices converted by the agent at the official rate). One of them had failed payments for over a month and I had no idea.

---

[All prompts](README.md) · [@lateascent on X](https://x.com/lateascent)
