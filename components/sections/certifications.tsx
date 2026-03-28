'use client';

import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: 'IBM AI Certification',
    issuer: 'IBM',
    year: '2026',
    description: 'Advanced artificial intelligence and machine learning',
  },
  {
    title: 'Solar Technology Training',
    issuer: 'Professional Certification',
    year: 'Certified',
    description: 'Comprehensive renewable energy systems training',
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
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto max-w-5xl">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className="group p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {cert.description}
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{cert.issuer}</Badge>
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
