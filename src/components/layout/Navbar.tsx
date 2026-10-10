import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Menu, 
  X, 
  Code2, 
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profileData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Cybersecurity', path: '/security' },
  { name: 'LeetCode', path: '/leetcode' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/85 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Tag */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-semibold text-slate-100 group-hover:text-white tracking-tight flex items-center gap-1.5 text-sm sm:text-base">
                {profileData.name}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="block text-[11px] font-mono text-slate-400 tracking-wider">
                ML & SECURITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                    active
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60 shadow-sm'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Medium Screens (lg) Compact Navigation */}
          <nav className="hidden md:flex xl:hidden items-center gap-1">
            {[
              { name: 'Projects', path: '/projects' },
              { name: 'Experience', path: '/experience' },
              { name: 'Skills', path: '/skills' },
              { name: 'Security', path: '/security' },
              { name: 'LeetCode', path: '/leetcode' },
              { name: 'Resume', path: '/resume' },
              { name: 'About', path: '/about' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/60'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Quick Links & Resume */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 rounded-lg transition-colors border border-transparent hover:border-slate-700"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2 text-slate-400 hover:text-amber-400 hover:bg-amber-950/20 rounded-lg transition-colors border border-transparent hover:border-amber-800/40"
              title="102 Verified Solves"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <Link
              to="/resume"
              className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/resume"
              className="px-2.5 py-1 text-[11px] font-mono rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
            >
              Resume
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0c121e]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-1">
          <div className="grid grid-cols-2 gap-1 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    active
                      ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-800/60'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-around">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-amber-400/90 hover:text-amber-300"
            >
              <Code2 className="w-4 h-4" /> LeetCode (102)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
