// components/SiteLayout.tsx
import React from 'react';

type Props = { children: React.ReactNode };

const SiteLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <h1 className="text-xl font-semibold">Design Guide for Developers</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
          {/* Placeholder for Sidebar Navigation */}
          <nav>
            <h2 className="text-lg font-semibold mb-2 text-gray-700">Navigation</h2>
            {/* Navigation links will go here */}
            <p className="text-sm text-gray-500">Sidebar placeholder</p>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-white">
          {children}
        </main>
      </div>
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600 border-t border-gray-300">
        Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
};

export default SiteLayout;
