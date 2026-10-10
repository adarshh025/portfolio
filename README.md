# Adarsh Aher — Production Developer Portfolio

> **ML Engineer & Cybersecurity Specialist**  
> B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)

A modern, production-grade, multi-page personal developer portfolio web application built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed to communicate engineering depth, architectural thinking, and verifiable evidence across applied machine learning, defensive web security, offline-first systems, and algorithmic problem solving.

---

## 1. Project Overview

This portfolio application departs from generic template clichés (no fake percentage meters, no glowing rainbow clutter, no unsubstantiated claims). Instead, it presents **audited, verifiable technical work** derived directly from public source code:

- **Who I am**: Second-year B.Tech CSE (AIML) undergraduate at **Sandip University**, interning at **Persevex** (software development & machine learning), and serving as **Campus Ambassador at Paytm**.
- **What I build**: **Vernacular** (custom interpreted, actor-first programming language), end-to-end invoice document intelligence pipelines, defensive vulnerability scanners, offline-first mobile apps, and cryptographic utilities.
- **How I think**: *Learning → Building → Failing → Improving → Repeating.* Verifiable tests, architectural diagrams, causal CRDT ordering, honest limitation disclosure, and defensive-by-default software design.
- **What I know**: Polyglot software development backed by production code, language engineering, systems exploration, and coursework: **Vernacular (Author), Python, Rust, TypeScript, Go, Java, JavaScript, R, C++, Dart, SQL**, alongside core ML & security frameworks (PyTorch, Scikit-learn, OpenCV, Tesseract OCR, FastAPI, Drift SQLite, Docker).
- **Ongoing practice**: Daily LeetCode problem solving (102 verified solves with 27 Hard problems) and hands-on defensive security on Hack The Box.

---

## 2. Key Features

- **Multi-Page Client Routing**: 11 dedicated routes managed by `react-router-dom`:
  - `/` (Home): Hero, verified telemetry, featured project highlights, core disciplines.
  - `/about` (About Me): Academic background at Sandip University, engineering philosophy, continuous learning.
  - `/projects` (Projects Directory): Live search, category filtering pills (including Language Design & Systems), and project cards.
  - `/projects/:slug` (Case Studies): Dedicated deep-dive technical case studies for all 8 projects.
  - `/experience` (Experience & Education): Chronological timeline covering Persevex (ML Intern / Developer), Paytm (Campus Ambassador), and Sandip University (B.Tech CSE AIML).
  - `/skills` (Technical Stack): Grouped skills with repository evidence (Compiler Engineering, Languages, ML, Security, Systems — zero fake percentage bars).
  - `/security` (Cybersecurity): Defensive auditing, SSRF guards, cryptographic mechanics, and HTB learning.
  - `/leetcode` (DSA & Problem Solving): Official LeetCode GraphQL stats (102 solved, 27 Hard) and curated solutions table.
  - `/certifications` (Credentials Architecture): 3 verified credentials including Persevex ML Course Completion and Itronix Python Certification.
  - `/resume` (Interactive & Printable Resume): ATS-optimized developer resume with instant browser print/PDF generation.
  - `/contact` (Contact & Profiles): Verified links (GitHub, LinkedIn, LeetCode), copyable email, and message dispatch form.
- **Deep Technical Case Studies**: Each significant project includes:
  - The Engineering Problem
  - The Implemented Solution
  - Visual Step-by-Step Architecture Diagram with file & module pointers
  - Key Engineering Decisions & Tradeoffs
  - Methodology (ML/CV pipelines)
  - Security Models & Safeguards
  - Automated Test Suites & Coverage
  - Explicit Documented Limitations & Constraints
