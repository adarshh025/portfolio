import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Terminal
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { projectsData } from '../data/projectsData';
import type { ProjectCategory } from '../types';
import { Badge } from '../components/ui/Badge';

const categories: ('All' | ProjectCategory)[] = [
  'All',
  'Language Design & Systems',
  'Machine Learning',
  'Cybersecurity',
  'Mobile & Distributed Systems',
  'NLP & Document AI',
  'Computer Vision',
  'DSA & Algorithms'
];

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const getCategoryBadgeVariant = (category: ProjectCategory) => {
    switch (category) {
      case 'Language Design & Systems': return 'purple';
      case 'Cybersecurity': return 'emerald';
      case 'Machine Learning': return 'cyan';
      case 'Mobile & Distributed Systems': return 'purple';
      case 'NLP & Document AI': return 'amber';
      case 'Computer Vision': return 'cyan';
      case 'DSA & Algorithms': return 'amber';
      default: return 'default';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Case Studies & Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Engineering Projects
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Comprehensive directory of practical machine learning pipelines, defensive cybersecurity tools, offline-first mobile apps, and algorithmic problem solving. Every repository is audited from public source code with verified test suites and documented limitations.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, technology (e.g. OpenCV, CRDT, FastAPI)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-900/90 border border-slate-800 rounded-lg text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2 self-end md:self-auto">
            <span>Showing {filteredProjects.length} of {projectsData.length} projects</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projectsData.length 
              : projectsData.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-900/20 text-slate-900' : 'bg-slate-800 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-xl border border-slate-800 bg-slate-900/40">
          <Terminal className="w-8 h-8 text-slate-500 mx-auto mb-3" />
          <p className="text-sm font-mono text-slate-300 mb-2">No projects matched your query</p>
          <p className="text-xs text-slate-500 mb-4">Try clearing filters or searching for different keywords.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="px-3 py-1.5 text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-md hover:bg-cyan-900"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col justify-between rounded-xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all p-6 group hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={getCategoryBadgeVariant(project.category)}>
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.year} • {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  <Link to={`/projects/${project.slug}`}>
                    {project.name}
                  </Link>
                </h2>

                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.shortDescription}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 mb-5 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-semibold mb-1">
                    KEY ENGINEERING HIGHLIGHTS:
                  </span>
                  {project.engineeringHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-900 text-slate-400 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Technical Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-amber-300 inline-flex items-center gap-1"
                    >
                      <span>Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white font-mono transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <GithubIcon size={14} />
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

    </div>
  );
};
