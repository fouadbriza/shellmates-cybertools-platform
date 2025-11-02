import React from 'react';
import HeroSection from '../components/HeroSection';
import ToolsGrid from '../components/ToolsGrid';

function HomePage({ isDark }) {

  const tools = [{
      name: 'Nmap',
      description: 'The Network Mapper - a free and open source utility for network discovery and security auditing.',
      category: 'Network Security',
      language: 'C++',
      stars: '25.4k',
      updated: 'Updated 2 days ago'
    },
    {
      name: 'Metasploit Framework',
      description: 'A penetration testing platform that enables you to find, exploit, and validate vulnerabilities.',
      category: 'Exploitation',
      language: 'Ruby',
      stars: '31.2k',
      updated: 'Updated 5 days ago'
    },
    {
      name: 'Wireshark',
      description: "The world's foremost and widely-used network protocol analyzer.",
      category: 'Forensics',
      language: 'C++',
      stars: '189k',
      updated: 'Updated 1 week ago'
    },
    {
      name: 'OSSEC',
      description: 'A scalable, multi-platform, open source Host-based Intrusion Detection System (HIDS).',
      category: 'Defense',
      language: 'C',
      stars: '10.5k',
      updated: 'Updated 3 weeks ago'
    }
  ];

  const filterCategories = ['Web Security', 'Network Security', 'Forensics', 'Malware Analysis', 'Cloud Security'];
  const languages = ['Python', 'Go', 'JavaScript', 'C++', 'Java'];
  const activities = ['Active', 'Inactive', 'Recently Updated'];
  const trending = ['Popular', 'New', 'Top Rated'];
  return (
        <div className={`min-h-screen ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
        <main className="flex-1">
          <HeroSection isDark={isDark} />
          <ToolsGrid tools={tools} isDark={isDark} />
        </main>
      </div>
    </div>
  )
}

export default HomePage