/**
 * Everything the site says lives here.
 * Edit this file to change the portfolio — no component needs touching.
 */

export const person = {
  name: "Ariful Islam",
  first: "Ariful",
  monogram: "AI",
  role: "Software Developer",
  disciplines: "Odoo ERP · AI/LLM · full-stack",
  location: "Deggendorf, Germany",
  locationShort: "DEGGENDORF, DE",
  status: "Open to work",
  email: "ariful81848@gmail.com",
  phone: "+49 176 67221612",
  whatsapp: "https://wa.me/4917667221612",
  whatsappLabel: "+49 176 67221612",
  github: "https://github.com/shanto173",
  githubHandle: "shanto173",
  linkedin: "https://www.linkedin.com/in/ariful-islam-9345041b9/",
  linkedinHandle: "in/ariful-islam",
  cv: "/cv/Ariful-Islam-CV.pdf",
  cvEuropass: "/cv/Ariful-Islam-CV-Europass.pdf",
  flyer: "/cv/Ariful-Islam-flyer.pdf",
  portrait: "/ariful-islam.jpg",
} as const;

export const hero = {
  /** The whole line, for search results and link previews. */
  headline: "I turn manual business reporting into live, reliable software.",
  lede: "Software Developer building",
  ledeAccent: "ERP dashboards and AI-augmented systems",
  ledeRest:
    " — twenty-plus live Odoo boards, an end-to-end encrypted messenger, and assistants that answer from a database rather than a guess.",
  currentRole: "SOFTWARE DEVELOPER",
  currentOrg: "OMNIDEVX STUDIO",
};

export const sections = [
  { id: "system", num: "01", label: "System" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "impact", num: "03", label: "Impact" },
  { id: "projects", num: "04", label: "Projects" },
  { id: "services", num: "05", label: "Services" },
  { id: "stack", num: "06", label: "Stack" },
  { id: "education", num: "07", label: "Education" },
  { id: "references", num: "08", label: "References" },
  { id: "contact", num: "09", label: "Contact" },
] as const;

export const boot = [
  { label: "ERP", value: "ODOO 17 · POSTGRES" },
  { label: "SECURITY", value: "SIGNAL PROTOCOL · E2EE" },
  { label: "RUNTIME", value: "NODE · REACT NATIVE" },
  { label: "AI", value: "LANGCHAIN · RAG · MCP" },
] as const;

/* ── 02 Experience ─────────────────────────────────────────────────────── */

export type Role = {
  id: string;
  title: string;
  org: string;
  orgShort: string;
  type: string;
  period: string;
  duration: string;
  place: string;
  bullets: string[];
  skills: string[];
  /** Shown in the logo tile when there is no logo image. */
  accent: string;
  sub?: { title: string; period: string; place: string }[];
};

