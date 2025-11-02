import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Shield, Terminal, Lock } from 'lucide-react';

export default function NotFoundPage({ isDark }) {
  return (
    <div className={`flex min-h-screen flex-col ${isDark ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-200`}>
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl mx-auto">
          {/* ---------- YOUR ORIGINAL 404 CONTENT ---------- */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className={`text-8xl md:text-[180px] font-bold bg-gradient-to-r ${isDark ? 'from-emerald-400 to-cyan-400' : 'from-emerald-500 to-cyan-500'} bg-clip-text text-transparent leading-none`}>
                404
              </div>
              <Shield
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isDark ? 'text-emerald-400/20' : 'text-emerald-500/20'}`}
                size={140}
                strokeWidth={1}
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className={`mb-6 text-4xl font-bold md:text-5xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Page Not Found</h1>
            <p className={`mb-4 text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              The requested resource could not be found on this server.
            </p>
            <div className={`inline-flex items-center gap-2 rounded-lg border ${isDark ? 'border-zinc-700 bg-zinc-800' : 'border-gray-200 bg-gray-50'} px-4 py-2`}>
              <Terminal size={18} className={`${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
              <code className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Error: ENOENT - Resource not found
              </code>
            </div>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Link
              to="/"
              className={`block rounded-2xl border-2 ${isDark ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 hover:border-emerald-400 hover:shadow-emerald-400/20' : 'border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 hover:border-emerald-500 hover:shadow-emerald-500/20'} p-8 transition-all hover:shadow-lg`}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className={`rounded-xl ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-100'} p-3 transition group-hover:bg-emerald-200`}>
                  <Home className={`${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} size={28} />
                </div>
                <div className="text-left">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Return Home</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Go back to the main page</p>
                </div>
              </div>
            </Link>

            <Link
              to="/categories"
              className={`block rounded-2xl border-2 ${isDark ? 'border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 hover:border-cyan-400 hover:shadow-cyan-400/20' : 'border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 hover:border-cyan-500 hover:shadow-cyan-500/20'} p-8 transition-all hover:shadow-lg`}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className={`rounded-xl ${isDark ? 'bg-cyan-900/30' : 'bg-cyan-100'} p-3 transition group-hover:bg-cyan-200`}>
                  <Search className={`${isDark ? 'text-cyan-400' : 'text-cyan-500'}`} size={28} />
                </div>
                <div className="text-left">
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Search Tools</h3>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Find what you're looking for</p>
                </div>
              </div>
            </Link>
          </div>

          <p className={`mt-8 text-center text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            If you believe this is an error, please{' '}
            <a
              href="mailto:support@cybertoohub.com"
              className={`underline ${isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-500 hover:text-emerald-400'} transition`}
            >
              contact support
            </a>
            .
          </p>
          {/* ---------- END OF CONTENT ---------- */}
        </div>
      </div>
    </div>
  );
}