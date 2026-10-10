export type ProjectCategory = 
  | 'Machine Learning'
  | 'Cybersecurity'
  | 'Language Design & Systems'
  | 'Mobile & Distributed Systems'
  | 'NLP & Document AI'
  | 'Computer Vision'
  | 'DSA & Algorithms';

export interface ProjectArchitecture {
  title: string;
  diagramAscii?: string;
  flowSteps: {
    number: number;
    title: string;
    description: string;
    moduleOrFile?: string;
    technology?: string;
  }[];
}

export interface ProjectDecision {
  decision: string;
  rationale: string;
  alternativeConsidered?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  status: 'Production-Style' | 'Hackathon Solution' | 'Educational / Open-Source' | 'In Final Testing (Pre-release)';
  year: string;
  shortDescription: string;
  detailedDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architecture: ProjectArchitecture;
  engineeringDecisions: ProjectDecision[];
  methodology?: {
    title: string;
    pipeline: string[];
    details: string;
  };
  securityDetails?: {
    focus: string;
    safeguards: string[];
    limitations: string[];
  };
  testingAndQuality: {
    testCount?: number;
    coverage?: string;
    frameworks: string[];
    verifiedSuite: string[];
  };
  limitations: string[];
  engineeringHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'Work Experience' | 'Education' | 'Hackathon' | 'Leadership & Community';
  duration: string;
  period: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  verified: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    evidenceRepo?: string;
    notes?: string;
  }[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  previewImage?: string;
  status: 'Verified' | 'Awaiting Document Upload';
  tags: string[];
  notes?: string;
}

export interface LeetCodeCuratedSolution {
  number: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  timeComplexity: string;
  spaceComplexity: string;
  repoDirectory: string;
}

export interface LeetCodeStats {
  username: string;
  profileUrl: string;
  repoUrl: string;
  verifiedSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalSubmissions: number;
  globalRanking: number;
  repoTotalSolves: number;
  topicBreakdown: {
    topic: string;
    verifiedCount: number;
    representativeProblem: string;
  }[];
  curatedSolutions: LeetCodeCuratedSolution[];
}

export interface ProfileData {
  name: string;
  role: string;
  department: string;
  branch: string;
  university: string;
  academicYear: string;
  specialization: string;
  tagline: string;
  summary: string;
  customLanguage?: {
    name: string;
    tagline: string;
    description: string;
    status: string;
  };
  aboutParagraphs: string[];
  principles: { title: string; description: string }[];
  socials: {
    github: string;
    linkedin: string;
    leetcode: string;
    email?: string;
  };
  learningInterests: {
    title: string;
    platform: string;
    description: string;
    link?: string;
  }[];
}
