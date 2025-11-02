import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Database, Users, BookOpen, GitBranch, Zap, Target, Globe } from 'lucide-react';

export default function About({ isDark }) {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/categories');
  };

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
    <div className={`min-h-screen ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-b from-zinc-800 to-zinc-900' : 'bg-gradient-to-b from-gray-50 to-white'} py-20 transition-colors duration-200`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-emerald-100 rounded-2xl">
              <Shield className="text-emerald-500" size={64} />
            </div>
          </div>
          <h1 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About CyberSecHub
          </h1>
          <p className={`text-xl text-gray-600 leading-relaxed ${isDark ? 'text-gray-50' : 'text-gray-900'}`}>
            An all-in-one platform designed for cybersecurity enthusiasts, professionals, and CTF players.
            Your comprehensive database of tools, resources, and documentation - always at your fingertips.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className={`py-16 ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} `}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className={`rounded-lg p-8 border shadow-sm ${isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-gray-200'}`}>
            <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              CyberSecHub centralizes tools, learning resources, and quick documentation for various cybersecurity 
              fields such as cryptography, web exploitation, forensics, reverse engineering, network security, OSINT, 
              and more. We serve as a reliable database that hackers can return to at any time, eliminating the need 
              to search across multiple platforms.
            </p>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Our platform features a dynamic contribution system where security researchers and hackers can add their 
              own tools and documentation, submit them for review, and contribute to the community's collective knowledge. 
              Connected to open-source platforms like GitHub, CyberSecHub ensures easy handling, collaboration, and 
              accessibility of data for all users.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`py-16 ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Platform Features</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className={`rounded-lg p-6 border shadow-sm transition ${isDark ? 'bg-zinc-800 border-zinc-700 hover:border-emerald-500' : 'bg-white border-gray-200 hover:border-emerald-500'}`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
                <p className={`text-gray-600 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Domains */}
      <section className={`py-16 ${isDark ? 'bg-zinc-800' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Cybersecurity Domains Covered</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              CyberSecHub covers all major areas of cybersecurity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domains.map((domain, idx) => (
              <div key={idx} className={`rounded-lg p-4 text-center border shadow-sm transition ${isDark ? 'bg-zinc-700 border-zinc-600 hover:border-emerald-500' : 'bg-white border-gray-200 hover:border-emerald-500'}`}>
                <Globe className="text-emerald-500 mx-auto mb-2" size={24} />
                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{domain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-16 ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>How It Works</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Explore</h3>
              <p className={`text-gray-600 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Browse through our extensive collection of cybersecurity tools and documentation across multiple domains.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contribute</h3>
              <p className={`text-gray-600 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Submit your own tools and documentation through our review system. Help the community grow.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Collaborate</h3>
              <p className={`text-gray-600 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Access everything through GitHub integration. Fork, star, and contribute to the open-source ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className={`py-16 ${isDark ? 'bg-zinc-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Join Our Community</h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Be part of a growing community of cybersecurity enthusiasts. Share your knowledge, learn from others, and help make the internet a safer place.
          </p>
          <button
            onClick={handleGetStartedClick}
            className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}