'use client';

import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Phone, Download } from 'lucide-react';

/* ── Reusable tech tag ─────────────────────────────────────────── */
const Tag = ({ label }: { label: string }) => (
  <span className="tag">{label}</span>
);

/* ── Project / Experience card ─────────────────────────────────── */
const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="card">{children}</div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const spotlightRef = useRef<HTMLDivElement>(null);

  /* Track cursor for spotlight glow */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  /* Track active section on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about',      label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects' },
    { id: 'contact',    label: 'Contact' },
    { id: 'blog',       label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {/* Cursor spotlight */}
      <div ref={spotlightRef} className="spotlight" aria-hidden />

      <div className="relative-z mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">

          {/* ── LEFT SIDEBAR ─────────────────────────────────────── */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Name + title */}
              <div className="fade-up">
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  Portfolio
                </p>
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  <a href="/" className="text-primary hover:text-accent transition" style={{ color: 'var(--text-primary)' }}>
                    Swabri Kanenje
                  </a>
                </h1>
                <h2 className="mt-2 text-lg font-medium" style={{ color: 'var(--accent-light)' }}>
                  Python Developer &amp; ML Engineer
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Machine Learning and Data Scientist building intelligent systems that reason, retrieve, and act.
                </p>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:block mt-14" aria-label="In-page jump links">
                <ul>
                  {navLinks.map(({ id, label, href }) => (
                    <li key={id}>
                      <a
                        href={href ?? `#${id}`}
                        className={`nav-item ${activeSection === id ? 'active' : ''}`}
                      >
                        <span className="nav-line" />
                        <span className="nav-label">{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social + CV */}
            <div className="mt-10 fade-up-4">
              <ul className="flex items-center gap-5 flex-wrap">
                <li>
                  <a href="https://github.com/skanenje" target="_blank" rel="noreferrer" className="social-icon block" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/swabri-musa-565350291/" target="_blank" rel="noreferrer" className="social-icon block" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="mailto:swapomuse@gmail.com" className="social-icon block" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/skanenje" target="_blank" rel="noreferrer" className="social-icon block" aria-label="Dev.to">
                    <Code2 className="h-5 w-5" />
                  </a>
                </li>
                <li>
                  <a href="/Swabri_Kanenje_CV.pdf" download className="cv-btn">
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </header>

          {/* ── MAIN CONTENT ─────────────────────────────────────── */}
          <main id="content" className="pt-24 lg:w-7/12 lg:py-24">

            {/* ── ABOUT ─────────────────────────────────────────── */}
            <section id="about" className="mb-20 scroll-mt-16 lg:scroll-mt-24">
              <div className="section-header">
                <h2 className="section-title">About</h2>
              </div>
              <div className="space-y-4 text-sm leading-relaxed fade-up-2" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  I&apos;m a developer with a focus on AI and machine learning, particularly in building
                  systems that combine language models with structured retrieval, tool use, and
                  multi-step reasoning. I try to understand what&apos;s actually happening under the
                  hood—how embeddings work, how context windows constrain design, how retrieval
                  quality affects outputs—rather than treating models as black boxes.
                </p>
                <p>
                  My programming background spans Python, Go, JavaScript, and some Rust. This mix
                  has been useful for connecting ML workflows with backend systems—handling
                  concurrency, state, and data pipelines in ways that hold up beyond a prototype.
                </p>
                <p>
                  I work iteratively: build something small, test it against real inputs, then
                  refine. Recent projects include RAG pipelines, MCP-based tool integrations,
                  and connecting AI components to IoT and web systems. I&apos;m still learning a lot,
                  but I&apos;m deliberate about understanding the tradeoffs in what I build.
                </p>
              </div>
            </section>

            {/* ── EXPERIENCE ────────────────────────────────────── */}
            <section id="experience" className="mb-20 scroll-mt-16 lg:scroll-mt-24">
              <div className="section-header">
                <h2 className="section-title">Experience</h2>
              </div>
              <ol className="space-y-4">
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                          2024 — Present
                        </p>
                        <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://www.zone01kisumu.ke/"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            Machine Learning &amp; AI Developer
                            <ExternalLink className="h-3.5 w-3.5 inline-block" />
                          </a>
                        </h3>
                        <p className="text-xs mb-1" style={{ color: 'var(--accent-light)' }}>Zone01 Kisumu</p>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          Developing efficient algorithms and backend services using Go, participating in peer-driven
                          learning, and contributing to diverse software projects.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Go', 'JavaScript', 'Rust', 'Python'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>
              </ol>
            </section>

            {/* ── PROJECTS ──────────────────────────────────────── */}
            <section id="projects" className="mb-20 scroll-mt-16 lg:scroll-mt-24">
              <div className="section-header">
                <h2 className="section-title">Projects</h2>
              </div>
              <ul className="space-y-4">

                {/* Jam-Text */}
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://github.com/skanenje/Jam-text"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            Jam-Text: High-Performance Text Indexer
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </h3>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          Led a 5-person hackathon team to build a fast, scalable text indexer in Go. Implemented
                          SimHash fingerprinting, LSH (Locality-Sensitive Hashing), and vector similarity with random
                          hyperplanes. Features parallel processing for chunk handling, efficient in-memory indexing,
                          and fuzzy matching.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Go', 'SimHash', 'LSH', 'Algorithms', 'Parallel Processing'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>

                {/* my-ls */}
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://github.com/skanenje/my-ls"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            my-ls Command
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </h3>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          A custom implementation of the Unix ls command in Go, featuring comprehensive file listing
                          with support for multiple flags (-l, -R, -a, -r, -t). Implements recursive directory traversal
                          and detailed file information display.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Go', 'Unix Systems', 'File I/O', 'System Programming'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>

                {/* catls */}
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://github.com/skanenje/catls"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            catls
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </h3>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          Dump project to terminal or file to give context to AI about project files and structure
                          for quick debugging using AI chatbots like ChatGPT.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Go', 'CLI Tool', 'File I/O', 'AI debugging'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>

                {/* ATM Management */}
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://github.com/skanenje/atm-management_C"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            ATM Management System
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </h3>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          A comprehensive C-based ATM system with user authentication, account management, and
                          transaction processing. Features multiple account types, interest calculation, and secure
                          data storage.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['C', 'File I/O', 'Data Structures', 'System Design'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>

                {/* System Monitor */}
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://github.com/skanenje/system-monitor"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            System Monitor
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </h3>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          A comprehensive system monitoring application providing real-time insights into system
                          resources, processes, and network statistics with an ImGui-based interface.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['C++', 'ImGui', 'OpenGL', 'SDL2'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>

                {/* Prompt Enhancer */}
                <li>
                  <Card>
                    <div className="flex gap-4">
                      <div className="glow-dot" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                          <a
                            href="https://github.com/skanenje/prompt-enhancer"
                            target="_blank"
                            rel="noreferrer"
                            className="accent-link inline-flex items-center gap-1"
                          >
                            Prompt Enhancer
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </h3>
                        <p className="text-sm mt-3" style={{ color: 'var(--text-secondary)' }}>
                          Enhance your prompt to get intelligent output from AI chatbots. Leverages Gemini API to
                          restructure and elevate prompt quality before sending to downstream models.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {['Python', 'GenAI', 'Gemini', 'Docker'].map(t => <Tag key={t} label={t} />)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>
              </ul>
            </section>

            {/* ── CONTACT ───────────────────────────────────────── */}
            <section id="contact" className="mb-20 scroll-mt-16">
              <div className="section-header">
                <h2 className="section-title">Contact</h2>
              </div>
              <Card>
                <h3 className="font-semibold text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                  Wish to Collaborate? Feel free to get in touch 😉
                </h3>
                <div>
                  <a href="https://github.com/skanenje" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <Github className="h-5 w-5" />
                    <span className="text-sm">github.com/skanenje</span>
                  </a>
                  <a href="mailto:swapomuse@gmail.com" className="contact-link">
                    <Mail className="h-5 w-5" />
                    <span className="text-sm">swapomuse@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/swabri-musa-565350291/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">linkedin.com/in/swabri-musa</span>
                  </a>
                  <a href="https://dev.to/skanenje" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <Code2 className="h-5 w-5" />
                    <span className="text-sm">dev.to/skanenje</span>
                  </a>
                  <a href="tel:+254723975141" className="contact-link">
                    <Phone className="h-5 w-5" />
                    <span className="text-sm">+254 723 975 141</span>
                  </a>
                </div>
              </Card>
            </section>

            {/* ── FOOTER ────────────────────────────────────────── */}
            <footer className="pb-16 text-xs sm:pb-0" style={{ color: 'var(--text-muted)' }}>
              <p>
                Built with{' '}
                <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="accent-link" style={{ color: 'var(--text-secondary)' }}>
                  Next.js
                </a>
                {' '}and{' '}
                <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="accent-link" style={{ color: 'var(--text-secondary)' }}>
                  Tailwind CSS
                </a>
                . Deployed on{' '}
                <a href="https://vercel.com/" target="_blank" rel="noreferrer" className="accent-link" style={{ color: 'var(--text-secondary)' }}>
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
