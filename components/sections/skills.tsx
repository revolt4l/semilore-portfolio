'use client';

import { useEffect, useRef, useState } from 'react';
import { Code as Code2, Database, Wrench, Cloud, Zap } from 'lucide-react';

const techCategories = [
  {
    name: 'Frontend',
    icon: Code2,
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    name: 'Backend',
    icon: Database,
    technologies: ['Node.js'],
  },
  {
    name: 'Version Control',
    icon: Wrench,
    technologies: ['Git', 'GitHub'],
  },
  {
    name: 'Deployment',
    icon: Cloud,
    technologies: ['Netlify', 'Vercel'],
  },
  {
    name: 'AI Tools',
    icon: Zap,
    technologies: ['AI Tools'],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
            Technologies and tools I'm proficient with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {techCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-900"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