export const experience: Role[] = [
  {
    id: "omnidevx",
    title: "Software Developer",
    org: "OmniDevX Studio",
    orgShort: "OX",
    type: "Full-time",
    period: "Jun 2026 — Present",
    duration: "5 mos",
    place: "Remote",
    accent: "#e8452a",
    bullets: [
      "Full-stack work on Bravo Secure — an end-to-end encrypted messenger and booking platform — across React Native, NestJS and PostgreSQL.",
      "Fixed 400+ production bugs from device log to root cause to regression test, contributing to a suite of roughly 1,430 tests that raised messenger coverage from 51% to 74%.",
      "Shipped real-time group voice and video on WebRTC and mediasoup, scaled from six participants to ten, with ringing that survives the app being killed.",
      "Used AI-assisted development to ship at two to three times the pace while owning review, testing and releases.",
    ],
    skills: ["React Native", "NestJS", "PostgreSQL", "WebRTC", "Stripe"],
  },
  {
    id: "exzellent",
    title: "Growth & Automation",
    org: "Exzellent",
    orgShort: "EX",
    type: "Internship",
    period: "Sep 2026 — Present",
    duration: "2 mos",
    place: "Cottbus, Brandenburg, Germany · On-site",
    accent: "#8b5cf6",
    bullets: [
      "Work across the Exzellent learning platform — the React front end, the Node API and the native app shell built from the same codebase.",
      "AI tutoring and speech-practice features over an LLM and Whisper, plus the booking and payment paths that sit behind them.",
    ],
    skills: ["React 19", "Node.js", "MongoDB", "Capacitor", "LLM / Whisper"],
  },
  {
    id: "tex",
    title: "Executive Engineer",
    org: "Tex Fasteners (BD) Ltd. / Tex Zippers",
    orgShort: "TF",
    type: "Full-time",
    period: "Feb 2025 — Present",
    duration: "1 yr 9 mos",
    place: "Adamjee EPZ, Narayanganj, Bangladesh · On-site and remote",
    accent: "#d99a2b",
    bullets: [
      "Designed and built 20+ live Odoo 17 dashboards and custom modules across inventory, purchase, sales, manufacturing and accounts, giving management same-day visibility instead of a report compiled by hand the following week.",
      "Replaced manually compiled Excel and Google Sheets reporting with live boards and automated Python pipelines, saving two hours of manual work every day.",
      "Built the supply-chain planning and re-order-level models that cut material shortages by 40%, all driven by a single RM Item Master so planners never edit code to add an item.",
      "Rebuilt monthly RM ageing history back to 2021 and corrected the production-pending and LC-received logic so the invoice tracker and the production board reconcile order by order.",
      "Awarded Best Performer – Q3 for operational excellence and for the move from analyst to developer.",
    ],
    skills: ["Python", "OWL / JavaScript", "QWeb / XML", "PostgreSQL", "Odoo.sh"],
    sub: [
      {
        title: "Executive Engineer",
        period: "Feb 2026 — Present",
        place: "Remote",
      },
      {
        title: "Graduate Engineer Trainee",
        period: "Feb 2025 — Feb 2026",
        place: "On-site",
      },
    ],
  },
  {
    id: "gaotek",
    title: "Software Developer",
    org: "GAOTek Inc.",
    orgShort: "GT",
    type: "Internship",
    period: "May 2023 — Aug 2023",
    duration: "4 mos",
    place: "New York, United States · Remote",
    accent: "#2dd4bf",
    bullets: [
      "Developed and customised Odoo modules in Python and XML; supported debugging, testing and module configuration.",
      "Worked with PostgreSQL, took part in code reviews and wrote technical documentation.",
    ],
    skills: ["Python", "XML", "PostgreSQL", "Odoo"],
  },
];

/* ── 03 Impact ─────────────────────────────────────────────────────────── */

export const impact = [
  {
    value: "20+",
    label: "live Odoo dashboards",
    note: "INVENTORY · PURCHASE · SALES · MRP",
    highlight: "",
  },
  {
    value: "40%",
    label: "fewer material shortages",
    note: "DEMAND PLANNING · ROL MODELS",
    highlight: "40%",
  },
  {
    value: "1,430",
    label: "tests in the suite",
    note: "COVERAGE 51% → 74%",
    highlight: "74%",
  },
  {
    value: "400+",
    label: "production bugs fixed",
    note: "LOG → ROOT CAUSE → REGRESSION",
    highlight: "",
  },
] as const;

export const impactFooter =
  "And two hours of manual reporting removed from every working day.";

/* ── 04 Projects ───────────────────────────────────────────────────────── */

export type Shot = { src: string; alt: string; caption: string };

export type Project = {
  id: string;
  /** The /work/<slug> case-study route. */
  slug: string;
  num: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  accent: string;
  note?: string;
  href?: string;
  hrefLabel?: string;
  /** The long version, shown only on the case-study page. */
  story?: { heading: string; body: string }[];
  outcomes?: { value: string; label: string }[];
  role?: string;
  /** The single glowing mockup on the project row. */
  mockup?: Shot;
  /** Everything the viewer shows when the mockup is clicked. */
  album?: Shot[];
  mockupShape?: "phone" | "screen";
};

