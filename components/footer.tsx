'use client';

import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/revolt4l',
      label: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://x.com/revolt4l?s=21',
      label: 'Twitter',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/goodness-akinduko-8649451b5',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:Oluwasemiloregoodness@gmail.com',
      label: 'Email',
    },
  ];

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 mx-auto max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-blue-900 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="https://github.com/revolt4l"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub Profile
              </a>
              <a
                href="https://wa.me/2348059712276"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:Oluwasemiloregoodness@gmail.com"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Goodness Semilore. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Supabase
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
