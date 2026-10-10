import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Terminal, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen,
  Compass,
  FileText
} from 'lucide-react';
import { profileData } from '../data/profileData';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
          <User className="w-3.5 h-3.5" />
          <span>Background & Engineering Perspective</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          About Me
        </h1>
        <p className="text-base font-mono text-cyan-400">
          Adarsh Aher • {profileData.role}
        </p>
      </div>

      {/* Narrative Section */}
      <section className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
        {profileData.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx}>
            {paragraph}
          </p>
        ))}
      </section>

      {/* Academic Profile Card */}
      <div className="p-6 rounded-xl bg-[#0c1220] border border-slate-800 space-y-4">
        <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>Academic Foundation & Degree Track</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div>
            <span className="text-slate-500 font-mono block">Institution:</span>
            <span className="text-white font-medium">Sandip University (Maharashtra, India)</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">Degree & Major:</span>
            <span className="text-white font-medium">B.Tech in Artificial Intelligence & Machine Learning</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">Academic Status:</span>
            <span className="text-white font-medium">Second Year (2024 – 2028 expected)</span>
          </div>
          <div>
            <span className="text-slate-500 font-mono block">Industry & Leadership:</span>
            <span className="text-white font-medium">Intern @ Persevex • Campus Ambassador @ Paytm</span>
          </div>
          <div className="sm:col-span-2 pt-2 border-t border-slate-800/80">
            <span className="text-slate-500 font-mono block">Flagship Passion Project:</span>
            <span className="text-cyan-300 font-medium">Vernacular</span>
            <span className="text-slate-400 text-xs block mt-0.5">
              An interpreted, dynamically typed, actor-first programming language built around message-driven structure and isolated state encapsulation (currently in final pre-release testing).
            </span>
          </div>
        </div>
      </div>

      {/* Core Engineering Principles */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Compass className="w-5 h-5 text-cyan-400" />
          <span>Engineering Principles</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profileData.principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2"
            >
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{principle.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Habits & Continuous Learning */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Terminal className="w-5 h-5 text-amber-400" />
          <span>Ongoing Learning & Problem Solving</span>
        </h2>

        <div className="space-y-4">
          {profileData.learningInterests.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0c1220] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    [{item.platform}]
                  </span>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-300 hover:underline shrink-0"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs font-mono hover:bg-cyan-400"
        >
          <span>View Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          to="/resume"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono hover:text-white"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Printable Resume</span>
        </Link>
      </div>

    </div>
  );
};
