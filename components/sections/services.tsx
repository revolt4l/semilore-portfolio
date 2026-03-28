'use client';

import { useEffect, useRef, useState } from 'react';
import { Globe, Bot, Sun, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Website Design & Development',
    description:
      'Custom websites and web applications built with modern technologies. From concept to deployment, I create responsive, performant, and beautiful digital experiences.',
    icon: Globe,
  },
  {
    title: 'AI Automation',
    description:
      'Intelligent automation solutions that streamline workflows and boost productivity. Leverage AI to solve complex problems and make data-driven decisions.',
    icon: Bot,
  },
  {
    title: 'Energy / Solar Consulting',
    description:
      'Expert guidance on transitioning to renewable energy. Comprehensive solar system design, implementation planning, and cost-benefit analysis for sustainable solutions.',
    icon: Sun,
  },
  {
    title: 'Virtual Assistance',
    description:
      'Professional virtual assistance to optimize your business operations. Task management, scheduling, research, and administrative support to enhance your productivity.',
    icon: Headphones,
  },
];

export function ServicesSection() {
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
      id="services"
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
              Services
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Comprehensive solutions tailored to your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="mb-4 inline-block p-4 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
