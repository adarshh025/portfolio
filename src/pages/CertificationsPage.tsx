import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  X, 
  ShieldCheck, 
  Calendar, 
  Hash
} from 'lucide-react';
import { certificationsData } from '../data/certificationsData';
import { Badge } from '../components/ui/Badge';
import type { Certification } from '../types';

export const CertificationsPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/50 text-cyan-400 text-xs font-mono mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Verified Professional Credentials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Certifications & Courses
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Verified credentials in Machine Learning, Python programming, and foundational computer systems, substantiated with official certificate IDs and issuing institution registries.
        </p>
      </div>

      {/* Verified Status Banner */}
      <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 flex items-center justify-between gap-4 text-xs font-mono">
        <div className="flex items-center gap-2 text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>{certificationsData.length} Verified Certificates on File</span>
        </div>
        <span className="text-slate-500 hidden sm:inline">
          ISO 9001 Audited Programs & AICPE Standards
        </span>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="rounded-xl bg-[#0c1220] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between overflow-hidden group hover:shadow-lg hover:shadow-cyan-950/20"
          >
            {/* Certificate Image Thumbnail */}
            {cert.previewImage && (
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative h-44 bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-800 group/thumb"
              >
                <img
                  src={cert.previewImage}
                  alt={cert.name}
                  className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-300 opacity-90 group-hover/thumb:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-cyan-300 flex items-center gap-1 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3" />
                  <span>Inspect</span>
                </div>
              </div>
            )}

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {cert.issuer}
                  </span>
                  <Badge variant="emerald" size="sm">
                    {cert.status}
                  </Badge>
                </div>

                <h2 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h2>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Issued: {cert.issueDate}</span>
                </div>

                {cert.notes && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {cert.notes}
                  </p>
                )}

                {cert.credentialId && (
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 mb-3">
                    <Hash className="w-3 h-3 text-cyan-400" />
                    <span className="text-slate-500">ID:</span>
                    <span className="text-slate-200 select-all">{cert.credentialId}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 text-slate-400 rounded border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                {cert.previewImage && (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Verify Link</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Certificate Inspection */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0c1220] border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-bold text-white">{selectedCert.name}</h3>
                <p className="text-xs font-mono text-cyan-400">{selectedCert.issuer} • {selectedCert.issueDate}</p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedCert.previewImage && (
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center max-h-[70vh]">
                <img
                  src={selectedCert.previewImage}
                  alt={selectedCert.name}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
              {selectedCert.credentialId && (
                <span>Credential ID: <strong className="text-slate-200">{selectedCert.credentialId}</strong></span>
              )}
              {selectedCert.credentialUrl && (
                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline"
                >
                  <span>Verification Registry</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
