import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Noor Ahmad — Full Stack Engineer & AI Systems Builder",
  description:
    "Personal engineering portfolio of Noor Ahmad — Full Stack Engineer (FAST NUCES Islamabad) specializing in React, Next.js, Node.js, NestJS, Fastify, PostgreSQL, Redis, and LLM/RAG systems.",
  keywords: [
    "Noor Ahmad",
    "Full Stack Engineer",
    "Software Engineer",
    "NestJS",
    "Next.js",
    "React",
    "Node.js",
    "Fastify",
    "PostgreSQL",
    "pgvector",
    "RAG",
    "LangChain",
    "FAST NUCES Islamabad",
  ],
  authors: [{ name: "Noor Ahmad" }],
  openGraph: {
    title: "Noor Ahmad — Full Stack Engineer",
    description:
      "Full Stack Engineer building production web apps, high-throughput Node/NestJS/Fastify backends, and AI-enabled RAG workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-[#09090b] text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