export const projects: Project[] = [
  {
    id: "bravo-secure",
    slug: "bravo-secure",
    num: "04.1",
    title: "Bravo Secure",
    org: "OmniDevX Studio",
    period: "2026 — present",
    accent: "#e8452a",
    summary:
      "An end-to-end encrypted messenger and booking platform for security personnel.",
    bullets: [
      "Messaging on the Signal Protocol — X3DH, Double Ratchet, Sealed Sender — with multi-device delivery, message search and editing, and an MFA-protected encrypted file vault.",
      "Group voice and video on WebRTC and mediasoup, scaled from six participants to ten, with ringing that still arrives when the app has been killed.",
      "Executive Protection missions with live GPS tracking, Mapbox navigation and SOS, plus auto-dispatch, Stripe escrow and a multi-currency wallet.",
    ],
    tags: ["SIGNAL PROTOCOL", "WEBRTC", "REACT NATIVE", "NESTJS", "STRIPE"],
    note: "Private repository.",
    role: "Full-stack, at OmniDevX Studio.",
    outcomes: [
      { value: "400+", label: "production bugs fixed" },
      { value: "51% → 74%", label: "messenger test coverage" },
      { value: "6 → 10", label: "participants per group call" },
    ],
    story: [
      {
        heading: "What it is",
        body: "A messenger and a booking platform in one app, for people who protect other people. The messaging half is Slack-shaped — channels, threads, search, file sharing. The booking half dispatches close-protection officers to missions, tracks them while they are out, and settles the money afterwards.",
      },
      {
        heading: "Encryption that holds up",
        body: "Messages use the Signal Protocol: X3DH to agree a key, the Double Ratchet to move it forward with every message, Sealed Sender so the server cannot see who is talking to whom. The hard part is not the cryptography, it is multi-device — the same conversation, decryptable on a phone and a tablet, still searchable, still editable, without the server ever holding a readable copy. Files go into an MFA-protected vault.",
      },
      {
        heading: "Calls that ring when the app is dead",
        body: "Group voice and video over WebRTC, routed through mediasoup so a call does not collapse as people join. It started at six participants and now holds ten. The part users actually notice is the ringing: an incoming call has to wake a killed app, which means CallKit on iOS and Android Telecom on the other side, not a push notification and a prayer.",
      },
      {
        heading: "The unglamorous half",
        body: "Four hundred production bugs, each taken from a device log to a root cause to a regression test that stops it coming back. The suite grew to roughly 1,430 tests and messenger coverage went from 51% to 74%. That number is the reason releases stopped being frightening.",
      },
    ],
    mockupShape: "phone",
    mockup: {
      src: "/work/bravo-messenger.png",
      alt: "Bravo Secure encrypted chat screen with an end-to-end encrypted banner, message thread, attached route brief and an access code.",
      caption: "Messenger — end-to-end encrypted, with file attachments and access codes.",
    },
    album: [
      {
        src: "/work/bravo-messenger.png",
        alt: "Bravo Secure encrypted chat screen with an end-to-end encrypted banner and message thread.",
        caption: "Messenger — end-to-end encrypted, with file attachments and access codes.",
      },
      {
        src: "/work/bravo-call.png",
        alt: "Bravo Secure encrypted call screen showing a connected AES-256 encrypted call with flip, mute, video, blur and end controls.",
        caption: "Encrypted call — AES-256, with blur and multi-party controls.",
      },
      {
        src: "/work/bravo-mission.png",
        alt: "Bravo Pro mission monitoring screen with a live route map, tracked assets and a mission log.",
        caption: "Bravo Pro — live mission monitoring, tracked assets and escalation.",
      },
      {
        src: "/work/bravo-dashboard.png",
        alt: "Bravo Secure home dashboard listing Messenger, Bravo Lite and Bravo Pro with a recent activity feed and an SOS button.",
        caption: "Home — messenger, booking and Pro subscriptions, with SOS.",
      },
    ],
  },
  {
    id: "odoo-suite",
    slug: "odoo-suite",
    num: "04.2",
    title: "Odoo 17 dashboard suite",
    org: "Tex Fasteners / Tex Zippers",
    period: "2025 — present",
    accent: "#d99a2b",
    summary:
      "Twenty-plus live boards that replaced a factory's spreadsheet reporting.",
    bullets: [
      "Built in Python, OWL, QWeb/XML and PostgreSQL across inventory, purchase, sales, manufacturing and accounts.",
      "Supply-chain planning behind them — sales order versus raw-material availability, forecast versus RM demand plan, consumption-driven stock runway, goods-in-transit — plus ROL models that cut material shortages by 40%.",
      "One RM Item Master drives every planning board, so planners maintain the item list in one place and nobody edits code to add an item.",
    ],
    tags: ["PYTHON", "OWL", "QWEB / XML", "POSTGRESQL", "ODOO.SH"],
    role: "Designed and built, at Tex Fasteners.",
    outcomes: [
      { value: "20+", label: "live boards in daily use" },
      { value: "40%", label: "fewer material shortages" },
      { value: "2 hrs", label: "of manual reporting removed, daily" },
    ],
    story: [
      {
        heading: "Where it started",
        body: "A zipper and metal-trims factory running on spreadsheets. Production pending, spares inventory, RM ageing, forecast probability, invoice tracking — each compiled by hand, each a week behind, and each quietly disagreeing with the others. Management was making decisions on numbers nobody could reconcile.",
      },
      {
        heading: "One item master, not twenty",
        body: "The first thing that had to go was the hard-coded item list. Every planning board now reads from a single RM Item Master, so a planner adds an item in one place and every board picks it up. Before that, adding an item meant editing code — which meant it did not happen, which meant the boards drifted from reality.",
      },
      {
        heading: "Making the numbers agree",
        body: "The production-pending and LC-received logic were both wrong in ways that inflated the figures management saw. Correcting them means the invoice tracker and the production board now reconcile order by order — the same order, the same number, on both screens. Monthly RM ageing was rebuilt back to 2021 from existing master data, which finally exposed how much 180-day stock was sitting still.",
      },
      {
        heading: "Planning, not just reporting",
        body: "Dashboards only tell you what happened. The planning tools tell you what is about to: sales order versus raw-material availability, forecast versus RM demand plan, consumption-driven stock runway, goods-in-transit. With re-order-level and demand models behind them, material shortages fell by 40%.",
      },
    ],
    note: "Boards include RM Item Movement, RM Ageing 180+, Ageing Monthly, Sales Revenue, Invoice Journey, Buyer Journey, FG Stock & LC Received Pending, Forecast vs Actual, Purchase Utilisation and the Organisation Chart.",
    mockupShape: "screen",
    mockup: {
      src: "/work/odoo-sales-revenue.png",
      alt: "Odoo Sales Revenue dashboard with total sales, collection, due and quantity cards above a sales trend chart and a sales-by-division donut.",
      caption: "Sales Revenue — collection against due, by division and team.",
    },
    album: [
      {
        src: "/work/odoo-sales-revenue.png",
        alt: "Odoo Sales Revenue dashboard with KPI cards, a sales trend chart and a sales-by-division donut.",
        caption: "Sales Revenue — collection against due, by division and team.",
      },
      {
        src: "/work/odoo-rm-item-movement.png",
        alt: "RM Item Movement board with company and classification filters, a colour legend and a dense month-by-month table.",
        caption:
          "RM Item Movement — opening, received, issued and closing, flagged DEAD / D&B / OVR / PROJ / SLOW.",
      },
      {
        src: "/work/odoo-rm-ageing.png",
        alt: "RM Ageing 180+ Movement board with a monthly movement summary beside newly added ageing stock by item category.",
        caption: "RM Ageing 180+ — monthly movement beside what entered ageing this month.",
      },
      {
        src: "/work/odoo-sales-pipeline.png",
        alt: "Rolling order summary comparing Zipper and Metal Trims quantities and values by month, broken down by sales team.",
        caption: "Rolling order summary — Zipper and Metal Trims, by month and sales team.",
      },
    ],
  },
  {
    id: "exzellent",
    slug: "exzellent",
    num: "04.3",
    title: "Exzellent",
    org: "Exzellent — Cottbus, Germany",
    period: "2026 — present",
    accent: "#8b5cf6",
    summary:
      "A language-learning platform: courses, AI tutors, speech practice and tutor booking — web and both app stores from one codebase.",
    bullets: [
      "React 19, Vite 6 and Tailwind v4 on the front end, wrapped by Capacitor for Android and iOS, so what ships to the website is in the app on the next build.",
      "A Node API organised as twenty-six owned areas — accounts, courses, payments, booking, messaging, AI tools, speech, the ops console — over a shared model layer.",
      "AI tutors and pronunciation practice over an LLM and Whisper, Stripe checkout, and Zoom and calendar booking for tutors.",
    ],
    tags: ["REACT 19", "NODE.JS", "MONGODB", "CAPACITOR", "STRIPE"],
    role: "Growth & Automation, at Exzellent.",
    outcomes: [
      { value: "26", label: "owned API areas" },
      { value: "1", label: "codebase for web, Android and iOS" },
      { value: "54", label: "shared data models" },
    ],
    story: [
      {
        heading: "One codebase, three places",
        body: "The React app is the website and, wrapped by Capacitor, the Android and iOS app as well. There is no second codebase to keep in step — whatever ships to the site is in the app on the next build. That is a deliberate constraint, and it is why a small change does not become a three-platform project.",
      },
      {
        heading: "An API you can hand to one person",
        body: "The Node API is split into twenty-six owned areas — accounts and auth, courses, enrolments, payments, booking, messaging, AI tools, speech, gamification, the internal ops console — each with its routes and controllers together and a README saying what it answers on. Adding a router is two lines in one file. The point is that a feature can be handed to one person without a handover meeting.",
      },
      {
        heading: "The AI that teaches",
        body: "AI tutors answer in the language being learned, and pronunciation practice runs speech through Whisper and scores it. Both sit behind the same quota middleware as everything else, because an AI feature that can be called without limit is a billing incident waiting to happen.",
      },
    ],
    mockupShape: "screen",
    mockup: {
      src: "/work/exzellent-student.jpg",
      alt: "Exzellent student dashboard with a tools grid, profile panel and course list on a dark violet interface.",
      caption: "Student dashboard — tools, profile and course progress.",
    },
    album: [
      {
        src: "/work/exzellent-student.jpg",
        alt: "Exzellent student dashboard with a tools grid, profile panel and course list.",
        caption: "Student dashboard — tools, profile and course progress.",
      },
      {
        src: "/work/exzellent-teacher.jpg",
        alt: "Exzellent teacher dashboard showing scheduling, students and teaching tools.",
        caption: "Teacher dashboard — scheduling, students and teaching tools.",
      },
    ],
  },
  {
    id: "mky-chatbot",
    slug: "mky-chatbot",
    num: "04.4",
    title: "Freight forwarding assistant",
    org: "MKY Global Forwarding",
    period: "2026",
    accent: "#2dd4bf",
    summary:
      "A Telegram, WhatsApp and web assistant that answers from the company's database rather than from the model's imagination.",
    bullets: [
      "A deterministic state machine meets the customer first; the language model runs only when the machine has nothing to say, so booking rules live in Postgres rows and not in a prompt.",
      "The model may read, it may not decide — the booking tools are filtered out of its tool list entirely. A prompt can be argued with; a tool that was never offered cannot be called.",
      "Bookings, tracking by chassis number, document checks against what the file actually contains, Arabic and English, and an operations desk for the humans behind it.",
    ],
    tags: ["NODE.JS", "POSTGRESQL", "LLM TOOL-CALLING", "VERCEL"],
    role: "Built end to end.",
    outcomes: [
      { value: "3", label: "channels on one engine" },
      { value: "0", label: "booking tools offered to the model" },
      { value: "2", label: "languages, Arabic and English" },
    ],
    story: [
      {
        heading: "The rule the whole thing rests on",
        body: "The model may read, it may not decide. It reads a chassis number out of a sentence and answers questions from the company knowledge base. Whether a vehicle may be booked, which documents are outstanding, and whether a request goes to Operations are decided from rows in Postgres.",
      },
      {
        heading: "Why that is enforcement, not a prompt",
        body: "The booking tools are filtered out of the model tool list entirely. It is not instructed to avoid them; it is never offered them. A prompt can be argued with by a determined customer. A tool that was never on the list cannot be called, however the message is phrased.",
      },
      {
        heading: "A state machine meets you first",
        body: "Every message hits a deterministic flow before the model sees it. Bookings, tracking, document checks and handover to a human are machine paths with fixed outcomes. The model only runs when the machine has nothing to say — which is how a freight customer gets a confident answer about their shipment and a conversational one about customs.",
      },
      {
        heading: "Arabic, properly",
        body: "Not a translation layer bolted on. The flows, the quick replies, the generated document summaries and the operations desk all run in Arabic and English, including right-to-left rendering in the PDFs the bot produces.",
      },
    ],
    mockupShape: "phone",
    mockup: {
      src: "/work/mky-chat.png",
      alt: "MKY Global Forwarding chat interface with a welcome message and quick replies for tracking, documents, new booking and transit times.",
      caption: "Web chat — the same engine behind Telegram and WhatsApp.",
    },
    album: [
      {
        src: "/work/mky-chat.png",
        alt: "MKY Global Forwarding chat interface with a welcome message and quick replies.",
        caption: "Web chat — the same engine behind Telegram and WhatsApp.",
      },
    ],
  },
  {
    id: "guardmaster",
    slug: "guardmaster-fencing",
    num: "04.5",
    title: "GuardMaster Fencing",
    org: "OmniDevX Studio",
    period: "2026 — present",
    accent: "#eab308",
    role: "Team project at OmniDevX Studio.",
    summary:
      "A high-security fencing storefront for the US market, with the configurator and quote estimator that sell it.",
    bullets: [
      "Headless commerce: an Astro storefront over Magento Open Source 2.4.9, with Magento the single source of truth for catalogue, prices, cart, tax and orders — the storefront never holds a second copy of a price.",
      "A configurator across the full variant matrix — mesh aperture, panel height, fixing type, finish — priced live, and a quote estimator for the configurations that are made to order.",
      "Prices are entered in ZAR and shown in USD by Magento's own conversion, with VAT inside the price rather than added on top, so no dollar figure is ever hand-typed into a template.",
    ],
    tags: ["ASTRO", "MAGENTO 2", "GRAPHQL", "E-COMMERCE", "VERCEL"],
    note: "Built with the team at OmniDevX Studio — guardmasterfencing.com",
    mockupShape: "screen",
    mockup: {
      src: "/work/guardmaster-catalogue.jpg",
      alt: "GuardMaster Fencing catalogue page showing Clear View fencing panels with aperture options and a from-price.",
      caption: "Catalogue — the Clear View system, priced by aperture and height.",
    },
    album: [
      {
        src: "/work/guardmaster-catalogue.jpg",
        alt: "GuardMaster catalogue page with Clear View fencing panels, aperture options and a from-price.",
        caption: "Catalogue — the Clear View system, priced by aperture and height.",
      },
      {
        src: "/work/guardmaster-home.jpg",
        alt: "GuardMaster Fencing home page showing the product range and navigation.",
        caption: "Home — the range, the factory story and the quote path.",
      },
      {
        src: "/work/guardmaster-estimator.jpg",
        alt: "GuardMaster quote estimator for configuring a fence run and getting a price.",
        caption: "Estimator — configure a run, get a price.",
      },
    ],
    story: [
      {
        heading: "The problem",
        body: "High-security fencing is not a catalogue product. The price depends on mesh aperture, panel height, fixing type and finish, and the combinations run into the hundreds. Quoting was done by hand, which meant a buyer could not find out what a fence cost without sending an email and waiting.",
      },
      {
        heading: "The decision that shaped it",
        body: "Magento owns commerce state and nothing else is allowed to. Price, stock, cart totals, tax, discounts, orders and customers live in Magento; the storefront is only an experience layer over its GraphQL API. No component fetches directly, and a price supplied by a browser is never trusted. That rule is why the configurator can be believed: every figure on screen came from the same place the order will.",
      },
      {
        heading: "Currency and tax, done once",
        body: "Factory prices are entered in ZAR, because that is where the factory is. The storefront displays USD, because the buyers are American, and Magento converts at its stored rate. VAT sits inside every price rather than being added at the end, and the “of which VAT” line is Magento's own calculation.",
      },
      {
        heading: "Honesty as a constraint",
        body: "No invented prices, stock levels or testimonials. A configuration Magento has no priced child for is shown as unavailable rather than guessed at. Stock is not tracked, so the site never claims a stock level. The South African delivery record belongs to the sister company, and the site says so.",
      },
    ],
    outcomes: [
      { value: "358", label: "anti-climb mesh system, fully configurable" },
      { value: "ZAR → USD", label: "converted by Magento, never hand-typed" },
      { value: "1", label: "source of truth for every price" },
    ],
  },
  {
    id: "inventory-automation",
    slug: "inventory-automation",
    num: "04.6",
    title: "Inventory Data Automation",
    org: "Open source",
    period: "2025",
    accent: "#4ade80",
    summary:
      "A Python, GitHub Actions and Google APIs pipeline that keeps Looker Studio and Google Sheets reports live without anyone pressing refresh.",
    bullets: [
      "Scheduled jobs pull from Odoo, reshape in pandas and write straight into the sheets the reports are built on.",
      "The only public repository of the six — the rest are client work.",
    ],
    tags: ["PYTHON", "GITHUB ACTIONS", "GOOGLE APIS", "LOOKER STUDIO"],
    href: "https://github.com/shanto173/inventory_data_automation",
    hrefLabel: "VIEW REPOSITORY",
  },
];