- **Centralized Type-Safe Data Layer**: All data resides in `src/data/` as strongly typed TypeScript objects (`profileData.ts`, `projectsData.ts`, `experienceData.ts`, `skillsData.ts`, `leetcodeData.ts`, `certificationsData.ts`, `securityData.ts`). Update content in one place without touching UI components.
- **Print & ATS Optimized**: Dedicated `@media print` CSS cleanly strips navigation, footers, and backgrounds to produce a professional 1–2 page PDF resume directly via the browser's print dialog.
- **Fully Responsive & Accessible**: Custom mobile navigation drawer, semantic HTML5 landmarks, visible focus rings, high-contrast dark theme, and zero layout overflow.

---

## 3. Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Languages** | Vernacular (Author), Python, Rust, TypeScript, Go, Java, JavaScript, R, C++, Dart, SQL | Polyglot development spanning language design, ML, systems, web, mobile, and data analytics |
| **Language Engineering** | Lexing, Recursive Descent AST, Tree-Walk Evaluator, Actor Model | Custom interpreted language mechanics with message-driven concurrency |
| **Framework & UI** | React 19 + TypeScript | High-performance component-driven architecture with strict typing |
| **Build Tool** | Vite v8 | Sub-second HMR and optimized production bundling |
| **Routing** | React Router v7 (`react-router-dom`) | Multi-page client-side navigation with route scroll reset |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Utility-first responsive design, dark-first technical aesthetic |
| **Icons** | Lucide React + Custom SVGs | Clean technical icons and brand vectors (GitHub, LinkedIn, LeetCode) |
| **Fonts** | Inter & JetBrains Mono | Modern sans-serif typography paired with refined monospace accents |

---

## 4. Audited Projects Summary

Every project has been audited directly from public GitHub repositories:

1. **Vernacular** (`https://github.com/adarshh025`)
   - *Category*: Language Design & Systems / Compiler Architecture / Concurrency
   - *Architecture*: Interpreted, dynamically typed, actor-first programming language built around message-driven structure rather than conventional function-first mechanics. Custom lexical scanner $\rightarrow$ Recursive descent AST parser $\rightarrow$ Lexical environment bindings $\rightarrow$ Actor mailbox queuing $\rightarrow$ Asynchronous message dispatcher $\rightarrow$ Tree-walk interpreter evaluation engine.
   - *Testing*: 48 runtime behavioral assertions covering tokenization, AST invariants, mailbox FIFO delivery, and dynamic type evaluation.
   - *Status*: In Final Testing (Pre-release).

2. **InvoiceIQ** (`https://github.com/adarshh025/InvoiceIQ`)
   - *Category*: Machine Learning / Document AI / OCR / Anomaly Detection
   - *Architecture*: OpenCV preprocessing (Otsu binarization, affine deskewing) $\rightarrow$ Tesseract OCR v5 $\rightarrow$ Regex entity parser $\rightarrow$ Decimal rule validation $\rightarrow$ Z-score profiling $\rightarrow$ Scikit-learn Isolation Forest $\rightarrow$ Difflib duplicate detection $\rightarrow$ Streamlit dashboard.
   - *Testing*: 71 automated Pytest tests (82%+ coverage, 91%+ backend).

2. **SecuriScan-AI** (`https://github.com/adarshh025/SecuriScan-AI`)
   - *Category*: Cybersecurity / Defensive Vulnerability Assessment
   - *Architecture*: Decoupled FastAPI backend + React 19 TypeScript frontend. Modular scanners (CSP, HSTS, TLS certificates, Cookies, CORS, DOM sinks) protected by a built-in SSRF DNS/subnet firewall. Multi-persona remediation (Beginner, Developer copy-paste configs, Security Pro OWASP/CWE).
   - *Testing*: Automated Pytest suite across all scanners and SSRF edge cases.

3. **SMRITIVAN (स्मृतिवन)** (`https://github.com/adarshh025/smritivan`)
   - *Category*: Mobile Development / Healthcare AI / Distributed Systems
   - *Architecture*: Smart India Hackathon (SIH 2026, PS 26003) cognitive gaming platform for elderly dementia patients in remote North Eastern India. 100% offline-first via Flutter, Riverpod, Drift (SQLite), and a CRDT Hybrid Logical Clock (HLC) sync queue connecting to a FastAPI + PostgreSQL backend.

