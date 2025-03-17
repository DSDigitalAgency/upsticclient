"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProtectedLayoutProps {
  children: React.ReactNode;
  userRole: "healthcare_facility" | "healthcare_professional";
}

export default function ProtectedLayout({
  children,
  userRole,
}: ProtectedLayoutProps) {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      router.replace("/login");
      return;
    }

    try {
      const userData = JSON.parse(userStr);
      if (userData.role !== userRole) {
        router.replace("/login");
        return;
      }
      setUser(userData);
    } catch (error) {
      console.error("Error parsing user data:", error);
      router.replace("/login");
    }
  }, [router, userRole]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.replace("/login");
  };

  const facilityNavItems = [
    { name: "Dashboard", href: "/facility/dashboard" },
    { name: "Job Postings", href: "/facility/jobs" },
    { name: "Applications", href: "/facility/applications" },
    { name: "Messages", href: "/facility/messages" },
    { name: "Settings", href: "/facility/settings" },
  ];

  const professionalNavItems = [
    { name: "Dashboard", href: "/professional/dashboard" },
    { name: "Find Jobs", href: "/professional/jobs" },
    { name: "My Applications", href: "/professional/applications" },
    { name: "Messages", href: "/professional/messages" },
    { name: "Profile", href: "/professional/profile" },
  ];

  const navItems =
    userRole === "healthcare_facility"
      ? facilityNavItems
      : professionalNavItems;

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Upstic
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* User Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-3 focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {user.name[0].toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user.name}
                  </span>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {user.name[0].toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  {user.name}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {user.email}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
