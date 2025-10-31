import React from 'react';

function CategoriesPage({ onCategoryClick }) {
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-3">Categories</h1>
          <p className="text-gray-400 text-lg">Browse tools by category.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategoryClick(category)}
              className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className={`${category.iconBg} rounded-xl w-16 h-16 flex items-center justify-center text-2xl flex-shrink-0`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1 group-hover:text-green-400 transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-400 text-sm">{category.toolCount} tools</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;