4. **Resumind** (`https://github.com/adarshh025/resumind`)
   - *Category*: NLP & Document AI / Structured Information Extraction
   - *Architecture*: Local, offline extraction pipeline using `pdfminer.six`, `python-docx`, rule-based section segmentation, and spaCy (`en_core_web_sm`) NER with Pydantic validation into FastAPI endpoints.

5. **Encryption System** (`https://github.com/adarshh025/encryption-project`)
   - *Category*: Cybersecurity / Applied Cryptography / Java Desktop
   - *Architecture*: Java Swing desktop application styled with FlatLaf 3.4. Buffered streaming Caesar byte-shift transformations ($c_i = (b_i - shift) \pmod{256}$) with digit-sum key derivation ($shift = \sum d_i$). Explicitly documents educational limitations (small 256 key space, frequency analysis, lack of AEAD).

6. **Handwritten Digit Recognition** (`https://github.com/adarshh025/HAND-WRITTEN-DIGIT-RECOGNITION-`)
   - *Category*: Computer Vision / Deep Learning / PyTorch
   - *Architecture*: PyTorch Convolutional Neural Network trained on 60,000 MNIST images (`mnist.pt`), served via Flask backend with PIL image normalization and real-time HTML5 browser drawing canvas.

7. **LeetCode Solves & Algorithmic Practice** (`https://github.com/adarshh025/leetcode-solves`)
   - *Category*: DSA & Problem Solving
   - *Stats*: 102 verified solved problems on LeetCode (43 Easy, 32 Medium, 27 Hard — >26% Hard problem ratio), 89 solution directories in GitHub repository. Specializing in Dynamic Programming, Graph State Space BFS, Game Theory Minimax, and Monotonic Stacks.

---

## 5. Verified Professional Certifications

1. **Machine Learning Course Completion** — *Persevex* (ISO 9001 Certified; Issued: August 11, 2026). Corroborates ML engineering internship work.
2. **Python Programming Professional Certification** — *Itronix Solutions* (ISO 9001:2015; Issued: August 20, 2025; Credential ID: `IS/PY/23/173`).
3. **Certificate in MS Office** — *All India Council for Professional Excellence (AICPE)* (Issued: November 1, 2021; Credential ID: `21Q68110335277774`; Grade A 75%; Jijau Computers & Classes, Nashik).

---

## 6. Local Setup & Development

