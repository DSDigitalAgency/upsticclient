"use client";

import Image from "next/image";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our healthcare staffing solutions.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "Continuously innovating to provide cutting-edge healthcare staffing solutions.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "Operating with unwavering integrity and transparency in all our dealings.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
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
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      image: "/avatar-1.jpeg",
      description:
        "Leading healthcare innovation with over 15 years of industry experience.",
    },
    {
      name: "Michael Chang",
      role: "Chief Technology Officer",
      image: "/avatar-2.jpeg",
      description:
        "Driving technological advancement in healthcare staffing solutions.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "/avatar-3.jpeg",
      description:
        "Ensuring seamless delivery of staffing services across all locations.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize healthcare staffing.",
    },
    {
      year: "2019",
      title: "National Expansion",
      description:
        "Expanded operations to serve healthcare facilities nationwide.",
    },
    {
      year: "2020",
      title: "Tech Innovation",
      description:
        "Launched AI-powered matching platform for healthcare professionals.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description:
        "Received multiple awards for excellence in healthcare staffing.",
    },
    {
      year: "2022",
      title: "Global Reach",
      description: "Extended services to international healthcare markets.",
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              About Upstic
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Transforming healthcare staffing through innovation, excellence,
              and unwavering commitment to quality.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-white"
          style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}
        ></div>
      </div>

      {/* Mission Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At Upstic, we're dedicated to revolutionizing healthcare
                staffing by connecting exceptional talent with outstanding
                opportunities. Our mission is to enhance healthcare delivery
                through innovative staffing solutions.
              </p>
              <div className="space-y-4">
                {[
                  "Connecting healthcare professionals with their ideal roles",
                  "Empowering healthcare facilities with top talent",
                  "Advancing healthcare through technological innovation",
                  "Building lasting relationships in healthcare",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-6 h-6 text-blue-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg blur opacity-30"></div>
                <Image
                  src="/Team meeting and innovation.jpeg"
                  alt="Our Mission"
                  width={600}
                  height={400}
                  className="relative rounded-lg shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in delivering exceptional healthcare
              staffing solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experts driving innovation in healthcare staffing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-50"></div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="relative rounded-full ring-4 ring-white mx-auto"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our path of innovation and growth
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  } flex items-center`}
                >
                  <div className="flex-1 lg:w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div
                    className={`flex-1 lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Healthcare Staffing?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join us in revolutionizing the future of healthcare staffing.
                Let's create success together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                  className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all"
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
