import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'emerald' | 'amber' | 'purple' | 'slate' | 'rose';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) => {
  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/80',
    cyan: 'bg-cyan-950/50 text-cyan-300 border-cyan-800/60',
    emerald: 'bg-emerald-950/50 text-emerald-300 border-emerald-800/60',
    amber: 'bg-amber-950/50 text-amber-300 border-amber-800/60',
    purple: 'bg-purple-950/50 text-purple-300 border-purple-800/60',
    slate: 'bg-slate-900/60 text-slate-400 border-slate-800',
    rose: 'bg-rose-950/50 text-rose-300 border-rose-800/60'
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-2.5 py-1 text-xs'
  };

  return (
    <span
      className={`inline-flex items-center font-mono font-medium rounded border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
