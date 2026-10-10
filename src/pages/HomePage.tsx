import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Terminal, 
  ArrowRight, 
  Code2, 
  FileText, 
  CheckCircle,
  ExternalLink,
  Sparkles,
  Lock,
  GitBranch,
  Database
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { profileData } from '../data/profileData';
import { projectsData } from '../data/projectsData';
import { leetcodeData } from '../data/leetcodeData';
import { Badge } from '../components/ui/Badge';
import { MetricCard } from '../components/ui/MetricCard';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="space-y-24 py-8 sm:py-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{profileData.department} • {profileData.branch} • {profileData.university} ({profileData.academicYear})</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {profileData.name}
          </h1>

          <p className="text-lg sm:text-xl font-mono text-cyan-400 font-semibold mb-6">
            {profileData.role}
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            «I build practical machine learning and security-focused systems, and am currently engineering <Link to="/projects/vernacular" className="text-cyan-300 font-semibold underline decoration-cyan-500/50 hover:decoration-cyan-400">Vernacular</Link> — an interpreted, actor-first programming language.»
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 font-medium text-sm transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </Link>

            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 text-sm transition-all"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 text-sm transition-all"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-amber-300 hover:bg-amber-950/50 hover:border-amber-700 text-sm transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>LeetCode (102 Solved)</span>
            </a>
          </div>

          {/* Quick Technical Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6 border-t border-slate-800/80 text-left">
            <div className="p-3 rounded-lg bg-slate-900/50 border border-purple-800/50">
              <span className="text-[11px] font-mono text-purple-400 block">Custom Language</span>
              <span className="text-xs font-semibold text-slate-100">Vernacular (Actor-First)</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
              <span className="text-[11px] font-mono text-slate-400 block">Machine Learning</span>
              <span className="text-xs font-semibold text-slate-200">Isolation Forest, CV, PyTorch</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
              <span className="text-[11px] font-mono text-slate-400 block">Cybersecurity</span>
              <span className="text-xs font-semibold text-slate-200">SSRF Defense, OWASP Audits</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70">
              <span className="text-[11px] font-mono text-slate-400 block">System Engineering</span>
              <span className="text-xs font-semibold text-slate-200">CRDT Sync, SQLite, Docker</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/70 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-mono text-slate-400 block">DSA Mastery</span>
              <span className="text-xs font-semibold text-slate-200">27 Hard Solved (&gt;26% ratio)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Telemetry / Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Verified Engineering Telemetry</span>
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Audited directly from live GitHub commits and the official LeetCode GraphQL API.
            </p>
          </div>
          <Link
            to="/leetcode"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300"
          >
            <span>Inspect DSA details</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            label="LeetCode Problems"
            value={leetcodeData.verifiedSolved}
            subtext="43 Easy • 32 Med • 27 Hard"
            icon={<Code2 className="w-5 h-5" />}
            verifiedLabel="Official API"
            variant="amber"
          />
          <MetricCard
            label="Hard DSA Ratio"
            value="26.5%"
            subtext="27 Hard problems solved"
            icon={<Cpu className="w-5 h-5" />}
            verifiedLabel="102 Total"
            variant="purple"
          />
          <MetricCard
            label="Automated Tests"
            value="100+"
            subtext="71 in InvoiceIQ • 18 in SecuriScan"
            icon={<Terminal className="w-5 h-5" />}
            verifiedLabel="Pytest / JUnit"
            variant="emerald"
          />
          <MetricCard
            label="Audited Repositories"
            value={projectsData.length}
            subtext="7 Open-Source repositories"
            icon={<GitBranch className="w-5 h-5" />}
            verifiedLabel="GitHub Public"
            variant="cyan"
          />
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Engineering Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Systems & Case Studies
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl mt-1">
              Selected projects demonstrating architectural depth across document intelligence, web security scanners, offline-first edge mobile, and NLP.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-auto"
          >
            <span>Browse all 7 projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col justify-between rounded-xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all p-6 group hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={project.category === 'Cybersecurity' ? 'emerald' : 'cyan'}>
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.year} • {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  <Link to={`/projects/${project.slug}`}>
                    {project.name}
                  </Link>
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-3 line-clamp-1">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Key Engineering Highlights */}
                <div className="space-y-1.5 mb-5 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 block font-semibold mb-1">
                    ENGINEERING HIGHLIGHTS:
                  </span>
                  {project.engineeringHighlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 text-slate-400 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300"
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white font-mono"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Engineering Disciplines Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-[#0e1626] to-[#0a0f1b] p-8 sm:p-12">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              How I Think & What I Focus On
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              My engineering education and personal technical exploration are organized around four core disciplines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Applied Machine Learning Pipelines</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Building practical ML systems that solve tangible operational problems — optical character recognition, deskewing pipelines, spatial bounding box parsing, and unsupervised outlier scoring (Isolation Forest).
              </p>
              <Link to="/projects/invoiceiq" className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline">
                Explore InvoiceIQ pipeline <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Defensive Cybersecurity Engineering</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Designing safe, non-destructive web security assessment tools with built-in SSRF guards, TLS certificate analysis, cookie attribute inspection, and OWASP Top 10 remediation generators.
              </p>
              <Link to="/security" className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline">
                View Cybersecurity focus <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/60 text-purple-400 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Offline-First Distributed Systems</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Addressing remote connectivity limits with zero-latency local SQLite persistence, CRDT-inspired Hybrid Logical Clocks (HLC) for causal ordering, and async background queue syncing.
              </p>
              <Link to="/projects/smritivan" className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-purple-400 hover:underline">
                View SMRITIVAN CRDT architecture <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-400 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">Algorithmic Problem Solving</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Consistent daily discipline on LeetCode with 102 verified solves. Strong focus on Dynamic Programming, Graph Theory state space BFS, Minimax game theory, and Monotonic Stacks.
              </p>
              <Link to="/leetcode" className="mt-3 inline-flex items-center gap-1 text-xs font-mono text-amber-400 hover:underline">
                Inspect 102 verified LeetCode solves <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Banner Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/40 border border-slate-800/80 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">
            Interested in Reviewing Code, Case Studies, or Collaborating?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
            Explore the complete project case studies, inspect repository sources, or review the ATS-friendly resume.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/projects"
              className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm hover:bg-cyan-400 transition-colors"
            >
              All Projects & Case Studies
            </Link>
            <Link
              to="/resume"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm transition-colors"
            >
              View Printable Resume
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs sm:text-sm transition-colors"
            >
              Contact & Links
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
