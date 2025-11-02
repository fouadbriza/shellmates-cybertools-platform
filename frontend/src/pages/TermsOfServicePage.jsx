import React from 'react';

export default function TermsOfServicePage({ isDark }) {
  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Terms of Service</h1>
        
        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>1. Acceptance of Terms</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            By accessing and using CyberTool Hub, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to all of these terms, do not use CyberTool Hub.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>2. Changes to Terms</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>3. User Conduct</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            You agree not to use CyberTool Hub for any unlawful purpose or any purpose prohibited by these Terms. You may not use CyberTool Hub in any manner that could damage, disable, overburden, or impair CyberTool Hub or interfere with any other party's use and enjoyment of CyberTool Hub.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>4. Intellectual Property</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            All content, trademarks, services marks, trade names, logos, and icons are proprietary to CyberTool Hub. Nothing contained on CyberTool Hub should be construed as granting any license or right to use any trademark displayed on CyberTool Hub without the written permission of CyberTool Hub or such third party that may own the trademarks displayed on CyberTool Hub.
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>5. Disclaimer of Warranties</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            CyberTool Hub is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>6. Limitation of Liability</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            In no event shall CyberTool Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CyberTool Hub, even if CyberTool Hub or a CyberTool Hub authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>
      </div>
    </div>
  );
}