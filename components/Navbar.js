"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preferred color scheme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true' || 
                    (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-bold text-red-600 dark:text-red-400 text-2xl tracking-tight">
                Konnectify<span className="text-gray-800 dark:text-gray-200">Uganda</span>
              </span>
            </Link>
            
            {/* Primary Nav - Desktop */}
            <div className="hidden md:flex items-center ml-10 space-x-1">
              <NavLink href="/" exact>Home</NavLink>
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Get Started Button */}
            <Link 
              href="/get-started" 
              className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white rounded-md font-medium hover:from-red-700 hover:to-red-800 dark:hover:from-red-800 dark:hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-red-500/30 dark:hover:shadow-red-600/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-100 dark:bg-gray-800 shadow-lg">
          <MobileNavLink href="/" exact onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
          <MobileNavLink href="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
          <MobileNavLink href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
          
          <div className="flex items-center justify-between px-3 py-2">        
            <Link 
              href="/get-started" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white rounded-md text-sm font-medium hover:from-red-700 hover:to-red-800 dark:hover:from-red-800 dark:hover:to-red-900 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ href, exact = false, children }) => {
  return (
    <Link 
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        exact 
          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400'
      }`}
    >
      {children}
    </Link>
  );
};

// Reusable MobileNavLink component
const MobileNavLink = ({ href, exact = false, children, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
        exact
          ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-600 dark:hover:text-red-400'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;