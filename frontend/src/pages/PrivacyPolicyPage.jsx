import React from 'react';

export default function PrivacyPolicyPage({ isDark }) {
  return (
    <div className={`min-h-screen ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>1. Information We Collect</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            We collect several types of information from and about users of our website, including information:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>By which you may be personally identified, such as name, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
              <li>That is about you but individually does not identify you; and</li>
              <li>About your internet connection, the equipment you use to access our website and usage details.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>2. How We Use Your Information</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            We use information that we collect about you or that you provide to us, including any personal information:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>To present our website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill any other purpose for which you provide it.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
              <li>To notify you about changes to our website or any products or services we offer or provide through it.</li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>3. Disclosure of Your Information</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of CyberTool Hub's assets.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>4. Data Security</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
          </p>
        </section>
      </div>
    </div>
  );
}