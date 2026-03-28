'use client';

import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
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
      id="about"
      className="py-24 bg-white dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto max-w-4xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm Akinduko Oluwasemilore Goodness, a technology creator passionate about building
              digital products that make a meaningful impact. With expertise spanning AI solutions,
              web development, and sustainable energy systems, I bridge the gap between innovation
              and practical application.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My journey encompasses diverse roles as a <strong>Virtual Assistant</strong>, where
              I optimize workflows and enhance productivity; a <strong>Solar / Energy Consultant</strong>,
              helping businesses and individuals transition to sustainable energy solutions; and a
              <strong> Digital Product Builder</strong>, crafting modern web applications and AI-powered tools.
            </p>

            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm driven by a singular passion: solving real-world problems through technology and
              sustainable energy innovation. Whether it's developing intelligent automation systems,
              building scalable web platforms, or designing renewable energy solutions, I bring
              technical expertise, critical thinking, and a commitment to excellence to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