/* ── 05 Stack ──────────────────────────────────────────────────────────── */

export const stack = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "MATLAB"] },
  {
    label: "ERP — Odoo 17",
    items: ["Custom modules", "ORM", "OWL components", "QWeb / XML", "Scheduled jobs", "Record rules", "Odoo.sh"],
  },
  { label: "Backend", items: ["NestJS", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "MS-SQL"] },
  { label: "Web & mobile", items: ["React", "Next.js", "React Native", "Vite", "Tailwind", "Capacitor"] },
  {
    label: "Data & BI",
    items: ["pandas", "NumPy", "Matplotlib", "Power BI", "Power Query", "Looker Studio", "Google Sheets API"],
  },
  {
    label: "ML & AI",
    items: ["TensorFlow", "Random Forest", "XGBoost", "Isolation Forest", "LangChain", "RAG", "MCP", "GenAI"],
  },
  { label: "Real-time & security", items: ["WebRTC", "mediasoup", "Signal Protocol (E2EE)", "Stripe", "Mapbox"] },
  { label: "Tooling", items: ["Git", "GitHub Actions", "Vercel", "Docker", "Claude Code"] },
] as const;

/* ── 06 Education ──────────────────────────────────────────────────────── */

export const education = [
  {
    degree: "MSc, Artificial Intelligence and Data Science",
    school: "Deggendorf Institute of Technology",
    place: "Germany",
    period: "Mar 2026 — Mar 2028 (expected)",
  },
  {
    degree: "BSc, Computer Science and Engineering",
    school: "Notre Dame University Bangladesh",
    place: "Dhaka",
    period: "2020 — 2023",
    note: "CGPA 3.55. Higher Secondary Certificate, Govt. Science College, Dhaka (GPA 4.50). Secondary School Certificate, Motijheel Model School & College (GPA 5.00).",
  },
] as const;

