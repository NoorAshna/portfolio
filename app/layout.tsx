import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noor Ahmad | Full Stack MERN & .NET Core Developer",
  description: "Portfolio of Noor Ahmad - Backend & Full Stack Developer specializing in Next.js, React, NestJS, Node.js, PostgreSQL, MongoDB, and .NET Core.",
  keywords: ["Noor Ahmad", "Full Stack Developer", "MERN Developer", "NestJS", "Next.js", ".NET Core", "Software Engineer", "Portfolio"],
  authors: [{ name: "Noor Ahmad" }],
  openGraph: {
    title: "Noor Ahmad | Full Stack Developer",
    description: "Full Stack Developer (MERN & .NET Core) specializing in scalable web apps, NestJS, Next.js, and APIs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#0B0F17] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
