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
  github: "https://github.com/shanto173",
  githubHandle: "shanto173",
  linkedin: "https://www.linkedin.com/in/ariful-islam-9345041b9/",
  linkedinHandle: "in/ariful-islam",
  cv: "/cv/Ariful-Islam-CV.pdf",
  cvEuropass: "/cv/Ariful-Islam-CV-Europass.pdf",
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
  { id: "stack", num: "05", label: "Stack" },
  { id: "education", num: "06", label: "Education" },
  { id: "references", num: "07", label: "References" },
  { id: "contact", num: "08", label: "Contact" },
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
    place: "Adamjee EPZ, Narayanganj, Bangladesh",
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
  /** The single glowing mockup on the project row. */
  mockup?: Shot;
  /** Everything the viewer shows when the mockup is clicked. */
  album?: Shot[];
  mockupShape?: "phone" | "screen";
};

export const projects: Project[] = [
  {
    id: "bravo-secure",
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
    id: "inventory-automation",
    num: "04.5",
    title: "Inventory Data Automation",
    org: "Open source",
    period: "2025",
    accent: "#4ade80",
    summary:
      "A Python, GitHub Actions and Google APIs pipeline that keeps Looker Studio and Google Sheets reports live without anyone pressing refresh.",
    bullets: [
      "Scheduled jobs pull from Odoo, reshape in pandas and write straight into the sheets the reports are built on.",
      "The only public repository of the five — the rest are client work.",
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
