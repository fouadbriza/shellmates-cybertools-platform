import React from 'react'
import { useState } from 'react';
import Header from '../components/NavBar';

import HeroSection from '../components/HeroSection';
import ToolsGrid from '../components/ToolsGrid';
import Footer from '../components/Footer';

function HomePage() {
      const [activeFilters, setActiveFilters] = useState({
    category: [],
    language: [],
    activity: [],
    trending: []
  });

  const tools = [
    {
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
        <div className="min-h-screen bg-zinc-900 text-white">
  
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">
       
        <main className="flex-1">
          <HeroSection />
          <ToolsGrid tools={tools} />
        </main>
      </div>
   
    </div>
  )
}

export default HomePage