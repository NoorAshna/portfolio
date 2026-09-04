"use client";

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Server, Database, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-500/30 text-brand-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
              <span>Full Stack Developer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building Scalable <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                MERN & .NET Core
              </span> Applications
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hi, I&apos;m <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. Experienced backend and full-stack software engineer specializing in NestJS, Next.js, React, Node.js, and .NET Core. I craft performant APIs, high-throughput microservices, and elegant UI workflows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 glass-panel hover:bg-slate-800/80 rounded-xl transition-all border border-slate-700 hover:border-slate-500 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5 text-brand-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Tech Badge Strip */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm font-medium">
              <span className="text-slate-500 uppercase text-xs tracking-wider font-semibold">Core Stack:</span>
              <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <Code2 className="w-4 h-4 text-brand-400" /> Next.js / React
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <Server className="w-4 h-4 text-indigo-400" /> NestJS / Node.js
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <Database className="w-4 h-4 text-emerald-400" /> PostgreSQL / Redis
              </div>
            </div>
          </div>

          {/* Right Visual Card / Code Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md glass-panel rounded-2xl p-6 border border-slate-800 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-400">developer_profile.ts</span>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                <p className="text-slate-500">// Software Engineer Overview</p>
                <p>
                  <span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-300">&quot;Noor Ahmad&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">education:</span> <span className="text-emerald-300">&quot;BS Software Engineering (FAST NUCES)&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">primaryRoles:</span> [
                </p>
                <p className="pl-8 text-amber-300">&quot;Backend Engineer (Node/Nest)&quot;,</p>
                <p className="pl-8 text-amber-300">&quot;Full Stack MERN & .NET&quot;</p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-slate-400">keySpecialties:</span> [
                </p>
                <p className="pl-8 text-sky-300">&quot;Stripe Payments&quot;, &quot;Redis Caching&quot;,</p>
                <p className="pl-8 text-sky-300">&quot;High-Throughput APIs&quot;, &quot;CI/CD&quot;</p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-green-400">&quot;Open to high-impact roles&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Stat badges */}
              <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 bg-slate-900/50 rounded-lg">
                  <div className="text-lg font-bold text-brand-400">3+</div>
                  <div className="text-[11px] text-slate-400">Yrs Exp</div>
                </div>
                <div className="p-2 bg-slate-900/50 rounded-lg">
                  <div className="text-lg font-bold text-blue-400">8+</div>
                  <div className="text-[11px] text-slate-400">Projects</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
