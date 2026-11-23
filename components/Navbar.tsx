"use client";

import React, { useState, useEffect } from "react";
import {
  PERSONAL_INFO,
  PROJECTS,
  EXPERIENCES,
  SKILL_CATEGORIES,
  EDUCATION,
  LANGUAGES,
} from "@/data/portfolioData";
import {
  Terminal,
  Command,
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  X,
  ArrowUpRight,
  Copy,
  Check,
  Printer,
  Sparkles,
  Menu,
  Search,
  Layers,
  Briefcase,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCmdOpen(false);
        setResumeOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleOpenResume = () => setResumeOpen(true);
    const handleOpenCmd = () => setCmdOpen(true);
    window.addEventListener("open-resume-modal", handleOpenResume);
    window.addEventListener("open-cmd-modal", handleOpenCmd);
    return () => {
      window.removeEventListener("open-resume-modal", handleOpenResume);
      window.removeEventListener("open-cmd-modal", handleOpenCmd);
    };
  }, []);

  const copyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const navLinks = [
    { index: "01", name: "about", href: "#about" },
    { index: "02", name: "projects", href: "#projects" },
    { index: "03", name: "experience", href: "#experience" },
    { index: "04", name: "stack", href: "#skills" },
    { index: "05", name: "contact", href: "#contact" },
  ];

  const commandActions = [
    {
      id: "view-resume",
      category: "Quick Actions",
      label: "Open Interactive Resume / CV",
      hint: "View & Print PDF",
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setCmdOpen(false);
        setResumeOpen(true);
      },
    },
    {
      id: "copy-email",
      category: "Quick Actions",
      label: `Copy Email (${PERSONAL_INFO.email})`,
      hint: copiedItem === "email" ? "Copied!" : "Copy to clipboard",
      icon: <Mail className="w-4 h-4 text-amber-400" />,
      action: () => copyText(PERSONAL_INFO.email, "email"),
    },
    {
      id: "copy-phone",
      category: "Quick Actions",
      label: `Copy Phone (${PERSONAL_INFO.phoneFormatted})`,
      hint: copiedItem === "phone" ? "Copied!" : "Copy to clipboard",
      icon: <Phone className="w-4 h-4 text-cyan-400" />,
      action: () => copyText(PERSONAL_INFO.phone, "phone"),
    },
    {
      id: "open-github",
      category: "Socials",
      label: "GitHub — @NoorAshna",
      hint: "External Link",
      icon: <Github className="w-4 h-4 text-zinc-300" />,
      action: () => window.open(PERSONAL_INFO.github, "_blank"),
    },
    {
      id: "open-linkedin",
      category: "Socials",
      label: "LinkedIn — Noor Ahmad",
      hint: "External Link",
      icon: <Linkedin className="w-4 h-4 text-sky-400" />,
      action: () => window.open(PERSONAL_INFO.linkedin, "_blank"),
    },
    ...PROJECTS.map((p) => ({
      id: `proj-${p.id}`,
      category: "Featured Projects",
      label: `${p.title} — ${p.tagline}`,
      hint: p.category,
      icon: <Layers className="w-4 h-4 text-violet-400" />,
      action: () => {
        setCmdOpen(false);
        const el = document.getElementById(`project-${p.id}`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    })),
    ...EXPERIENCES.map((e) => ({
      id: `exp-${e.id}`,
      category: "Experience",
      label: `${e.role} @ ${e.company}`,
      hint: e.period,
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setCmdOpen(false);
        const el = document.getElementById("experience");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      },
    })),
  ];

  const filteredCommands = commandActions.filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 pointer-events-none">
        <div
          className={`max-w-6xl mx-auto pointer-events-auto transition-all duration-300 rounded-2xl border ${
            scrolled
              ? "bg-[#0d0d11]/90 backdrop-blur-xl border-zinc-800/90 shadow-2xl shadow-black/70 py-2.5 px-4"
              : "bg-[#111116]/75 backdrop-blur-md border-zinc-800/60 py-3 px-5"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Personal Monospace Identity */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-tight text-zinc-100 flex items-center gap-1.5">
                  <span>~/noor.ahmad</span>
                  <span className="text-emerald-400 text-xs font-normal hidden sm:inline">
                    [main]
                  </span>
                </span>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:block">
                  Full Stack & AI Systems
                </span>
              </div>
            </a>

            {/* Desktop Path Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/70 p-1 rounded-xl border border-zinc-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/70 transition-all flex items-center gap-1.5"
                >
                  <span className="text-emerald-400/70">{link.index}.</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Right Actions: Command Palette & Resume Sheet */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                onClick={() => setCmdOpen(true)}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition-all"
                title="Open Command Palette (Ctrl+K)"
              >
                <Command className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quick Jump</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-zinc-950 text-zinc-400 rounded border border-zinc-800">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>resume.pdf</span>
              </button>
            </div>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setResumeOpen(true)}
                className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono"
              >
                CV
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 mt-3 border-t border-zinc-800/80 space-y-3">
              <nav className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-xl text-xs font-mono text-zinc-200 bg-zinc-900/70 border border-zinc-800/70 flex items-center gap-2"
                  >
                    <span className="text-emerald-400">{link.index}.</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </nav>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 text-zinc-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCmdOpen(true);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 flex items-center gap-1.5"
                >
                  <Command className="w-3.5 h-3.5" /> Command Menu
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Interactive Command Palette Modal (Ctrl+K) */}
      {cmdOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#121217] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800">
              <Search className="w-4 h-4 text-emerald-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type a command or search projects (CallLoom, DocMind, RAG, email...)"
                className="w-full bg-transparent text-sm font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
              <button
                onClick={() => setCmdOpen(false)}
                className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900 text-zinc-400 rounded border border-zinc-800"
              >
                ESC
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-zinc-500">
                  No matching commands or projects found.
                </div>
              ) : (
                filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-zinc-800/80 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700">
                        {cmd.icon}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-medium text-zinc-200 group-hover:text-white truncate">
                          {cmd.label}
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">
                          {cmd.category}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 group-hover:text-emerald-400 shrink-0 ml-2">
                      {cmd.hint}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>Noor Ahmad · Interactive Portfolio Shell</span>
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Resume Viewer Modal (Matches Uploaded Resume 1:1) */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="w-full max-w-4xl bg-[#111116] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-950 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-zinc-200 font-semibold">
                  Noor_Ahmad_Resume.pdf
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  Updated Resume
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-semibold transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setResumeOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Sheet Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-200 text-sm">
              {/* Header */}
              <div className="border-b border-zinc-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-emerald-400 font-mono text-xs mt-1">
                    Full Stack Engineer · BS Software Engineering (FAST NUCES Islamabad)
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right">
                  <div>
                    {PERSONAL_INFO.email} | {PERSONAL_INFO.phone}
                  </div>
                  <div className="flex flex-wrap sm:justify-end gap-3 text-emerald-400">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {PERSONAL_INFO.githubHandle}
                    </a>
                    <span>|</span>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {PERSONAL_INFO.linkedinHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Profile
                </h3>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className="p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/80"
                    >
                      <span className="font-semibold text-white">
                        {cat.category}:{" "}
                      </span>
                      <span className="text-zinc-300">
                        {cat.items.map((i) => i.name).join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Professional Experience
                </h3>
                <div className="space-y-5">
                  {EXPERIENCES.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-white">
                          {exp.role} —{" "}
                          <span className="text-emerald-400">{exp.company}</span>
                        </h4>
                        <span className="font-mono text-xs text-zinc-400">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs leading-relaxed">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Projects
                </h3>
                <div className="space-y-4">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-white">
                          {proj.title} —{" "}
                          <span className="text-zinc-300 font-normal">
                            {proj.tagline}
                          </span>
                        </h4>
                        {proj.affiliation && (
                          <span className="text-xs font-mono text-emerald-400">
                            {proj.affiliation}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-mono text-zinc-400">
                        {proj.tech.join(", ")}
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs leading-relaxed">
                        {proj.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Education
                  </h3>
                  {EDUCATION.map((edu, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1"
                    >
                      <div className="font-bold text-white text-xs">
                        {edu.degree} — {edu.institution}
                      </div>
                      <div className="font-mono text-[11px] text-emerald-400">
                        {edu.period}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {edu.coursework.join(", ")}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                    Additional Information
                  </h3>
                  <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
                    <div className="text-xs font-semibold text-white">
                      Spoken Languages
                    </div>
                    <div className="text-xs text-zinc-300">
                      {LANGUAGES.map((l) => `${l.name} (${l.level})`).join(
                        " · "
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
