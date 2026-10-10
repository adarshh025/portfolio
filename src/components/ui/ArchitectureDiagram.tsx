import React from 'react';
import type { ProjectArchitecture } from '../../types';
import { ArrowDown, Layers, Terminal } from 'lucide-react';
import { Badge } from './Badge';

interface ArchitectureDiagramProps {
  architecture: ProjectArchitecture;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ architecture }) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0d1322]/80 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800/80">
        <Layers className="w-5 h-5 text-cyan-400" />
        <h3 className="font-semibold text-slate-100 text-base">{architecture.title}</h3>
      </div>

      <div className="relative space-y-4">
        {architecture.flowSteps.map((step, idx) => (
          <React.Fragment key={step.number}>
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors group">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-md bg-cyan-950/70 border border-cyan-800/70 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 group-hover:border-cyan-400 transition-colors">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-medium text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                  {step.moduleOrFile && (
                    <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-800">
                      <Terminal className="w-3 h-3 text-cyan-500" />
                      <span>{step.moduleOrFile}</span>
                    </div>
                  )}
                </div>
              </div>

              {step.technology && (
                <div className="sm:self-center shrink-0 pl-10 sm:pl-0">
                  <Badge variant="cyan" size="sm">
                    {step.technology}
                  </Badge>
                </div>
              )}
            </div>

            {idx < architecture.flowSteps.length - 1 && (
              <div className="flex justify-center py-0.5">
                <ArrowDown className="w-4 h-4 text-slate-600 animate-pulse" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