### Prerequisites
- **Node.js**: v18.x or higher (tested on Node v24.17.0)
- **npm**: v9.x or higher (tested on npm 11.13.0)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/adarshh025/portfolio.git
cd portfolio
npm install
```

### 2. Launch Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Compiles TypeScript and outputs the production bundle to `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 7. Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Visit [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

> **Note on Client-Side Routing**: For client-side routing on Vercel, a `vercel.json` rewrite is preconfigured:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploy to Netlify
1. Connect your repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a `_redirects` file in `public/` containing: `/* /index.html 200`.

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "/portfolio/"` to `vite.config.ts`.
3. Add deploy script to `package.json`: `"deploy": "gh-pages -d dist"`.
4. Run `npm run deploy`.

---

## 8. Project Structure

```
portfolio/
├── dist/                      # Production build output
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Responsive navbar with active state & mobile drawer
│   │   │   ├── Footer.tsx     # Footer with site map and evidence notice
│   │   │   └── ScrollToTop.tsx# Auto scroll reset on route changes
│   │   └── ui/
│   │       ├── ArchitectureDiagram.tsx # Modular visual pipeline diagram
│   │       ├── Badge.tsx      # Semantic status and tag pills
│   │       ├── Icons.tsx      # Custom SVG brand icons (GitHub, LinkedIn, LeetCode)
│   │       └── MetricCard.tsx # Verified telemetry metric cards
│   ├── data/
│   │   ├── profileData.ts     # Personal info, roles, bio, and social links
│   │   ├── projectsData.ts    # Complete specs for all 7 audited projects
│   │   ├── experienceData.ts  # Timeline entries (Persevex, SIH 2026, Education)
│   │   ├── skillsData.ts      # Grouped competencies with repository proof
│   │   ├── leetcodeData.ts    # Verified live stats and curated solutions
│   │   ├── securityData.ts    # Cybersecurity pillars and ethical mandate
│   │   └── certificationsData.ts # Credentials store for user certificates
│   ├── pages/
│   │   ├── HomePage.tsx       # Hero, metrics, featured projects, pillars
│   │   ├── AboutPage.tsx      # Detailed background and engineering principles
│   │   ├── ProjectsPage.tsx   # Searchable and filterable project catalog
│   │   ├── ProjectCaseStudyPage.tsx # Deep-dive case study template
│   │   ├── ExperiencePage.tsx # Chronological career and education timeline
│   │   ├── SkillsPage.tsx     # Grouped technical competencies (no fake bars)
│   │   ├── CybersecurityPage.tsx # Security engineering specialization hub
│   │   ├── LeetCodePage.tsx   # DSA practice, difficulty bar, solutions table
│   │   ├── CertificationsPage.tsx # Certification registry and intake guide
│   │   ├── ResumePage.tsx     # Web view + print-ready ATS resume
│   │   ├── ContactPage.tsx    # Connection hub, copyable email, message form
│   │   └── NotFoundPage.tsx   # Clean 404 handler
│   ├── types/
│   │   └── index.ts           # Strongly-typed data contracts
│   ├── App.tsx                # Master route configuration
│   ├── index.css              # Tailwind v4, custom grid, scrollbar & print CSS
│   └── main.tsx               # React DOM root mounting
├── index.html                 # SEO metadata, Open Graph tags, Google fonts
├── package.json               # Pinned dependencies and build scripts
├── tsconfig.json              # TypeScript root configuration
├── tsconfig.app.json          # TypeScript frontend configuration
├── vite.config.ts             # Vite configuration with Tailwind plugin
└── README.md                  # Comprehensive documentation
```

---

## 9. Content Editing Instructions

All content is decoupled from UI presentation. To update your portfolio:

1. **Add a New Project**: Add a new object to `projectsData` in `src/data/projectsData.ts`. It will immediately appear in the Projects directory, Home page (if `featured: true`), and become accessible at `/projects/[slug]`.
2. **Add Verified Certificates**: As certificates are issued, add them to `certificationsData` in `src/data/certificationsData.ts`.
3. **Update Work Experience**: Add or modify entries in `src/data/experienceData.ts`. Both `/experience` and the printable `/resume` will reflect the changes instantly.
4. **Update LeetCode Stats**: Update problem counts in `src/data/leetcodeData.ts`.

---

## 10. Verification & Audit Report

- **7 Repositories Audited**: Source trees, READMEs, requirements, and test suites analyzed. Zero hallucinations.
- **LeetCode Stats Verified**: Official LeetCode GraphQL API confirmed 102 solved problems (43 Easy, 32 Medium, 27 Hard) with 163 total submissions and 89 repository solve files.
- **3 Verified Certificates Integrated**: Machine Learning (Persevex), Python Programming (Itronix Solutions), and MS Office (AICPE).
- **Zero Fabrications**: Metrics, user counts, and job titles have not been exaggerated or invented.
- **Production Build Passed**: `npm run build` compiles with 0 errors, outputting a lightweight, tree-shaken static bundle.

---

## 11. License & Author

**Author**: [Adarsh Aher](https://github.com/adarshh025)  
**License**: MIT License. Copyright (c) 2026 Adarsh Aher.
