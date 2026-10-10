import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-cyan-950/40 border border-cyan-800/60 text-cyan-400 flex items-center justify-center mx-auto">
        <Terminal className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 font-semibold block">
          ERROR 404: ROUTE NOT FOUND
        </span>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Page Does Not Exist
        </h1>
        <p className="text-xs text-slate-400 leading-relaxed">
          The requested path does not map to any active routes or case studies in this portfolio.
        </p>
      </div>

      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs font-mono hover:bg-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
