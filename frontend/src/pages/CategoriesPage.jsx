import React, { useState } from 'react';
import { Search } from 'lucide-react';

function CategoriesPage({ onCategoryClick, isDark }) {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    { id: 'pentesting', name: 'Pentesting', icon: '🎭', iconBg: 'bg-teal-900', toolCount: 245 },
    { id: 'osint', name: 'OSINT', icon: '🕵️', iconBg: 'bg-amber-800', toolCount: 189 },
    { id: 'reverse-engineering', name: 'Reverse Engineering', icon: '⚙️', iconBg: 'bg-orange-200', toolCount: 152 },
    { id: 'forensics', name: 'Forensics', icon: '🔍', iconBg: 'bg-stone-200', toolCount: 128 },
    { id: 'exploitation', name: 'Exploitation', icon: '🔒', iconBg: 'bg-cyan-100', toolCount: 98 },
    { id: 'malware-analysis', name: 'Malware Analysis', icon: '🦠', iconBg: 'bg-teal-800', toolCount: 76 },
    { id: 'networking', name: 'Networking', icon: '🌐', iconBg: 'bg-cyan-700', toolCount: 210 },
    { id: 'cryptography', name: 'Cryptography', icon: '🔐', iconBg: 'bg-cyan-900', toolCount: 85 },
    { id: 'cloud-security', name: 'Cloud Security', icon: '☁️', iconBg: 'bg-sky-400', toolCount: 64 },
    { id: 'web-security', name: 'Web Security', icon: '🌐', iconBg: 'bg-zinc-900', toolCount: 199 }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-900' : 'bg-white'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className={`text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Categories</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Browse tools by category.</p>
          <div className="relative mt-6">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
            />
            <input
              type="text"
              placeholder="Search categories..."
              className={`w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark ? 'bg-zinc-800 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter((category) =>
              category.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((category) => (
              <button
              key={category.id}
              onClick={() => onCategoryClick(category)}
              className={`${
                isDark 
                  ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              } p-6 rounded-xl border transition-all duration-200 text-left group`}
            >
              <div className="flex items-center gap-4">
                <div className={`${category.iconBg} rounded-xl w-16 h-16 flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-emerald-500 transition-colors`}>
                    {category.name}
                  </h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {category.toolCount} tools
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;