export const credentials = {
  awards: ["Best Performer – Q3, Tex Fasteners (BD) Ltd."],
  certifications: ["IELTS 7.0 — British Council", "Software Developer — GAOTek Inc."],
  languages: [
    "Bengali — native",
    "English — C1 listening and reading, B2 speaking and writing",
    "German — A2",
  ],
} as const;

/* ── 07 References ─────────────────────────────────────────────────────── */

export type Reference = {
  name: string;
  initials: string;
  title: string;
  org: string;
  detail: string;
  linkedin?: string;
  /** Only rendered in the downloadable CV, never on the public page. */
  phone?: string;
  email?: string;
  inCv: boolean;
};

export const references: Reference[] = [
  {
    name: "Shahid Hossain",
    initials: "SH",
    title: "Assistant Vice President",
    org: "Tex Fasteners (BD) Ltd.",
    detail:
      "SHRM-CP · HR, people operations and organisational development, supply chain management, industrial automation and digital transformation.",
    linkedin: "https://www.linkedin.com/in/shahid-hossain-9208ab84/",
    phone: "+880 1918-990450",
    email: "shahid.hossain@texzipperbd.com",
    inCv: true,
  },
  {
    name: "Ranak Debnath",
    initials: "RD",
    title: "Founder & CEO",
    org: "OmniDevX Studio",
    detail:
      "Backend developer and data engineer · Node.js, Python, AI/ML. Building scalable systems across borders.",
    linkedin: "https://www.linkedin.com/in/ranak-debnath-7644621b7/",
    phone: "+880 1799-306165",
    email: "piyaldeb87@gmail.com",
    inCv: true,
  },
  {
    name: "Riyabrata Mondol",
    initials: "RM",
    title: "Chief Executive Officer",
    org: "Exzellent",
    detail:
      "Leads the Exzellent learning platform in Cottbus, Germany — courses, AI tutoring and the team building it.",
    phone: "+49 15510 400831",
    inCv: false,
  },
  {
    name: "Md. Abu Sayed",
    initials: "AS",
    title: "Associate Manager",
    org: "Tex Zippers (BD) Limited",
    detail:
      "ERP specialist and business solutions leader · Odoo development and implementation, automation and team leadership.",
    linkedin: "https://www.linkedin.com/in/abusayeed1922/",
    inCv: false,
  },
];

export const referencesNote =
  "Full contact details are in the downloadable CV. Please reach me first and I will make the introduction.";
