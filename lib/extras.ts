/**
 * The content for the sections and pages that sit beside the main timeline:
 * services, the FAQ, and the Know Me page.
 */

export type Service = {
  num: string;
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  /** Shown only on /services. */
  detail: string[];
  proof: string;
};

export const services: Service[] = [
  {
    num: "01",
    slug: "odoo-erp-development",
    title: "Odoo ERP development & dashboards",
    blurb:
      "Custom modules, OWL dashboards and the planning logic underneath them — the thing that replaces the spreadsheet nobody trusts.",
    tags: ["PYTHON", "OWL", "QWEB / XML", "POSTGRESQL"],
    detail: [
      "Custom Odoo 17 modules: models, ORM, record rules, scheduled jobs, QWeb reports and OWL components, deployed through Odoo.sh.",
      "Live dashboards across inventory, purchase, sales, manufacturing and accounts, built so management sees today's position rather than last week's.",
      "The planning layer that makes them worth having: demand plans, re-order levels, stock runway, ageing, goods-in-transit.",
      "Migration off Excel and Google Sheets, including rebuilding history from existing master data so the new board has a past as well as a present.",
    ],
    proof: "20+ live boards at a zipper and metal-trims manufacturer; material shortages down 40%.",
  },
  {
    num: "02",
    slug: "data-dashboards-automation",
    title: "Data pipelines & report automation",
    blurb:
      "Scheduled jobs that pull, reshape and publish — so a report updates itself instead of waiting for someone's morning.",
    tags: ["PYTHON", "PANDAS", "GITHUB ACTIONS", "LOOKER STUDIO"],
    detail: [
      "Python pipelines on GitHub Actions, writing into Google Sheets, Looker Studio and Power BI through their own APIs.",
      "Extraction from ERP systems and SQL databases, reshaped in pandas, with the transformations in version control rather than in a formula.",
      "Alerting and distribution — the report that matters arriving in an inbox or a channel without anyone pressing refresh.",
    ],
    proof: "Two hours of manual reporting removed from every working day.",
  },
  {
    num: "03",
    slug: "ai-integration-llm",
    title: "AI integration & LLM features",
    blurb:
      "Assistants that answer from your data, with the boundary between what the model may read and what it may decide drawn properly.",
    tags: ["LANGCHAIN", "RAG", "MCP", "TOOL-CALLING"],
    detail: [
      "Retrieval over your own documents and database, so answers cite rows rather than inventing them.",
      "Tool-calling with a deliberate blast radius: the model is offered the tools it may use and never shown the ones it may not.",
      "A deterministic path in front of the model for anything with a fixed outcome — bookings, status, eligibility — so business rules live in code, not in a prompt.",
      "MCP servers and agent plumbing where a model needs to reach real systems.",
    ],
    proof: "A freight assistant on Telegram, WhatsApp and web that answers from Postgres, not from a guess.",
  },
  {
    num: "04",
    slug: "react-native-apps",
    title: "React Native app development",
    blurb:
      "Production mobile apps — the kind with background delivery, native ringing and a test suite behind them.",
    tags: ["REACT NATIVE", "EXPO", "CALLKIT", "ANDROID TELECOM"],
    detail: [
      "Cross-platform apps built once and shipped to both stores, including native modules where the platform insists.",
      "The hard parts: background delivery, push that wakes a killed app, native call UI through CallKit and Android Telecom, offline state.",
      "Release engineering — builds, signing, store submissions and the regression suite that makes them routine.",
    ],
    proof: "An encrypted messenger and booking app with roughly 1,430 tests behind it.",
  },
  {
    num: "05",
    slug: "backend-api-development",
    title: "Backend & API development",
    blurb:
      "Node and NestJS services over PostgreSQL or MongoDB, organised so a feature can be handed to one person.",
    tags: ["NESTJS", "NODE.JS", "POSTGRESQL", "MONGODB"],
    detail: [
      "REST APIs with the route and its controller in the same folder, each area owning its own README and its own tests.",
      "Schema design and migrations, indexing and the query work that keeps a dashboard fast once the table is large.",
      "Auth, rate limiting, quotas and webhooks — including the Stripe webhook that has to be mounted before the body parser.",
    ],
    proof: "An API split into 26 owned areas over 54 shared models.",
  },
  {
    num: "06",
    slug: "web-apps-dashboards",
    title: "Web apps & admin dashboards",
    blurb:
      "React and Next.js front ends: the internal console, the operations desk, the thing the team actually uses all day.",
    tags: ["REACT", "NEXT.JS", "TAILWIND", "VERCEL"],
    detail: [
      "Next.js App Router applications, static where they can be and dynamic where they must be, deployed on Vercel.",
      "Dense data interfaces — tables, filters, exports — built to stay readable when the row count is real.",
      "Design systems in CSS custom properties so a palette or a type scale changes in one place.",
    ],
    proof: "An operations desk, an internal ops console and this site.",
  },
  {
    num: "07",
    slug: "ecommerce-payments",
    title: "E-commerce & payments",
    blurb:
      "Storefronts over a real commerce backend, with one source of truth for every price.",
    tags: ["MAGENTO 2", "ASTRO", "STRIPE", "GRAPHQL"],
    detail: [
      "Headless storefronts over Magento, where the catalogue, cart, tax and orders stay in the system that owns them.",
      "Configurators and quote estimators across a large variant matrix, priced live rather than from a table someone maintains.",
      "Stripe checkout, escrow, payouts and multi-currency wallets, including the reconciliation nobody demos.",
    ],
    proof: "A US high-security fencing storefront with a full-matrix configurator.",
  },
  {
    num: "08",
    slug: "realtime-encrypted-apps",
    title: "Real-time & encrypted systems",
    blurb:
      "Video calling, live tracking and end-to-end encryption, built to the protocol rather than to a blog post.",
    tags: ["WEBRTC", "MEDIASOUP", "SIGNAL PROTOCOL", "MAPBOX"],
    detail: [
      "Group voice and video over WebRTC with an SFU, scaled past the point where a mesh gives up.",
      "End-to-end encryption on the Signal Protocol — X3DH, Double Ratchet, Sealed Sender — including the multi-device problem that makes it hard.",
      "Live GPS tracking, turn-by-turn navigation and SOS paths where someone is relying on the dot being right.",
    ],
    proof: "Group calls scaled from 6 to 10 participants, ringing through a killed app.",
  },
];

