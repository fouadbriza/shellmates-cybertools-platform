import React from 'react';
import { Shield, Database, Users, BookOpen, GitBranch, Zap, Target, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Shield className="text-emerald-500" size={40} />,
      title: 'Centralized Arsenal',
      description: 'Access a comprehensive collection of cybersecurity tools across all domains - from cryptography to OSINT, all in one place.'
    },
    {
      icon: <Database className="text-emerald-500" size={40} />,
      title: 'Hacker\'s Database',
      description: 'Your go-to repository that you can return to anytime. Save time by having quick access to tools and documentation whenever you need them.'
    },
    {
      icon: <Users className="text-emerald-500" size={40} />,
      title: 'Community-Driven',
      description: 'Built by hackers, for hackers. Submit your own tools and documentation through our dynamic contribution system with peer review.'
    },
    {
      icon: <BookOpen className="text-emerald-500" size={40} />,
      title: 'Learning Resources',
      description: 'Quick documentation and learning materials for cryptography, web exploitation, forensics, reverse engineering, and more.'
    },
    {
      icon: <GitBranch className="text-emerald-500" size={40} />,
      title: 'Open Source Integration',
      description: 'Connected to GitHub for seamless collaboration, version control, and easy access to the platform\'s data and resources.'
    },
    {
      icon: <Target className="text-emerald-500" size={40} />,
      title: 'CTF Ready',
      description: 'Specifically designed for CTF players with curated tools and quick references to help you solve challenges faster.'
    }
  ];

  const domains = [
    'Cryptography',
    'Web Exploitation',
    'Forensics',
    'Reverse Engineering',
    'Network Security',
    'OSINT',
    'Binary Exploitation',
    'Malware Analysis',
    'Cloud Security',
    'Wireless Security'
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
   

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-500/10 rounded-2xl">
              <Shield className="text-emerald-500" size={64} />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            About CyberSecHub
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            An all-in-one platform designed for cybersecurity enthusiasts, professionals, and CTF players.
            Your comprehensive database of tools, resources, and documentation - always at your fingertips.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              CyberSecHub centralizes tools, learning resources, and quick documentation for various cybersecurity 
              fields such as cryptography, web exploitation, forensics, reverse engineering, network security, OSINT, 
              and more. We serve as a reliable database that hackers can return to at any time, eliminating the need 
              to search across multiple platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our platform features a dynamic contribution system where security researchers and hackers can add their 
              own tools and documentation, submit them for review, and contribute to the community's collective knowledge. 
              Connected to open-source platforms like GitHub, CyberSecHub ensures easy handling, collaboration, and 
              accessibility of data for all users.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-emerald-500 transition">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Domains */}
      <section className="py-16 bg-zinc-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cybersecurity Domains Covered</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg">
              CyberSecHub covers all major areas of cybersecurity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domains.map((domain, idx) => (
              <div key={idx} className="bg-zinc-800 rounded-lg p-4 text-center border border-zinc-700 hover:border-emerald-500 transition">
                <Globe className="text-emerald-500 mx-auto mb-2" size={24} />
                <p className="text-sm font-semibold">{domain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Explore</h3>
              <p className="text-gray-400">
                Browse through our extensive collection of cybersecurity tools and documentation across multiple domains.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Contribute</h3>
              <p className="text-gray-400">
                Submit your own tools and documentation through our review system. Help the community grow.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Collaborate</h3>
              <p className="text-gray-400">
                Access everything through GitHub integration. Fork, star, and contribute to the open-source ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Zap className="text-emerald-500 mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            CyberSecHub is built by hackers, for hackers. Whether you're a beginner or a seasoned professional, 
            there's a place for you here. Start exploring, contributing, and collaborating today.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition font-semibold">
              Browse Tools
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition font-semibold">
              Submit a Tool
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
}