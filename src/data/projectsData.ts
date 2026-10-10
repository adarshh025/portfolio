import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    slug: 'vernacular',
    name: 'Vernacular',
    tagline: 'Interpreted, Dynamically Typed, Actor-First Programming Language Built Around Message-Driven Structure',
    category: 'Language Design & Systems',
    githubUrl: 'https://github.com/adarshh025',
    featured: true,
    status: 'In Final Testing (Pre-release)',
    year: '2025 – Present',
    shortDescription: 'An interpreted, dynamically typed, actor-first programming language designed to explore message-driven concurrency and isolated state encapsulation instead of conventional function-first architectures.',
    detailedDescription: 'Vernacular is a custom-designed programming language developed over nearly a year of intensive language design, parsing, runtime behavior, and evaluation experiments. Rather than adhering to the conventional function-first model where concurrency requires complex mutex locks and shared mutable state, Vernacular treats autonomous actors and asynchronous message passing as foundational first-class primitives. Code is expressed through actor definitions, message dispatch, and mailbox processing, creating a cleaner, more expressive paradigm for concurrent systems.',
    problem: 'Traditional programming languages predominantly follow a function-first approach. When building concurrent or distributed workflows, shared mutable state between threads introduces race conditions, deadlocks, and severe cognitive overhead. Developers are forced to rely on external synchronization primitives (mutexes, locks) or complex async/await state machines, obscuring core domain logic.',
    solution: 'Designed and implemented Vernacular from the ground up: a custom lexical scanner, recursive descent Abstract Syntax Tree (AST) parser, dynamic type system, and an actor-first interpreter runtime. In Vernacular, each actor encapsulates its own private state and processes incoming messages sequentially from an isolated mailbox queue, eliminating race conditions by construction while preserving dynamic flexibility.',
    technologies: [
      'Language Design',
      'Compiler Architecture',
      'Lexing & Tokenization',
      'Recursive Descent Parsing',
      'Abstract Syntax Trees (AST)',
      'Actor Model Concurrency',
      'Message-Passing Mailboxes',
      'Tree-Walk Evaluation',
      'Dynamic Typing',
      'Automated Test Suites'
    ],
    keyFeatures: [
      'Actor-First Paradigm: Actors and message mailboxes are foundational language primitives, not library add-ons',
      'Dynamic Typing & Evaluation: Flexible runtime type evaluation with structural message pattern matching',
      'Isolated State Encapsulation: Actors execute in private memory boundaries with zero shared mutable references',
      'Recursive Descent AST Parser: Clean, precedence-climbing grammar parsing actor definitions, behaviors, and expressions',
      'Sequential Mailbox Processing: Guaranteed message queue sequencing eliminating thread race conditions',
      'Interactive REPL & Script Evaluator: Modular CLI runtime for interactive exploration and file execution'
    ],
    architecture: {
      title: 'Vernacular Language Parsing & Actor Runtime Pipeline',
      flowSteps: [
        {
          number: 1,
          title: 'Lexical Tokenization',
          description: 'Scans raw Vernacular source code into a structured token stream with line and column source location tracking for rich diagnostics.',
          moduleOrFile: 'core/lexer: LexicalScanner',
          technology: 'Deterministic Finite Automaton / Tokenizer'
        },
        {
          number: 2,
          title: 'Recursive Descent AST Parsing',
          description: 'Parses tokens into an Abstract Syntax Tree (AST) validating grammar rules, actor signatures, message handler blocks, and expressions.',
          moduleOrFile: 'core/parser: ASTParser',
          technology: 'Precedence-Climbing Recursive Descent'
        },
        {
          number: 3,
          title: 'Environment & Scope Resolution',
          description: 'Constructs hierarchical lexical scopes and symbol bindings for actor instances, local variables, and message payloads.',
          moduleOrFile: 'runtime/environment: ScopeManager',
          technology: 'Lexical Scope Table'
        },
        {
          number: 4,
          title: 'Actor Instance & Mailbox Provisioning',
          description: 'Instantiates isolated actor environments, each equipped with a private FIFO message mailbox and independent lifecycle state.',
          moduleOrFile: 'runtime/actor: ActorInstance',
          technology: 'Actor Concurrency Model'
        },
        {
          number: 5,
          title: 'Message Dispatch & Scheduling Loop',
          description: 'Dispatches asynchronous messages between actors, queuing them in recipient mailboxes and scheduling execution without thread blocking.',
          moduleOrFile: 'runtime/dispatcher: MessageDispatcher',
          technology: 'Event-Loop / Mailbox Queue'
        },
        {
          number: 6,
          title: 'Runtime AST Evaluation & State Mutation',
          description: 'Evaluates expressions, pattern matches incoming messages against actor behaviors, and safely mutates private actor state.',
          moduleOrFile: 'runtime/evaluator: InterpreterEngine',
          technology: 'Tree-Walk Evaluation'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Actor-First Concurrency Primitives over Function-First Threading',
        rationale: 'In distributed and concurrent systems, shared memory creates intractable synchronization bugs. By making actors the primary building block, Vernacular forces message passing as the only mechanism of interaction, preventing data races by architectural design.',
        alternativeConsidered: 'Shared-memory threading with mutex locks or standard async/await coroutines'
      },
      {
        decision: 'Tree-Walk Interpreter for Initial Implementation',
        rationale: 'Prioritized rapid semantic iteration and rich runtime diagnostics during language design phase. A tree-walk interpreter enables immediate experimentation with actor behaviors and mailbox semantics before committing to bytecode VM optimization.',
        alternativeConsidered: 'Bytecode virtual machine (stack-based or register-based) or LLVM IR compilation'
      },
      {
        decision: 'Dynamic Typing with Message Pattern Matching',
        rationale: 'Dynamic typing allows highly flexible and expressive message passing, enabling actors to handle varied payload structures without rigid compile-time interface boilerplate.',
        alternativeConsidered: 'Strict static type system with generic trait boundaries'
      }
    ],
    testingAndQuality: {
      testCount: 48,
      coverage: 'Comprehensive Runtime Behavioral Validation',
      frameworks: ['Custom Test Harness', 'AST Node Invariant Assertions', 'Mailbox Concurrency Tests'],
      verifiedSuite: [
        'Lexer tokenization of keyword delimiters, operators, and string literals with accurate source offsets',
        'Parser AST construction across nested actor definitions, receive blocks, and message dispatch',
        'Actor mailbox FIFO ordering verification under rapid burst message dispatching',
        'Dynamic type evaluation, expression precedence, and runtime error boundary traps'
      ]
    },
    limitations: [
      'Currently in final testing phase and pre-release benchmarking prior to public open-source unveiling',
      'Tree-walk interpreter design has higher runtime overhead compared to JIT or native compilation targets',
      'Standard library currently focused on core actor lifecycle and primitives; ecosystem tooling in progress'
    ],
    engineeringHighlights: [
      'Over 10 months of independent language engineering from grammar design to working interpreter',
      'Complete elimination of shared-state race conditions through actor-first mailbox architecture',
      'Modular decoupled architecture separating lexing, AST construction, environment bindings, and runtime evaluation'
    ]
  },
  {
    slug: 'invoiceiq',
    name: 'InvoiceIQ',
    tagline: 'End-to-End Invoice Processing, OCR Digitization & Financial Anomaly Detection Pipeline',
    category: 'Machine Learning',
    githubUrl: 'https://github.com/adarshh025/InvoiceIQ',
    featured: true,
    status: 'Production-Style',
    year: '2026',
    shortDescription: 'Production-style document intelligence pipeline combining OpenCV image preprocessing, Tesseract OCR, regex entity parsing, rule-based mathematical validation, and Isolation Forest anomaly detection served through a Streamlit UI.',
    detailedDescription: 'InvoiceIQ is an automated document intelligence system built to ingest raw invoice scans (images and PDFs), enhance image legibility, execute OCR extraction, validate business and mathematical consistency, and detect fraudulent or abnormal billing patterns using statistical Z-scores and unsupervised Isolation Forests.',
    problem: 'Manual corporate invoice verification is error-prone, slow, and susceptible to undetected billing discrepancies such as inflated line-item sums, future-dated billing fraud, and duplicate submissions across vendor accounts.',
    solution: 'Engineered a modular multi-stage pipeline: deterministic SHA-256 deduplication at file ingestion -> OpenCV preprocessing (bilateral filtering, Otsu binarization, affine deskewing) -> PyTesseract text extraction with spatial bounding boxes -> regex information parsing into structured Pandas DataFrames -> Decimal-precision rule validation -> Statistical vendor-wise Z-score profiling -> Scikit-learn Isolation Forest multi-dimensional outlier detection -> Difflib fuzzy duplicate matching -> Multi-view Streamlit dashboard.',
    technologies: [
      'Python 3.11',
      'OpenCV',
      'Tesseract OCR (v5)',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Streamlit',
      'Altair',
      'Pytest'
    ],
    keyFeatures: [
      'Deterministic File Ingestion: SHA-256 hash calculation for zero-redundancy document indexing',
      'OpenCV Preprocessing Engine: Automated deskewing, noise filtering, and adaptive contrast optimization',
      'Entity Extraction: Structured parsing of Invoice ID, Vendor, Date, Currency, Totals, and tabular line items',
      'Dual-Layer Anomaly Detection: Statistical vendor-wise Z-scores combined with unsupervised Isolation Forest',
      'Fuzzy Duplicate Identifier: SequenceMatcher token comparison to detect re-billed and corrupted submissions',
      'Interactive Streamlit Dashboard: Single-invoice inspector, batch directory processing, and health telemetry'
    ],
    architecture: {
      title: 'Invoice Intelligence & Fraud Detection Pipeline',
      flowSteps: [
        {
          number: 1,
          title: 'Input Ingestion & Deduplication',
          description: 'Validates file extensions (PNG, JPG, PDF) and generates deterministic SHA-256 hashes to prevent redundant processing.',
          moduleOrFile: 'src/dataset.py: validate_invoice_file',
          technology: 'hashlib / pathlib'
        },
        {
          number: 2,
          title: 'Computer Vision Preprocessing',
          description: 'Applies grayscale conversion, bilateral denoising, Otsu threshold binarization, and contour-based skew correction.',
          moduleOrFile: 'src/preprocessing.py: ImagePreprocessor',
          technology: 'OpenCV / NumPy'
        },
        {
          number: 3,
          title: 'OCR Digitization',
          description: 'Extracts raw character text streams, spatial bounding boxes, and per-token confidence scores from enhanced imagery.',
          moduleOrFile: 'src/ocr_engine.py: TesseractOCREngine',
          technology: 'PyTesseract (Tesseract v5)'
        },
        {
          number: 4,
          title: 'Entity Parsing & Structuring',
          description: 'Parses business entities and tabular line items into relational 1-row-per-invoice records with Decimal precision.',
          moduleOrFile: 'src/parser.py: InvoiceParser',
          technology: 'Python regex / Pandas'
        },
        {
          number: 5,
          title: 'Mathematical & Temporal Validation',
          description: 'Enforces business rules: Quantity × Unit Price = Line Total, sum(Line Totals) = Grand Total, and age threshold constraints.',
          moduleOrFile: 'src/validator.py: InvoiceValidator',
          technology: 'Python decimal / datetime'
        },
        {
          number: 6,
          title: 'Statistical & ML Anomaly Detection',
          description: 'Flags vendor-relative outliers using Z-score deviations and fits an Isolation Forest model to detect subtle multi-feature anomalies.',
          moduleOrFile: 'src/anomaly_detector.py: AnomalyDetector',
          technology: 'Scikit-learn / NumPy'
        },
        {
          number: 7,
          title: 'Web Visualization & Reporting',
          description: 'Provides real-time interactive inspection, batch processing tables, and 8 generated diagnostic metric plots.',
          moduleOrFile: 'app/app.py & components/',
          technology: 'Streamlit / Altair / Matplotlib'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Decimal Arithmetic Over Floating Point for Financial Validation',
        rationale: 'Floating-point rounding errors (e.g., 0.1 + 0.2 != 0.3) would trigger false-positive math validation failures on financial records. Using Python Decimal guarantees exact precision for currency calculations.',
        alternativeConsidered: 'Standard IEEE-754 Python float types'
      },
      {
        decision: 'Ensemble of Statistical Z-Score and Isolation Forest',
        rationale: 'Z-scores reliably detect clear univariate volume/price spikes relative to a vendor baseline, while Isolation Forest identifies subtle non-linear multi-dimensional anomalies that rule-based systems miss.',
        alternativeConsidered: 'Pure threshold-based rule engine'
      },
      {
        decision: 'Decoupled UI Layer from Pipeline Core',
        rationale: 'All core logic resides strictly in src/ and is importable as a headless CLI or library, making it completely independent of Streamlit.',
        alternativeConsidered: 'Embedding extraction logic directly into Streamlit view components'
      }
    ],
    methodology: {
      title: 'Machine Learning & Computer Vision Workflow',
      pipeline: [
        'Grayscale Conversion & Bilateral Filtering',
        'Otsu Adaptive Binarization & Affine Deskewing',
        'Tesseract Spatial Token Bounding Box Extraction',
        'Multi-Pattern Regular Expression Entity Extraction',
        'Vendor-wise Baseline Mean & Standard Deviation Calculation',
        'Isolation Forest Hyperplane Partitioning on Normalized Metrics'
      ],
      details: 'Tesseract OCR runs on preprocessed clean bitmaps. The tabular line-item extractor uses spatial line clustering to associate item descriptions with numerical quantities and totals. For anomaly scoring, the Isolation Forest is trained with a fixed random seed on numerical vectors (total amount, item count, average line-item value, variance) to isolate anomalous points near the tree roots.'
    },
    testingAndQuality: {
      testCount: 71,
      coverage: '82%+ overall (91%+ backend modules)',
      frameworks: ['Pytest', 'Pytest-Cov'],
      verifiedSuite: [
        'test_anomaly_detector.py: Z-score boundaries and Isolation Forest reproducibility',
        'test_validator.py: Mathematical integrity, date logic, and missing field handlers',
        'test_preprocessing.py: Image rotation recovery and binarization filters',
        'test_duplicate_detector.py: Exact hash matches and fuzzy token permutations',
        'test_pipeline.py: End-to-end batch processing on synthetic invoice fixtures'
      ]
    },
    limitations: [
      'Requires a local installation of the Tesseract OCR v5 system binary (not bundled purely in wheel).',
      'Heavily degraded physical scans with coffee stains or severe tears may degrade character extraction confidence below 50%.',
      'Table parser relies on left-to-right reading conventions; multi-column Japanese/Arabic vertical formats are currently unsupported.'
    ],
    engineeringHighlights: [
      '71 automated unit and integration tests verifying all pipeline stages',
      'Vendor-wise Z-score profiling preventing cross-vendor variance skew',
      'Interactive Streamlit web app with dedicated single, batch, and system health views'
    ]
  },
  {
    slug: 'securiscan-ai',
    name: 'SecuriScan-AI',
    tagline: 'Defensive Web Security Vulnerability Assessment & Posture Remediation Platform',
    category: 'Cybersecurity',
    githubUrl: 'https://github.com/adarshh025/SecuriScan-AI',
    featured: true,
    status: 'Production-Style',
    year: '2026',
    shortDescription: 'AI-assisted defensive web security scanner and posture scoring platform featuring non-destructive modular scanners, multi-perspective remediation guidance, and an interactive React 19 + FastAPI dashboard.',
    detailedDescription: 'SecuriScan-AI is a safe, defensive security auditing platform designed for single-target web application assessments. It audits HTTP headers, TLS/SSL configurations, cookie flags, CORS policies, authentication protections, and passive injection indicators, translating telemetry into actionable remediation code and executive security scorecards.',
    problem: 'Destructive penetration testing tools risk crashing production services or triggering network security alarms. Web developers and small teams need an automated, safe defensive auditor that identifies posture deficiencies and provides ready-to-use configuration fixes.',
    solution: 'Built a non-destructive audit engine powered by FastAPI with modular scanner modules (CSP, HSTS, TLS certificates, Cookie attributes, CORS reflection, SSRF protection, framework fingerprinting, CSRF/XSS DOM sinks). Features multi-persona AI explanation modes (Beginner, Developer copy-paste fixes for Nginx/Apache/Express/Django/Next.js/Cloudflare, Security Pro with OWASP Top 10 and CWE mappings), weighted 0-100 scoring, a "Fix First" priority queue, comparison diffs between scans, and a built-in safe security lab.',
    technologies: [
      'Python 3.10+',
      'FastAPI',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'HTTPX',
      'BeautifulSoup4',
      'Cryptography',
      'Pydantic',
      'ReportLab (PDF)',
      'SQLite (aiosqlite)'
    ],
    keyFeatures: [
      'Modular Non-Destructive Scanners: Dedicated analyzers for CSP, HSTS, TLS certificates, Cookies, CORS, and DOM sinks',
      'Multi-Perspective AI Remediation: Toggles between Beginner analogies, Developer copy-paste snippets, and Security Pro mappings',
      'Weighted 0–100 Security Scoring: Computes risk grades (A+ through F) based on severity, confidence, and defense-in-depth',
      '"Fix First" Action Queue: Automatically prioritizes high-impact configuration deficiencies for developer remediation',
      'Scan Comparison Engine: Diff viewer comparing past vs current audit runs to track score improvement deltas',
      'Built-in Safe Security Lab: Preloaded mock targets (Apex Global Bank, AlphaStore API, CyberVault) for offline testing'
    ],
    architecture: {
      title: 'Decoupled Defensive Security Audit Architecture',
      flowSteps: [
        {
          number: 1,
          title: 'Target Validation & SSRF Guard',
          description: 'Validates target URLs and resolves DNS records against private, reserved, and loopback IP subnets to strictly prevent Server-Side Request Forgery.',
          moduleOrFile: 'backend/utils/ssrf.py: validate_and_normalize_target',
          technology: 'Python ipaddress / socket'
        },
        {
          number: 2,
          title: 'Concurrent Modular Scanners',
          description: 'Executes parallel asynchronous HTTP probes auditing security headers, TLS handshakes, cookie attributes, and passive HTML DOM sinks.',
          moduleOrFile: 'backend/scanners/*.py',
          technology: 'HTTPX Async / BeautifulSoup4'
        },
        {
          number: 3,
          title: 'Posture Scoring & AI Remediation Engine',
          description: 'Weights detected deficiencies, maps CWE and OWASP Top 10 identifiers, and synthesizes ready-to-paste server configs.',
          moduleOrFile: 'backend/analyzer/ai_engine.py',
          technology: 'Pydantic / Custom scoring engine'
        },
        {
          number: 4,
          title: 'Persistence & Historical Deltas',
          description: 'Stores historical audit results in SQLite, enabling longitudinal posture comparison and regression tracking.',
          moduleOrFile: 'backend/database/db.py',
          technology: 'aiosqlite'
        },
        {
          number: 5,
          title: 'Interactive Frontend & Multi-Format Reporting',
          description: 'Renders real-time telemetry, visual gauges, priority queues, and generates downloadable Executive PDFs and machine-readable JSON.',
          moduleOrFile: 'frontend/src/App.tsx & backend/reports/',
          technology: 'React 19 / TypeScript / ReportLab'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Strict Non-Destructive Passive Probing',
        rationale: 'Active fuzzing or payload injection can corrupt databases or trigger cloud firewall bans. By relying on passive HTTP inspection, the tool safely evaluates applications without downtime risk.',
        alternativeConsidered: 'Active vulnerability fuzzing engine (e.g., Nikto/SQLMap style)'
      },
      {
        decision: 'Built-in Server-Side SSRF Firewall',
        rationale: 'Security tools that accept arbitrary URLs are themselves vulnerable to SSRF. Implementing DNS resolution validation before any HTTP request guarantees the scanner cannot be used to probe internal VPC subnets.',
        alternativeConsidered: 'Unfiltered user target submission'
      },
      {
        decision: 'Multi-Perspective Remediation Generator',
        rationale: 'Different stakeholders need different data: junior developers need Nginx/Express config blocks, executives need letter grades, and compliance officers require OWASP/CWE references.',
        alternativeConsidered: 'Generic single-paragraph vulnerability descriptions'
      }
    ],
    securityDetails: {
      focus: 'Defensive Security Auditing & Safe Scanner Design',
      safeguards: [
        'SSRF protection blocking 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.0/8, and 169.254.169.254',
        'Zero shell subprocess execution on user strings, mitigating command injection entirely',
        'Sensitive token masking to prevent credentials from persisting in output logs',
        'Explicit ethical authorization confirmation gate before scan dispatch'
      ],
      limitations: [
        'Does not perform active, destructive payload injection (SQLi exploitation, brute forcing)',
        'Cannot scan pages behind complex multi-factor authentication or reCAPTCHA challenges'
      ]
    },
    testingAndQuality: {
      testCount: 18,
      coverage: 'Automated Pytest suite across all scanners and SSRF edge cases',
      frameworks: ['Pytest', 'Asyncio'],
      verifiedSuite: [
        'test_scanners.py: Validates header detection, cookie flag parsing, and CORS origin reflection',
        'test_hardened.py: Validates scoring on perfectly configured targets',
        'test_e2e_pipeline.py: Validates end-to-end FastAPI endpoint orchestration'
      ]
    },
    limitations: [
      'Focuses strictly on passive defensive evaluation; does not find deep business-logic authorization bugs.',
      'Single-target scope: designed for individual domains/APIs rather than broad asynchronous network subnet sweeps.'
    ],
    engineeringHighlights: [
      'Decoupled architecture: Python FastAPI backend with modern React 19 + TypeScript frontend',
      'Built-in SSRF defense engine preventing internal IP probe abuse',
      'Production-ready PDF, JSON, and CSV export engines'
    ]
  },
  {
    slug: 'smritivan',
    name: 'SMRITIVAN (स्मृतिवन)',
    tagline: 'Cognitive Gaming & Memory Assistance Platform for Dementia Care in Remote Connectivity Regions',
    category: 'Mobile & Distributed Systems',
    githubUrl: 'https://github.com/adarshh025/smritivan',
    featured: true,
    status: 'Hackathon Solution',
    year: '2026',
    shortDescription: 'Smart India Hackathon (SIH 2026, PS 26003) cognitive gaming mobile platform for elderly dementia patients in North Eastern India, built with Flutter, Riverpod, Drift (SQLite), and a CRDT-synchronized FastAPI backend.',
    detailedDescription: 'SMRITIVAN is a calm digital "memory garden" engineered for elderly dementia patients in geographically isolated and connectivity-constrained regions of North Eastern India. Operating 100% offline-first, it incorporates culturally rooted games, Dynamic Difficulty Adjustment, and a Conflict-Free Replicated Data Type (CRDT) sync queue to transmit clinical telemetry to caregivers and healthcare workers when connectivity restores.',
    problem: 'Elderly dementia patients in remote North Eastern regions suffer from severe healthcare isolation and unreliable cellular connectivity. Clinical assessment tests in unfamiliar languages induce anxiety, while existing digital health tools fail completely without continuous internet connectivity.',
    solution: 'Engineered an offline-first mobile application featuring culturally personalized cognitive games (Muga Silk Visual Memory, Bihu Auditory Focus), on-device Dynamic Difficulty Adjustment (DDA) to avoid patient frustration, Cognitive Vitality Score (CVS) tracking, deep localization (Assamese, Meitei, Khasi, Bodo, Hindi, English), and a CRDT Hybrid Logical Clock (HLC) background sync queue connecting to a FastAPI + PostgreSQL backend.',
    technologies: [
      'Flutter',
      'Dart',
      'Riverpod',
      'Drift (SQLite)',
      'Python 3.11',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy',
      'AsyncPG',
      'Docker Compose'
    ],
    keyFeatures: [
      '100% Offline-First Architecture: Full gameplay, scoring, and telemetry operate locally via Drift SQLite',
      'CRDT Hybrid Logical Clock Synchronization: Conflict-free queue that resolves offline data divergences upon reconnect',
      'Culturally Personalized Cognitive Games: Regional visual and auditory challenges tailored for North Eastern India',
      'On-Device Dynamic Difficulty Adjustment: Real-time difficulty calibration based on reaction times and mistake counts',
      'Non-Alarmist Cognitive Vitality Score (CVS): Longitudinal wellness indexing without alarming clinical jargon',
      'Deep Multi-Language Localization: Native support for Assamese, Meitei, Khasi, Bodo, Hindi, and English',
      'Caregiver & Health Worker Dashboard: PIN-protected portal for tracking cognitive trends and alerts'
    ],
    architecture: {
      title: 'Offline-First Edge to Cloud CRDT Architecture',
      flowSteps: [
        {
          number: 1,
          title: 'Patient Interaction & Gameplay',
          description: 'Patient interacts with high-contrast, accessible Flutter mobile UI playing culturally familiar cognitive memory games.',
          moduleOrFile: 'mobile/lib/',
          technology: 'Flutter / Dart / Riverpod'
        },
        {
          number: 2,
          title: 'Local Dynamic Difficulty Adjustment',
          description: 'Calculates response latencies and error rates on-device to modulate puzzle complexity smoothly in real-time.',
          moduleOrFile: 'mobile/lib/logic/dda_engine.dart',
          technology: 'On-Device Adaptive Logic'
        },
        {
          number: 3,
          title: 'Local Edge Persistence',
          description: 'Writes all game session logs, CVS metrics, and caregiver notes to a local SQLite database using Drift ORM.',
          moduleOrFile: 'mobile/lib/data/local_db.dart',
          technology: 'Drift / SQLite'
        },
        {
          number: 4,
          title: 'CRDT Hybrid Logical Clock Delta Queue',
          description: 'Enqueues state updates tagged with physical and logical counter timestamps (HLC) to guarantee strict causal ordering.',
          moduleOrFile: 'backend/app/services/crdt_resolver.py',
          technology: 'CRDT HLC Clock'
        },
        {
          number: 5,
          title: 'Background Sync & Cloud Persistence',
          description: 'When connectivity is detected, drains the sync queue to the FastAPI backend, resolving merge conflicts automatically.',
          moduleOrFile: 'backend/app/api/v1/sync_routes.py',
          technology: 'FastAPI / AsyncPG / PostgreSQL'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Hybrid Logical Clock (HLC) for Conflict Resolution',
        rationale: 'Mobile devices in remote rural areas frequently have inaccurate system clocks. HLC combines physical time with logical monotonic counters, ensuring reliable causality ordering without requiring NTP server synchronization.',
        alternativeConsidered: 'Standard Last-Write-Wins based purely on device system timestamps'
      },
      {
        decision: 'Drift SQLite for Zero-Latency Edge Operations',
        rationale: 'Dementia patients experience disorientation from loading spinners or lag. Storing state locally in SQLite guarantees 60fps performance irrespective of 2G/3G/offline status.',
        alternativeConsidered: 'Cloud-first REST architecture with local caching'
      },
      {
        decision: 'Cultural Localization Over Generic Western Tests',
        rationale: 'Using culturally familiar artifacts (Muga Silk patterns, Bihu instruments) significantly lowers anxiety in elderly patients compared to clinical Western psychometric puzzles.',
        alternativeConsidered: 'Direct translation of standard Western cognitive testing apps'
      }
    ],
    testingAndQuality: {
      testCount: 16,
      coverage: 'Comprehensive unit tests across mobile scoring and backend sync',
      frameworks: ['Flutter Test', 'Pytest-Asyncio'],
      verifiedSuite: [
        'test_crdt_sync.py: Verifies HLC clock generation, ordering, and multi-node collision handling',
        'game_logic_scoring_test.dart: Verifies CVS metric computation across variable reaction times',
        'critical_recovery_persistence_test.dart: Validates SQLite state persistence across app lifecycle interruptions',
        'ner_localization_and_tts_test.dart: Tests localization strings across regional languages'
      ]
    },
    limitations: [
      'Requires initial onboarding with caregiver assistance to set up regional profile and PIN.',
      'Voice interaction features depend on local device TTS availability or cloud Bhashini API when connected.'
    ],
    engineeringHighlights: [
      'Built for Smart India Hackathon (SIH 2026) Problem Statement 26003',
      'Developed by team "laccha paratha" with Adarsh Aher leading backend architecture & synchronization',
      'Custom CRDT Hybrid Logical Clock conflict resolution engine for offline-to-online data convergence'
    ]
  },
  {
    slug: 'resumind',
    name: 'Resumind',
    tagline: 'Offline Resume Parsing & Structured Information Extraction Library',
    category: 'NLP & Document AI',
    githubUrl: 'https://github.com/adarshh025/resumind',
    featured: true,
    status: 'Educational / Open-Source',
    year: '2026',
    shortDescription: 'Offline-first resume parsing and information extraction engine using pdfminer.six, python-docx, heuristic section boundary detection, and spaCy NER for structured candidate profiling into Pydantic models.',
    detailedDescription: 'Resumind is a Python library and FastAPI service engineered to ingest PDF and DOCX resume files, strip layout artifacts, heuristically segment resume sections (Experience, Education, Skills, Projects, Summary), and extract candidate entities (contact info, name, organizations, dates, and canonicalized skills) into validated Pydantic schemas.',
    problem: 'Resumes exhibit vast variability in visual structure, styling, and formatting conventions. Most automated ingestion systems rely on expensive, non-private cloud LLM APIs, creating privacy liabilities and high operating costs.',
    solution: 'Built a local, offline extraction pipeline: Ingestion via pdfminer.six and python-docx -> Unicode normalization & control character cleaning -> Boundary detection for section segmentation -> Hybrid regex and spaCy (en_core_web_sm) NER extraction -> Skill canonicalization against a defined ontology -> Strict Pydantic model validation -> FastAPI REST endpoints.',
    technologies: [
      'Python 3.11',
      'spaCy (en_core_web_sm)',
      'pdfminer.six',
      'python-docx',
      'Pydantic',
      'FastAPI',
      'Uvicorn',
      'Pytest'
    ],
    keyFeatures: [
      'Dual-Format Ingestion: Supports both .pdf and .docx resume documents',
      'Rule-Based Section Segmentation: Detects boundaries for Experience, Education, Skills, and Projects',
      'Hybrid Entity Extractor: Combines high-precision regex for contact data with spaCy NER for names & organizations',
      'Skill Canonicalization Ontology: Maps raw string matches to standard professional skill taxonomies',
      'Pydantic Data Contracts: Strict typing and validation for serializable candidate JSON output',
      '100% Offline Operation: Zero external API calls, ensuring complete data privacy for candidate PII'
    ],
    architecture: {
      title: 'Local Resume NLP & Entity Extraction Pipeline',
      flowSteps: [
        {
          number: 1,
          title: 'Document Ingestion',
          description: 'Extracts raw character text streams from PDF files via pdfminer.six layout trees or python-docx paragraph objects.',
          moduleOrFile: 'src/resumind/ingestion/',
          technology: 'pdfminer.six / python-docx'
        },
        {
          number: 2,
          title: 'Text Preprocessing & Normalization',
          description: 'Cleans non-standard whitespace, strips non-printable control characters, and normalizes Unicode formatting.',
          moduleOrFile: 'src/resumind/preprocessing.py',
          technology: 'Python re / unicodedata'
        },
        {
          number: 3,
          title: 'Section Boundary Segmentation',
          description: 'Heuristically segments document into logical blocks: Work Experience, Education, Technical Skills, Projects, and Summary.',
          moduleOrFile: 'src/resumind/segmentation.py',
          technology: 'Regex heuristic boundary matcher'
        },
        {
          number: 4,
          title: 'Hybrid Entity Extraction & NER',
          description: 'Executes regex for emails and phone numbers, and leverages spaCy en_core_web_sm for candidate name and organization extraction.',
          moduleOrFile: 'src/resumind/extraction/',
          technology: 'spaCy / Regular expressions'
        },
        {
          number: 5,
          title: 'Ontology Mapping & Pydantic Assembly',
          description: 'Maps identified skills against a normalized skill taxonomy and validates output into strongly-typed Pydantic schemas.',
          moduleOrFile: 'src/resumind/assembly.py',
          technology: 'Pydantic v2'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Hybrid Regex + Lightweight spaCy Over Heavy Cloud LLMs',
        rationale: 'Processing resumes locally ensures candidate PII never leaves the host infrastructure. A fine-tuned regex and spaCy pipeline executes in under 200ms per resume with zero cloud API token costs.',
        alternativeConsidered: 'OpenAI GPT-4 / Claude API parsing endpoints'
      },
      {
        decision: 'Strict Pydantic Schema Output',
        rationale: 'Recruiting workflows require reliable data types (lists of dates, validated email formats). Pydantic guarantees downstream services receive schema-compliant JSON or explicit error warnings.',
        alternativeConsidered: 'Unvalidated Python dictionary return types'
      }
    ],
    testingAndQuality: {
      testCount: 22,
      coverage: 'Automated Pytest suite with adversarial input testing',
      frameworks: ['Pytest'],
      verifiedSuite: [
        'test_adversarial.py: Ingestion of corrupted bytes, empty files, and maliciously formatted text',
        'test_contact.py: Extraction accuracy for international phone numbers and obfuscated email formats',
        'test_segmentation.py: Boundary classification across diverse heading styles',
        'test_ner.py: Name and entity extraction precision on synthetic candidate samples'
      ]
    },
    limitations: [
      'Text-only PDF support: Does not perform OCR on scanned image-only PDFs.',
      'Complex multi-column graphical layouts can occasionally cause fragmented reading orders in pdfminer.six.',
      'Currently optimized exclusively for English-language resumes.'
    ],
    engineeringHighlights: [
      'Comprehensive architectural and testing documentation in docs/',
      'Zero-cloud-dependency architecture for total data privacy',
      'FastAPI REST endpoints enabling simple microservice integration'
    ]
  },
  {
    slug: 'encryption-project',
    name: 'Encryption System',
    tagline: 'Desktop File Encryption & Obfuscation Utility with Modern Java Swing GUI',
    category: 'Cybersecurity',
    githubUrl: 'https://github.com/adarshh025/encryption-project',
    featured: false,
    status: 'Educational / Open-Source',
    year: '2026',
    shortDescription: 'Educational desktop file encryption utility in Java featuring FlatLaf modern Swing GUI, streaming byte-level shift cipher transformations, and interactive digit-sum key derivation.',
    detailedDescription: 'Developed during a Network Security course, this project explores fundamental concepts of cryptography, byte manipulation, and modern Java desktop GUI engineering. It implements buffered streaming byte transformations on .txt and .java files with real-time key preview and instant light/dark themes.',
    problem: 'Cryptographic concepts are frequently taught purely theoretically in academic settings, obscuring how reversible byte transformations, stream buffering, and key spaces operate at the operating system file level.',
    solution: 'Designed an interactive Java Swing desktop application utilizing FlatLaf 3.4 for a modern look-and-feel. Implements drag-and-drop file loading, real-time digit-sum shift key derivation, buffered streaming byte-shift encryption/decryption, and an automated JUnit 5 test suite verifying byte roundtrips.',
    technologies: [
      'Java (JDK 8/17)',
      'FlatLaf 3.4',
      'Java Swing',
      'Apache Maven',
      'JUnit 5 Jupiter'
    ],
    keyFeatures: [
      'Modern FlatLaf GUI: High-DPI scaling, smooth card components, and instant Light/Dark mode toggling',
      'Drag-and-Drop Workflow: Drag target text or Java source files directly into the UI canvas',
      'Real-Time Key Preview: Interactive digit-sum indicator updates dynamically as the user types numeric passwords',
      'Low-Memory Streaming Architecture: Buffered I/O streams process files of any size without out-of-memory errors',
      'Automated Screenshot Harness: Dedicated utility to capture pixel-perfect interface documentation'
    ],
    architecture: {
      title: 'Streaming Byte-Shift Cryptography Architecture',
      flowSteps: [
        {
          number: 1,
          title: 'File Ingestion & Drag-and-Drop',
          description: 'Swing GUI accepts drag-and-drop actions, inspecting file metadata, size, and format extension.',
          moduleOrFile: 'CryptographyFrame.java & FileFilters.java',
          technology: 'Java Swing / FlatLaf'
        },
        {
          number: 2,
          title: 'Key Derivation',
          description: 'Calculates base-10 digit-sum from user-supplied numeric password to produce the byte shift scalar.',
          moduleOrFile: 'KeyDerivation.java',
          technology: 'Modular arithmetic'
        },
        {
          number: 3,
          title: 'Streaming Byte Transformation',
          description: 'Transforms bytes via buffered streams: Encrypt applies (b - shift) mod 256; Decrypt applies (c + shift) mod 256.',
          moduleOrFile: 'ShiftCipherEngine.java',
          technology: 'Java I/O Streams'
        },
        {
          number: 4,
          title: 'Safe Output Persistence',
          description: 'Safely writes transformed file with .enc extension, verifying destination collisions before overwrite.',
          moduleOrFile: 'CryptographyFrame.java',
          technology: 'Java NIO'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Buffered Streaming I/O Over Full-File Memory Buffers',
        rationale: 'Reading entire files into byte arrays leads to OutOfMemory errors on large files. Using BufferedInputStream and BufferedOutputStream processes files in small 8KB chunks with near-constant RAM usage.',
        alternativeConsidered: 'Files.readAllBytes() in-memory processing'
      },
      {
        decision: 'FlatLaf Look-and-Feel for Native Aesthetic',
        rationale: 'Default Java Swing look-and-feel appears outdated and lacks modern high-DPI scaling. FlatLaf delivers clean modern typography, dark theme support, and smooth rounded cards.',
        alternativeConsidered: 'Standard Java Metal / Nimbus look-and-feel'
      }
    ],
    securityDetails: {
      focus: 'Educational Cryptography Mechanics & Limitations',
      safeguards: [
        'Safe file write handlers prompting user confirmation before overwriting existing files',
        'Strict exception handling preventing UI crashes on invalid file paths or read-only files'
      ],
      limitations: [
        'Small Key Space: Byte-level Caesar cipher modulo 256 has only 256 possible shift states, making brute-force trivial in milliseconds.',
        'Frequency Preservation: Additive byte substitution preserves byte frequency patterns of the plaintext.',
        'No Authentication Tag: Does not include an HMAC or AEAD tag, meaning tampered ciphertext decrypts into corrupted garbage without error.'
      ]
    },
    testingAndQuality: {
      testCount: 14,
      coverage: 'JUnit 5 test suite verifying key derivation edge cases and byte roundtrips',
      frameworks: ['JUnit 5 Jupiter'],
      verifiedSuite: [
        'KeyDerivationTest.java: Multi-digit sums, negative inputs, whitespace trimming, and invalid formats',
        'ShiftCipherEngineTest.java: ASCII, UTF-8, binary byte range (0x00 to 0xFF), and large-file streaming integrity'
      ]
    },
    limitations: [
      'Strictly an educational learning tool; NOT intended to protect sensitive, confidential, or production data.',
      'Limited to byte-shift transformations rather than modern AES-256-GCM authenticated ciphers.'
    ],
    engineeringHighlights: [
      'Clean separation between UI layer (CryptographyFrame) and cipher engine (CipherEngine interface)',
      'Automated screenshot capture harness (CaptureScreenshots.java) for reproducible visual documentation',
      'Comprehensive JUnit 5 test suite verifying full 0x00-0xFF byte range integrity'
    ]
  },
  {
    slug: 'handwritten-digit-recognition',
    name: 'Handwritten Digit Recognition',
    tagline: 'PyTorch Convolutional Neural Network with Interactive Canvas Inference App',
    category: 'Computer Vision',
    githubUrl: 'https://github.com/adarshh025/HAND-WRITTEN-DIGIT-RECOGNITION-',
    featured: false,
    status: 'Educational / Open-Source',
    year: '2026',
    shortDescription: 'Interactive handwritten digit classification web application powered by a Convolutional Neural Network (CNN) trained with PyTorch on the MNIST dataset and served via Flask with an interactive drawing canvas.',
    detailedDescription: 'A computer vision project implementing a Convolutional Neural Network in PyTorch to classify handwritten digits (0-9). Features an interactive HTML/CSS/JavaScript canvas interface where users draw digits in real-time for immediate server-side preprocessing and PyTorch model inference.',
    problem: 'Bridging deep learning model training with real-time browser canvas stroke capture, stroke normalization, grayscale downsampling, and sub-second model inference.',
    solution: 'PyTorch CNN architecture trained on 60,000 28x28 grayscale MNIST images, saved model checkpoint (mnist.pt), Flask backend serving image preprocessing (PIL canvas image extraction, inversion, resizing to 28x28, normalization to PyTorch tensor format), and real-time prediction feedback.',
    technologies: [
      'Python',
      'PyTorch (torch, torchvision)',
      'Flask',
      'Pillow (PIL)',
      'NumPy',
      'HTML5 Canvas',
      'JavaScript / jQuery'
    ],
    keyFeatures: [
      'Interactive Drawing Canvas: Smooth HTML5 canvas enabling users to draw digits freehand in browser',
      'PyTorch CNN Architecture: Convolutional, ReLU, MaxPool, and Linear classification layers',
      'Pretrained Weights: Saved PyTorch model checkpoint (mnist.pt) for immediate sub-second inference',
      'Image Normalization Pipeline: Inversion, 28x28 bicubic downsampling, and tensor standardization',
      'Automated Verification: test_app.py script verifying Flask endpoints and inference execution'
    ],
    architecture: {
      title: 'Browser Canvas to PyTorch CNN Inference Pipeline',
      flowSteps: [
        {
          number: 1,
          title: 'Canvas Drawing Capture',
          description: 'User draws a digit on an HTML5 canvas; stroke coordinates are serialized to Base64 PNG data.',
          moduleOrFile: 'templates/default.html & static/',
          technology: 'HTML5 Canvas / jQuery'
        },
        {
          number: 2,
          title: 'Image Preprocessing & Normalization',
          description: 'Flask decodes Base64 image, converts to grayscale, inverts colors to match MNIST (white digit on black background), and resizes to 28x28.',
          moduleOrFile: 'app.py & utils.py',
          technology: 'Pillow (PIL) / NumPy'
        },
        {
          number: 3,
          title: 'PyTorch Tensor Conversion',
          description: 'Converts 28x28 bitmap into normalized PyTorch FloatTensor with shape (1, 1, 28, 28).',
          moduleOrFile: 'utils.py',
          technology: 'torchvision.transforms'
        },
        {
          number: 4,
          title: 'CNN Model Inference',
          description: 'Executes forward pass through trained CNN model checkpoint (checkpoint/mnist.pt) with torch.no_grad().',
          moduleOrFile: 'app.py',
          technology: 'PyTorch'
        },
        {
          number: 5,
          title: 'Probability Output & Display',
          description: 'Applies Softmax to output logits and returns predicted digit and confidence score to UI.',
          moduleOrFile: 'app.py',
          technology: 'Flask JSON response'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Server-Side Pillow Preprocessing Pipeline',
        rationale: 'Browser canvases produce variable RGB resolutions and anti-aliased edges. Inverting and downsampling server-side using Pillow ensures identical normalization to the MNIST training set.',
        alternativeConsidered: 'Client-side JavaScript canvas downsampling'
      },
      {
        decision: 'Pre-compiled PyTorch Checkpoint (.pt)',
        rationale: 'Loading pre-trained model weights directly into memory on Flask startup achieves sub-50ms inference latency without retraining overhead.',
        alternativeConsidered: 'On-the-fly training upon application startup'
      }
    ],
    testingAndQuality: {
      testCount: 4,
      coverage: 'Flask endpoint and model inference verification test suite',
      frameworks: ['Pytest / Unittest'],
      verifiedSuite: [
        'test_app.py: Verifies Flask application initialization, index routing, and POST prediction API'
      ]
    },
    limitations: [
      'Single-digit inference only: Cannot segment multi-digit numbers or mathematical equations.',
      'Sensitive to user drawing positioning: Canvas strokes drawn far off-center may decrease classification confidence compared to centered MNIST digits.'
    ],
    engineeringHighlights: [
      'PyTorch Convolutional Neural Network trained on the complete 60,000 MNIST dataset',
      'Real-time interactive HTML5 canvas interface with instant prediction feedback',
      'Modular Flask backend with standalone test suite (test_app.py)'
    ]
  },
  {
    slug: 'leetcode-solves',
    name: 'LeetCode Solves & Algorithmic Practice',
    tagline: '89+ Curated Algorithmic Solutions in Python Across Advanced Data Structures & Dynamic Programming',
    category: 'DSA & Algorithms',
    githubUrl: 'https://github.com/adarshh025/leetcode-solves',
    demoUrl: 'https://leetcode.com/u/adarshh025',
    featured: false,
    status: 'Educational / Open-Source',
    year: '2026',
    shortDescription: 'Curated repository of 89+ Python algorithmic solutions spanning Dynamic Programming, Graph Theory, Monotonic Stacks, Game Theory, and Trees, complementing 102+ verified solved problems on LeetCode.',
    detailedDescription: 'A dedicated problem-solving collection highlighting clean, idiomatic Python solutions for algorithmic challenges on LeetCode. Covers fundamental to advanced patterns: Two Pointers, Sliding Window, Monotonic Stacks, Binary Search, Breadth-First Search on State Spaces, Minimax & Game Theory, Minimum Spanning Trees, and Dynamic Programming.',
    problem: 'Mastering algorithmic time and space complexity requires continuous, deliberate practice across intricate edge cases, state transitions, and graph traversals.',
    solution: 'Engineered clean, well-tested Python solutions organized with problem statements, optimal Big-O complexity analyses, and constraint handling. Highlights over 26% Hard problem ratio (27 Hard solved out of 102 verified on LeetCode).',
    technologies: [
      'Python 3',
      'Algorithms',
      'Data Structures',
      'Dynamic Programming',
      'Graph Theory',
      'Game Theory',
      'LeetCode'
    ],
    keyFeatures: [
      '102 Verified Problems Solved on LeetCode: 43 Easy, 32 Medium, 27 Hard (>26% Hard problem ratio)',
      '89 Clean Python Solution Directories in GitHub Repository: Complete with problem statements and tests',
      'Game Theory & Minimax Solves: Predict the Winner, Stone Game, Stone Game II',
      'State-Space Graph Algorithms: Sliding Puzzle (BFS on permutation space), Jump Game IV/V',
      'Monotonic Stack & Greedy Patterns: Smallest Subsequence of Distinct Characters',
      'Graph Connectivity & MSTs: Path Existence Queries, Maximize Spanning Tree Stability'
    ],
    architecture: {
      title: 'Algorithmic Problem-Solving Taxonomy',
      flowSteps: [
        {
          number: 1,
          title: 'Problem Formulation & Constraint Analysis',
          description: 'Analyzes input constraints ($N \\le 10^5$, memory limits) to select the optimal theoretical Big-O complexity target.',
          technology: 'Asymptotic Analysis'
        },
        {
          number: 2,
          title: 'Data Structure Selection',
          description: 'Leverages optimal collections: Hash Maps (O(1) lookup), Heaps (O(log K) priority), Monotonic Stacks (amortized O(N)), or Disjoint Sets.',
          technology: 'Python collections / heapq'
        },
        {
          number: 3,
          title: 'Optimal Execution Strategy',
          description: 'Implements dynamic programming state memoization, two-pointer sliding windows, or pruning heuristics to prevent TLE.',
          technology: 'Recursion / Memoization'
        },
        {
          number: 4,
          title: 'Edge Case Verification',
          description: 'Tests empty arrays, cyclic graphs, negative weights, boundary integers, and maximum recursion limits.',
          technology: 'Python unit verification'
        }
      ]
    },
    engineeringDecisions: [
      {
        decision: 'Focus on High Ratio of Hard Problems (>26%)',
        rationale: 'Rather than inflating problem counts with trivial Easy tasks, deliberately tackling Hard problems builds deep competence in complex graph algorithms, multi-dimensional DP, and combinatorial optimization.',
        alternativeConsidered: 'Focusing exclusively on quantity of Easy problems'
      },
      {
        decision: 'Idiomatic Python with Explicit Type Hints',
        rationale: 'Writing typed, readable Python solutions makes algorithmic patterns easy to review, maintain, and discuss in technical interviews.',
        alternativeConsidered: 'Unannotated competitive programming shorthand'
      }
    ],
    testingAndQuality: {
      testCount: 89,
      coverage: 'Verified across LeetCode online judge test benches',
      frameworks: ['LeetCode Online Judge'],
      verifiedSuite: [
        'Tested against 100+ public and hidden test cases per problem on LeetCode',
        'Validates edge cases: single-element inputs, maximum constraint bounds, and memory limits'
      ]
    },
    limitations: [
      'Solutions focused primarily on algorithmic correctness and asymptotic runtime rather than production server scaffolding.',
      'Language focus currently centered on Python 3.'
    ],
    engineeringHighlights: [
      'Verified LeetCode profile with 102 solved problems and 163 total submissions',
      'Strong concentration in advanced Dynamic Programming and Game Theory',
      'Public GitHub repository with 89 modular solution implementations'
    ]
  }
];
