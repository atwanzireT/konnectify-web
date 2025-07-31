"use client";

import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  // Social media icons component
  const SocialIcon = ({ children, href }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {children}
    </a>
  );

  // Footer link component
  const FooterLink = ({ href, children }) => (
    <li>
      <a 
        href={href} 
        className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300 py-1 block"
      >
        {children}
      </a>
    </li>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 bg-clip-text text-transparent">
                Konnectify Uganda
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              We are a team of marketing and advertising professionals dedicated to helping businesses grow through strategic and creative solutions.
            </p>
            
            <div className="flex space-x-2">
              <SocialIcon href="https://facebook.com">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services#traditional">Traditional Marketing</FooterLink>
              <FooterLink href="/services#print">Print Advertising</FooterLink>
              <FooterLink href="/services#digital">Digital Marketing</FooterLink>
              <FooterLink href="/services#media">Media Advertising</FooterLink>
              <FooterLink href="/services#events">Events Planning</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">Nkurumah Road, Light Arcade</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:konnectify20@gmail.com" 
                  className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors duration-300"
                >
                  konnectify20@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+256780530120" 
                  className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors duration-300"
                >
                  0780530120
                </a>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 opacity-0" />
                <a 
                  href="tel:+256705711887" 
                  className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors duration-300"
                >
                  0705711887
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Konnectify Uganda. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="/privacy-policy" 
              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="/sitemap" 
              className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 text-sm transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;