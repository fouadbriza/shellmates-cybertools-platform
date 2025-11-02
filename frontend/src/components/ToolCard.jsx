import React from 'react';
import { Star } from 'lucide-react';

export default function ToolCard({ tool, isDark }) {
  return (
    <div className={`${isDark ? 'bg-zinc-800' : 'bg-white'} rounded-lg p-6 border ${isDark ? 'border-zinc-700' : 'border-gray-200'} transition-colors duration-200`}>
      <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h3>
      <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{tool.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 rounded-full border border-emerald-500 text-emerald-500 text-xs">
          {tool.category}
        </span>
        <span className="px-3 py-1 rounded-full border border-emerald-500 text-emerald-500 text-xs">
          {tool.language}
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 text-gray-400">
          <Star size={16} />
          <span className="text-sm">{tool.stars}</span>
        </div>
        <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{tool.updated}</span>
      </div>

      <button className="w-full py-2 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition font-semibold">
        View Tool
      </button>
    </div>
  );
}