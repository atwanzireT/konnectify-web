"use client";

import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-red-600 dark:text-red-400">Us</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 dark:bg-red-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Konnectify respects your feedback. Reach out to us for inquiries, collaborations, or to discuss your marketing needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact information */}
          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Our Address</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg mr-4">
                    <MapPinIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">Nkurumah Road, Light Arcade</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg mr-4">
                    <EnvelopeIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email Us</h4>
                    <a 
                      href="mailto:konnectify20@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                    >
                      konnectify20@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg mr-4">
                    <PhoneIcon className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">Call Us</h4>
                    <div className="space-y-1">
                      <a 
                        href="tel:+256780530120" 
                        className="block text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                      >
                        0780530120
                      </a>
                      <a 
                        href="tel:+256705711887" 
                        className="block text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300"
                      >
                        0705711887
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Business Hours</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-400 dark:focus:border-red-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 text-white rounded-lg font-semibold hover:from-red-700 hover:to-red-800 dark:hover:from-red-800 dark:hover:to-red-900 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="h-96 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            {/* Replace with your actual map embed */}
            <div className="text-center p-6">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Our Location</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Nkurumah Road, Light Arcade</p>
              <a 
                href="https://maps.google.com/?q=Nkurumah+Road,+Light+Arcade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;