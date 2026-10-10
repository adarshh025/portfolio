import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Cpu, 
  FileCode, 
  Lock
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projectsData';
import { Badge } from '../components/ui/Badge';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';

export const ProjectCaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Back to Projects Navigation */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Directory</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <div className="space-y-4 border-b border-slate-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="cyan" size="md">
            {project.category}
          </Badge>
          <Badge variant="default" size="md">
            Status: {project.status}
          </Badge>
          <span className="text-xs font-mono text-slate-400">
            Year: {project.year}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {project.name}
        </h1>

        <p className="text-base sm:text-lg font-mono text-cyan-400">
          {project.tagline}
        </p>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {project.detailedDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-xs sm:text-sm font-mono font-medium transition-all"
          >
            <GithubIcon size={16} />
            <span>View Source Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-950/40 border border-amber-800/50 text-amber-300 hover:bg-amber-950/60 text-xs sm:text-sm font-mono font-medium transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live External Link</span>
            </a>
          )}
        </div>
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold">
              The Engineering Problem
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <h2 className="text-xs font-mono uppercase tracking-wider font-semibold">
              The Implemented Solution
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Visual Architecture Diagram */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            System Architecture & Data Flow
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Step-by-step modular pipeline and data contracts verified from repository source code:
        </p>
        <ArchitectureDiagram architecture={project.architecture} />
      </section>

      {/* Technology Stack Grid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            Technology Stack & Libraries
          </h2>
        </div>
        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Key Engineering Decisions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FileCode className="w-5 h-5 text-cyan-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            Key Architectural Decisions & Tradeoffs
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {project.engineeringDecisions.map((decision, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0b101c] border border-slate-800 space-y-2"
            >
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono flex items-center justify-center">
                  {idx + 1}
                </span>
                <span>{decision.decision}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                {decision.rationale}
              </p>
              {decision.alternativeConsidered && (
                <div className="ml-7 pt-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="text-slate-500">Alternative Considered:</span>
                  <span className="text-slate-400 italic">{decision.alternativeConsidered}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section (If applicable) */}
      {project.methodology && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              {project.methodology.title}
            </h2>
          </div>
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.methodology.pipeline.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/60 p-2 rounded border border-slate-800">
                  <span className="text-cyan-400 font-bold">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
              {project.methodology.details}
            </p>
          </div>
        </section>
      )}

      {/* Security Details Section (If applicable) */}
      {project.securityDetails && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              Security Model & Threat Considerations
            </h2>
          </div>
          <div className="p-6 rounded-xl bg-emerald-950/10 border border-emerald-800/30 space-y-4">
            <h3 className="text-sm font-semibold text-emerald-300">
              Security Safeguards Implemented:
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.securityDetails.safeguards.map((safeguard, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{safeguard}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Testing & Verification */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            Testing & Quality Assurance
          </h2>
        </div>
        <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono pb-3 border-b border-slate-800">
            {project.testingAndQuality.testCount !== undefined && (
              <span className="text-emerald-400 font-semibold">
                Test Count: {project.testingAndQuality.testCount} automated tests
              </span>
            )}
            {project.testingAndQuality.coverage && (
              <span className="text-cyan-400 font-semibold">
                Coverage: {project.testingAndQuality.coverage}
              </span>
            )}
            <span className="text-slate-400">
              Frameworks: {project.testingAndQuality.frameworks.join(', ')}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
              Verified Test Suites:
            </span>
            {project.testingAndQuality.verifiedSuite.map((suite, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                <span className="text-emerald-400">✓</span>
                <span>{suite}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Limitations (Honest Disclosure!) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h2 className="text-xl font-bold text-white tracking-tight">
            Documented Limitations & Scope Constraints
          </h2>
        </div>
        <div className="p-6 rounded-xl bg-amber-950/10 border border-amber-800/30 space-y-3">
          <p className="text-xs text-amber-200/90 leading-relaxed mb-2 font-mono">
            Engineering honesty: Every system has constraints. The following known limitations are explicitly documented:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.limitations.map((limitation, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs font-mono hover:bg-cyan-400"
        >
          <span>View on GitHub</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
