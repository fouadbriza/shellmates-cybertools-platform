import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SubmitToolPage() {
  const [formData, setFormData] = useState({
    toolName: '',
    githubUrl: '',
    category: '',
    shortDescription: '',
    usageInstructions: '',
    extraResources: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Submit a Tool</h1>
          <p className="text-gray-400 text-lg">
            Help us grow our curated library of cybersecurity tools.
          </p>
        </div>

        {/* Form */}
        <div className="bg-zinc-900 rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* Tool Name */}
            <div className="mb-6">
              <label htmlFor="toolName" className="block text-sm font-medium mb-2">
                Tool Name
              </label>
              <input
                type="text"
                id="toolName"
                name="toolName"
                value={formData.toolName}
                onChange={handleChange}
                placeholder="e.g., Nmap"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* GitHub URL */}
            <div className="mb-6">
              <label htmlFor="githubUrl" className="block text-sm font-medium mb-2">
                GitHub URL
              </label>
              <input
                type="text"
                id="githubUrl"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/user/repo"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-sm font-medium mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-gray-400 appearance-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer"
                >
                  <option value="">Select a category</option>
                  <option value="network-scanning">Network Scanning</option>
                  <option value="vulnerability-assessment">Vulnerability Assessment</option>
                  <option value="penetration-testing">Penetration Testing</option>
                  <option value="forensics">Forensics</option>
                  <option value="web-security">Web Security</option>
                  <option value="exploitation">Exploitation</option>
                  <option value="reconnaissance">Reconnaissance</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Short Description */}
            <div className="mb-6">
              <label htmlFor="shortDescription" className="block text-sm font-medium mb-2">
                Short Description
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                placeholder="Provide a brief description of the tool"
                rows="4"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Usage Instructions */}
            <div className="mb-6">
              <label htmlFor="usageInstructions" className="block text-sm font-medium mb-2">
                Usage Instructions (Optional)
              </label>
              <textarea
                id="usageInstructions"
                name="usageInstructions"
                value={formData.usageInstructions}
                onChange={handleChange}
                placeholder="Provide instructions on how to use the tool"
                rows="6"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Extra Resources/Links */}
            <div className="mb-8">
              <label htmlFor="extraResources" className="block text-sm font-medium mb-2">
                Extra Resources/Links (Optional)
              </label>
              <textarea
                id="extraResources"
                name="extraResources"
                value={formData.extraResources}
                onChange={handleChange}
                placeholder="Add any extra resources or links related to the tool"
                rows="4"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-transparent border-2 border-green-500 text-green-500 font-semibold py-3 px-6 rounded-md hover:bg-green-500 hover:text-black transition-colors duration-200"
            >
              Submit for Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}