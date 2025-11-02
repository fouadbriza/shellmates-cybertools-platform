import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import Home from './pages/HomePage';
import About from './pages/About';
import SubmitTool from './pages/SubmitToolPage';
import ToolsHub from './pages/ToolsHub';
import NotFound from './pages/NotFound';
import TermsOfServicePage from './pages/TermsOfServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Footer from './components/Footer';

export default function CyberToolHub() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved === 'dark' || (!saved && prefersDark);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <div className={`flex min-h-screen flex-col ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'}`} style={{ minWidth: '100vw' }}>   
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/about" element={<About isDark={isDark} />} />
          <Route path="/categories" element={<ToolsHub isDark={isDark} />} />
          <Route path="/submit" element={<SubmitTool isDark={isDark} />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage isDark={isDark} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage isDark={isDark} />} />
          <Route path="*" element={<NotFound isDark={isDark} />} />
        </Routes>
        <Footer isDark={isDark} />
      </main>
    </div>
  );
}