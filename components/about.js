"use client";

import { ChartBarIcon, LightBulbIcon, UsersIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  const features = [
    {
      name: 'Industry Experience',
      description: 'Our team brings decades of combined experience in marketing and advertising across multiple industries.',
      icon: ChartBarIcon,
    },
    {
      name: 'Creative Solutions',
      description: 'We develop innovative strategies tailored to each client\'s unique needs and market position.',
      icon: LightBulbIcon,
    },
    {
      name: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with you to understand and achieve your business goals.',
      icon: UsersIcon,
    },
    {
      name: 'Market Reach',
      description: 'We help brands connect with audiences across Uganda and beyond through targeted campaigns.',
      icon: GlobeAltIcon,
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            About <span className="text-red-600 dark:text-red-400">Konnectify Uganda</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-red-600 dark:bg-red-400 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Konnectify Uganda consists of individuals that have high skills, knowledge and experience in the fields of marketing and advertising.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image/Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl sm:shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 w-full h-auto min-h-[300px] sm:min-h-[400px] bg-gray-200 dark:bg-gray-700">
                <Image
                  src="/images/img3.jpeg"
                  alt="About Konnectify Uganda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />                
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
              </div>
              
              {/* Experience badge - hidden on smallest screens */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="p-2 sm:p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-3 sm:mr-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Years in Business</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">5+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Working directly with customers to assist them in establishing and achieving their marketing and advertising goals is our main priority. We pledge to communicate their ideas in a way that is cost-effective, strategic, and creative. We also give our full assistance.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Why Choose Konnectify</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature) => (
                  <div key={feature.name} className="bg-white dark:bg-gray-700/30 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start">
                      <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg mr-3 sm:mr-4">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white mb-1">{feature.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/team"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 border border-gray-200 dark:border-gray-600 flex items-center text-sm sm:text-base"
              >
                Meet Our Team
              </Link>
              <Link
                href="/portfolio"
                className="px-4 sm:px-6 py-2 sm:py-3 text-white bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-lg font-medium hover:from-red-700 hover:to-red-800 dark:hover:from-red-800 dark:hover:to-red-900 transition-all duration-300 flex items-center text-sm sm:text-base"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;