"use client";

import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "healthcare_facility", // or healthcare_professional
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      city: "New York",
      address: "123 Healthcare Ave, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@upstic.com",
    },
    {
      city: "San Francisco",
      address: "456 Medical Plaza, San Francisco, CA 94105",
      phone: "+1 (555) 987-6543",
      email: "sf@upstic.com",
    },
    {
      city: "London",
      address: "789 Health Street, London, UK EC2A 4NE",
      phone: "+44 20 7123 4567",
      email: "uk@upstic.com",
    },
  ];

  const supportChannels = [
    {
      name: "Live Chat",
      description: "Get instant help from our support team",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      action: "Start Chat",
      link: "#",
    },
    {
      name: "Phone Support",
      description: "Call us 24/7 for urgent assistance",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      action: "Call Now",
      link: "tel:+1-555-123-4567",
    },
    {
      name: "Email Support",
      description: "Get help via email within 24 hours",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      action: "Send Email",
      link: "mailto:support@upstic.com",
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        {/* Geometric Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,234,254,0.3),transparent)] opacity-70"></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-blue-50 rounded-xl mb-7">
                <span className="inline-block bg-blue-600 rounded-lg w-2 h-2 animate-pulse mr-2"></span>
                <p className="text-blue-600 font-medium">Get in Touch</p>
              </div>

              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Let's Start a
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 ml-3">
                  Conversation
                </span>
              </h1>

              <p className="mt-7 text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions? We're here to help. Reach out to our team and
                we'll get back to you shortly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white px-4 py-3"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    I am a
                  </label>
                  <select
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white px-4 py-3"
                  >
                    <option value="healthcare_facility">
                      Healthcare Facility
                    </option>
                    <option value="healthcare_professional">
                      Healthcare Professional
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Support Options */}
            <div className="space-y-12">
              {/* Support Channels */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Quick Support Options
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {supportChannels.map((channel, index) => (
                    <a
                      key={index}
                      href={channel.link}
                      className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                          {channel.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {channel.name}
                        </h4>
                        <p className="mt-1 text-gray-600">
                          {channel.description}
                        </p>
                        <span className="mt-2 inline-flex items-center text-sm font-medium text-blue-600">
                          {channel.action}
                          <svg
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Offices
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {offices.map((office, index) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {office.city}
                      </h4>
                      <p className="mt-2 text-gray-600">{office.address}</p>
                      <div className="mt-4 space-y-2">
                        <p className="flex items-center text-gray-600">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {office.phone}
                        </p>
                        <p className="flex items-center text-gray-600">
                          <svg
                            className="h-5 w-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {office.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Visit Our Global Offices
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              We have offices around the world to better serve our healthcare
              community
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9381390334324!2d78.45474337389004!3d17.510466199250303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915bb3c99113%3A0x21de686449a8b11!2sDream%20Satisfy%20Digital%20Agency!5e0!3m2!1sen!2sin!4v1742145993004!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
