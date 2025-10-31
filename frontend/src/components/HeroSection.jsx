import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-zinc-800 rounded-lg p-12 mb-8 text-center">
      <h1 className="text-5xl font-bold mb-4">
        A curated library of cybersecurity<br />tools from GitHub & beyond.
      </h1>
      <p className="text-gray-400 text-lg mb-8">
        Discover, filter, and contribute to the best collection of open-source security tools.
      </p>
      <button className="px-8 py-3 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition font-semibold">
        Browse Tools
      </button>
    </div>
  );
}