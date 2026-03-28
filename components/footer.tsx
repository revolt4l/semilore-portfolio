'use client';

import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Akinduko Goodness. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js & Supabase
          </p>
        </div>
      </div>
    </footer>
  );
}
