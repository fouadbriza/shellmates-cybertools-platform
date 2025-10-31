import React, { useState, useEffect } from 'react';
import { Search, Layers, Moon, Sun } from 'lucide-react';
import Logo from "../assets/logo.png";

export default function Header() {
  const [activePath, setActivePath] = useState('');
  const [isDark, setIsDark] = useState(true); // default: dark

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved === 'dark' || (!saved && prefersDark);
    
    setIsDark(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setActivePath(window.location.pathname);
  }, []);

  // Save theme when toggled
  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');

    if (newDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Categories', path: '/categories' },
    { name: 'Submit Tool', path: '/submit' },
  ];

  return (
    <header className="border-b border-zinc-800 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="CyberTool Hub Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-white">CyberTool Hub</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`transition text-sm font-medium ${
                activePath === item.path
                  ? 'text-emerald-500 font-semibold'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Search + Dark Mode */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-zinc-800 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition text-gray-300 hover:text-white"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Moon size={20} className="text-emerald-400" />
            ) : (
              <Sun size={20} className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}