import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Code2, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profileData';

export const Footer: React.FC = () => {
  return (
    <footer className="print-hidden border-t border-slate-800/80 bg-[#070a11] text-slate-400 text-sm mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">{profileData.name}</h3>
                <p className="text-xs font-mono text-slate-400">{profileData.role}</p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {profileData.summary}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 text-xs font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Evidence-based portfolio • 100% verified source metrics</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects & Case Studies</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-cyan-400 transition-colors">Experience & Education</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-400 transition-colors">Technical Skills Stack</Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-cyan-400 transition-colors">Cybersecurity Specialization</Link>
              </li>
              <li>
                <Link to="/leetcode" className="hover:text-cyan-400 transition-colors">LeetCode Solves (102)</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-cyan-400 transition-colors">Certifications & Courses</Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-cyan-400 transition-colors">ATS-Friendly Resume</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Profiles */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-4 font-semibold">
              Profiles & Code
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>GitHub: @adarshh025</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={profileData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LeetCode: adarshh025</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <span>Contact Page</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Adarsh Aher. Built with React 19, TypeScript & Tailwind CSS.</p>
          <p className="font-mono text-[11px]">B.Tech CSE in Artificial Intelligence & Machine Learning</p>
        </div>
      </div>
    </footer>
  );
};
