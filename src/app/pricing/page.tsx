"use client";

import { useState } from "react";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("recruiter"); // 'recruiter' or 'candidate'

  const recruiterPlans = [
    {
      name: "Starter",
      description: "Perfect for small healthcare facilities",
      price: "499",
      duration: "per month",
      features: [
        "Up to 50 staff profiles",
        "Basic scheduling tools",
        "Manual credential tracking",
        "Email support",
        "Basic analytics",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing healthcare organizations",
      price: "999",
      duration: "per month",
      features: [
        "Up to 200 staff profiles",
        "AI-powered matching",
        "Automated credential verification",
        "Priority support",
        "Advanced analytics",
        "Custom reporting",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large healthcare networks",
      price: "Custom",
      duration: "custom pricing",
      features: [
        "Unlimited staff profiles",
        "Custom AI solutions",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom integrations",
        "White-label options",
        "Advanced security features",
        "Custom workflow automation",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const candidatePlans = [
    {
      name: "Basic",
      description: "Perfect for healthcare professionals",
      price: "0",
      duration: "forever",
      features: [
        "Create professional profile",
        "Browse job opportunities",
        "Basic job applications",
        "Email notifications",
        "Profile visibility to recruiters",
      ],
      cta: "Get Started Free",
      popular: false,
    },
    {
      name: "Premium",
      description: "For active job seekers",
      price: "29",
      duration: "per month",
      features: [
        "All Basic features",
        "Priority job applications",
        "Advanced job matching",
        "Early access to jobs",
        "Profile highlighting",
        "Direct messaging",
        "Career insights",
      ],
      cta: "Go Premium",
      popular: true,
    },
    {
      name: "Pro",
      description: "For healthcare leaders",
      price: "79",
      duration: "per month",
      features: [
        "All Premium features",
        "Career coaching sessions",
        "Resume review",
        "Interview preparation",
        "Salary insights",
        "Leadership resources",
        "Networking events access",
        "Custom career roadmap",
      ],
      cta: "Upgrade to Pro",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does the pricing work?",
      answer:
        "Our pricing is based on the number of staff profiles and features needed. The Starter plan is perfect for small facilities, while Professional and Enterprise plans offer more advanced features and capacity.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial of our Professional plan, allowing you to experience our advanced features before making a decision.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, ACH payments, and wire transfers for Enterprise customers. All payments are processed securely through our payment partners.",
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
                  Simple, Transparent Pricing
                </p>
              </div>

              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Choose the Right Plan for
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500 ml-3">
                  Your Needs
                </span>
              </h1>

              <p className="mt-7 text-lg text-gray-600 max-w-2xl mx-auto">
                Flexible pricing options designed for both healthcare facilities
                and professionals
              </p>

              {/* Plan Type Toggle */}
              <div className="mt-12 inline-flex p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setActiveTab("recruiter")}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === "recruiter"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Healthcare Facilities
                </button>
                <button
                  onClick={() => setActiveTab("candidate")}
                  className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === "candidate"
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  For Healthcare Professionals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "recruiter" ? recruiterPlans : candidatePlans).map(
              (plan, index) => (
                <div
                  key={index}
                  className={`relative group rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-gradient-to-b from-blue-600 to-blue-700 text-white transform hover:-translate-y-1"
                      : "bg-white hover:-translate-y-1"
                  } transition-all duration-300 shadow-sm hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="inline-flex items-center justify-center px-4 py-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full text-sm font-semibold text-white shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        plan.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm mb-6 ${
                        plan.popular ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span
                        className={`text-5xl font-bold ${
                          plan.popular ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.price === "Custom" ? "" : "$"}
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-blue-100" : "text-gray-600"
                        }`}
                      >
                        /{plan.duration}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`space-y-4 mb-8 ${
                      plan.popular ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-3 ${
                            plan.popular ? "text-blue-200" : "text-blue-600"
                          }`}
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
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Link
                      href={plan.name === "Enterprise" ? "/contact" : "/login"}
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 ${
                        plan.popular
                          ? "bg-white text-blue-600 hover:bg-blue-50"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      {plan.cta}
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
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold">FAQ</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="grid gap-8 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare professionals and facilities that
                trust our platform
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
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
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
