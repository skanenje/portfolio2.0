'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const FeaturedProject = ({ title, description, tech, github }: {
  title: string;
  description: string;
  tech: string[];
  github?: string;
}) => (
  <div className="rounded-lg border border-slate-700/50 p-6 hover:border-slate-700 transition">
    <h3 className="text-lg font-semibold text-slate-200 mb-2">{title}</h3>
    <p className="text-slate-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t) => (
        <span key={t} className="text-xs bg-slate-800 text-slate-300 rounded px-2 py-1">
          {t}
        </span>
      ))}
    </div>
    {github && (
      <a 
        href={github}
        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300"
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    )}
  </div>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="group/spotlight relative">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" 
           style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)' }} />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Header / Left Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Swabri Musa</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Golang Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build robust, scalable applications with Go and modern technologies.
              </p>
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  <li>
                    <a className={`group flex items-center py-3 ${
                      activeSection === 'about' ? 'active' : ''
                    }`} href="#about">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${
                      activeSection === 'experience' ? 'active' : ''
                    }`} href="#experience">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${
                      activeSection === 'projects' ? 'active' : ''
                    }`} href="#projects">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className={`group flex items-center py-3 ${
                      activeSection === 'contact' ? 'active' : ''
                    }`} href="#contact">
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://github.com/skanenje" target="_blank" rel="noreferrer">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/swabri-musa-565350291/" target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="mailto:swapomuse@gmail.com">
                  <span className="sr-only">Mail</span>
                  <Mail className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://dev.to/skanenje" target="_blank" rel="noreferrer">
                  <span className="sr-only">Dev.to</span>
                  <Code2 className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Main Content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4">
                  I'm a Golang developer with a background in Electrical Engineering, focused on building robust, scalable backend systems. My interests span distributed systems, DevOps practices, and low-level programming, driven by a desire to understand how things work from first principles.

                  Currently, I'm developing my expertise in Go while exploring the ecosystem of modern software infrastructure. I'm particularly interested in container orchestration with Kubernetes, infrastructure automation using Terraform and Ansible, and building event-driven architectures with Kafka. My engineering background has instilled in me a methodical approach to problem-solving, which I apply to creating maintainable and efficient software solutions.

                  Beyond backend development, I'm fascinated by computational mathematics and machine learning. I enjoy experimenting with TensorFlow and PyTorch, implementing classical ML algorithms, and exploring their applications in real-world scenarios. This intersection of mathematics and programming challenges me to think critically about problem-solving approaches.

                  When I'm not coding, you'll find me diving into technical documentation, experimenting with IoT devices, or exploring the latest developments in distributed systems and cloud architecture. I believe in continuous learning and am always excited to tackle new technical challenges that push my understanding of fundamental computing concepts.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2024 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                               href="https://zone01.ke" 
                               target="_blank" 
                               rel="noreferrer">
                              <span>Software Developer · Zone01 Kisumu</span>
                              <ExternalLink className="ml-1 h-4 w-4 inline-block" />
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Developing efficient algorithms and backend services using Go, participating in peer-driven learning, and contributing to diverse software projects.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Go
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              JavaScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Rust
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Python
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base" 
                             href="https://github.com/skanenje/Jam-text" 
                             target="_blank" 
                             rel="noreferrer">
                            <span>
                              Jam-Text: High-Performance Text Indexer
                              <ExternalLink className="ml-1 h-4 w-4 inline-block" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Led a 5-person hackathon team to build a fast, scalable text indexer in Go. Implemented SimHash fingerprinting, 
                          LSH (Locality-Sensitive Hashing), and vector similarity with random hyperplanes. Features parallel processing 
                          for chunk handling, efficient in-memory indexing, and fuzzy matching capabilities.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Go
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              SimHash
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              LSH
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Algorithms
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              Parallel Processing
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="z-10 flex items-center sm:order-1 sm:col-span-2">
                        <Code2 className="h-16 w-16 text-slate-200" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Featured Projects Section */}
            <section id="featured-projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Featured Projects</h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a href="https://github.com/skanenje/Jam-Text" target="_blank" rel="noreferrer" className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                            Jam-Text Hackathon
                            <ExternalLink className="ml-1 h-4 w-4 shrink-0" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">A high-performance text indexer built during a hackathon with a team of 5. Features SimHash fingerprinting, LSH (Locality-Sensitive Hashing), vector similarity with random hyperplanes, and parallel processing.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Go</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SimHash</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">LSH</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Parallel Processing</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a href="https://github.com/skanenje/my-ls" target="_blank" rel="noreferrer" className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                            my-ls Command
                            <ExternalLink className="ml-1 h-4 w-4 shrink-0" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">A custom implementation of the Unix ls command in Go, featuring comprehensive file listing capabilities with support for multiple flags (-l, -R, -a, -r, -t). Implements recursive directory traversal and detailed file information display.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Go</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Unix Systems</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">File I/O</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">System Programming</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a href="https://github.com/skanenje/atm-management_C" target="_blank" rel="noreferrer" className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                            ATM Management System
                            <ExternalLink className="ml-1 h-4 w-4 shrink-0" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">A comprehensive C-based ATM system with user authentication, account management, and transaction processing. Features multiple account types, interest calculation, and secure data storage.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">C</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">File I/O</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Data Structures</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">System Design</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a href="https://github.com/skanenje/system-monitor" target="_blank" rel="noreferrer" className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                            System Monitor
                            <ExternalLink className="ml-1 h-4 w-4 shrink-0" />
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">A comprehensive system monitoring application providing real-time insights into system resources, processes, and network statistics with an ImGui-based interface.</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">C++</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">ImGui</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">OpenGL</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">SDL2</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
              </div>
              
              <div className="rounded-lg border border-slate-700/50 p-6 hover:border-slate-700 transition">
                <h3 className="text-lg font-semibold text-slate-200 mb-6">
                  Wish to Collaborate? Feel free to get in touch 😉...
                </h3>
                
                <div className="flex flex-col space-y-6">
                  <a 
                    href="https://github.com/skanenje" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-400 hover:text-teal-300 transition"
                  >
                    <Github className="w-6 h-6 mr-3" />
                    github.com/skanenje
                  </a>
                  <a 
                    href="mailto:swapomuse@gmail.com"
                    className="flex items-center text-slate-400 hover:text-teal-300 transition"
                  >
                    <Mail className="w-6 h-6 mr-3" />
                    swapomuse@gmail.com
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/swabri-musa-565350291/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-400 hover:text-teal-300 transition"
                  >
                    <Linkedin className="w-6 h-6 mr-3" />
                    linkedin.com/in/swabri-musa
                  </a>
                  <a 
                    href="https://dev.to/skanenje" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-400 hover:text-teal-300 transition"
                  >
                    <Code2 className="w-6 h-6 mr-3" />
                    dev.to/skanenje
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Built with{' '}
                <a href="https://nextjs.org" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer">
                  Next.js
                </a>
                {' '}and{' '}
                <a href="https://tailwindcss.com" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer">
                  Tailwind CSS
                </a>
                . Deployed on{' '}
                <a href="https://aws.amazon.com" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer">
                  AWS
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}