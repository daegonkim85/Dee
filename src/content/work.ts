export type Metric = {
  value: string;
  label: string;
};

export type CaseSection = {
  heading: string;
  eyebrow?: string;
  body: string[];
  /** Placeholder figure shown inside the section. */
  figure?: {
    label: string;
    caption: string;
    tone?: "light" | "dark" | "accent";
    ratio?: "wide" | "square" | "tall";
  };
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  category: string;
  tags: string[];
  year: string;
  accent?: boolean;
  comingSoon?: boolean;
  meta: {
    role: string;
    period: string;
    scope: string;
    team: string;
  };
  cover: {
    label: string;
    tone: "light" | "dark" | "accent";
  };
  intro: string;
  metrics?: Metric[];
  sections?: CaseSection[];
  ai?: {
    title: string;
    body: string[];
  };
};

export const work: CaseStudy[] = [
  {
    slug: "turo-admin-tool",
    title: "Giving operations a cockpit, not a spreadsheet",
    client: "Turo",
    summary:
      "An internal admin console that turned scattered support workflows into one decisive surface for the car-sharing marketplace.",
    category: "Product · Internal tools",
    tags: ["Web app", "Design system", "Ops tooling"],
    year: "2023",
    accent: true,
    meta: {
      role: "Lead Product Designer",
      period: "2022 – 2023",
      scope: "Product · Research · Design system",
      team: "PM · 4 engineers · 1 designer",
    },
    cover: { label: "Turo Admin Console", tone: "light" },
    intro:
      "Turo's support and trust teams ran the marketplace from a patchwork of internal pages. I designed a unified admin cockpit that put the right action one glance away — and turned a tool people tolerated into one they relied on.",
    metrics: [
      { value: "−38%", label: "Avg. case handling time" },
      { value: "6→1", label: "Internal tools consolidated" },
      { value: "92%", label: "Agent satisfaction (post-launch)" },
    ],
    sections: [
      {
        eyebrow: "Problem",
        heading: "Context lived everywhere except where decisions were made",
        body: [
          "Agents jumped between six legacy tools to resolve a single case — copying vehicle IDs, trip timelines and risk flags by hand. The cost was not only speed; it was confidence. People hesitated because the full picture never sat in one place.",
          "I shadowed the trust & safety and support teams for two weeks, mapping every tab-switch and copy-paste into a single journey so we could see the real tax of fragmentation.",
        ],
        figure: {
          label: "Workflow audit — 6 tools, 41 context switches",
          caption: "Placeholder: service-blueprint of the legacy case flow.",
          ratio: "wide",
          tone: "light",
        },
      },
      {
        eyebrow: "Approach",
        heading: "One case, one surface, one next action",
        body: [
          "The guiding principle became \"decision density\": every screen should surface the next most useful action without burying it. I built a flexible case layout — identity and risk on the left, a living timeline in the center, actions pinned where the eye lands last.",
          "A small component library (status chips, risk badges, timeline events, action rails) let engineering ship new case types without redesigning the shell each time.",
        ],
        figure: {
          label: "Case layout system",
          caption: "Placeholder: annotated layout grid and component rail.",
          ratio: "wide",
          tone: "dark",
        },
      },
      {
        eyebrow: "Outcome",
        heading: "A tool the team defends",
        body: [
          "Handling time dropped by over a third and six tools collapsed into one. More telling: in the post-launch survey agents described the console as something they'd fight to keep — the clearest signal that an internal tool has earned trust.",
        ],
        figure: {
          label: "Before / after case resolution",
          caption: "Placeholder: metric dashboard comparison.",
          ratio: "square",
          tone: "accent",
        },
      },
    ],
    ai: {
      title: "AI in the process",
      body: [
        "I used an LLM to cluster hundreds of open-ended agent interview notes into recurring friction themes in minutes rather than days, which sharpened where the redesign should focus.",
        "During build I prototyped copy for empty states and risk explanations with AI drafts, then edited for Turo's voice — faster iteration without outsourcing judgment.",
      ],
    },
  },
  {
    slug: "wework-pricing",
    title: "Making enterprise pricing legible",
    client: "WeWork",
    summary:
      "A pricing management platform that let revenue teams model, approve and ship deal pricing across a global real-estate portfolio.",
    category: "Product · Fintech",
    tags: ["Web app", "Design system", "Data-dense UI"],
    year: "2021",
    meta: {
      role: "Senior Product Designer",
      period: "2020 – 2021",
      scope: "Product · Design system · Fintech",
      team: "2 PMs · 6 engineers · 2 designers",
    },
    cover: { label: "WeWork Pricing Platform", tone: "dark" },
    intro:
      "Pricing a worldwide portfolio of buildings meant spreadsheets, Slack approvals and a lot of hope. I designed a platform that made the entire pricing lifecycle visible, reviewable and fast — without dumbing down the math.",
    metrics: [
      { value: "−60%", label: "Time to publish pricing" },
      { value: "100+", label: "Markets managed in one view" },
      { value: "0", label: "Rogue spreadsheet approvals" },
    ],
    sections: [
      {
        eyebrow: "Problem",
        heading: "The stakes were high; the tooling was improvised",
        body: [
          "Revenue managers set prices for hundreds of locations through exported spreadsheets and ad-hoc approvals. Mistakes were costly and the audit trail was effectively a chat history.",
          "I partnered with finance to map the real decision model — the inputs, guardrails and sign-offs that a tool would have to respect to be trusted.",
        ],
        figure: {
          label: "Pricing lifecycle map",
          caption: "Placeholder: inputs → model → review → publish flow.",
          ratio: "wide",
          tone: "light",
        },
      },
      {
        eyebrow: "Approach",
        heading: "Dense where it counts, calm everywhere else",
        body: [
          "Data-dense tools fail when everything shouts. I designed a layered table system: a calm overview of markets, with progressive disclosure into the levers behind each price. Approval states were made visible as first-class UI, not buried in email.",
          "A shared component kit (editable grids, scenario toggles, approval timelines) kept the experience consistent as the product grew.",
        ],
        figure: {
          label: "Layered pricing table",
          caption: "Placeholder: market overview with drill-down panel.",
          ratio: "wide",
          tone: "dark",
        },
      },
      {
        eyebrow: "Outcome",
        heading: "Faster pricing, cleaner accountability",
        body: [
          "Publishing pricing went from days to hours, and every change carried a clear owner and rationale. The spreadsheet era quietly ended.",
        ],
        figure: {
          label: "Adoption across markets",
          caption: "Placeholder: rollout and usage chart.",
          ratio: "square",
          tone: "accent",
        },
      },
    ],
    ai: {
      title: "AI in the process",
      body: [
        "I used AI-assisted analysis to summarize finance's lengthy pricing guidelines into a plain-language ruleset the whole team could reference — reducing back-and-forth during design reviews.",
      ],
    },
  },
  {
    slug: "ringcentral-breakout-rooms",
    title: "Breakout rooms that feel effortless",
    client: "RingCentral",
    summary:
      "Designing real-time breakout rooms for video meetings — the small moments of control that make large meetings human.",
    category: "Product · Communications",
    tags: ["Video", "Real-time UX", "0→1"],
    year: "2020",
    meta: {
      role: "Product Designer",
      period: "2019 – 2020",
      scope: "Product · Interaction · 0→1",
      team: "PM · 5 engineers · 1 designer",
    },
    cover: { label: "RingCentral Breakout Rooms", tone: "accent" },
    intro:
      "Large meetings break down the moment people can't split into smaller groups. I designed breakout rooms for RingCentral's video platform — the host controls, the participant transitions, and all the real-time states that have to feel instant.",
    metrics: [
      { value: "0→1", label: "New feature shipped end-to-end" },
      { value: "<2s", label: "Room transition target" },
      { value: "3", label: "Host control modes" },
    ],
    sections: [
      {
        eyebrow: "Problem",
        heading: "Real-time means no room for ambiguity",
        body: [
          "Breakouts are deceptively hard: hosts need to assign, move and broadcast; participants need to understand what's happening the instant it happens. Any confusion during a live meeting reads as the product being broken.",
        ],
        figure: {
          label: "State map — host & participant",
          caption: "Placeholder: real-time state diagram.",
          ratio: "wide",
          tone: "dark",
        },
      },
      {
        eyebrow: "Approach",
        heading: "Designing the in-between moments",
        body: [
          "I obsessed over transitions — the two seconds between \"you're being moved\" and \"you're in your room.\" Clear motion, confident copy and predictable controls turned a jarring jump into a smooth hand-off.",
          "Host tooling stayed powerful but quiet: assign automatically, drag to reassign, broadcast a message, pull everyone back — all without leaving the meeting.",
        ],
        figure: {
          label: "Host control panel",
          caption: "Placeholder: assignment and broadcast UI.",
          ratio: "wide",
          tone: "light",
        },
      },
      {
        eyebrow: "Outcome",
        heading: "A feature that disappears into the meeting",
        body: [
          "The best real-time UX is invisible. Breakout rooms shipped as a core capability and became a standard part of how teams ran workshops and classes on the platform.",
        ],
        figure: {
          label: "Participant transition",
          caption: "Placeholder: motion study of room hand-off.",
          ratio: "square",
          tone: "accent",
        },
      },
    ],
  },
  {
    slug: "district",
    title: "District — investors community",
    client: "District",
    summary: "A community platform for investors. Case study in progress.",
    category: "Product · Community",
    tags: ["Coming soon"],
    year: "2024",
    comingSoon: true,
    meta: {
      role: "Product Designer",
      period: "2024",
      scope: "Product · Community",
      team: "—",
    },
    cover: { label: "District", tone: "light" },
    intro: "A deeper write-up of this project is on the way.",
  },
  {
    slug: "coupang-pharmacy",
    title: "Coupang — online pharmacy",
    client: "Coupang",
    summary: "An online pharmacy experience. Case study in progress.",
    category: "Product · Healthcare",
    tags: ["Coming soon"],
    year: "2024",
    comingSoon: true,
    meta: {
      role: "Product Designer",
      period: "2024",
      scope: "Product · Healthcare commerce",
      team: "—",
    },
    cover: { label: "Coupang", tone: "dark" },
    intro: "A deeper write-up of this project is on the way.",
  },
];

export const featuredSlugs = ["turo-admin-tool", "wework-pricing", "ringcentral-breakout-rooms"];

export function getCase(slug: string): CaseStudy | undefined {
  return work.find((c) => c.slug === slug);
}

export function getPublishedCases(): CaseStudy[] {
  return work.filter((c) => !c.comingSoon);
}
