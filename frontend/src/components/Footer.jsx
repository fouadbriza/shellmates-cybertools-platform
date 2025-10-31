import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="text-gray-400 hover:text-white transition">About</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
        </div>
        <p className="text-center text-gray-500 text-sm">
          © 2024 CyberTool Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}