"use client";

import React, { useState } from "react";
import { EDUCATION, LANGUAGES, PERSONAL_INFO } from "@/data/portfolioData";
import {
  GraduationCap,
  Globe,
  Terminal,
  GitBranch,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function About() {
  const [selectedLang, setSelectedLang] = useState(0);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Personal Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span>01 // ENGINEER DNA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Behind the terminal.
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            FAST NUCES Islamabad graduate combining solid software engineering
            fundamentals with modern full-stack & applied AI execution.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Bento Card 1: First-Person Narrative (7 cols) */}
          <div className="lg:col-span-7 craft-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  ~/about/readme.md
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  3+ Years Production Experience
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                Owning features from relational schema & async queues to pixel-clean
                React/Next.js interfaces.
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* What I bring to an engineering team */}
            <div className="pt-5 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2.5 text-zinc-200 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>API Design & High-Concurrency Node/NestJS/Fastify</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-200 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>RAG, LangChain, pgvector & Semantic Search</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-200 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Telnyx, Twilio Telephony & Stripe Webhooks</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-200 bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Redis Caching, BullMQ Workers & Automated CI/CD</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Base of Operations & Interactive Language Switcher (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Location & Coordinates Card */}
            <div className="craft-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>BASE OF OPERATIONS</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {PERSONAL_INFO.timezone}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-xl font-bold text-white">
                    Islamabad & Lahore, PK
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    Remote-ready across US / EU / MENA timezones
                  </div>
                </div>
                <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono text-xs text-emerald-400 font-bold">
                  PK
                </div>
              </div>
            </div>

            {/* Interactive Spoken Languages Card */}
            <div className="craft-card rounded-2xl p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>SPOKEN LANGUAGES</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  Click to preview
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {LANGUAGES.map((lang, idx) => (
                  <button
                    key={lang.name}
                    onClick={() => setSelectedLang(idx)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedLang === idx
                        ? "bg-emerald-500/15 border-emerald-500/40 text-white"
                        : "bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>{lang.code}</span>
                      <span className="text-emerald-400">{lang.level}</span>
                    </div>
                    <div className="font-display font-bold text-sm mt-1">
                      {lang.name}
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/90 border border-zinc-800/90 text-xs font-mono text-emerald-300 flex items-center justify-between">
                <span>&gt; {LANGUAGES[selectedLang].greeting}</span>
                <span className="text-[10px] text-zinc-500">
                  {LANGUAGES[selectedLang].name} ({LANGUAGES[selectedLang].level})
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Academic Foundation (Full 12 cols split into 2 rich cards) */}
          <div className="lg:col-span-12 craft-card rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-6 border-b border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Academic Credentials & Core Engineering Coursework
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Rigorous computer science & software architecture training
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                2018 – 2024
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {EDUCATION.map((edu, index) => (
                <div
                  key={edu.institution}
                  className={`${
                    index === 0 ? "md:col-span-8" : "md:col-span-4"
                  } p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/90 flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {edu.period}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {edu.badge}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-bold text-white pt-1">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-medium text-emerald-400">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-950/80 text-zinc-300 border border-zinc-800"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
