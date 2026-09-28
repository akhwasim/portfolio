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
  date: "Sep 28, 2026",
  lastUpdated: "Sep 13, 2026",

  summary: "Exploring how software could learn from user context and repeated behavior to adapt the computing environment while remaining predictable, transparent, and under the user's control.",

  idea: "Most software today is static. Whether you're coding, gaming, editing a video, or working on battery power, the system expects you to manually adjust settings, organize your workspace, and optimize your environment.\n\nI'm interested in exploring what software would look like if the computing environment could gradually learn how its user works and adapt over time while still remaining predictable, transparent, and under the user's control.",

  why: "This idea grew naturally while building Luna. Giving a terminal persistent memory made everyday interactions feel more personal and useful. It made me wonder whether the same principle could be applied beyond a single application.\n\nInstead of building software that behaves the same for everyone, I'm interested in systems that understand context, learn from repeated behavior, and adapt the computing environment around the user's needs without taking control away from them.",

  how: "I don't think the first step is building a brand-new operating system. A more realistic approach is an adaptive layer that works on top of existing operating systems and observes context, user preferences, and recurring workflows.\n\nFor example, when a user starts a demanding workload such as video editing, the system could identify which resources and applications are relevant, suggest changes to the environment, and -when explicitly permitted- apply them. The same principle could extend to development, gaming, battery-saving, and other recurring workflows.\n\nSome of this isn't new at the mechanism level-Android's Adaptive Battery and macOS App Nap already reallocate resources based on usage, and tools like cgroups and DVFS already handle the actual resource partitioning. What feels open to me is the policy layer above these mechanisms: today's versions are rule-based and opaque. The interesting problem is making that layer learned, explainable, and correctable, not inventing the underlying mechanisms.\n\nRight now I'm interested in questions such as:\n<ul>\n<li>What should software learn automatically from user behavior and context?</li>\n<li>What actions should always require explicit user approval?</li>\n<li>How can adaptive behavior remain explainable and predictable?</li>\n<li>How can personalization happen without sacrificing privacy or reliability?</li>\n</ul>\nThese are questions I'm currently exploring rather than problems I already have answers to.",

  scenario: {
    title: "Working through a case: video editing",
    body: "To move past framework-level thinking, I tried tracing through one concrete scenario end to end.\n\nDetecting the workload reliably means combining signals-foreground app identity, a sustained GPU/CPU load pattern, large video file I/O, duration-rather than trusting any single one, since a single signal like foreground app identity alone is easy to get wrong.\n\nThe possible actions-pausing background sync, suggesting (not forcing) the closure of unrelated apps, switching power plans, reprioritizing GPU scheduling-split naturally into cheap-to-reverse and costly-if-wrong categories.\n\nThat distinction turned out to matter more than detection accuracy. The dangerous failure case isn't misclassifying the context-it's a correct detection paired with the wrong action, such as throttling something the user actually needed. This reframed the problem for me: the harder question isn't whether the system identifies context correctly, it's which actions should ever be automatable at all, regardless of confidence."
  },

  openQuestions: "<ul>\n<li>How should adaptive behavior and learned preferences be represented internally?</li>\n<li>How should a system decide when to adapt automatically versus ask for approval-and is that decided more by the cost of being wrong than by detection confidence?</li>\n<li>Can adaptive systems remain predictable as they become more personalized?</li>\n<li>How can users inspect, undo, correct, or modify what the system has learned? (e.g. what should a single \"don't ask again\" dismissal actually teach the system?)</li>\n<li>What parts of a computing environment are safe to adapt, and what should remain fixed?</li>\n<li>How can an adaptive layer balance performance optimization with user privacy and control?</li>\n<li>What would count as evidence that adaptation is helping, rather than adding noise or false confidence?</li>\n</ul>",

  relatedWork: "I haven't done a full literature review, but a few threads seem closely adjacent: Horvitz's work on mixed-initiative interfaces (1999) frames a similar 'when should a system act versus defer to the user' question at the UI level. Self-adaptive digital assistance systems and just-in-time adaptive interventions, for example, work coming out of KIT's Human-Centered Systems Lab-apply a similar sense-decide-intervene loop in workplace and context-aware settings. Commercial precedent already exists (Android Adaptive Battery, macOS App Nap), but it's rule-based and opaque-the gap I see is making it learned, explainable, and correctable, not inventing the underlying mechanisms."
}

];

// Exported for both build.js (Node) and research.html (browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = RESEARCH_ENTRIES;
}
