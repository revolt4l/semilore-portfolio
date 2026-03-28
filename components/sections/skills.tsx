'use client';

import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

const techStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'Git & GitHub',
  'Canva',
  'ChatGPT',
  'Fireflies',
  'NotebookLM',
  'Claude',
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
      className="py-24 bg-white dark:bg-gray-900"
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
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Tools and technologies I work with
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm hover:scale-110 transition-transform duration-300 cursor-default"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
