"use client";

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background pattern - hidden on mobile */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 hidden sm:block">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] dark:bg-[url('/images/grid-dark.svg')]"></div>
      </div>

      {/* Mobile background image */}
      <div className="sm:hidden absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/img1.jpeg"
            alt="Konnectify Uganda Team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content - adjusted for mobile overlay */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white sm:text-gray-900 sm:dark:text-white mb-4 sm:mb-6 leading-tight">
              We are <span className="text-red-400 sm:text-red-600 sm:dark:text-red-400">Konnectify Uganda</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 sm:text-gray-600 sm:dark:text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
              Konnectify Uganda consists of individuals that have high skills, knowledge and experience in the fields of marketing and advertising.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link
                href="/get-started"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-red-500 to-red-600 sm:from-red-600 sm:to-red-700 dark:from-red-700 dark:to-red-800 text-white rounded-lg font-semibold hover:from-red-600 hover:to-red-700 sm:hover:from-red-700 sm:hover:to-red-800 dark:hover:from-red-800 dark:hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-red-500/30 dark:hover:shadow-red-600/20 flex items-center justify-center"
              >
                Get Started
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              
              <Link
                href="/#services"
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white/30 sm:border-gray-300 dark:border-gray-600 text-white sm:text-gray-700 sm:dark:text-gray-300 rounded-lg font-semibold hover:border-red-400 sm:hover:border-red-500 dark:hover:border-red-400 hover:text-red-300 sm:hover:text-red-600 sm:dark:hover:text-red-400 transition-all duration-300 flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Image/Illustration - hidden on mobile, shown on md+ */}
          <div className="hidden sm:block md:w-1/2 flex justify-center mt-8 md:mt-0 px-4 sm:px-0">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/img1.jpeg"
                  alt="Konnectify Uganda Team"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="p-2 sm:p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Successful Campaigns</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">200+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients/partners showcase */}
      <div className="bg-gray-50 dark:bg-gray-800 py-6 sm:py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-6">Trusted by leading brands in Uganda</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 sm:h-10 md:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
                {/* Replace with actual client logos */}
                <div className="h-full w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;