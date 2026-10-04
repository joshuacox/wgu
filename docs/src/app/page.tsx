"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"oneliner" | "manual">("oneliner");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header / Nav */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-indigo-500/20">
              wgu
            </div>
            <div>
              <span className="font-bold text-lg text-slate-100 tracking-tight">
                wgu
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs uppercase px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800">
                WireGuard Assistant
              </span>
            </div>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="#features"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              Features
            </a>
            <a
              href="#installation"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              Install
            </a>
            <a
              href="#usage"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              Usage & Config
            </a>
            <a
              href="#wgd"
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              wgd Helper
            </a>
            <a
              href="https://github.com/joshuacox/wgu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-20 pb-16 sm:pb-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Fast, zero-dependency WireGuard rotating utility
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-cyan-400 tracking-tight leading-tight sm:leading-none mb-6">
              Effortless WireGuard Endpoint Rotation
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
              A lightweight CLI tool built for users with hundreds of VPN profiles (like Mullvad).
              Seamlessly switch between global endpoints or filter by country code in a single keystroke.
            </p>

            {/* Quick Install Bar */}
            <div className="max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 overflow-x-auto w-full font-mono text-xs sm:text-sm text-cyan-300 px-2 py-1 select-all">
                <span className="text-slate-500 select-none">$</span>
                <span>curl -sL https://raw.githubusercontent.com/joshuacox/wgu/refs/heads/master/bootstrap.sh | bash</span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(
                    "curl -sL https://raw.githubusercontent.com/joshuacox/wgu/refs/heads/master/bootstrap.sh | bash",
                    "hero-install"
                  )
                }
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs whitespace-nowrap transition cursor-pointer"
              >
                {copiedCode === "hero-install" ? "✓ Copied" : "Copy Command"}
              </button>
            </div>
          </div>
        </section>

        {/* AdSense Placement Placeholder (Prepared Container) */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 my-4">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 text-center">
            {/* AdSense Unit Container */}
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-8973108060277483"
              data-ad-slot="1234567890"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <div className="text-[11px] uppercase tracking-wider text-slate-600 font-mono">
              Advertisement
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Key Features
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Engineered with Unix simplicity and reliability in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-4 text-xl">
                🎲
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Random Endpoint Selection
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Picks a random WireGuard configuration file from your configuration directory using native Unix shuf.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-4 text-xl">
                🌍
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Country-Specific Filtering
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Filter configurations dynamically by ISO country code prefix (e.g. <code className="text-indigo-300">wgu us</code>, <code className="text-indigo-300">wgu se</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-4 text-xl">
                🔄
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Automatic Clean Teardown
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ships with <code className="text-emerald-300">wgd</code> to automatically detect active WireGuard interfaces and cleanly bring them down before rotating.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/50 flex items-center justify-center text-amber-400 mb-4 text-xl">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Zero Dependencies
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Written completely in clean Bash. Runs directly on Debian, Ubuntu, Arch, Fedora, Alpine, or macOS with standard WireGuard packages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-800/50 flex items-center justify-center text-purple-400 mb-4 text-xl">
                ⚙️
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Flexible Configuration
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Supports environment variables (<code className="text-purple-300">WG_DIR</code>) or dedicated config files (<code className="text-purple-300">~/.config/wgu/config</code>).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-lg bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-400 mb-4 text-xl">
                🛡️
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">
                Auto DNS Recovery
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Includes fallback triggers for <code className="text-rose-300">resolvconf -u</code> if DNS resolution gets hung during network interfaces switches.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="py-16 bg-slate-900/30 border-y border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 text-center">
              Installation
            </h2>
            <p className="text-slate-400 text-center mb-8 text-sm sm:text-base">
              First, ensure WireGuard tools (<code className="text-slate-200">wg-quick</code>) are installed on your machine.
            </p>

            {/* Install Tabs */}
            <div className="flex border-b border-slate-800 mb-6 justify-center space-x-4">
              <button
                onClick={() => setActiveTab("oneliner")}
                className={`pb-3 px-4 text-sm font-semibold transition border-b-2 cursor-pointer ${
                  activeTab === "oneliner"
                    ? "border-indigo-500 text-indigo-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                1. Automated Oneliner
              </button>
              <button
                onClick={() => setActiveTab("manual")}
                className={`pb-3 px-4 text-sm font-semibold transition border-b-2 cursor-pointer ${
                  activeTab === "manual"
                    ? "border-indigo-500 text-indigo-400"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                2. Autotools / Source
              </button>
            </div>

            {activeTab === "oneliner" && (
              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-sm relative">
                  <div className="text-slate-400 mb-2 text-xs"># Run the bootstrap installer:</div>
                  <div className="text-emerald-400 select-all">
                    curl -sL https://raw.githubusercontent.com/joshuacox/wgu/refs/heads/master/bootstrap.sh | bash
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "curl -sL https://raw.githubusercontent.com/joshuacox/wgu/refs/heads/master/bootstrap.sh | bash",
                        "tab-oneliner"
                      )
                    }
                    className="absolute right-3 top-3 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded transition cursor-pointer"
                  >
                    {copiedCode === "tab-oneliner" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "manual" && (
              <div className="space-y-4">
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-sm relative">
                  <div className="text-slate-400 mb-2 text-xs"># Clone repository and install with Autotools:</div>
                  <pre className="text-emerald-400 select-all text-xs sm:text-sm overflow-x-auto">
{`git clone https://github.com/joshuacox/wgu.git
cd wgu
./configure
sudo make install`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "git clone https://github.com/joshuacox/wgu.git\ncd wgu\n./configure\nsudo make install",
                        "tab-manual"
                      )
                    }
                    className="absolute right-3 top-3 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 rounded transition cursor-pointer"
                  >
                    {copiedCode === "tab-manual" ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Usage & Configuration Section */}
        <section id="usage" className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Command Usage & Syntax
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Rotate endpoints instantly with straightforward commands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5">
              <h3 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                <span className="text-indigo-400">#1</span> Random Worldwide Rotation
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Randomly selects any WireGuard configuration in your directory:
              </p>
              <div className="bg-slate-950 rounded-lg p-3 font-mono text-sm text-cyan-300 select-all">
                wgu
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5">
              <h3 className="font-semibold text-slate-200 mb-2 flex items-center gap-2">
                <span className="text-indigo-400">#2</span> Target Country Code
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Restricts random selection to files matching country prefix:
              </p>
              <div className="bg-slate-950 rounded-lg p-3 font-mono text-sm text-cyan-300 select-all">
                wgu us&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-600"># United States</span><br/>
                wgu se&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-600"># Sweden</span><br/>
                wgu ch&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-600"># Switzerland</span>
              </div>
            </div>
          </div>

          {/* Configuration Options */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-100 mb-4">
              Configuration Reference
            </h3>
            <p className="text-sm text-slate-400 mb-6">
              By default, <code className="text-slate-200">wgu</code> scans <code className="text-slate-200">/etc/wireguard</code>. You can configure it via environment variables or a configuration file.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono mb-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-indigo-400 block font-semibold mb-1">Config File Paths</span>
                <span className="text-slate-300 block">~/.config/wgu/config</span>
                <span className="text-slate-500 block text-xs">(fallback: ~/.wgu_config)</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-indigo-400 block font-semibold mb-1">Environment Variables</span>
                <span className="text-slate-300 block">export WG_DIR=/path/to/configs</span>
                <span className="text-slate-500 block text-xs">Overrides default directory</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 font-medium">Variable</th>
                    <th className="py-2.5 font-medium">Default</th>
                    <th className="py-2.5 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                  <tr>
                    <td className="py-2.5 text-indigo-300">WG_DIR</td>
                    <td className="py-2.5 text-slate-500">/etc/wireguard</td>
                    <td className="py-2.5 font-sans text-slate-400">Directory containing WireGuard .conf files</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-indigo-300">VERBOSITY</td>
                    <td className="py-2.5 text-slate-500">1</td>
                    <td className="py-2.5 font-sans text-slate-400">Logging output detail (1 = status, 10+ = bash tracing)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 text-indigo-300">WG_D_B4_U</td>
                    <td className="py-2.5 text-slate-500">1</td>
                    <td className="py-2.5 font-sans text-slate-400">Automatically run <code className="text-slate-300">wgd</code> to bring down existing connections before starting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* wgd Teardown Tool Section */}
        <section id="wgd" className="py-16 bg-slate-900/30 border-t border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-2">
                  Included Utility
                </div>
                <h3 className="text-2xl font-bold text-slate-100">
                  wgd: The Graceful WireGuard Teardown Tool
                </h3>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Inspects active interfaces via <code className="text-slate-300">sudo wg</code> and runs <code className="text-slate-300">wg-quick down</code> on all active configurations safely.
                </p>
              </div>
              <div className="w-full md:w-auto bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-sm text-rose-400 select-all">
                $ wgd
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            wgu &copy; {new Date().getFullYear()} Joshua Cox. Released under the GNU General Public License v3.0.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/joshuacox/wgu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              GitHub Repository
            </a>
            <a
              href="/ads.txt"
              className="hover:text-slate-300 transition"
            >
              ads.txt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
