"use client";

import { MegaphoneIcon, NewspaperIcon, DevicePhoneMobileIcon, FilmIcon, CalendarIcon, TicketIcon, MapIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      name: 'Traditional Marketing',
      icon: MegaphoneIcon,
      description: 'Offline media strategies to reach your target audience effectively.',
      features: [
        'Advertising/PR strategy design',
        'Strategic marketing plans',
        'Market segment identification',
        'Industry trend analysis',
        'Campaign tracking & analysis'
      ],
      examples: [
        'Newspaper ads',
        'Billboards',
        'Brochures',
        'Direct mail',
        'TV/Radio ads'
      ]
    },
    {
      name: 'Print Advertising',
      icon: NewspaperIcon,
      description: 'Physically printed media solutions for broad customer reach.',
      features: [
        'Business cards & stationery',
        'Signage & billboards',
        'Promotional materials',
        'Packaging design',
        'Branded merchandise'
      ],
      examples: [
        'Business cards',
        'Billboards',
        'Flyers & brochures',
        'Menus & catalogs',
        'Branded merchandise'
      ]
    },
    {
      name: 'Digital Marketing',
      icon: DevicePhoneMobileIcon,
      description: 'Online strategies to promote products and services effectively.',
      features: [
        'Website development',
        'Search engine optimization',
        'Social media marketing',
        'Email campaigns',
        'Analytics & reporting'
      ],
      examples: [
        'Website maintenance',
        'SEO services',
        'Social media ads',
        'Content creation',
        'PPC management'
      ]
    },
    {
      name: 'Media Advertising',
      icon: FilmIcon,
      description: 'Broadcast media solutions for maximum brand exposure.',
      features: [
        'TV commercial production',
        'Radio spot creation',
        'Media buying',
        'Campaign strategy',
        'Performance tracking'
      ],
      examples: [
        'TV advertisements',
        'Radio commercials',
        'Podcast sponsorships',
        'Video production',
        'Media placement'
      ]
    },
    {
      name: 'Events Planning',
      icon: CalendarIcon,
      description: 'Memorable experiences that connect brands with audiences.',
      features: [
        'Corporate events',
        'Product launches',
        'Exhibitions',
        'Team building',
        'Conferences'
      ],
      examples: [
        'Brand activations',
        'Trade shows',
        'Award ceremonies',
        'Networking events',
        'Grand openings'
      ]
    },
    {
      name: 'Tours & Travel',
      icon: MapIcon,
      description: 'Tailored travel experiences for corporate and leisure clients.',
      features: [
        'Corporate retreats',
        'Team excursions',
        'Incentive travel',
        'Logistics management',
        'Destination planning'
      ],
      examples: [
        'Company retreats',
        'Incentive trips',
        'Team building tours',
        'Conference travel',
        'VIP experiences'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-red-600 dark:text-red-400">Services</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 dark:bg-red-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A marketing and advertising strategy needs to be successful. The plan is a waste of time if it does not aid in increasing sales, lowering costs, or gaining market share.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.name} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg mr-4">
                    <service.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-red-500 dark:text-red-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-100 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/get-started"
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium text-sm flex items-center transition-colors duration-300"
                >
                  Request this service
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to elevate your marketing strategy?</h3>
            <p className="text-red-100 mb-6 max-w-3xl mx-auto">
              Our team of experts is ready to help you craft the perfect marketing solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-started"
                className="px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;