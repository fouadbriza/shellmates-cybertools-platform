import React from 'react';
import ToolCard from './ToolCard';

export default function ToolsGrid({ tools, isDark }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, idx) => (
        <ToolCard key={idx} tool={tool} isDark={isDark} />
      ))}
    </div>
  );
}