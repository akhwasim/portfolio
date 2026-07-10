// research-data.js
//
// This is the single source of truth for every research entry on the site.
// To add a new research topic: copy one object below, change the values,
// add it to the array, then run `node build.js` (or just push to git if
// Netlify is set up to run the build for you — see README.md).
//
// Fields:
//   id       — used for the URL: research/<id>.html  (lowercase, hyphens, no spaces)
//   title    — display name shown on cards and the page heading
//   status   — short status word, e.g. "exploring", "active", "paused"
//   date     — last-updated date, ALWAYS in the format: Jun 26, 2026
//   summary  — one line shown in the research index list AND on the homepage card
//   idea     — full text for the "idea" section (can include multiple sentences)
//   why      — full text for the "why" section
//   how      — full text for the "how / current thinking" section
//   openQuestions — full text for the "open questions" section (optional — leave as "" if unused)

const RESEARCH_ENTRIES = [
  {
    id: "adaptive-computing",
    title: "Adaptive Computing",
    status: "exploring",
    date: "July 10, 2026",
    summary: "Exploring what software would look like if it could gradually learn how its user works and adapt over time, while staying predictable and under the user's control.",
    idea: "Most software today is static. Whether you're coding, gaming, editing a video, or working on battery power, the system expects you to manually adjust settings, organize your workspace, and optimize your environment.\n\nI'm interested in exploring what software would look like if it could gradually learn how its user works and adapt over time while still remaining predictable, transparent, and under the user's control.",
    why: "This idea grew naturally while building Luna. Giving a terminal memory made everyday interactions feel more personal and useful. It made me wonder whether the same principle could be applied beyond a single application.\n\nInstead of building software that behaves the same for everyone, I'm interested in systems that understand context, learn from repeated behavior, and quietly improve the experience without taking control away from the user.",
    how: "I don't think the first step is building a brand-new operating system. A more realistic approach is building an adaptive layer that works on top of existing operating systems.\n\nRight now I'm interested in questions such as:\n<ul>\n<li>What should software learn automatically?</li>\n<li>What should always require user approval?</li>\n<li>How can adaptive behavior remain explainable?</li>\n<li>How can learning happen without sacrificing privacy or reliability?</li>\n</ul>These are the questions I'm currently exploring rather than problems I already have answers to.",
    openQuestions: "<ul>\n<li>How should adaptive behavior be represented internally?</li>\n<li>When should software adapt automatically versus ask the user?</li>\n<li>Can adaptive systems remain predictable as they become more personalized?</li>\n<li>How can users inspect, undo, or modify what the system has learned?</li>\n<li>What parts of an operating system are safe to adapt, and what parts should remain fixed?</li>\n</ul>"
  }

  // --- Add new research entries below this line ---

];

// Exported for both build.js (Node) and research.html (browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = RESEARCH_ENTRIES;
}
