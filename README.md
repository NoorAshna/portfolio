# Noor Ahmad - Portfolio Website

A modern, responsive portfolio website for **Noor Ahmad** (Full Stack MERN & .NET Core Developer), built using Next.js 14, React 18, Tailwind CSS, and Lucide React icons.

## Features

- **Hero Section**: High-impact intro, dynamic tech stack pills, developer profile code visual, and contact CTAs.
- **About Section**: Detailed background summary, FAST NUCES BS Software Engineering degree details, key competencies, and spoken languages (English, Urdu, Pashto, German).
- **Work Experience**: Interactive career timeline for Veeivs (Backend Developer), TechFlo (Full Stack Developer), and Freelance projects highlighting microservices, Stripe API, Redis caching, and .NET Core.
- **Projects Showcase**: Filterable project gallery (Full Stack, Backend, AI / NLP, Web) showcasing MOVD, Accounts Management System, CognizDraw, BlindPak, and Global Office Source.
- **Technical Skills Grid**: Categorized skill pills for Backend, Frontend, Databases & ORMs, and DevOps & APIs.
- **Interactive Contact Form**: Direct email & WhatsApp click-to-copy buttons, quick contact form, and social links.
- **Vercel Ready**: Pre-configured with Next.js 14 App Router and `vercel.json` for seamless deployment.

---

## Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## How to Deploy on Vercel

### Option A: Via GitHub (Recommended - Automatic CI/CD)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/NoorAshna/your-portfolio-repo.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [Vercel](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New..."** → **"Project"**.
   - Select your repository (`your-portfolio-repo`).
   - Leave the Framework Preset as **Next.js**.
   - Click **"Deploy"**.

Vercel will build and host your portfolio live in under a minute! Every future `git push` to your repository will automatically update your live site.

### Option B: Via Vercel CLI (Direct Command Line)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Follow the prompts to link your Vercel account and deploy.
