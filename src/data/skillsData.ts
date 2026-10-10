import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages utilized across production repositories, systems tooling, algorithms, mobile apps, web systems, and data science.',
    skills: [
      { name: 'Vernacular (Author)', evidenceRepo: 'Vernacular', notes: 'Custom interpreted, dynamically typed, actor-first programming language built around message-driven structure' },
      { name: 'Python', evidenceRepo: 'InvoiceIQ, SecuriScan-AI, Resumind, leetcode-solves', notes: 'Primary language for ML pipelines, FastAPI services, computer vision, data analysis, and algorithm implementation' },
      { name: 'Rust', evidenceRepo: 'Systems & Tooling, Academic', notes: 'Systems programming, memory safety without GC, zero-cost abstractions, concurrent tooling, and crypto primitives' },
      { name: 'TypeScript', evidenceRepo: 'SecuriScan-AI frontend, Portfolio', notes: 'Type-safe modern web application architecture, strict type contracts, React 19, and Vite tooling' },
      { name: 'Go', evidenceRepo: 'Backend Services & CLI', notes: 'High-concurrency backend microservices, network probes, goroutine-based concurrent pipelines, and fast CLI utilities' },
      { name: 'Java', evidenceRepo: 'encryption-project', notes: 'Object-oriented desktop applications, Java Swing, Apache Maven project lifecycle, and JUnit 5 test suites' },
      { name: 'JavaScript', evidenceRepo: 'SecuriScan-AI, Web Projects', notes: 'Modern ES6+ dynamic scripting, asynchronous event-loop programming, DOM manipulation, and runtime tooling' },
      { name: 'R', evidenceRepo: 'Statistical Computing & EDA', notes: 'Statistical data analysis, hypothesis testing, exploratory numerical computing, and data distribution modeling' },
      { name: 'C++', evidenceRepo: 'smritivan, Academic, DSA', notes: 'Low-level memory management, competitive programming, algorithmic data structures, and system primitives' },
      { name: 'Dart', evidenceRepo: 'smritivan', notes: 'Cross-platform reactive client engineering with Flutter, Riverpod, and on-device SQLite persistence' },
      { name: 'SQL', evidenceRepo: 'smritivan, SecuriScan-AI', notes: 'Relational database schema design, complex query optimization across PostgreSQL and SQLite' }
    ]
  },
  {
    title: 'Compiler & Language Engineering',
    description: 'Language grammar specification, lexical scanning, AST construction, runtime interpreters, and actor concurrency models.',
    skills: [
      { name: 'Actor-First Concurrency', evidenceRepo: 'Vernacular', notes: 'Native actor primitives with private state and FIFO message-passing mailboxes' },
      { name: 'Recursive Descent AST Parsing', evidenceRepo: 'Vernacular', notes: 'Precedence-climbing grammar parsing actor signatures, message handlers, and expressions' },
      { name: 'Lexical Scanning & Tokenization', evidenceRepo: 'Vernacular', notes: 'Deterministic token stream generation with line/column source mapping for error diagnostics' },
      { name: 'Dynamic Runtime Evaluation', evidenceRepo: 'Vernacular', notes: 'Tree-walk interpreter execution, dynamic typing, and message pattern matching' }
    ]
  },
  {
    title: 'Machine Learning & Computer Vision',
    description: 'Applied machine learning architectures, statistical anomaly detection, and image analysis.',
    skills: [
      { name: 'Scikit-learn', evidenceRepo: 'InvoiceIQ, Persevex', notes: 'Isolation Forest unsupervised anomaly detection, regression, classification' },
      { name: 'PyTorch', evidenceRepo: 'HAND-WRITTEN-DIGIT-RECOGNITION-', notes: 'CNN architecture design, tensor operations, model checkpoint inference' },
      { name: 'OpenCV', evidenceRepo: 'InvoiceIQ', notes: 'Adaptive binarization, affine deskewing, bilateral filtering, contour analysis' },
      { name: 'Tesseract OCR', evidenceRepo: 'InvoiceIQ', notes: 'Optical character recognition, bounding box extraction, confidence profiling' },
      { name: 'Pandas & NumPy', evidenceRepo: 'InvoiceIQ, Resumind', notes: 'Tabular data transformation, matrix arithmetic, Z-score profiling' },
      { name: 'Data Visualization', evidenceRepo: 'InvoiceIQ', notes: 'Diagnostic evaluation plots using Matplotlib, Seaborn, and Altair' }
    ]
  },
  {
    title: 'Cybersecurity & Defensive Engineering',
    description: 'Practical security mechanisms, vulnerability auditing, and secure development practices.',
    skills: [
      { name: 'SSRF Defense Engineering', evidenceRepo: 'SecuriScan-AI', notes: 'DNS pre-resolution and IP subnet validation against loopback/private ranges' },
      { name: 'OWASP Defensive Assessment', evidenceRepo: 'SecuriScan-AI', notes: 'Auditing CSP, HSTS, X-Frame-Options, CORS reflection, and cookie flags' },
      { name: 'Cryptographic Mechanics', evidenceRepo: 'encryption-project', notes: 'Byte-level cipher transformations, key spaces, and digit-sum derivations' },
      { name: 'Safe Scanner Design', evidenceRepo: 'SecuriScan-AI', notes: 'Zero-subprocess execution, credential masking, non-destructive passive probes' },
      { name: 'Hack The Box Labs', evidenceRepo: 'Continuous Learning', notes: 'Hands-on network enumeration, Linux fundamentals, and privilege models' }
    ]
  },
  {
    title: 'Natural Language Processing & Document AI',
    description: 'Document parsing, named entity recognition, and information structuring pipelines.',
    skills: [
      { name: 'spaCy (NER)', evidenceRepo: 'Resumind', notes: 'Named entity recognition for candidate names, dates, and organizations' },
      { name: 'pdfminer.six & python-docx', evidenceRepo: 'Resumind, InvoiceIQ', notes: 'Document layout extraction, text streams, and format normalization' },
      { name: 'Pydantic Schemas', evidenceRepo: 'Resumind, SecuriScan-AI', notes: 'Strict data validation, serialization contracts, and schema boundaries' },
      { name: 'Regex Extraction', evidenceRepo: 'InvoiceIQ, Resumind', notes: 'High-precision pattern extraction for financial and contact metadata' }
    ]
  },
  {
    title: 'Backend & Web Frameworks',
    description: 'Fast, asynchronous APIs, microservices, and interactive web application backends.',
    skills: [
      { name: 'FastAPI', evidenceRepo: 'SecuriScan-AI, smritivan, Resumind', notes: 'Asynchronous REST APIs, Pydantic validation, CORS middleware' },
      { name: 'Streamlit', evidenceRepo: 'InvoiceIQ', notes: 'Multi-view interactive analytical dashboards with real-time status' },
      { name: 'Flask', evidenceRepo: 'HAND-WRITTEN-DIGIT-RECOGNITION-', notes: 'Lightweight model serving endpoints and static canvas routing' },
      { name: 'HTTPX Async', evidenceRepo: 'SecuriScan-AI', notes: 'High-concurrency asynchronous HTTP probes and TLS inspection' }
    ]
  },
  {
    title: 'Frontend & Mobile Engineering',
    description: 'Modern, reactive user interfaces and offline-first mobile applications.',
    skills: [
      { name: 'React 19', evidenceRepo: 'SecuriScan-AI frontend, Portfolio', notes: 'Component-driven UI, state hooks, and modern rendering' },
      { name: 'Tailwind CSS', evidenceRepo: 'SecuriScan-AI frontend, Portfolio', notes: 'Responsive design, dark-mode themes, and technical UI design' },
      { name: 'Flutter & Riverpod', evidenceRepo: 'smritivan', notes: 'Reactive cross-platform mobile architecture with offline state management' },
      { name: 'HTML5 Canvas', evidenceRepo: 'HAND-WRITTEN-DIGIT-RECOGNITION-', notes: 'Interactive mouse/touch drawing capture and Base64 serialization' }
    ]
  },
  {
    title: 'Databases & Storage',
    description: 'Relational databases, ORMs, and offline-first edge storage engines.',
    skills: [
      { name: 'SQLite / Drift', evidenceRepo: 'smritivan, SecuriScan-AI', notes: 'Embedded zero-latency edge storage for offline-first applications' },
      { name: 'PostgreSQL', evidenceRepo: 'smritivan', notes: 'Relational data persistence with async drivers (AsyncPG / SQLAlchemy)' },
      { name: 'CRDT Sync Queues', evidenceRepo: 'smritivan', notes: 'Hybrid Logical Clock (HLC) conflict resolution for offline synchronization' }
    ]
  },
  {
    title: 'Developer Tools & Quality Assurance',
    description: 'Automated testing frameworks, containerization, and build tooling.',
    skills: [
      { name: 'Pytest & Pytest-Cov', evidenceRepo: 'InvoiceIQ (71 tests), SecuriScan-AI, Resumind', notes: 'Unit testing, mocking, adversarial fixtures, and code coverage reporting' },
      { name: 'JUnit 5', evidenceRepo: 'encryption-project (14 tests)', notes: 'Java unit tests verifying byte stream roundtrips and key derivation' },
      { name: 'Docker & Docker Compose', evidenceRepo: 'smritivan', notes: 'Multi-container application packaging (FastAPI + PostgreSQL)' },
      { name: 'Apache Maven', evidenceRepo: 'encryption-project', notes: 'Java project lifecycle management and dependency orchestration' },
      { name: 'Git & GitHub', evidenceRepo: 'All Repositories', notes: 'Version control, branch workflows, and reproducible open-source repos' }
    ]
  }
];
