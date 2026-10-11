/**
 * Everything the site says lives here.
 * Edit this file to change the portfolio — no component needs touching.
 */

export const person = {
  name: "Ariful Islam",
  first: "Ariful",
  role: "Software Developer",
  disciplines: "Odoo ERP & supply-chain analytics · AI/ML · full-stack",
  location: "Deggendorf, Germany",
  status: "Open to work — Germany & remote",
  email: "ariful81848@gmail.com",
  github: "https://github.com/shanto173",
  githubHandle: "shanto173",
  linkedin: "https://www.linkedin.com/in/ariful-islam-9345041b9/",
  linkedinHandle: "in/ariful-islam",
  cv: "/cv/Ariful-Islam-CV.pdf",
  cvEuropass: "/cv/Ariful-Islam-CV-Europass.pdf",
  portrait: "/ariful-islam.jpg",
} as const;

export const hero = {
  /** The whole line, used for search results and link previews. */
  headline: "I turn manual business reporting into live, reliable software.",
  /** The same line split so the closing phrase can carry the accent colour. */
  headlineLead: "I turn manual business reporting into",
  headlineEmphasis: "live, reliable software.",
  standfirst:
    "Software developer working across Odoo ERP, encrypted mobile platforms and applied AI. Currently reading for an MSc in Artificial Intelligence and Data Science at Deggendorf Institute of Technology.",
};

export const about = [
  "I build the thing that replaces the spreadsheet. At a zipper and metal-trims manufacturer I put more than twenty live Odoo dashboards in front of management — inventory, purchase, sales, manufacturing and accounts — and the planning models behind them cut material shortages by 40%.",
  "Alongside that I work full-stack on an end-to-end encrypted messenger and booking platform, on a language-learning platform that ships to web and to both app stores from one codebase, and on an assistant that answers freight customers from a database rather than from a model's imagination.",
  "The common thread is that someone checks the number afterwards. I would rather ship a board a planner trusts on a Monday morning than a demo that looks clever once.",
];

export const sections = [
  { id: "profile", num: "01", label: "Profile" },
  { id: "impact", num: "02", label: "Impact" },
  { id: "work", num: "03", label: "Work" },
  { id: "experience", num: "04", label: "Experience" },
  { id: "stack", num: "05", label: "Stack" },
  { id: "education", num: "06", label: "Education" },
  { id: "references", num: "07", label: "References" },
  { id: "contact", num: "08", label: "Contact" },
] as const;

export const impact = [
  {
    value: "20+",
    label: "live Odoo dashboards",
    note: "Across inventory, purchase, sales, manufacturing and accounts.",
  },
  {
    value: "40%",
    label: "fewer material shortages",
    note: "Demand planning and re-order-level models on a single item master.",
  },
  {
    value: "400+",
    label: "production bugs fixed",
    note: "Device log to root cause to regression test.",
  },
  {
    value: "1,430",
    label: "tests in the suite",
    note: "Messenger coverage raised from 51% to 74%.",
  },
] as const;

export const impactFooter =
  "And two hours of manual reporting removed from every working day.";

export type Project = {
  id: string;
  num: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
  note?: string;
  href?: string;
  hrefLabel?: string;
  images?: { src: string; alt: string; caption: string }[];
};

