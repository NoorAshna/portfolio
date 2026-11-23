"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Terminal,
  ArrowUpRight,
  FileText,
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span>05 // DIRECT CHANNEL</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s build something together.
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Open to Full Stack & Backend engineering roles, AI/RAG product
            work, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Direct Endpoints */}
          <div className="lg:col-span-5 space-y-4">
            {/* Availability Status Banner */}
            <div className="craft-card rounded-2xl p-5 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <div className="text-xs font-mono font-bold text-white">
                    {PERSONAL_INFO.status}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-400">
                    Fast response via Email, LinkedIn or WhatsApp
                  </div>
                </div>
              </div>
            </div>

            {/* Email Endpoint */}
            <div className="craft-card rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    Primary Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-mono font-bold text-white hover:text-emerald-400 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Endpoint */}
            <div className="craft-card rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Profiles & Interactive Resume Trigger */}
            <div className="craft-card rounded-2xl p-5 space-y-4">
              <div className="text-[11px] font-mono text-zinc-400 uppercase">
                Profiles & Resume Sheet
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-zinc-300" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>

              <button
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-resume-modal"))
                }
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View & Print Full Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Terminal-Styled Message Dispatch */}
          <div className="lg:col-span-7">
            <div className="craft-card rounded-2xl overflow-hidden border border-zinc-800">
              <div className="px-5 py-3.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>dispatch_message.sh</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">
                  to: {PERSONAL_INFO.email}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white">
                      Payload Delivered
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto">
                      Thanks for reaching out! You can also email me directly at{" "}
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-emerald-400 underline"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          01. YOUR_NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-sm font-mono focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                          02. YOUR_EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-sm font-mono focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        03. SUBJECT_LINE
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Full Stack Engineer Opportunity / Project Inquiry"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-sm font-mono focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        04. MESSAGE_BODY
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Hi Noor, we're looking for a Full Stack Engineer experienced with NestJS, React/Next.js, and AI/RAG workflows..."
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-white text-sm font-mono focus:outline-none focus:border-emerald-500 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>

                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                          subject || "Connecting from your Portfolio"
                        )}&body=${encodeURIComponent(message)}`}
                        className="w-full sm:w-auto py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-mono text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Open in Mail App</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
