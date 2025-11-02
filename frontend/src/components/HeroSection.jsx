import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection({ isDark }) {
  const navigate = useNavigate();

  const handleBrowseToolsClick = () => {
    navigate('/categories');
  };

  return (
    <div className={`${isDark ? 'bg-zinc-800' : 'bg-gray-50'} rounded-lg p-12 mb-8 text-center shadow-sm transition-colors duration-200`}>
      <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        A curated library of cybersecurity<br />tools from GitHub & beyond.
      </h1>
      <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        Discover, filter, and contribute to the best collection of open-source security tools.
      </p>
      <button
        onClick={handleBrowseToolsClick}
        className="px-8 py-3 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition font-semibold"
      >
        Browse Tools
      </button>
    </div>
  );
}