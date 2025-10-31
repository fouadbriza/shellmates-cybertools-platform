import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/NavBar';
import Home from './pages/HomePage';
import About from './pages/About';
import SubmitTool from './pages/SubmitToolPage';
import ToolsHub from './pages/ToolsHub';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function CyberToolHub() {
  return (
    <div className="flex min-h-screen flex-col" style={{ minWidth: '100vw' }}>   
      <Header />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<ToolsHub />} />
        <Route path="/submit" element={<SubmitTool />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
       <Footer />
    </main>
    </div>

  );
}