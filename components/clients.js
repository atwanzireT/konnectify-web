"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HappyClients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Replace these with your actual client logos
  const clients = [
    { name: 'Company A', logo: '/clients/client-1.webp' },
    { name: 'Company B', logo: '/clients/client-2.webp' },
    { name: 'Company C', logo: '/clients/client-3.webp' },
    { name: 'Company D', logo: '/clients/client-4.webp' },
    { name: 'Company E', logo: '/clients/client-5.webp' },
    { name: 'Company F', logo: '/clients/client-6.webp' },
  ];

  // Auto-rotate clients (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const visibleClients = clients.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Companies We've Worked With
          </h2>
          <div className="w-20 h-1 bg-red-600 dark:bg-red-400 mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're proud to have partnered with these amazing brands to deliver exceptional marketing results.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-transparent rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-40"
            >
              <div className="relative w-full h-24">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {clients.map((client, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm flex items-center justify-center h-40">
                  <div className="relative w-full h-24">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="100px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setCurrentIndex(prev => (prev - 1 + clients.length) % clients.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-600 p-2 rounded-full shadow-md"
          >
            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentIndex(prev => (prev + 1) % clients.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-600 p-2 rounded-full shadow-md"
          >
            <svg className="w-5 h-5 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial (optional) */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl p-8 max-w-6xl mx-auto shadow-sm">
          <div className="text-center">
            <svg className="w-8 h-8 text-red-500 dark:text-red-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-4">
              "Konnectify transformed our marketing strategy with their creative approach and deep industry knowledge. Our campaign results exceeded all expectations."
            </p>
            <div className="font-medium text-gray-900 dark:text-white">— Mr Gilbert - CEO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;