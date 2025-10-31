// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Shield, Terminal, Lock } from 'lucide-react';

export default function NotFoundPage() {
  return (

    <div className="flex min-h-screen flex-col bg-zinc-900 text-white ">
      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl mx-auto">

          {/* ---------- YOUR ORIGINAL 404 CONTENT ---------- */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="text-[180px] font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent leading-none">
                404
              </div>
              <Shield
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-500/20"
                size={140}
                strokeWidth={1}
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Page Not Found</h1>
            <p className="mb-4 text-xl text-gray-400">
              The requested resource could not be found on this server.
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-2">
              <Terminal size={18} className="text-emerald-500" />
              <code className="text-sm text-gray-300">
                Error: ENOENT - Resource not found
              </code>
            </div>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Link
              to="/"
              className="block rounded-2xl border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-8 transition-all hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-xl bg-emerald-500/20 p-3 transition group-hover:bg-emerald-500/30">
                  <Home className="text-emerald-500" size={28} />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Return Home</h3>
                  <p className="text-sm text-gray-400">Go back to the main page</p>
                </div>
              </div>
            </Link>

            <Link
              to="/tools"
              className="block rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 p-8 transition-all hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-xl bg-cyan-500/20 p-3 transition group-hover:bg-cyan-500/30">
                  <Search className="text-cyan-500" size={28} />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">Search Tools</h3>
                  <p className="text-sm text-gray-400">Find what you’re looking for</p>
                </div>
              </div>
            </Link>
          </div>

         
          <p className="mt-8 text-center text-sm text-gray-500">
            If you believe this is an error, please{' '}
            <a
              href="mailto:support@cybertoohub.com"
              className="underline text-emerald-500 transition hover:text-emerald-400"
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