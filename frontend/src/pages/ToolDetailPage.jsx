import React from 'react';
import { ArrowLeft, Star, GitFork, Clock, Github } from 'lucide-react';

function ToolDetailPage({ tool, onBack }) {
  const toolDetails = {
    nmap: {
      description: `Nmap ("Network Mapper") is a free and open source utility for network discovery and security auditing. Many systems and network administrators also find it useful for tasks such as network inventory, managing service upgrade schedules, and monitoring host or service uptime. Nmap uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics.`,
      usageExamples: [
        { title: 'Scan a single host:', command: '$ nmap scanme.nmap.org' },
        { title: 'Scan a range of hosts:', command: '$ nmap 192.168.1.1-100' },
        { title: 'Perform a fast scan:', command: '$ nmap -F 192.168.1.1' }
      ],
      resources: [
        { title: 'Official Documentation', description: 'The complete guide to using Nmap.' },
        { title: 'YouTube Demo', description: 'Watch a video tutorial on Nmap basics.' },
        { title: 'Community Blog', description: 'Tips and tricks from the Nmap community.' }
      ],
      similarTools: [
        { name: 'Masscan', icon: '⚡', iconBg: 'bg-yellow-700', description: 'The fastest Internet port scanner. It can scan the entire Internet in under 5 minutes.' },
        { name: 'ZMap', icon: '🗺️', iconBg: 'bg-indigo-700', description: 'An open-source network scanner that enables researchers to easily perform Internet-wide network studies.' }
      ]
    },
    metasploit: {
      description: 'Metasploit Framework is a powerful penetration testing tool that helps security professionals find, exploit, and validate vulnerabilities. It includes a vast collection of exploits, payloads, auxiliary modules, and post-exploitation tools.',
      usageExamples: [
        { title: 'Start Metasploit console:', command: '$ msfconsole' },
        { title: 'Search for exploits:', command: 'msf6 > search type:exploit platform:windows' },
        { title: 'Use an exploit:', command: 'msf6 > use exploit/windows/smb/ms17_010_eternalblue' }
      ],
      resources: [
        { title: 'Official Documentation', description: 'Complete Metasploit Framework documentation.' },
        { title: 'Metasploit Unleashed', description: 'Free online ethical hacking course.' },
        { title: 'Community Forums', description: 'Get help from the Metasploit community.' }
      ],
      similarTools: [
        { name: 'Core Impact', icon: '💣', iconBg: 'bg-purple-700', description: 'Commercial penetration testing tool with automated exploitation.' },
        { name: 'Cobalt Strike', icon: '⚔️', iconBg: 'bg-blue-700', description: 'Advanced threat emulation software for security teams.' }
      ]
    }
  };

  const details = toolDetails[tool.id] || { description: tool.description, usageExamples: [], resources: [], similarTools: [] };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={20} /> Back to Tools
        </button>
        <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
          <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-start gap-6">
              <div className={`${tool.iconBg} rounded-2xl w-24 h-24 flex items-center justify-center text-4xl flex-shrink-0`}>
                {tool.icon}
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-3">{tool.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1"><Star size={16} /><span>{tool.stars} Stars</span></div>
                  <div className="flex items-center gap-1"><GitFork size={16} /><span>{tool.forks} Forks</span></div>
                  <div className="flex items-center gap-1"><Clock size={16} /><span>Updated {tool.updatedAt}</span></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-green-900/30 text-green-400 text-sm rounded-full border border-green-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Github size={20} /> View on GitHub
            </button>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Description</h2>
          <p className="text-gray-300 leading-relaxed text-lg">{details.description}</p>
        </div>

        {details.usageExamples.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Usage</h2>
            <div className="space-y-6">
              {details.usageExamples.map((example, index) => (
                <div key={index}>
                  <h3 className="text-gray-300 mb-3 font-medium">{example.title}</h3>
                  <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                    <code className="text-green-400 font-mono text-sm">{example.command}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {details.resources.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {details.resources.map((resource, index) => (
                <div key={index} className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors border border-zinc-800">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {details.similarTools.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Similar Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.similarTools.map((similarTool, index) => (
                <div key={index} className="bg-zinc-900 rounded-xl p-6 hover:bg-zinc-800 transition-colors cursor-pointer border border-zinc-800">
                  <div className="flex items-start gap-4">
                    <div className={`${similarTool.iconBg} rounded-lg w-16 h-16 flex items-center justify-center text-2xl flex-shrink-0`}>
                      {similarTool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{similarTool.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{similarTool.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToolDetailPage;