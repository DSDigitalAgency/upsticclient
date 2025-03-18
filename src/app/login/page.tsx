"use client";

import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Demo account credentials
const DEMO_ACCOUNTS = {
  facility: {
    email: "facility@demo.com",
    password: "facility123",
    role: "healthcare_facility",
  },
  professional: {
    email: "professional@demo.com",
    password: "professional123",
    role: "healthcare_professional",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    role: "healthcare_facility",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if the credentials match any demo account
      const facilityDemo = DEMO_ACCOUNTS.facility;
      const professionalDemo = DEMO_ACCOUNTS.professional;

      if (
        formData.email === facilityDemo.email &&
        formData.password === facilityDemo.password
      ) {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: facilityDemo.email,
            role: facilityDemo.role,
            name: "Demo Facility",
          })
        );

        router.push("/facility/dashboard");
        return;
      }

      if (
        formData.email === professionalDemo.email &&
        formData.password === professionalDemo.password
      ) {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: professionalDemo.email,
            role: professionalDemo.role,
            name: "Demo Professional",
          })
        );

        router.push("/professional/dashboard");
        return;
      }

      setError("Invalid email or password");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleDemoLogin = async (type: "facility" | "professional") => {
    setFormData({
      ...formData,
      email: DEMO_ACCOUNTS[type].email,
      password: DEMO_ACCOUNTS[type].password,
    });

    // Submit the form automatically after setting demo credentials
    const submitEvent = new Event("submit", { cancelable: true });
    document.forms[0].dispatchEvent(submitEvent);
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:px-6 lg:px-8">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(219,234,254,0.3),transparent)] opacity-70"></div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Welcome to Upstic
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your Healthcare Staffing Platform
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveTab("signin")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "signin"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === "signup"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === "signup" && (
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
              )}

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
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                  placeholder={
                    activeTab === "signup"
                      ? "Create a password"
                      : "Enter your password"
                  }
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              {activeTab === "signup" && (
                <>
                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                      placeholder="Confirm your password"
                      required
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
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 bg-white px-4 py-3"
                      required
                    >
                      <option value="healthcare_facility">
                        Healthcare Facility
                      </option>
                      <option value="healthcare_professional">
                        Healthcare Professional
                      </option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="agreeToTerms"
                      name="agreeToTerms"
                      type="checkbox"
                      required
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="agreeToTerms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading
                    ? activeTab === "signin"
                      ? "Signing in..."
                      : "Signing up..."
                    : activeTab === "signin"
                    ? "Sign in"
                    : "Sign up"}
                </button>
              </div>
            </form>

            {activeTab === "signin" && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleDemoLogin("facility")}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  Demo Facility
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin("professional")}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  disabled={loading}
                >
                  Demo Professional
                </button>
              </div>
            )}

            <div className="mt-6 text-center text-sm">
              {activeTab === "signin" ? (
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signup")}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab("signin")}
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm">
              <Link
                href="/admin"
                className="text-blue-600 hover:text-blue-500 font-medium"
              >
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
