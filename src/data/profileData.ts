import type { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Adarsh Aher',
  role: 'ML Engineer, Language Designer & Cybersecurity Specialist',
  department: 'B.Tech',
  branch: 'CSE in Artificial Intelligence & Machine Learning',
  university: 'Sandip University',
  academicYear: 'Second Year',
  specialization: 'Language Design, Defensive Cybersecurity, Applied ML & Algorithmic Problem Solving',
  tagline: 'Designing Vernacular (an actor-first programming language), practical ML pipelines, and defensive security systems.',
  summary: 'Undergraduate engineer pursuing B.Tech in CSE (AIML) at Sandip University. Creator of Vernacular — an interpreted, dynamically typed, actor-first programming language built around message-driven structure. Polyglot developer working across Python, Rust, TypeScript, Go, Java, JavaScript, and R. Intern at Persevex and Campus Ambassador at Paytm.',
  customLanguage: {
    name: 'Vernacular',
    tagline: 'Interpreted, dynamically typed, actor-first programming language',
    description: 'Designed around autonomous actors and message-driven structure rather than conventional function-first mechanics, exploring expressive concurrency, AST evaluation, and isolated state encapsulation.',
    status: 'In Final Testing (Pre-release)'
  },
  aboutParagraphs: [
    'I am a Computer Science & Engineering undergraduate at Sandip University specializing in Artificial Intelligence and Machine Learning, interning at Persevex to gain hands-on software development and machine learning experience, and serving as a Campus Ambassador at Paytm.',
    'For nearly a year, I have been quietly designing and implementing my own programming language — Vernacular. Vernacular is an interpreted, dynamically typed, actor-first language created to explore an expressive alternative to the usual function-first paradigm. Instead of shared mutable state, it organizes computation around autonomous actors communicating via message-passing mailboxes, featuring custom lexical scanning, recursive descent AST parsing, and dynamic runtime evaluation.',
    'Across machine learning and systems engineering, I focus on full-lifecycle depth: from OpenCV image preprocessing and Tesseract OCR pipelines to Isolation Forest anomaly detection, CRDT hybrid logical clock synchronization, and non-destructive web security auditing.',
    'My guiding philosophy is simple: Learning → Building → Failing → Improving → Repeating. True competence is demonstrated through verifiable evidence — reproducible pipelines, strict automated test suites, honest documentation of limitations, and rigorous algorithmic problem solving on LeetCode (>100 verified solutions with >26% Hard problem ratio).'
  ],
  principles: [
    {
      title: 'Evidence Over Claims',
      description: 'Document what the code actually does. Back system claims with test coverage, architecture diagrams, and benchmark numbers rather than buzzwords.'
    },
    {
      title: 'Full-Lifecycle Ownership',
      description: 'Bridge experimental machine learning and compiler theory with production realities: deterministic validation, error budgets, and performant user interfaces.'
    },
    {
      title: 'Defensive by Default',
      description: 'Design software with rigorous threat awareness: guard against SSRF, validate data schemas at ingestion boundaries, and safeguard local privacy.'
    },
    {
      title: 'Algorithmic Discipline',
      description: 'Continual practice of data structures and algorithmic complexity to solve non-trivial edge cases with optimal time and space performance.'
    }
  ],
  socials: {
    github: 'https://github.com/adarshh025',
    linkedin: 'https://www.linkedin.com/in/adarsh-aher-a311a737b',
    leetcode: 'https://leetcode.com/u/adarshh025',
    email: 'aheradarsh6@gmail.com'
  },
  learningInterests: [
    {
      title: 'Language Design & Interpreter Runtimes',
      platform: 'Vernacular (Passion Project)',
      description: 'Designing and testing an interpreted, dynamically typed, actor-first programming language exploring message-driven execution, AST interpretation, and mailbox dispatch.'
    },
    {
      title: 'Daily Algorithmic Practice',
      platform: 'LeetCode',
      description: 'Continuous daily problem solving focusing on Dynamic Programming, Graph Theory (BFS/DFS), Monotonic Stacks, and Tree Algorithms.',
      link: 'https://leetcode.com/u/adarshh025'
    },
    {
      title: 'Systems Programming & Concurrency',
      platform: 'Rust & Go Exploration',
      description: 'Exploring memory safety without garbage collection, zero-cost abstractions, goroutines, and channels for high-performance systems and networking tools.'
    },
    {
      title: 'Defensive Security & Network Analysis',
      platform: 'Hack The Box',
      description: 'Hands-on exploration of network enumeration, Linux/Windows security primitives, TLS misconfigurations, and safe vulnerability analysis.'
    },
    {
      title: 'Statistical Computing & Research',
      platform: 'R & Python Data Science',
      description: 'Applied statistical modeling, exploratory data analysis (EDA), and numerical hypothesis testing for empirical machine learning.'
    }
  ]
};
