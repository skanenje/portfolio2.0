'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

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
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="mailto:your.email@example.com">
                  <span className="sr-only">Mail</span>
                  <Mail className="h-6 w-6" />
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
                  My name is Swabri Musa, a Golang developer based in Kisumu, Kenya. I began my tech journey with a foundation in Electrical Engineering, earning a Higher National Diploma in Electrical and Electronics Engineering from DeKUT. My transition into software development came in 2024 when I joined Zone01 Kisumu, an opportunity that immersed me in a rigorous, peer-driven learning environment. Since then, I've been refining my coding skills in Go, JavaScript, Rust, C, and C++, while also exploring Python and machine learning.
                </p>
                <p className="mb-4">
                  I thrive in problem-solving and first-principles thinking, preferring to break down concepts to their core before applying them. My journey at Zone01 has exposed me to diverse projects, from building efficient algorithms in Go to crafting interactive web applications with JavaScript. Recently, I became an active member of the Kisumu Gophers community at LakeHub and attended GopherCon Africa, an experience that deepened my passion for Go and backend development.
                </p>
                <p className="mb-4">
                  My interests go beyond coding—I am passionate about computational geometry, image processing, and ray tracing, constantly looking for ways to merge my technical expertise with creative problem-solving. I enjoy tackling challenging problems, often obsessing over solutions until I find an optimal approach. Whether it's optimizing an algorithm or debugging intricate logic, I find joy in the process of refining and improving code.
                </p>
                <p>
                  When I'm not coding, you can find me hiking the hills, or watching science talks on the RI YouTube channel or engaging in discussions about technology, physics, and mathematics. My curiosity drives me to explore new ideas, always seeking to expand my knowledge and refine my craft.
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
                             href="https://github.com/yourusername/project-name" 
                             target="_blank" 
                             rel="noreferrer">
                            <span>
                              Project Name
                              <ExternalLink className="ml-1 h-4 w-4 inline-block" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          A description of your project goes here. Highlight the key features, technologies used,
                          and the problems it solves.
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
                              PostgreSQL
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="z-10 sm:order-1 sm:col-span-2">
                        <Code2 className="h-16 w-16 text-slate-200" />
                      </div>
                    </div>
                  </li>
                </ul>
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
                <a href="https://vercel.com" className="font-medium text-slate-400 hover:text-teal-300" target="_blank" rel="noreferrer">
                  Vercel
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