export const projects: Project[] = [
  {
    id: "bravo-secure",
    num: "03.1",
    title: "Bravo Secure",
    org: "OmniDevX Studio",
    period: "2026 — present",
    summary:
      "An end-to-end encrypted messenger and booking platform for security personnel.",
    bullets: [
      "Messaging on the Signal Protocol — X3DH, Double Ratchet, Sealed Sender — with multi-device delivery, message search and editing, delivery receipts and an MFA-protected encrypted file vault.",
      "Group voice and video on WebRTC and mediasoup, scaled from six participants to ten, with ringing that still arrives when the app has been killed (CallKit and Android Telecom).",
      "Executive Protection missions with live GPS tracking, Mapbox turn-by-turn navigation and SOS linkage, plus bookings, auto-dispatch to agencies, Stripe escrow and payouts, and a multi-currency wallet.",
      "Fixed more than 400 production bugs from device log to root cause to regression test, contributing to a suite of roughly 1,430 tests that raised messenger coverage from 51% to 74%.",
    ],
    stack: [
      "React Native",
      "NestJS",
      "PostgreSQL",
      "WebRTC",
      "Signal Protocol",
      "Stripe",
      "Mapbox",
    ],
    note: "Private repository.",
  },
  {
    id: "odoo-suite",
    num: "03.2",
    title: "Odoo 17 dashboard suite",
    org: "Tex Fasteners (BD) Ltd. / Tex Zippers",
    period: "2025 — present",
    summary:
      "Twenty-plus live boards that replaced a factory's spreadsheet reporting.",
    bullets: [
      "Designed and built the boards in Python, OWL, QWeb/XML and PostgreSQL, giving management same-day visibility of stock, orders, production and receivables instead of a report compiled by hand the following week.",
      "Built the supply-chain planning tools behind them — sales order versus raw-material availability, forecast versus RM demand plan, consumption-driven stock runway, goods-in-transit — plus demand planning and re-order-level models that cut material shortages by 40%.",
      "Created a single RM Item Master that drives every planning board, so planners maintain the item list in one place and nobody edits code to add an item.",
      "Rebuilt monthly RM ageing history back to 2021 from existing master data, exposing 180-day slow-moving and unusable stock by company and financial year.",
      "Corrected the production-pending and LC-received logic so the invoice tracker and the production board reconcile order by order, removing overstated pending values from management reports.",
    ],
    stack: [
      "Python",
      "OWL / JavaScript",
      "QWeb / XML",
      "PostgreSQL",
      "Odoo.sh",
    ],
    note: "Boards include RM Item Movement, RM Ageing 180+, Ageing Monthly, Sales Revenue, Invoice Journey, Buyer Journey, FG Stock & LC Received Pending, Forecast vs Actual, Budget vs Forecast vs Actual, Purchase Utilisation, Stock Ageing Movement, Brands GRS Traceability and the Organisation Chart.",
    images: [
      {
        src: "/work/odoo-sales-revenue.png",
        alt: "Sales Revenue dashboard showing total sales, collection, due and quantity cards above a sales trend chart and a sales-by-division donut.",
        caption: "Sales Revenue — collection against due, by division and team.",
      },
      {
        src: "/work/odoo-rm-item-movement.png",
        alt: "RM Item Movement board with company and classification filters, a colour legend, and a dense month-by-month table of opening, received, issued and closing quantities.",
        caption:
          "RM Item Movement — opening, received, issued and closing, month by month, flagged DEAD / D&B / OVR / PROJ / SLOW.",
      },
      {
        src: "/work/odoo-rm-ageing.png",
        alt: "RM Ageing 180+ Movement board with a monthly movement summary beside a table of newly added ageing stock by item category and invoice.",
        caption:
          "RM Ageing 180+ — monthly movement beside the items that entered ageing this month.",
      },
      {
        src: "/work/odoo-sales-pipeline.png",
        alt: "Rolling order summary comparing Zipper and Metal Trims quantities and values by month, broken down by sales team.",
        caption:
          "Rolling order summary — Zipper and Metal Trims, by month and sales team.",
      },
    ],
  },
  {
    id: "exzellent",
    num: "03.3",
    title: "Exzellent",
    org: "Exzellent — Cottbus, Germany",
    period: "2026 — present",
    summary:
      "A language-learning and skills platform: courses, AI tutors, speech practice and tutor booking, shipping to web and to both app stores from one codebase.",
    bullets: [
      "React 19, Vite 6 and Tailwind v4 on the front end, with the same build wrapped by Capacitor for Android and iOS — there is no second codebase, so what ships to the website is in the app on the next build.",
      "A Node API organised as twenty-six owned areas — accounts and auth, courses, enrolments, payments, booking, messaging, AI tools, speech, gamification, the internal ops console — over a shared model layer, so a feature can be handed to one person.",
      "AI tutors and pronunciation practice over an LLM and Whisper, Stripe checkout and webhooks, and Zoom and calendar booking for tutors and mentors.",
    ],
    stack: [
      "React 19",
      "Vite",
      "Tailwind",
      "Node.js",
      "MongoDB",
      "Capacitor",
      "Stripe",
    ],
  },
  {
    id: "mky-chatbot",
    num: "03.4",
    title: "Freight forwarding assistant",
    org: "MKY Global Forwarding",
    period: "2026",
    summary:
      "A Telegram, WhatsApp and web assistant that answers from the company's database rather than from the model's imagination.",
    bullets: [
      "A deterministic state machine meets the customer first and the language model runs only when the machine has nothing to say — so booking rules live in Postgres rows, not in a prompt.",
      "The model may read, it may not decide: the booking tools are filtered out of its tool list entirely. A prompt can be argued with; a tool that was never offered cannot be called.",
      "Bookings, shipment tracking by chassis number, document checks against what the file actually contains, Arabic and English throughout, and an operations desk for the humans behind it.",
    ],
    stack: ["Node.js", "PostgreSQL", "LLM tool-calling", "Vercel"],
  },
];

export const smallerProjects = [
  {
    title: "Inventory Data Automation",
    summary:
      "A Python, GitHub Actions and Google APIs pipeline that keeps Looker Studio and Google Sheets reports live without anyone pressing refresh.",
    stack: ["Python", "GitHub Actions", "Google APIs", "Looker Studio"],
    href: "https://github.com/shanto173/inventory_data_automation",
    hrefLabel: "View the repository",
  },
  {
    title: "Health Monitoring System",
    summary:
      "A Random Forest model over wearable-device data predicting heart disease and diabetes, at 87% accuracy.",
    stack: ["Python", "scikit-learn", "pandas"],
  },
  {
    title: "Fraud Detection System",
    summary:
      "Isolation Forest for anomalies and XGBoost for classification on credit-card transactions — false positives down 15%, detection up.",
    stack: ["Python", "XGBoost", "Isolation Forest"],
  },
] as const;

