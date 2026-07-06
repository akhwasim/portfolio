// build.js
//
// Generates one HTML page per research entry in research-data.js, using
// research-template.html as the shared template.
//
// Run locally with:   node build.js
// On Netlify, this runs automatically on every push if netlify.toml is set up
// (see netlify.toml in this folder) — you don't need to run it yourself.

const fs = require("fs");
const path = require("path");

const DATA_PATH = path.join(__dirname, "research-data.js");
const TEMPLATE_PATH = path.join(__dirname, "research-template.html");
const OUTPUT_DIR = path.join(__dirname, "research");

const RESEARCH_ENTRIES = require(DATA_PATH);
const template = fs.readFileSync(TEMPLATE_PATH, "utf8");

// A field still containing "[YOUR TEXT HERE" or "[YOUR DATE HERE" is treated
// as an unfilled placeholder and gets the dashed orange placeholder style.
// Once real content replaces it, it automatically renders as normal text.
function isUnfilled(value) {
  return typeof value === "string" && value.includes("[YOUR");
}

function escapeHtml(str) {
  // Allow a small safe set of HTML tags (used for bullet lists in research notes)
  // by temporarily protecting them before escaping everything else.
  const allowedTags = /<(\/?)(ul|li|strong|em)>/g;
  const placeholder = "\u0000$1$2\u0000";
  const protected_ = str.replace(allowedTags, placeholder);
  const escaped = protected_
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\u0000(\/?)(ul|li|strong|em)\u0000/g, "<$1$2>");
}
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

let builtCount = 0;

for (const entry of RESEARCH_ENTRIES) {
  const required = ["id", "title", "status", "date", "summary", "idea", "why", "how"];
  const missing = required.filter((key) => !entry[key]);
  if (missing.length > 0) {
    console.warn(`⚠️  Skipping entry "${entry.id || "(no id)"}" — missing field(s): ${missing.join(", ")}`);
    continue;
  }

  const openQuestions = entry.openQuestions || "[YOUR TEXT HERE — optional. List things you don't know yet.]";

  let html = template
    .replaceAll("{{TITLE}}", escapeHtml(entry.title))
    .replaceAll("{{STATUS}}", escapeHtml(entry.status))
    .replaceAll("{{DATE}}", escapeHtml(entry.date))
    .replaceAll("{{IDEA}}", escapeHtml(entry.idea))
    .replaceAll("{{WHY}}", escapeHtml(entry.why))
    .replaceAll("{{HOW}}", escapeHtml(entry.how))
    .replaceAll("{{OPEN_QUESTIONS}}", escapeHtml(openQuestions))
    .replaceAll("{{IDEA_CLASS}}", isUnfilled(entry.idea) ? "placeholder" : "note-body")
    .replaceAll("{{WHY_CLASS}}", isUnfilled(entry.why) ? "placeholder" : "note-body")
    .replaceAll("{{HOW_CLASS}}", isUnfilled(entry.how) ? "placeholder" : "note-body")
    .replaceAll("{{OPEN_QUESTIONS_CLASS}}", isUnfilled(openQuestions) ? "placeholder" : "note-body");

  const outPath = path.join(OUTPUT_DIR, `${entry.id}.html`);
  fs.writeFileSync(outPath, html, "utf8");
  builtCount++;
  console.log(`✓ built research/${entry.id}.html`);
}

console.log(`\nDone — ${builtCount} research page(s) built.`);
