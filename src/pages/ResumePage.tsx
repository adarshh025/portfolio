import React from 'react';
import { 
  Printer, 
  Code2, 
  Mail, 
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { profileData } from '../data/profileData';
import { experienceData } from '../data/experienceData';
import { projectsData } from '../data/projectsData';
import { certificationsData } from '../data/certificationsData';

export const ResumePage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Print Control Toolbar (Hidden during print) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>ATS-Optimized Technical Resume</span>
          </h1>
          <p className="text-xs text-slate-400">
            Rendered dynamically from centralized data. Click below to print or save as PDF.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm font-mono hover:bg-cyan-400 transition-colors shadow-sm"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* The Printable Resume Sheet */}
      <article className="print-page bg-[#0b101d] text-slate-200 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-xl print:shadow-none print:border-none print:p-0 print:text-black print:bg-white space-y-8">
        
        {/* Header Block */}
        <div className="border-b border-slate-800 pb-6 print:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
            <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
              {profileData.name}
            </h1>
            <span className="text-xs font-mono text-cyan-400 print:text-slate-700 font-semibold">
              {profileData.role}
            </span>
          </div>

          <p className="text-xs text-slate-400 print:text-slate-600 mb-3">
            {profileData.department} • {profileData.branch} • {profileData.university} ({profileData.academicYear})
          </p>

          {/* Contact & Social Links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-300 print:text-slate-700">
            {profileData.socials.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                <span>{profileData.socials.email}</span>
              </span>
            )}
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <GithubIcon size={14} className="text-cyan-400 print:text-black" />
              <span>github.com/adarshh025</span>
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <LinkedinIcon size={14} className="text-cyan-400 print:text-black" />
              <span>linkedin.com/in/adarsh-aher-a311a737b</span>
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Code2 className="w-3.5 h-3.5 text-amber-400 print:text-black" />
              <span>leetcode.com/u/adarshh025 (102 Solved)</span>
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-slate-300 print:text-slate-800">
            Undergraduate engineer pursuing B.Tech in CSE (AIML) at Sandip University. Creator of Vernacular — an interpreted, dynamically typed, actor-first programming language exploring message-driven concurrency and isolated state encapsulation. Polyglot developer working across Python, Rust, TypeScript, Go, Java, JavaScript, and R. Demonstrated expertise in designing end-to-end document intelligence pipelines (OpenCV, Tesseract OCR, Isolation Forest), modular vulnerability scanners with SSRF defenses, and offline-first edge architectures with CRDT synchronization. Verified track record of 102 solved LeetCode algorithmic problems with over 26% Hard problem ratio. Intern at Persevex and Campus Ambassador at Paytm.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h3 className="text-sm font-bold text-white print:text-black">
                B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning) — Sandip University
              </h3>
              <p className="text-xs text-slate-400 print:text-slate-600">
                Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, Systems Programming (Rust/Go), OOP (Java), Web Engineering (TypeScript/JavaScript), Statistical Computing (R), Network Security & Cryptography
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 print:text-slate-600 shrink-0">
              Second Year • Expected 2028
            </span>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
            Work Experience & Leadership
          </h2>

          {experienceData.filter((item) => item.type !== 'Education').map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {item.role} — <span className="font-semibold text-cyan-300 print:text-slate-800">{item.organization}</span>
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                  {item.duration} ({item.period})
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
                {item.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Selected Projects */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
            Key Software & ML Projects
          </h2>

          {featuredProjects.map((proj) => (
            <div key={proj.slug} className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {proj.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                    [{proj.technologies.slice(0, 4).join(', ')}]
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400 print:text-slate-600">
                  github.com/adarshh025/{proj.name}
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-800">
                {proj.shortDescription}
              </p>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-300 print:text-slate-800">
                {proj.engineeringHighlights.slice(0, 2).map((high, hIdx) => (
                  <li key={hIdx}>{high}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-300 print:text-slate-800">
            <div>
              <span className="font-bold text-white print:text-black">Languages: </span>
              <span>Vernacular (Author), Python, Rust, TypeScript, Go, Java, JavaScript, R, C++, Dart, SQL</span>
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Language Design & Compilers: </span>
              <span>Actor-First Concurrency, Lexing & Tokenization, Recursive Descent AST Parsing, Tree-Walk Evaluators</span>
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Machine Learning & Data Science: </span>
              <span>PyTorch, Scikit-learn, OpenCV, Tesseract OCR, Pandas, NumPy, R (EDA & Modeling)</span>
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Cybersecurity & Defensive: </span>
              <span>SSRF Mitigation, OWASP Top 10 Auditing, TLS Inspection, Rust/Go Concurrency, Ciphers, HTB</span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-bold text-white print:text-black">Frameworks, DBs & Tooling: </span>
              <span>FastAPI, React 19, Flutter, Riverpod, Streamlit, Drift SQLite, PostgreSQL, Docker, Apache Maven</span>
            </div>
          </div>
        </section>

        {/* Certifications & Credentials */}
        {certificationsData.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
              Verified Certifications & Credentials
            </h2>
            <div className="space-y-1.5 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-white print:text-black">{cert.name}</span>
                    <span className="text-slate-400 print:text-slate-600"> — {cert.issuer}</span>
                    {cert.credentialId && (
                      <span className="text-[11px] font-mono text-cyan-400 print:text-slate-600"> (ID: {cert.credentialId})</span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400 print:text-slate-600 shrink-0">
                    {cert.issueDate}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Algorithmic Problem Solving */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 print:text-black border-b border-slate-800 print:border-slate-300 pb-1">
            Algorithmic Problem Solving & Competitive Programming
          </h2>
          <div className="text-xs text-slate-300 print:text-slate-800">
            <span className="font-bold text-white print:text-black">LeetCode (Username: adarshh025): </span>
            <span>102 Verified Solved Problems (43 Easy, 32 Medium, 27 Hard — 26.5% Hard problem ratio). Specializing in Dynamic Programming, Graph State Space BFS, Game Theory Minimax, and Monotonic Stacks. Repository: github.com/adarshh025/leetcode-solves (89 organized solution directories).</span>
          </div>
        </section>

      </article>

    </div>
  );
};
