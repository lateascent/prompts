// Counts chats in an AI data export without printing any chat content.
// Usage: node count-chats.js <path to conversations.json> [keyword1,keyword2,...]
// Works with ChatGPT (create_time in seconds) and Claude (created_at ISO) exports.
const fs = require("fs");

const file = process.argv[2];
const keywords = (process.argv[3] || "").split(",").map((k) => k.trim().toLowerCase()).filter(Boolean);
if (!file) {
  console.log("usage: node count-chats.js <conversations.json> [keywords]");
  process.exit(1);
}

const chats = JSON.parse(fs.readFileSync(file, "utf8").replace(/^﻿/, ""));
const dates = chats
  .map((c) => (c.create_time ? new Date(c.create_time * 1000) : c.created_at ? new Date(c.created_at) : null))
  .filter((d) => d && !isNaN(d))
  .sort((a, b) => a - b);
const mb = (fs.statSync(file).size / 1024 / 1024).toFixed(1);

console.log(`chats: ${chats.length}`);
console.log(`conversations.json: ${mb} MB`);
if (dates.length) {
  console.log(`oldest: ${dates[0].toISOString().slice(0, 10)}, newest: ${dates[dates.length - 1].toISOString().slice(0, 10)}`);
}
if (keywords.length) {
  const hits = chats.filter((c) => keywords.some((k) => String(c.title || c.name || "").toLowerCase().includes(k)));
  console.log(`titles with [${keywords.join(", ")}]: ${hits.length}`);
}