export const experience = [
  {
    role: "Software Developer",
    org: "OmniDevX Studio",
    place: "Remote",
    period: "Jun 2026 — present",
    bullets: [
      "Full-stack work on Bravo Secure across React Native, NestJS and PostgreSQL.",
      "Fixed 400+ production bugs from device log to root cause to regression test.",
      "Used AI-assisted development to ship at two to three times the pace while owning review, testing and releases.",
    ],
  },
  {
    role: "Growth & Automation",
    org: "Exzellent",
    place: "Cottbus, Brandenburg, Germany",
    period: "Sep 2026 — present",
    bullets: [
      "Work on the Exzellent learning platform — React front end, Node API and the native app shell built from the same codebase.",
    ],
  },
  {
    role: "Executive Engineer (Software Developer)",
    org: "Tex Fasteners (BD) Ltd. / Tex Zippers",
    place: "Adamjee EPZ, Narayanganj, Bangladesh",
    period: "Feb 2025 — present",
    bullets: [
      "Built 20+ live Odoo 17 dashboards and custom modules across inventory, purchase, sales, manufacturing and accounts.",
      "Replaced manually compiled Excel and Google Sheets reporting with live boards and automated Python pipelines, saving two hours of manual work a day.",
      "Built the supply-chain planning and ROL models that cut material shortages by 40%.",
      "Awarded Best Performer – Q3 for operational excellence and for the move from analyst to developer.",
    ],
    sub: "Graduate Engineer Trainee, Feb 2025 — Feb 2026. Executive Engineer since Feb 2026.",
  },
  {
    role: "Software Developer",
    org: "GAOTek Inc.",
    place: "New York, United States — remote",
    period: "May 2023 — Aug 2023",
    bullets: [
      "Developed and customised Odoo modules in Python and XML; supported debugging, testing and module configuration.",
      "Worked with PostgreSQL, took part in code reviews and wrote technical documentation.",
    ],
  },
] as const;

export const stack = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "MATLAB"],
  },
  {
    label: "ERP — Odoo 17",
    items: [
      "Custom modules",
      "ORM",
      "OWL components",
      "QWeb / XML views",
      "Scheduled jobs",
      "Record rules",
      "Odoo.sh",
    ],
  },
  {
    label: "Backend & databases",
    items: ["NestJS", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "MS-SQL"],
  },
  {
    label: "Web & mobile",
    items: ["React", "Next.js", "React Native", "Vite", "Tailwind", "Capacitor"],
  },
  {
    label: "Data & BI",
    items: [
      "pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "Power Query",
      "Looker Studio",
      "Google Sheets API",
    ],
  },
  {
    label: "Machine learning & AI",
    items: [
      "TensorFlow",
      "Random Forest",
      "XGBoost",
      "Isolation Forest",
      "LangChain",
      "RAG",
      "MCP",
      "GenAI",
    ],
  },
  {
    label: "Real-time & security",
    items: ["WebRTC", "mediasoup", "Signal Protocol (E2EE)", "Stripe", "Mapbox"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub Actions", "Vercel", "Docker", "Claude Code"],
  },
] as const;

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
  certifications: [
    "IELTS 7.0 — British Council",
    "Software Developer — GAOTek Inc.",
  ],
  languages: [
    "Bengali — native",
    "English — C1 listening and reading, B2 speaking and writing",
    "German — B1",
  ],
} as const;

export const references = [
  {
    name: "Shahid Hossain",
    title: "Assistant Vice President",
    org: "Tex Fasteners (BD) Ltd.",
    detail:
      "SHRM-CP · HR, people operations and organisational development, supply chain management, industrial automation and digital transformation.",
    linkedin: "https://www.linkedin.com/in/shahid-hossain-9208ab84/",
  },
  {
    name: "Ranak Debnath",
    title: "Founder & CEO",
    org: "OmniDevX Studio",
    detail:
      "Backend developer and data engineer · Node.js, Python, AI/ML. Building scalable systems across borders.",
    linkedin: "https://www.linkedin.com/in/ranak-debnath-7644621b7/",
  },
  {
    name: "Md. Abu Sayed",
    title: "Associate Manager",
    org: "Tex Zippers (BD) Limited",
    detail:
      "ERP specialist and business solutions leader · Odoo development and implementation, automation and team leadership.",
    linkedin: "https://www.linkedin.com/in/abusayeed1922/",
  },
] as const;

export const referencesNote =
  "Contact details on request — please reach me first and I will make the introduction.";
