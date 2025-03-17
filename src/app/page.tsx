"use client";

import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function HomePage() {
  const services = [
    {
      title: "HR Consulting",
      description:
        "Get expert guidance and solutions for your HR needs with our comprehensive consulting services.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
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
    {
      title: "Talent Acquisition",
      description:
        "Strategic recruitment solutions to optimize your workforce and improve organizational performance.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Employee Management",
      description:
        "Comprehensive tools and services for effective employee management and engagement.",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated geometric patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,234,254,0.1),transparent)] opacity-70"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 pt-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <div className="inline-flex items-center space-x-1 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/20 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></span>
              <span className="text-sm font-medium">
                Leading Healthcare Staffing Platform
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              <span className="block mb-2 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Empowering Healthcare
              </span>
              <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                Transforming Careers
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto backdrop-blur-sm">
              Connect with exceptional healthcare talent and discover
              opportunities that drive success in the modern healthcare
              landscape.
            </p>

            <div className="flex flex-wrap gap-6 justify-center items-center">
              <Link
                href="/login"
                className="group relative px-8 py-4 bg-white text-blue-600 rounded-xl text-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center">
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                href="/about"
                className="group px-8 py-4 rounded-xl text-lg font-semibold border border-white/30 hover:bg-white/10 transition-all hover:border-white/50 backdrop-blur-sm"
              >
                Explore More
              </Link>
            </div>

            {/* Stats Preview */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: "10K+", label: "Healthcare Professionals" },
                { number: "98%", label: "Satisfaction Rate" },
                { number: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-blue-100 text-sm text-black">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Services Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your healthcare staffing with our integrated services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="mb-6 bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon.props.children}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-semibold">
                  Smart Features
                </span>
                <h2 className="text-4xl font-bold text-gray-900">
                  Advanced Features for{" "}
                  <span className="text-blue-600">Modern Healthcare</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Our platform combines cutting-edge technology with healthcare
                  expertise to streamline your staffing operations.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "AI-powered talent matching",
                    description:
                      "Match healthcare professionals with facilities based on skills, experience, and preferences.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    ),
                  },
                  {
                    title: "Real-time availability tracking",
                    description:
                      "Monitor staff availability and schedules in real-time with automated updates.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ),
                  },
                  {
                    title: "Automated credential verification",
                    description:
                      "Streamline compliance with automated credential tracking and verification.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    ),
                  },
                  {
                    title: "Integrated compliance management",
                    description:
                      "Ensure regulatory compliance with built-in monitoring and reporting tools.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    ),
                  },
                  {
                    title: "Smart scheduling system",
                    description:
                      "Optimize staff schedules with AI-powered recommendations and conflict resolution.",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    ),
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-4 bg-white rounded-xl transition-all border border-gray-100 hover:border-blue-200 hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="mr-4 p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {feature.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:ml-auto relative">
              <div className="relative">
                {/* Main Feature Illustration */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-medium text-gray-700">
                            Dashboard Overview
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: "Active Staff", value: "234" },
                          { label: "Assignments", value: "45" },
                          { label: "Compliance", value: "98%" },
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-3 rounded-lg"
                          >
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                            <div className="text-lg font-semibold text-blue-600">
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <div className="h-2 bg-gray-100 rounded-full w-full">
                          <div className="h-2 bg-blue-600 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full w-full">
                          <div className="h-2 bg-blue-400 rounded-full w-1/2 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "95%", label: "Placement Rate" },
                  { number: "2hrs", label: "Avg. Response Time" },
                  { number: "99%", label: "Client Satisfaction" },
                  { number: "1000+", label: "Active Facilities" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all text-center hover:shadow-md group hover:scale-105"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl overflow-hidden">
            <div className="px-8 py-16 sm:p-16 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.1),transparent)] opacity-70"></div>
              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Healthcare Staffing?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Join thousands of healthcare facilities that trust Upstic for
                  their staffing needs
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/login"
                    className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Get Started Now
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-xl font-semibold border border-white/30 text-white hover:bg-white/10 transition-all"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest healthcare staffing trends and updates delivered to
              your inbox
            </p>
            <form className="flex gap-4">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
