"use client";

import { useState } from "react";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState("facility"); // 'facility' or 'professional'

  const facilityPlans = [
    {
      name: "Starter",
      description: "Perfect for small healthcare facilities",
      price: isAnnual ? 199 : 249,
      features: [
        "Up to 10 active job postings",
        "Basic candidate matching",
        "Standard support",
        "Basic analytics",
        "Email notifications",
        "Basic compliance tools",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing medical practices",
      price: isAnnual ? 399 : 449,
      features: [
        "Up to 25 active job postings",
        "Advanced candidate matching",
        "Priority support",
        "Advanced analytics",
        "SMS notifications",
        "Full compliance suite",
        "Custom branding",
        "Credential verification",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large healthcare networks",
      price: isAnnual ? 899 : 999,
      features: [
        "Unlimited job postings",
        "AI-powered matching",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Multi-facility management",
        "Custom workflows",
        "API access",
        "White-label solution",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const professionalPlans = [
    {
      name: "Basic",
      description: "Essential tools for healthcare professionals",
      price: 0,
      features: [
        "Create professional profile",
        "Basic job search",
        "Apply to jobs",
        "Email notifications",
        "Basic document storage",
      ],
      cta: "Sign Up Free",
      popular: false,
    },
    {
      name: "Premium",
      description: "Advanced features for serious candidates",
      price: isAnnual ? 19 : 29,
      features: [
        "Priority job applications",
        "Advanced job matching",
        "Early access to jobs",
        "Profile highlighting",
        "Professional development tools",
        "Credential management",
        "Direct messaging",
        "Career coaching",
      ],
      cta: "Get Premium",
      popular: true,
    },
    {
      name: "Pro",
      description: "Complete solution for healthcare leaders",
      price: isAnnual ? 49 : 59,
      features: [
        "All Premium features",
        "Personal career advisor",
        "Resume review",
        "Interview preparation",
        "Salary insights",
        "Professional network",
        "Leadership resources",
        "Exclusive events access",
      ],
      cta: "Upgrade to Pro",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes will be reflected in your next billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for our Professional and Premium plans. No credit card required to start.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise plans.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The price you see is the price you pay. All features are clearly listed for each plan.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
  ];

  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Choose the perfect plan for your healthcare staffing needs
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span
                className={`text-lg ${
                  !isAnnual ? "text-white" : "text-blue-200"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-blue-400/30 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition duration-200 ease-in-out ${
                    isAnnual ? "translate-x-9" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-lg ${
                  isAnnual ? "text-white" : "text-blue-200"
                }`}
              >
                Annual
                <span className="ml-1 text-green-400 text-sm">Save 20%</span>
              </span>
            </div>

            {/* Plan Type Toggle */}
            <div className="inline-flex rounded-lg bg-blue-400/20 p-1">
              <button
                onClick={() => setActiveTab("facility")}
                className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-all ${
                  activeTab === "facility"
                    ? "bg-white text-blue-600"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                For Facilities
              </button>
              <button
                onClick={() => setActiveTab("professional")}
                className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-all ${
                  activeTab === "professional"
                    ? "bg-white text-blue-600"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                For Professionals
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white curved-bottom-edge"></div>
      </div>

      {/* Pricing Cards */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === "facility" ? facilityPlans : professionalPlans).map(
              (plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-blue-400 scale-105 md:scale-110"
                      : "border-gray-100"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-3 py-2 text-sm font-semibold text-white text-center shadow-lg">
                      Most Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-3 text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"
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
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={
                        plan.cta === "Contact Sales" ? "/contact" : "/signup"
                      }
                      className={`block w-full text-center px-6 py-3 rounded-lg text-white font-semibold transition-all ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our pricing and plans
            </p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative px-8 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of healthcare facilities and professionals who
                trust our platform
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                  className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all"
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
