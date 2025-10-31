import React from 'react';
import ToolCard from './ToolCard';

export default function ToolsGrid({ tools }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tools.map((tool, idx) => (
        <ToolCard key={idx} tool={tool} />
      ))}
    </div>
  );
}