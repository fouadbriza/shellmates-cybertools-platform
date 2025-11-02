import React, { useState } from 'react';
import { Search, Star, GitFork, Clock, ArrowLeft } from 'lucide-react';

function ToolsListPage({ category, onToolClick, onBack, isDark }) {
  const [searchQuery, setSearchQuery] = useState('');

  const toolsData = {
    networking: [
      { id: 'nmap', name: 'Nmap', icon: '🔍', iconBg: 'bg-teal-700', description: 'Network Mapper - Free and open source utility for network discovery and security auditing', tags: ['Network Scanner', 'Security Auditing', 'Open Source'], stars: '72.5k', forks: '21.3k', updatedAt: '3 days ago' },
      { id: 'wireshark', name: 'Wireshark', icon: '🦈', iconBg: 'bg-blue-700', description: 'Network protocol analyzer that lets you capture and interactively browse network traffic', tags: ['Packet Analyzer', 'Network Protocol', 'Open Source'], stars: '45.2k', forks: '15.8k', updatedAt: '1 week ago' },
      { id: 'masscan', name: 'Masscan', icon: '⚡', iconBg: 'bg-yellow-700', description: 'The fastest Internet port scanner. It can scan the entire Internet in under 5 minutes', tags: ['Port Scanner', 'Fast Scanning', 'Open Source'], stars: '38.9k', forks: '9.2k', updatedAt: '2 weeks ago' },
      { id: 'netcat', name: 'Netcat', icon: '🐱', iconBg: 'bg-gray-700', description: 'Networking utility for reading from and writing to network connections using TCP or UDP', tags: ['Network Utility', 'TCP/UDP', 'Command Line'], stars: '28.4k', forks: '7.1k', updatedAt: '5 days ago' }
    ],
    pentesting: [
      { id: 'metasploit', name: 'Metasploit', icon: '💥', iconBg: 'bg-red-700', description: 'The world\'s most used penetration testing framework', tags: ['Exploitation', 'Framework', 'Security Testing'], stars: '89.3k', forks: '32.1k', updatedAt: '1 day ago' },
      { id: 'burpsuite', name: 'Burp Suite', icon: '🔧', iconBg: 'bg-orange-700', description: 'Integrated platform for performing security testing of web applications', tags: ['Web Security', 'Proxy', 'Scanner'], stars: '45.7k', forks: '12.3k', updatedAt: '2 days ago' }
    ]
  };

  const tools = toolsData[category.id] || [];
  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button onClick={onBack} className={`flex items-center gap-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} mb-6 transition-colors`}>
          <ArrowLeft size={20} /> Back to Categories
        </button>
        <div className="mb-8">
          <h1 className={`text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{category.name}</h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{filteredTools.length} tools available</p>
        </div>
        <div className="mb-8">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-zinc-800 border-zinc-700 text-white placeholder-gray-400 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-emerald-500'} focus:ring-1 focus:ring-emerald-500 outline-none transition-colors duration-200`}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => onToolClick(tool)}
              className={`rounded-xl p-6 transition-colors cursor-pointer group border ${isDark ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`${tool.iconBg} rounded-lg w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0`}>
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h2 className={`text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h2>
                  <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-1"><Star size={14} /><span>{tool.stars} Stars</span></div>
                    <div className="flex items-center gap-1"><GitFork size={14} /><span>{tool.forks} Forks</span></div>
                    <div className="flex items-center gap-1"><Clock size={14} /><span>Updated {tool.updatedAt}</span></div>
                  </div>
                </div>
              </div>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, index) => (
                  <span key={index} className={`px-3 py-1 text-xs rounded-full border ${isDark ? 'bg-emerald-900/30 text-emerald-400 border-emerald-800' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No tools found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToolsListPage;