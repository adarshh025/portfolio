import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'persevex-ml',
    role: 'Machine Learning Intern / Developer',
    organization: 'Persevex',
    type: 'Work Experience',
    duration: '4 Months (Completed & Continuing)',
    period: 'Internship',
    location: 'Remote / India',
    description: 'Interning at Persevex to gain hands-on industry experience. Contributed to software development and machine learning projects, leveraging strong data management skills and reproducible pipelines.',
    responsibilities: [
      'Contributed to applied machine learning and software development workflows for analytical and predictive tasks.',
      'Constructed data preprocessing, feature engineering, and normalization pipelines for diverse datasets.',
      'Collaborated on model performance metrics, error profiling, and code documentation.',
      'Completed the formal Persevex Machine Learning Program, earning professional certification.'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Preprocessing', 'Scikit-learn', 'Pandas', 'Feature Engineering'],
    verified: true
  },
  {
    id: 'paytm-ambassador',
    role: 'Campus Ambassador',
    organization: 'Paytm',
    type: 'Leadership & Community',
    duration: 'Ongoing',
    period: '2024 – Present',
    location: 'Sandip University / India',
    description: 'Serving as Campus Ambassador at Paytm, showcasing leadership, peer communication, and community engagement while promoting fintech digital initiatives.',
    responsibilities: [
      'Represented Paytm digital initiatives and product offerings across the student and engineering community.',
      'Spearheaded campus outreach, technical discussions, and hackathon participation.',
      'Demonstrated proactive leadership, public speaking, and community-building abilities.'
    ],
    technologies: ['Leadership', 'Technical Communication', 'Community Engagement', 'Fintech Ecosystems'],
    verified: true
  },
  {
    id: 'sih-2026',
    role: 'Backend & Synchronization Lead',
    organization: 'Smart India Hackathon (SIH 2026)',
    type: 'Hackathon',
    duration: 'Competition Cycle',
    period: '2026',
    location: 'National / India',
    description: 'Problem Statement 26003: Cognitive Gaming and Memory Assistance Platform for Dementia Patients in the North Eastern Region with Team "laccha paratha".',
    responsibilities: [
      'Architected 100% offline-first edge persistence layer using SQLite and Drift ORM.',
      'Engineered a CRDT-inspired Hybrid Logical Clock (HLC) conflict resolution sync engine connecting Flutter edge clients to a FastAPI backend.',
      'Implemented on-device Dynamic Difficulty Adjustment (DDA) algorithms adapting puzzle complexity to patient reaction times.',
      'Packaged full backend services into containerized Docker Compose stacks for reproducible deployment.'
    ],
    technologies: ['Flutter', 'Dart', 'FastAPI', 'PostgreSQL', 'Docker', 'CRDT Algorithms'],
    verified: true
  },
  {
    id: 'btech-aiml',
    role: 'B.Tech in Computer Science & Engineering (AI & ML)',
    organization: 'Sandip University',
    type: 'Education',
    duration: '4 Years (In Progress)',
    period: '2024 – 2028 (Expected)',
    location: 'Nashik, Maharashtra, India',
    description: 'Pursuing Bachelor\'s in Artificial Intelligence & Machine Learning at Sandip University. Rigorous curriculum concentrating on Applied Machine Learning, Compiler/Language Concepts, Defensive Cybersecurity, and Algorithmic Problem Solving.',
    responsibilities: [
      'Core coursework: Data Structures & Algorithms, Systems Programming (Rust & Go), Object-Oriented Engineering (Java & C++), Web Architectures (TypeScript & JavaScript), Statistical Computing (R & Python), Database Systems, and Operating Systems.',
      'Specialized coursework: Machine Learning Fundamentals, Deep Learning, Natural Language Processing, Network Security & Cryptography.',
      'Active independent research: Designing Vernacular (actor-first programming language) and daily LeetCode practice (>100 solved).'
    ],
    technologies: ['Python', 'Rust', 'TypeScript', 'Go', 'Java', 'JavaScript', 'R', 'C++', 'Data Structures', 'Algorithms'],
    verified: true
  }
];
