'use client';

import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: 'Interacting With Artificial Intelligence',
    issuer: 'IBM',
    year: '2024',
  },
  {
    title: 'AI Literacy',
    issuer: 'IBM',
    year: '2024',
  },
  {
    title: 'Exploring Artificial Intelligence',
    issuer: 'IBM',
    year: '2024',
  },
  {
    title: 'AI Tools for Business Growth',
    issuer: 'Sunbeth Global Concept & Xapic Technology',
    year: '2024',
  },
  {
    title: '21 Days AI Challenge',
    issuer: 'One Community Church',
    year: '2024',
  },
  {
    title: 'Hands-On Solar Training',
    issuer: 'NCDMB (Nigeria Content Development Management Board)',
    year: '2024',
  },
];

export function CertificationsSection() {
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
      id="certifications"
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
              Certifications
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Continuous learning and professional development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="group p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-900"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {cert.year}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
