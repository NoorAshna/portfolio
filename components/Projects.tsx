"use client";

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ExternalLink, Github, Layers, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Backend', 'AI / NLP', 'Web'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-semibold text-brand-400 uppercase tracking-widest">Portfolio Showcase</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects & Work
          </h3>
          <p className="text-slate-400 text-base">
            Selection of real-world client platforms, full-stack web applications, and backend systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-5 border border-slate-800/80 relative group"
            >
              {/* Category & Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Layers className="w-3.5 h-3.5" />
                  {project.category}
                </span>

                {project.featured && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    <Sparkles className="w-3 h-3" /> Featured
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-2.5">
                <h4 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                </h4>
                <p className="text-xs font-medium text-slate-400">{project.subtitle}</p>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Key Highlights:</p>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-400 font-bold">•</span>
                      <span className="line-clamp-2">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-sm">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository</span>
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 italic">Client Enterprise Code</span>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
