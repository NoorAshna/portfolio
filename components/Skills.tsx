"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code2,
  Cpu,
  Database,
  Sparkles,
  Wrench,
  Layers,
  Terminal,
} from "lucide-react";

export default function Skills() {
  const [selectedProjectFilter, setSelectedProjectFilter] = useState<
    string | null
  >(null);

  const projectFilters = [
    "CallLoom",
    "DocMind",
    "CognizDraw",
    "MOVD",
    "BlindPak",
  ];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "frontend":
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "backend":
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case "databases":
        return <Database className="w-4 h-4 text-emerald-400" />;
      case "ai-search":
        return <Sparkles className="w-4 h-4 text-violet-400" />;
      case "devops-tools":
        return <Wrench className="w-4 h-4 text-rose-400" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header + Interactive Project Highlighter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span>04 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Tools I ship with.
            </h2>
            <p className="text-sm text-zinc-400 mt-1.5 max-w-xl">
              Click any project below to highlight the exact stack powering it in
              production.
            </p>
          </div>

          {/* Interactive Project Stack Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-800">
            <button
              onClick={() => setSelectedProjectFilter(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedProjectFilter === null
                  ? "bg-emerald-500 text-zinc-950 font-bold"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              All Stack
            </button>
            {projectFilters.map((proj) => (
              <button
                key={proj}
                onClick={() =>
                  setSelectedProjectFilter(
                    selectedProjectFilter === proj ? null : proj
                  )
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedProjectFilter === proj
                    ? "bg-emerald-500 text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {proj}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Category Stack Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="craft-card rounded-2xl p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {cat.code}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.items.map((item) => {
                  const isHighlighted =
                    !selectedProjectFilter ||
                    item.usedIn.includes(selectedProjectFilter);

                  return (
                    <div
                      key={item.name}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 ${
                        selectedProjectFilter
                          ? isHighlighted
                            ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-200 shadow-sm"
                            : "bg-zinc-950/40 border-zinc-900 text-zinc-600 opacity-40"
                          : "bg-zinc-900/80 border-zinc-800 text-zinc-200 hover:border-emerald-500/40 hover:text-white"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isHighlighted ? "bg-emerald-400" : "bg-zinc-700"
                        }`}
                      />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
