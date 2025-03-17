"use client";

import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI-Powered Matching",
      description:
        "Smart algorithm that connects healthcare professionals with the perfect opportunities based on skills, experience, and preferences.",
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
      title: "Real-time Scheduling",
      description:
        "Dynamic scheduling system that updates in real-time, ensuring efficient staff allocation and shift management.",
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
      title: "Credential Management",
      description:
        "Automated credential verification and tracking system to maintain compliance and certification standards.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
  ];

  const benefits = [
    {
      title: "Streamlined Hiring",
      description:
        "Reduce time-to-hire by 60% with our automated matching system",
      metric: "60%",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
    },
    {
      title: "Cost Efficiency",
      description:
        "Save up to 40% on staffing costs through optimized scheduling",
      metric: "40%",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    },
    {
      title: "Compliance Rate",
      description: "Maintain 99.9% compliance rate with automated tracking",
      metric: "99.9%",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
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
                <p className="text-blue-600 font-medium">
                  Powerful Features for Healthcare Staffing
                </p>
              </div>

              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Advanced Solutions for
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 ml-3">
                  Modern Healthcare
                </span>
              </h1>

              <p className="mt-7 text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive suite of features designed to
                streamline healthcare staffing and enhance operational
                efficiency.
              </p>
            </div>
          </div>

          {/* Decorative bottom curve */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-50"></div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold">Core Features</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Powerful Tools for Healthcare Staffing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your healthcare staffing
              operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold">Benefits</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact on your healthcare staffing operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8 mx-auto">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {benefit.icon}
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Healthcare Staffing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Experience the power of our advanced features. Get started
                today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2"
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
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
