'use client';

import { ArrowRight, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                    <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
                      Goodness Semilore
                    </span>
                  </h1>
                </div>

                <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
                  Full Stack Developer | AI-Powered Virtual Assistant | Solar Tech Enthusiast
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                  I build modern web applications, help businesses grow with AI tools, and support digital productivity.
                </p>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/revolt4l"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://x.com/revolt4l?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/goodness-akinduko-8649451b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 font-medium"
                >
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="px-8 font-medium"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-30 dark:opacity-20" />
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://i.ibb.co/wrg5NcRc/himmm.jpg"
                    alt="Goodness Semilore"
                    width={400}
                    height={500}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 flex justify-center">
            <div className="inline-block animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
