'use client';

import { useEffect, useRef, useState } from 'react';
import { Code, Brain, Zap, Package, Users, Lightbulb } from 'lucide-react';

const skills = [
  {
    name: 'Web Development',
    icon: Code,
    description: 'Modern web applications with React, Next.js, and TypeScript',
  },
  {
    name: 'Artificial Intelligence',
    icon: Brain,
    description: 'AI automation and intelligent solutions',
  },
  {
    name: 'Solar Technology',
    icon: Zap,
    description: 'Sustainable energy solutions and consulting',
  },
  {
    name: 'Digital Product Development',
    icon: Package,
    description: 'End-to-end product development and delivery',
  },
  {
    name: 'Virtual Assistance',
    icon: Users,
    description: 'Workflow optimization and productivity enhancement',
  },
  {
    name: 'Critical Thinking',
    icon: Lightbulb,
    description: 'Problem-solving and strategic planning',
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Combining technical excellence with creative problem-solving
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
