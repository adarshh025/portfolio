import React from 'react';
import { 
  Code2, 
  CheckCircle2, 
  ExternalLink, 
  Layers, 
  TrendingUp,
  Brain,
  Hash
} from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { leetcodeData } from '../data/leetcodeData';
import { MetricCard } from '../components/ui/MetricCard';
import { Badge } from '../components/ui/Badge';

export const LeetCodePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-800/50 text-amber-400 text-xs font-mono mb-4">
          <Code2 className="w-3.5 h-3.5" />
          <span>Algorithmic Problem Solving</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          LeetCode & Algorithmic Practice
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Daily problem-solving practice focused on mastering dynamic programming transitions, state space search graphs, monotonic data structures, and asymptotic complexity boundaries.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <a
            href={leetcodeData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-semibold text-xs sm:text-sm font-mono hover:bg-amber-400 transition-all shadow-sm"
          >
            <Code2 className="w-4 h-4" />
            <span>LeetCode Profile (@{leetcodeData.username})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={leetcodeData.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 text-xs sm:text-sm font-mono transition-all"
          >
            <GithubIcon size={16} />
            <span>leetcode-solves Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>

      {/* Verified Metric Telemetry */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          label="Total Problems Solved"
          value={leetcodeData.verifiedSolved}
          subtext="Verified on LeetCode API"
          icon={<Code2 className="w-5 h-5" />}
          verifiedLabel="Live GraphQL"
          variant="amber"
        />
        <MetricCard
          label="Hard Problem Solves"
          value={leetcodeData.hardSolved}
          subtext="26.5% of all solved problems"
          icon={<Brain className="w-5 h-5" />}
          verifiedLabel="27 Verified"
          variant="purple"
        />
        <MetricCard
          label="Medium Solves"
          value={leetcodeData.mediumSolved}
          subtext="Core patterns & state graphs"
          icon={<TrendingUp className="w-5 h-5" />}
          verifiedLabel="32 Verified"
          variant="cyan"
        />
        <MetricCard
          label="Easy Solves"
          value={leetcodeData.easySolved}
          subtext="Language idioms & primitives"
          icon={<CheckCircle2 className="w-5 h-5" />}
          verifiedLabel="43 Verified"
          variant="emerald"
        />
      </div>

      {/* Difficulty Breakdown Bar */}
      <div className="p-6 rounded-xl bg-[#0c1220] border border-slate-800 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          <span className="font-semibold">SOLVED DIFFICULTY DISTRIBUTION</span>
          <span className="text-slate-400">Total: {leetcodeData.verifiedSolved} (Submissions: {leetcodeData.totalSubmissions})</span>
        </div>

        {/* Visual Bar */}
        <div className="h-4 w-full rounded-full bg-slate-900 flex overflow-hidden border border-slate-800">
          <div
            style={{ width: `${(leetcodeData.easySolved / leetcodeData.verifiedSolved) * 100}%` }}
            className="bg-emerald-500 hover:opacity-90 transition-opacity"
            title={`Easy: ${leetcodeData.easySolved}`}
          ></div>
          <div
            style={{ width: `${(leetcodeData.mediumSolved / leetcodeData.verifiedSolved) * 100}%` }}
            className="bg-amber-500 hover:opacity-90 transition-opacity"
            title={`Medium: ${leetcodeData.mediumSolved}`}
          ></div>
          <div
            style={{ width: `${(leetcodeData.hardSolved / leetcodeData.verifiedSolved) * 100}%` }}
            className="bg-rose-500 hover:opacity-90 transition-opacity"
            title={`Hard: ${leetcodeData.hardSolved}`}
          ></div>
        </div>

        <div className="flex items-center justify-between text-xs font-mono pt-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-slate-300">Easy: {leetcodeData.easySolved} (42%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="text-slate-300">Medium: {leetcodeData.mediumSolved} (31%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            <span className="text-slate-300">Hard: {leetcodeData.hardSolved} (27%)</span>
          </div>
        </div>
      </div>

      {/* Topics Breakdown */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <span>Key Algorithmic Topics & Representative Problems</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {leetcodeData.topicBreakdown.map((item) => (
            <div
              key={item.topic}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{item.topic}</span>
                <span className="text-xs font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/50">
                  {item.verifiedCount}+ solves
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Representative: {item.representativeProblem}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Solutions Table */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Hash className="w-5 h-5 text-cyan-400" />
            <span>Curated High-Complexity Solutions in Repository</span>
          </h2>
          <span className="text-xs font-mono text-slate-500">89 total repo directories</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0c1220]">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-900/90 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="py-3 px-4 font-semibold">#</th>
                <th className="py-3 px-4 font-semibold">Problem Title</th>
                <th className="py-3 px-4 font-semibold">Difficulty</th>
                <th className="py-3 px-4 font-semibold">Time Complexity</th>
                <th className="py-3 px-4 font-semibold">Space Complexity</th>
                <th className="py-3 px-4 font-semibold text-right">Repo Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {leetcodeData.curatedSolutions.map((sol) => (
                <tr key={sol.number} className="hover:bg-slate-900/40 transition-colors">
                  <td className="py-3 px-4 text-slate-500">{sol.number}</td>
                  <td className="py-3 px-4 font-sans font-medium text-slate-200">
                    <div>{sol.title}</div>
                    <div className="flex gap-1 mt-1">
                      {sol.topics.map((t) => (
                        <span key={t} className="text-[10px] bg-slate-950 text-slate-400 px-1.5 py-0.2 rounded border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={sol.difficulty === 'Hard' ? 'rose' : sol.difficulty === 'Medium' ? 'amber' : 'emerald'}>
                      {sol.difficulty}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-cyan-400">{sol.timeComplexity}</td>
                  <td className="py-3 px-4 text-slate-400">{sol.spaceComplexity}</td>
                  <td className="py-3 px-4 text-right">
                    <a
                      href={`https://github.com/adarshh025/leetcode-solves/tree/main/${sol.repoDirectory}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
                      title="View solution file"
                    >
                      <span>Code</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