export const faq = [
  {
    q: "Can you build something like the system I have in mind?",
    a: "Probably — tell me what it is and I will tell you how I would build it, what the hard part is, and roughly how long it takes. I would rather talk you out of a bad approach early than bill you for it.",
  },
  {
    q: "Do you work remotely, and with clients outside Germany?",
    a: "Yes. I am in Deggendorf, Germany, and I have worked remotely with teams in Bangladesh, South Africa and the United States. Most of my work has been asynchronous across time zones.",
  },
  {
    q: "Can you take over an Odoo instance someone else set up?",
    a: "Yes, and that is most of what I have done. The usual first job is working out why two reports disagree, which means reading the logic rather than the dashboard. Expect the first week to be questions.",
  },
  {
    q: "What does an ERP dashboard project actually involve?",
    a: "Finding out what decision the board is meant to support, agreeing the definition of every number on it, building it against live data, then sitting with the person who uses it until they trust it. The building is the short part.",
  },
  {
    q: "Can you add AI to a product that already exists?",
    a: "Yes. The design question is always the same: what may the model read, and what may it decide? I keep decisions in code and give the model the reading job, because a prompt can be argued with and a tool that was never offered cannot be called.",
  },
  {
    q: "What is your stack?",
    a: "Python and Odoo for ERP; Node, NestJS and PostgreSQL on the backend; React, Next.js and React Native on the front; pandas, Power BI and Looker Studio for data; LangChain, RAG and MCP for the AI parts. The full list is in section 06.",
  },
  {
    q: "Are you available right now?",
    a: "I am open to working-student and internship roles in Germany, and to remote contract work alongside my MSc at Deggendorf Institute of Technology. Write to me and I will tell you honestly what I can fit.",
  },
  {
    q: "How do we start?",
    a: "Email or WhatsApp with a paragraph about the problem. If it is a fit, I will come back with an approach and a rough shape. No forms.",
  },
];

/* ── Know Me ───────────────────────────────────────────────────────────── */

export const knowMe = {
  title: "Know me.",
  lede: "The parts a CV has no room for — how I got here, how I work, and what I am looking for next.",
  sections: [
    {
      num: "A",
      heading: "How I got here",
      body: [
        "I studied computer science in Dhaka and joined a zipper and metal-trims factory as a graduate engineer trainee, which in practice meant being the person who compiled the reports. Every month I rebuilt the same spreadsheets by hand, and every month somebody found a number that disagreed with another number.",
        "So I learned Odoo well enough to stop doing it by hand. That turned into twenty-odd dashboards, then the planning models behind them, then the title change from analyst to developer. Nobody assigned that; it started as me being annoyed at my own job.",
        "Now I am in Germany reading for an MSc in Artificial Intelligence and Data Science at Deggendorf Institute of Technology, working on an encrypted messaging platform and a learning platform at the same time.",
      ],
    },
    {
      num: "B",
      heading: "How I work",
      body: [
        "I want the number checked afterwards. A dashboard that looks right in a demo and disagrees with the ledger on Monday is worse than no dashboard, because someone will make a decision on it. Most of my ERP work has been making two numbers agree, not making a chart prettier.",
        "I put rules in code rather than in configuration people forget. One item master instead of twenty hard-coded lists. Booking logic in Postgres rather than in a prompt. The test that stops a bug coming back, not just the fix.",
        "I use AI heavily — I ship two to three times faster with it — and I own every line it writes. Review, tests and the release are mine. It is a very fast junior who never gets tired, not a reason to stop reading the diff.",
      ],
    },
    {
      num: "C",
      heading: "What I am good at, and what I am not",
      body: [
        "Good at: taking a messy reporting problem apart, finding where the logic actually went wrong, and building the thing that makes it stop. Dense data interfaces. Learning a domain fast enough to argue with the people in it.",
        "Still learning: design. I can build a clean interface and I read the spacing, but I am not a designer and I know the difference. German, too — A2 and climbing, which is enough for the office kitchen and not yet enough for a contract.",
      ],
    },
    {
      num: "D",
      heading: "What I am looking for",
      body: [
        "A working-student or internship role in Germany alongside the MSc, ideally somewhere with real data and real consequences — manufacturing, logistics, supply chain, or a product team that has outgrown its spreadsheets.",
        "I am also open to remote contract work on ERP, dashboards and AI integration, which is what I do at OmniDevX and Exzellent already.",
      ],
    },
    {
      num: "E",
      heading: "Away from the screen",
      body: [
        "Bengali at home, English at work, German in the queue at the Rathaus. I moved countries at twenty-five and most of what I know about patience I learned from German bureaucracy.",
      ],
    },
  ],
};
