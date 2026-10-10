import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Terminal, 
  ArrowRight, 
  ExternalLink, 
  ShieldAlert
} from 'lucide-react';
import { securityPillars, continuousLearningSecurity } from '../data/securityData';
import { Badge } from '../components/ui/Badge';

export const CybersecurityPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 text-xs font-mono mb-4">
          <Shield className="w-3.5 h-3.5" />
          <span>Security Engineering Specialization</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Cybersecurity & Defensive Engineering
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Focusing on practical security engineering, automated vulnerability assessment, SSRF defense mechanisms, cryptographic primitives, and secure software development.
        </p>
      </div>

      {/* Ethical Statement Callout */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5 text-xs text-slate-300">
        <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-mono font-semibold text-white block mb-1">
            DEFENSIVE & AUTHORIZED TESTING MANDATE
          </span>
          <p className="leading-relaxed">
            All security research, automated scanner development, and vulnerability evaluations are conducted strictly within defensive parameters, controlled simulation labs, and explicitly authorized self-hosted targets.
          </p>
        </div>
      </div>

      {/* 4 Core Pillars of Security Practice */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>Core Security Pillars & Implementations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl bg-[#0c1220] border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="emerald">{pillar.badge}</Badge>
                  <Link
                    to={`/projects/${pillar.referenceSlug}`}
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>{pillar.referenceProject}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <h3 className="text-base font-bold text-white">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block font-semibold">
                    IMPLEMENTATION MECHANISMS:
                  </span>
                  {pillar.implementationDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Security Projects Spotlight */}
      <section className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider block font-semibold mb-1">
            VERIFIED PROJECTS IN SECURITY
          </span>
          <h2 className="text-2xl font-bold text-white">
            Security Tooling & Cryptography Repositories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* SecuriScan-AI card */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">SecuriScan-AI</span>
              <Badge variant="emerald">FastAPI + React 19</Badge>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Defensive vulnerability scanner checking CSP, HSTS, TLS certificates, CORS reflection, and cookie security flags with built-in SSRF IP blocking and multi-persona remediation.
            </p>
            <div className="pt-2 flex items-center justify-between">
              <Link
                to="/projects/securiscan-ai"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                Case study <ArrowRight className="w-3 h-3" />
              </Link>
              <a
                href="https://github.com/adarshh025/SecuriScan-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Encryption Project card */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-white">Encryption System</span>
              <Badge variant="cyan">Java + FlatLaf</Badge>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Desktop file encryption exploring byte transformations, digit-sum key derivation, and buffered streams. Explicitly documents educational limitations (small key spaces, lack of AEAD).
            </p>
            <div className="pt-2 flex items-center justify-between">
              <Link
                to="/projects/encryption-project"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                Case study <ArrowRight className="w-3 h-3" />
              </Link>
              <a
                href="https://github.com/adarshh025/encryption-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
              >
                Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Hands-On Continuous Learning: Hack The Box */}
      <section className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-amber-400">
          <Terminal className="w-4 h-4" />
          <h2 className="text-xs font-mono uppercase tracking-wider font-semibold">
            {continuousLearningSecurity.title}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {continuousLearningSecurity.description}
        </p>
        <p className="text-[11px] font-mono text-slate-500 pt-1 border-t border-slate-800/80">
          {continuousLearningSecurity.ethicStatement}
        </p>
      </section>

    </div>
  );
};
