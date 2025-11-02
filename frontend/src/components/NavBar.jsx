import React, { useState, useEffect } from 'react';
import { Search, Layers, Moon, Sun, Menu, X } from 'lucide-react';
import Logo from "../assets/logo.png";

export default function Header({ isDark, toggleDarkMode }) {
  const [activePath, setActivePath] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Categories', path: '/categories' },
    { name: 'Submit Tool', path: '/submit' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`border-b ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-gray-200 bg-white'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={Logo} alt="CyberTool Hub Logo" className="w-10 h-10" />
          <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>CyberSecHub</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`transition text-sm font-medium ${
                activePath === item.path
                  ? 'text-emerald-500 font-semibold'
                  : isDark 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button and Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          {/* Search Bar (hidden on mobile and tablet) */}
          {/* <div className="relative hidden lg:block">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
            />
            <input
              type="text"
              placeholder="Search tools..."
              className={`w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-zinc-800 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
            />
          </div> */}
         

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${
              isDark 
                ? 'bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
            } transition`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-emerald-500" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-zinc-900' : 'bg-white'} py-4 border-t ${isDark ? 'border-zinc-800' : 'border-gray-200'}`}>
          <nav className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`transition text-base font-medium ${
                  activePath === item.path
                    ? 'text-emerald-500 font-semibold'
                    : isDark 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={toggleMenu} // Close menu on item click
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}