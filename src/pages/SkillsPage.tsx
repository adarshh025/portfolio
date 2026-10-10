import React from 'react';
import { 
  Code2, 
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/skillsData';

export const SkillsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
          <Code2 className="w-3.5 h-3.5" />
          <span>Evidence-Based Technical Competencies</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Skills & Technical Stack
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Every listed technology is grounded in demonstrably written and tested code across public repositories. No arbitrary percentage bars or fabricated metrics.
        </p>
      </div>

      {/* Technical Profile Visualization (Flow Architecture) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0e1627] to-[#0a0f1c] border border-slate-800">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
            Technical Specialization Interconnection
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-800/40">
            <span className="text-xs font-mono text-cyan-400 block mb-1">FOUNDATION</span>
            <h3 className="font-bold text-white text-sm">Algorithmic Problem Solving</h3>
            <p className="text-[11px] text-slate-400 mt-1">Data structures, DP, Graph BFS, Complexity analysis</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-800/40">
            <span className="text-xs font-mono text-emerald-400 block mb-1">INTELLIGENCE</span>
            <h3 className="font-bold text-white text-sm">Applied Machine Learning</h3>
            <p className="text-[11px] text-slate-400 mt-1">Isolation Forest, OpenCV, Tesseract OCR, PyTorch CNN</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-800/40">
            <span className="text-xs font-mono text-purple-400 block mb-1">RESILIENCE</span>
            <h3 className="font-bold text-white text-sm">Edge & Distributed Systems</h3>
            <p className="text-[11px] text-slate-400 mt-1">Offline-first Flutter, Drift SQLite, CRDT synchronization</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-800/40">
            <span className="text-xs font-mono text-amber-400 block mb-1">ASSURANCE</span>
            <h3 className="font-bold text-white text-sm">Defensive Cybersecurity</h3>
            <p className="text-[11px] text-slate-400 mt-1">SSRF firewall, OWASP audit, TLS/Cookie analysis, Cryptography</p>
          </div>
        </div>
      </section>

      {/* Grouped Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-xl bg-[#0c1220] border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[11px] font-mono text-cyan-400">
                  {category.skills.length} skills
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-100 font-mono">
                        {skill.name}
                      </span>
                      {skill.evidenceRepo && (
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                          {skill.evidenceRepo}
                        </span>
                      )}
                    </div>
                    {skill.notes && (
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {skill.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
