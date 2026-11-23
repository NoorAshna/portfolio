"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import {
  GitCommit,
  Calendar,
  Briefcase,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span>03 // CAREER CHANGELOG</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Where I&apos;ve contributed.
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            3+ years shipping production full-stack applications, backend APIs,
            telephony workflows, and relational data models.
          </p>
        </div>

        {/* Git-Style Engineering Log Timeline */}
        <div className="relative space-y-6 before:hidden md:before:block before:absolute before:top-4 before:bottom-4 before:left-[138px] before:w-px before:bg-zinc-800">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              {/* Left Column: Commit Hash & Period */}
              <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 pt-2 md:pr-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
                  <GitCommit className="w-3.5 h-3.5" />
                  <span>{exp.commitHash}</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 md:text-right">
                  {exp.period}
                </div>
                <span className="hidden md:inline-block text-[11px] font-mono text-zinc-500 md:text-right">
                  {exp.type}
                </span>
              </div>

              {/* Right Column: Experience Card */}
              <div className="md:col-span-9 craft-card rounded-2xl p-6 sm:p-8 space-y-5 relative">
                {/* Timeline node marker on desktop */}
                <div
                  className={`hidden md:flex absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full border-2 ${
                    idx === 0
                      ? "bg-emerald-400 border-emerald-950 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                      : "bg-zinc-900 border-emerald-500/60"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800/80">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-emerald-400 font-mono text-sm font-medium mt-0.5">
                      @ {exp.company}
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800 w-fit">
                    {exp.type}
                  </span>
                </div>

                {/* Bullet Achievements (1:1 from Resume) */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed"
                    >
                      <span className="font-mono text-xs text-emerald-400 mt-0.5 select-none">
                        +
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills / Stack Pills */}
                <div className="pt-3 border-t border-zinc-800/70 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-950/80 text-zinc-300 border border-zinc-800/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
