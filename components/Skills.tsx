"use client";

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Code2, Cpu, Database, Cloud, CheckCircle } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 1: return <Code2 className="w-5 h-5 text-brand-400" />;
      case 2: return <Database className="w-5 h-5 text-emerald-400" />;
      case 3: return <Cloud className="w-5 h-5 text-sky-400" />;
      default: return <CheckCircle className="w-5 h-5 text-brand-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Technical Proficiency</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Tech Stack
          </h3>
          <p className="text-slate-400 text-base">
            Comprehensive tools, frameworks, and technologies I work with daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={cat.category} className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                {getCategoryIcon(idx)}
                <h4 className="text-xl font-bold text-white">{cat.category}</h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center gap-2 hover:border-brand-500/40 hover:bg-slate-900 transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-400 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
