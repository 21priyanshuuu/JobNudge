// app/page.tsx
"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isClient) return null;

  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Mouse Glow Effect */}
      <div 
        className="absolute pointer-events-none opacity-30 rounded-full bg-gradient-radial from-cyan-400/20 to-transparent blur-xl transition-all duration-300 ease-out"
        style={{
          width: '400px',
          height: '400px',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />



      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text Section */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                Find Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Dream Tech Career
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                Let JobNudge nudge you toward your best-fit tech role.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <LoginLink
                postLoginRedirectURL="/userForm"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Login to Get Started</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </LoginLink>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
                🤖 AI-Powered Matching
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
                💼 Tech Career Focus
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium">
                🎯 Personalized Guidance
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl scale-150 animate-pulse" />
              
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-2xl">
                
                {/* 3D Career Paths Visualization */}
                <div className="w-80 h-80 relative">
                  {/* Central AI Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🧠</span>
                  </div>

                  {/* Career Path Nodes */}
                  {[
                    { emoji: "💻", label: "Frontend Dev", position: "top-4 left-1/2 -translate-x-1/2" },
                    { emoji: "⚙️", label: "Backend Dev", position: "top-1/2 right-4 -translate-y-1/2" },
                    { emoji: "📊", label: "Data Science", position: "bottom-4 left-1/2 -translate-x-1/2" },
                    { emoji: "🎨", label: "UI/UX Design", position: "top-1/2 left-4 -translate-y-1/2" },
                    { emoji: "☁️", label: "DevOps", position: "top-8 right-8" },
                    { emoji: "📱", label: "Mobile Dev", position: "bottom-8 left-8" }
                  ].map((node, index) => (
                    <div key={index} className={`absolute ${node.position} group cursor-pointer`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110">
                        <span className="text-lg">{node.emoji}</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {node.label}
                      </div>
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {/* Lines connecting center to career nodes */}
                    <line x1="50%" y1="50%" x2="50%" y2="16" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
                    <line x1="50%" y1="50%" x2="304" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <line x1="50%" y1="50%" x2="50%" y2="304" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <line x1="50%" y1="50%" x2="16" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}