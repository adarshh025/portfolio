import React, { useState } from 'react';
import { 
  Mail, 
  Code2, 
  ExternalLink, 
  Copy, 
  Check, 
  Send, 
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import { profileData } from '../data/profileData';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    if (profileData.socials.email) {
      navigator.clipboard.writeText(profileData.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Professional Inquiries & Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Open to technical discussions, machine learning and cybersecurity roles, research collaborations, and open-source development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Verified Profiles Column */}
        <div className="space-y-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Verified Profiles
          </h2>

          {/* GitHub Card */}
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-200 group-hover:text-white">
                <GithubIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  GitHub
                </h3>
                <p className="text-xs font-mono text-slate-400">@adarshh025 • 7 Repositories</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300">
                <LinkedinIcon size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-xs font-mono text-slate-400">Adarsh Aher Profile</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </a>

          {/* LeetCode Card */}
          <a
            href={profileData.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-950/30 border border-amber-800/40 flex items-center justify-center text-amber-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                  LeetCode
                </h3>
                <p className="text-xs font-mono text-slate-400">@adarshh025 • 102 Solved (27 Hard)</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
          </a>

          {/* Email Copy Card */}
          {profileData.socials.email && (
            <div className="p-4 rounded-xl bg-[#0c1220] border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Email Address:</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-mono transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm font-mono text-white font-medium pl-6">
                {profileData.socials.email}
              </p>
            </div>
          )}

        </div>

        {/* Message Dispatch Form */}
        <div className="p-6 rounded-2xl bg-[#0c1220] border border-slate-800">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Send a Direct Message
          </h2>

          {formSubmitted ? (
            <div className="p-6 text-center space-y-3 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="text-base font-bold text-white">Message Prepared</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Thank you for reaching out, {formData.name}. You can also connect directly on LinkedIn or via email at {profileData.socials.email}.
              </p>
              <button
                onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                className="mt-2 text-xs font-mono text-cyan-400 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Rivera"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Opportunity / Collaboration"
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Adarsh, I reviewed your work on InvoiceIQ and SecuriScan-AI..."
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};
