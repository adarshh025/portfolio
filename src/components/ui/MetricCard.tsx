import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  subtext: string;
  icon?: React.ReactNode;
  verifiedLabel?: string;
  variant?: 'cyan' | 'emerald' | 'amber' | 'purple';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  subtext,
  icon,
  verifiedLabel = 'Verified',
  variant = 'cyan'
}) => {
  const borderColors = {
    cyan: 'border-cyan-800/40 hover:border-cyan-500/50',
    emerald: 'border-emerald-800/40 hover:border-emerald-500/50',
    amber: 'border-amber-800/40 hover:border-amber-500/50',
    purple: 'border-purple-800/40 hover:border-purple-500/50'
  };

  const textColors = {
    cyan: 'text-cyan-400',
    emerald: 'text-emerald-400',
    amber: 'text-amber-400',
    purple: 'text-purple-400'
  };

  return (
    <div className={`p-5 rounded-xl bg-[#0e1424]/90 border ${borderColors[variant]} transition-all group relative overflow-hidden`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
          {label}
        </span>
        {icon && <div className={`${textColors[variant]} opacity-80 group-hover:opacity-100 transition-opacity`}>{icon}</div>}
      </div>
      
      <div className="text-3xl font-extrabold tracking-tight text-white mb-1 font-mono">
        {value}
      </div>

      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60">
        <span className="text-xs text-slate-400">{subtext}</span>
        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
          {verifiedLabel}
        </span>
      </div>
    </div>
  );
};
