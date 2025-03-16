"use client";

import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const offices = [
    {
      city: "New York",
      address: "123 Healthcare Ave, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@upstic.com",
      image: "/office-ny.jpg",
      mapUrl: "https://maps.google.com/?q=123+Healthcare+Ave+New+York+NY+10001",
    },
    {
      city: "Los Angeles",
      address: "456 Medical Blvd, Los Angeles, CA 90001",
      phone: "+1 (555) 987-6543",
      email: "la@upstic.com",
      image: "/office-la.jpg",
      mapUrl:
        "https://maps.google.com/?q=456+Medical+Blvd+Los+Angeles+CA+90001",
    },
    {
      city: "Chicago",
      address: "789 Wellness St, Chicago, IL 60601",
      phone: "+1 (555) 456-7890",
      email: "ch@upstic.com",
      image: "/office-ch.jpg",
      mapUrl: "https://maps.google.com/?q=789+Wellness+St+Chicago+IL+60601",
    },
  ];

  const contactMethods = [
    {
      name: "Sales",
      description: "Discuss our platform and pricing",
      email: "sales@upstic.com",
      phone: "+1 (555) 123-4567",
      responseTime: "Within 24 hours",
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
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      name: "Support",
      description: "Get help with technical issues",
      email: "support@upstic.com",
      phone: "+1 (555) 987-6543",
      responseTime: "Within 2 hours",
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      name: "Partnerships",
      description: "Explore collaboration opportunities",
      email: "partners@upstic.com",
      phone: "+1 (555) 456-7890",
      responseTime: "Within 48 hours",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white curved-bottom-edge"></div>
      </div>

      {/* Contact Methods Grid */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {method.name}
                    </h3>
                    <p className="text-gray-600">{method.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${method.email}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {method.email}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:${method.phone}`}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {method.phone}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    Response time: {method.responseTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg animate-fade-in ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      focusedField === "name"
                        ? "border-blue-400 ring-2 ring-blue-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      focusedField === "email"
                        ? "border-blue-400 ring-2 ring-blue-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      focusedField === "company"
                        ? "border-blue-400 ring-2 ring-blue-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      focusedField === "phone"
                        ? "border-blue-400 ring-2 ring-blue-100"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    focusedField === "subject"
                      ? "border-blue-400 ring-2 ring-blue-100"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                    focusedField === "message"
                      ? "border-blue-400 ring-2 ring-blue-100"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden ${
                    isSubmitting ? "cursor-not-allowed opacity-80" : ""
                  }`}
                >
                  <span className={isSubmitting ? "invisible" : ""}>
                    Send Message
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={office.image}
                    alt={`${office.city} Office`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-20">
                    {office.city}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600">{office.address}</p>
                  <div className="space-y-2">
                    <p>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
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
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-blue-600 hover:text-blue-700 flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
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
                      </a>
                    </p>
                  </div>
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-4"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    View on Google Maps
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
