"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowUpRight,
  Terminal,
  FileText,
  Github,
  Linkedin,
  Copy,
  Check,
  Sparkles,
  Cpu,
  Database,
  PhoneCall,
  Play,
  Layers,
  Command,
} from "lucide-react";

type WorkbenchTab = "terminal" | "rag" | "telephony";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<WorkbenchTab>("terminal");
  const [selectedCmd, setSelectedCmd] = useState<number>(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const terminalCommands = [
    {
      cmd: "whoami --verbose",
      output: [
        "name       : Noor Ahmad",
        "education  : BS Software Engineering @ FAST NUCES Islamabad (2020-2024)",
        "experience : 3+ Years (Mars Digital, TechFlo, Freelance)",
        "core_stack : React, Next.js, Node.js, NestJS, Express.js, Fastify",
        "data_layer : PostgreSQL, pgvector, Redis, BullMQ, MongoDB",
        "ai_focus   : LLM APIs, LangChain, Gemini 768-d RAG, Semantic Search",
      ],
    },
    {
      cmd: "inspect --project docmind-rag",
      output: [
        "[INGEST] PDF uploaded -> BullMQ worker queued (Redis retry-enabled)",
        "[CHUNK]  Extracted text -> semantic chunks -> Google Gemini API",
        "[VECTOR] Stored 768-dimensional embeddings in PostgreSQL (pgvector)",
        "[QUERY]  Cosine similarity retrieval -> context-grounded answer + citations",
      ],
    },
    {
      cmd: "inspect --project callloom",
      output: [
        "[CARRIER] Inbound call webhook via Telnyx / Twilio -> NestJS & Fastify",
        "[CACHE]   Hot session & routing state resolved via Redis (<5ms latency)",
        "[AI-QA]   Call transcript summarized + lead-quality score persisted to PG",
        "[CI/CD]   Automated test suite, build & zero-downtime deployment pipeline",
      ],
    },
    {
      cmd: "cat contact.json",
      output: [
        "{",
        `  "email": "${PERSONAL_INFO.email}",`,
        `  "phone": "${PERSONAL_INFO.phone}",`,
        `  "github": "github.com/NoorAshna",`,
        `  "linkedin": "linkedin.com/in/noor-ahmed-b788a818a",`,
        '  "availability": "Ready for Full Stack & Backend engineering roles"',
        "}",
      ],
    },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient Radial Accents */}
      <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[520px] h-[420px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-[420px] h-[380px] bg-violet-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Personal Narrative & Identity */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            {/* Top Status & Coordinate Bar */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Noor Ahmad
              </span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300">Full Stack Engineer</span>
              <span className="text-zinc-600 hidden sm:inline">/</span>
              <span className="text-amber-400/90 hidden sm:inline">
                FAST Islamabad ’24
              </span>
            </div>

            {/* Expressive Personal Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.08]">
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                production backends
              </span>
              , full-stack apps &{" "}
              <span className="underline decoration-emerald-500/40 decoration-wavy underline-offset-8">
                AI-powered RAG
              </span>{" "}
              workflows.
            </h1>

            {/* First-Person Bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              I&apos;m <strong className="text-white font-semibold">Noor Ahmad</strong>, a
              Full Stack Engineer and Software Engineering graduate from{" "}
              <span className="text-zinc-100 font-medium">FAST NUCES Islamabad</span> with{" "}
              <span className="text-emerald-400 font-mono text-sm font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                3+ years
              </span>{" "}
              of hands-on experience across{" "}
              <span className="text-zinc-100">
                React, Next.js, Node.js, NestJS, and Express/Fastify
              </span>
              . From high-throughput telephony & Stripe billing pipelines to{" "}
              <span className="text-zinc-100">
                LLM document Q&A, semantic search, and pgvector RAG systems
              </span>
              — I own features end-to-end from schema to production CI/CD.
            </p>

            {/* Primary Actions & Copyable Email Pill */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5"
              >
                <span>Explore 5 Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-resume-modal"))
                }
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 text-zinc-100 border border-zinc-800 hover:border-emerald-500/40 font-mono text-xs sm:text-sm font-medium transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Read Full Resume</span>
              </button>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-zinc-900/70 hover:bg-zinc-900 text-zinc-300 border border-zinc-800/90 font-mono text-xs transition-all"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Architectural Pillars Strip */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">
                    Node / NestJS / Fastify
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Redis caching, BullMQ workers & PostgreSQL
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">
                    AI & RAG Systems
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    LangChain, Gemini 768-d vectors, pgvector & NLP
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white">
                    Telephony & Payments
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Telnyx, Twilio webhooks & Stripe subscriptions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engineer Workbench */}
          <div className="lg:col-span-5 w-full">
            <div className="craft-card rounded-2xl overflow-hidden border border-zinc-800">
              {/* Window Top Bar with Tabs */}
              <div className="bg-zinc-950/90 px-4 py-3 border-b border-zinc-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* Switchable Workbench Tabs */}
                <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "terminal"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    terminal.sh
                  </button>
                  <button
                    onClick={() => setActiveTab("rag")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "rag"
                        ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    rag_flow.ts
                  </button>
                  <button
                    onClick={() => setActiveTab("telephony")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeTab === "telephony"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    callloom.ts
                  </button>
                </div>
              </div>

              {/* Tab 1: Interactive Terminal Shell */}
              {activeTab === "terminal" && (
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span>noor@fast-nuces:~/portfolio$</span>
                    <span className="text-emerald-400/80">● Interactive CLI</span>
                  </div>

                  {/* Clickable Preset Command Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {terminalCommands.map((item, idx) => (
                      <button
                        key={item.cmd}
                        onClick={() => setSelectedCmd(idx)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all flex items-center gap-1.5 border ${
                          selectedCmd === idx
                            ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
                            : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-zinc-200"
                        }`}
                      >
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>{item.cmd.split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Command Output Box */}
                  <div className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800/90 space-y-2 min-h-[190px]">
                    <div className="text-emerald-400 flex items-center gap-2">
                      <span>$</span>
                      <span className="text-zinc-100 font-semibold">
                        {terminalCommands[selectedCmd].cmd}
                      </span>
                    </div>
                    <div className="pt-1 space-y-1.5 text-zinc-300 leading-relaxed">
                      {terminalCommands[selectedCmd].output.map((line, i) => (
                        <div key={i} className="text-[11px] sm:text-xs">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Live RAG Architecture Blueprint (DocMind) */}
              {activeTab === "rag" && (
                <div className="p-5 space-y-3.5 font-mono text-xs blueprint-grid">
                  <div className="flex items-center justify-between">
                    <span className="text-violet-300 font-semibold">
                      // DocMind RAG Architecture
                    </span>
                    <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px]">
                      768-dim pgvector
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-zinc-200 font-semibold">
                          1. React PDF Upload & REST API
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Dispatches async ingestion job with status tracking
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
                        Express.js
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-zinc-200 font-semibold">
                          2. Redis + BullMQ Worker Queue
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          PDF extraction, semantic chunking & retry handling
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">
                        BullMQ
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-violet-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-zinc-200 font-semibold">
                          3. LangChain + Google Gemini Embeddings
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          768-dimensional vectors stored in PostgreSQL pgvector
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-300">
                        pgvector
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Telephony & Call Intelligence Flow (CallLoom) */}
              {activeTab === "telephony" && (
                <div className="p-5 space-y-3.5 font-mono text-xs blueprint-grid">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300 font-semibold">
                      // CallLoom Telephony Pipeline
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px]">
                      Mars Digital
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-zinc-200 font-semibold">
                          1. Telnyx & Twilio Inbound Webhooks
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Concurrent call routing, events & Stripe billing
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">
                        Telephony
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-zinc-200 font-semibold">
                          2. NestJS / Fastify + Redis Cache
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Endpoint query optimization & hot session caching
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                        Fastify
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-950/90 border border-emerald-500/30 flex items-center justify-between">
                      <div>
                        <div className="text-zinc-200 font-semibold">
                          3. AI Call Intelligence & PostgreSQL
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          Transcript summaries, lead-quality insights & search
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-violet-500/10 text-violet-300">
                        AI QA
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Status Bar */}
              <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-800/90 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>@NoorAshna</span>
                  </a>
                  <span>·</span>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <span className="text-emerald-400">3+ Yrs Exp · 5 Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
