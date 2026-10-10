import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';
import { experienceData } from '../data/experienceData';
import { Badge } from '../components/ui/Badge';

export const ExperiencePage: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Work Experience':
        return <Briefcase className="w-5 h-5 text-cyan-400" />;
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career & Academic Milestones</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Experience & Education
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Verifiable record of engineering internships, hackathons, and academic education in Computer Science & Engineering (AI & ML).
        </p>
      </div>

      {/* Visual Timeline */}
      <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-6 space-y-10">
        {experienceData.map((item) => (
          <div key={item.id} className="relative pl-6 sm:pl-8 group">
            
            {/* Timeline Dot with Icon */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shadow-md group-hover:border-cyan-400 transition-colors">
              {getIcon(item.type)}
            </div>

            {/* Content Card */}
            <div className="p-6 rounded-xl bg-[#0c1220] border border-slate-800 group-hover:border-slate-700 transition-all space-y-4">
              
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold block mb-0.5">
                    {item.organization}
                  </span>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {item.role}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={item.type === 'Work Experience' ? 'cyan' : item.type === 'Hackathon' ? 'amber' : 'purple'}>
                    {item.duration}
                  </Badge>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/50">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Location & Period info */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {item.period}
                </span>
                {item.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                )}
              </div>

              {/* Summary Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 font-semibold block">
                  KEY RESPONSIBILITIES & CONTRIBUTIONS:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 text-slate-400 rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
