"use client";

import React, { useState } from "react";
import { PROJECTS, Project, ArchitectureNode } from "@/data/portfolioData";
import {
  ArrowUpRight,
  Github,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  Terminal,
  CheckCircle2,
  LayoutGrid,
  List,
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"blueprint" | "index">("blueprint");

  const categories = ["All", "AI & RAG", "Backend & Telephony", "Full Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const getNodeAccentStyle = (accent?: ArchitectureNode["accent"]) => {
    switch (accent) {
      case "emerald":
        return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
      case "amber":
        return "border-amber-500/30 bg-amber-500/10 text-amber-300";
      case "violet":
        return "border-violet-500/30 bg-violet-500/10 text-violet-300";
      case "cyan":
        return "border-cyan-500/30 bg-cyan-500/10 text-cyan-300";
      default:
        return "border-zinc-700 bg-zinc-900 text-zinc-200";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header + Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span>02 // SELECTED SYSTEMS & ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What I&apos;ve built & shipped.
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
              Production telephony platforms, LLM-powered RAG pipelines with
              pgvector, fine-tuned NLP tools, and full-stack web products.
            </p>
          </div>

          {/* Filter Pills & View Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-800">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1 bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-800">
              <button
                onClick={() => setViewMode("blueprint")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "blueprint"
                    ? "bg-zinc-800 text-emerald-400"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                title="Architecture Blueprint View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("index")}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === "index"
                    ? "bg-zinc-800 text-emerald-400"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                title="Compact Engineering Index"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* View 1: Rich Architecture Case Study Cards */}
        {viewMode === "blueprint" ? (
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="craft-card rounded-2xl overflow-hidden border border-zinc-800/90 group"
              >
                {/* Top Metadata Bar */}
                <div className="px-6 py-3.5 bg-zinc-950/80 border-b border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      SYS // {project.index}
                    </span>
                    <span className="font-mono text-xs text-zinc-300 font-medium">
                      {project.category}
                    </span>
                    {project.affiliation && (
                      <>
                        <span className="text-zinc-700">•</span>
                        <span className="font-mono text-xs text-amber-400/90">
                          {project.affiliation}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs font-mono transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-medium transition-colors"
                      >
                        <span>{project.liveLabel || "Live App"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Main Content Body */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left 7 Cols: Title, Summary, Resume Highlights & Stack */}
                  <div className="lg:col-span-7 space-y-5">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {project.title}{" "}
                        <span className="text-zinc-400 font-normal text-lg sm:text-xl">
                          — {project.tagline}
                        </span>
                      </h3>
                      <p className="text-zinc-300 text-sm sm:text-base mt-2.5 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Engineering Highlights (1:1 from Resume) */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        Engineering Implementation & Impact
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/90 text-zinc-200 border border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right 5 Cols: Interactive System Architecture Pipeline & Specs */}
                  <div className="lg:col-span-5 w-full">
                    <div className="p-5 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 blueprint-grid space-y-4">
                      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                        <span className="text-xs font-mono text-zinc-300 font-semibold flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-emerald-400" />
                          <span>System Data Flow</span>
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          ARCHITECTURE
                        </span>
                      </div>

                      {/* 4-Stage Pipeline Nodes */}
                      <div className="space-y-2.5">
                        {project.architecture.map((node, i) => (
                          <div key={i} className="relative">
                            <div
                              className={`p-3 rounded-xl border ${getNodeAccentStyle(
                                node.accent
                              )} flex items-center justify-between`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="text-[10px] font-mono opacity-75 px-1.5 py-0.5 rounded bg-black/30">
                                  0{i + 1}
                                </span>
                                <span className="font-mono text-xs font-bold">
                                  {node.label}
                                </span>
                              </div>
                              {node.sublabel && (
                                <span className="text-[11px] font-mono opacity-80">
                                  {node.sublabel}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Metrics Row */}
                      {project.metrics && (
                        <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-3 gap-2">
                          {project.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 text-center"
                            >
                              <div className="text-xs font-mono font-bold text-white truncate">
                                {m.value}
                              </div>
                              <div className="text-[10px] font-mono text-zinc-400 mt-0.5 truncate">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* View 2: Sleek Engineering Index Table */
          <div className="craft-card rounded-2xl overflow-hidden border border-zinc-800">
            <div className="divide-y divide-zinc-800/80">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 sm:p-6 hover:bg-zinc-900/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs text-emerald-400">
                        {project.index}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-zinc-400">
                        — {project.tagline}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 text-xs font-mono flex items-center gap-1"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
