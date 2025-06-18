"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  const handleNavigation = (page) => {
    setActive(page);
    router.push(`/${page}`);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-indigo-900/80 via-purple-900/80 to-pink-900/80 border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/logo.png"
                    width={32}
                    height={32}
                    alt="JobNudge Logo"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                JobNudge
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {isAuthenticated ? (
                // Authenticated user navigation
                <>
                  <button
                    className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      active === "dashboard"
                        ? "bg-white/20 text-white shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => handleNavigation("dashboard")}
                  >
                    <GiHamburgerMenu className="w-4 h-4" />
                    <span>Dashboard</span>
                    {active === "dashboard" && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    )}
                  </button>
                  
                  <button
                    className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      active === "profile"
                        ? "bg-white/20 text-white shadow-lg"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => handleNavigation("profile")}
                  >
                    <FaUser className="w-4 h-4" />
                    <span>Profile</span>
                    {active === "profile" && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    )}
                  </button>

                  <LogoutLink className="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10">
                    Logout
                  </LogoutLink>
                </>
              ) : (
                // Unauthenticated user navigation
                <>
                  <a href="#about" className="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10">
                    About
                  </a>
                  <a href="#contact" className="px-6 py-3 rounded-xl font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10">
                    Contact
                  </a>
                  <LoginLink
                    postLoginRedirectURL="/userForm"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 shadow-lg"
                  >
                    Login
                  </LoginLink>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed top-20 right-4 left-4 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-6">
            <div className="space-y-4">
              {isAuthenticated ? (
                // Authenticated mobile menu
                <>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                      active === "dashboard"
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => handleNavigation("dashboard")}
                  >
                    <GiHamburgerMenu className="w-5 h-5" />
                    <span>Dashboard</span>
                  </button>
                  
                  <button
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-3 ${
                      active === "profile"
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => handleNavigation("profile")}
                  >
                    <FaUser className="w-5 h-5" />
                    <span>Profile</span>
                  </button>

                  <LogoutLink className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 block">
                    Logout
                  </LogoutLink>
                </>
              ) : (
                // Unauthenticated mobile menu
                <>
                  <a href="#about" className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 block">
                    About
                  </a>
                  <a href="#contact" className="w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 block">
                    Contact
                  </a>
                  <LoginLink
                    postLoginRedirectURL="/userForm"
                    className="w-full text-left px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 shadow-lg block"
                  >
                    Login
                  </LoginLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;