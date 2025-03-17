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
                      name="role"
                      id="role"
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
                      type="checkbox"
                      name="agreeToTerms"
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <label
                      htmlFor="agreeToTerms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-blue-600 hover:text-blue-500"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </>
              )}

              {activeTab === "signin" && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
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
                ) : (
                  <>
                    {activeTab === "signin" ? "Sign In" : "Create Account"}
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
                  </>
                )}
              </button>
            </form>

            {/* Social Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            {/* Demo Credentials */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  Demo Accounts
                </h3>
                <p className="mt-2 text-xs text-gray-500">
                  Click to automatically fill credentials
                </p>
              </div>
              <div className="mt-4 space-y-4">
                <button
                  onClick={() => handleDemoLogin("facility")}
                  className="w-full bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors text-left"
                  type="button"
                  disabled={loading}
                >
                  <h4 className="text-sm font-medium text-gray-900">
                    Healthcare Facility
                  </h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Email:</span>{" "}
                      facility@demo.com
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Password:</span> facility123
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => handleDemoLogin("professional")}
                  className="w-full bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors text-left"
                  type="button"
                  disabled={loading}
                >
                  <h4 className="text-sm font-medium text-gray-900">
                    Healthcare Professional
                  </h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Email:</span>{" "}
                      professional@demo.com
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Password:</span>{" "}
                      professional123
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
