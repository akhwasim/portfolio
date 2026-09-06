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
  date: "Sep 6, 2026",

  summary: "Exploring how software could learn from user context and repeated behavior to adapt the computing environment while remaining predictable, transparent, and under the user's control.",

  idea: "Most software today is static. Whether you're coding, gaming, editing a video, or working on battery power, the system expects you to manually adjust settings, organize your workspace, and optimize your environment.\n\nI'm interested in exploring what software would look like if the computing environment could gradually learn how its user works and adapt over time while still remaining predictable, transparent, and under the user's control.",

  why: "This idea grew naturally while building Luna. Giving a terminal persistent memory made everyday interactions feel more personal and useful. It made me wonder whether the same principle could be applied beyond a single application.\n\nInstead of building software that behaves the same for everyone, I'm interested in systems that understand context, learn from repeated behavior, and adapt the computing environment around the user's needs without taking control away from them.",

  how: "I don't think the first step is building a brand-new operating system. A more realistic approach is an adaptive layer that works on top of existing operating systems and observes context, user preferences, and recurring workflows.\n\nFor example, when a user starts a demanding workload such as video editing, the system could identify which resources and applications are relevant, suggest changes to the environment, and—when explicitly permitted—apply them. The same principle could extend to development, gaming, battery-saving, and other recurring workflows.\n\nRight now I'm interested in questions such as:\n<ul>\n<li>What should software learn automatically from user behavior and context?</li>\n<li>What actions should always require explicit user approval?</li>\n<li>How can adaptive behavior remain explainable and predictable?</li>\n<li>How can personalization happen without sacrificing privacy or reliability?</li>\n</ul>\nThese are questions I'm currently exploring rather than problems I already have answers to.",

  openQuestions: "<ul>\n<li>How should adaptive behavior and learned preferences be represented internally?</li>\n<li>How should a system decide when to adapt automatically versus ask for approval?</li>\n<li>Can adaptive systems remain predictable as they become more personalized?</li>\n<li>How can users inspect, undo, correct, or modify what the system has learned?</li>\n<li>What parts of a computing environment are safe to adapt, and what should remain fixed?</li>\n<li>How can an adaptive layer balance performance optimization with user privacy and control?</li>\n</ul>"
}

  // --- Add new research entries below this line ---

];

// Exported for both build.js (Node) and research.html (browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = RESEARCH_ENTRIES;
}
