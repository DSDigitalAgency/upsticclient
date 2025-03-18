"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PublicLayout from "@/components/layout/PublicLayout";
import Link from "next/link";

// Demo account credentials for admin
const ADMIN_DEMO = {
  email: "admin@demo.com",
  password: "admin123",
  role: "administrator",
};

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if already logged in
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user.role === "administrator") {
        router.push("/admin/dashboard");
      }
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Check if credentials match admin demo account
      if (
        formData.email === ADMIN_DEMO.email &&
        formData.password === ADMIN_DEMO.password
      ) {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: ADMIN_DEMO.email,
            role: ADMIN_DEMO.role,
            name: "Admin User",
          })
        );

        router.push("/admin/dashboard");
        return;
      }

      setError("Invalid email or password");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleDemoLogin = async () => {
    setFormData({
      email: ADMIN_DEMO.email,
      password: ADMIN_DEMO.password,
    });

    // Submit the form automatically after setting demo credentials
    setTimeout(() => {
      const submitEvent = new Event("submit", { cancelable: true });
      document.forms[0].dispatchEvent(submitEvent);
    }, 100);
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 sm:px-6 lg:px-8">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(224,231,255,0.3),transparent)] opacity-70"></div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Admin Portal
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Upstic Healthcare Staffing Platform
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-6">
              Admin Login
            </h3>

            {/* Demo Credentials Info Box */}
            <div className="mb-6 bg-indigo-50 border border-indigo-100 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">
                    Demo Credentials
                  </h3>
                  <div className="mt-2 text-sm text-indigo-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Email: {ADMIN_DEMO.email}</li>
                      <li>Password: {ADMIN_DEMO.password}</li>
                    </ul>
                    <p className="mt-2">
                      Click "Use Demo Admin Account" for quick access.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                  placeholder="admin@example.com"
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
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 placeholder-gray-500 bg-white px-4 py-3"
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Use Demo Admin Account
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Return to Main Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
