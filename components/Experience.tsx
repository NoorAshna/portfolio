"use client";

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Career History</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h3>
          <p className="text-slate-400 text-base">
            Proven track record of building production backend systems, web apps, and APIs.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden group">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-500 to-blue-600 rounded-l-2xl group-hover:w-2 transition-all" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    {exp.role}
                  </h4>
                  <div className="text-brand-400 font-semibold text-base mt-0.5 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-brand-400" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium w-fit">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Highlights */}
              <ul className="space-y-3 text-slate-300 text-sm">
                {exp.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/80 text-brand-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
