"use client";

import { useState } from "react";
import RecruiterLayout from "@/components/layout/RecruiterLayout";

export default function RecruiterDashboard() {
  const [stats] = useState({
    totalCandidates: 156,
    activeJobs: 12,
    pendingShifts: 8,
    newMessages: 5,
  });

  const [recentCandidates] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Registered Nurse",
      status: "Active",
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Licensed Practical Nurse",
      status: "Pending",
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Certified Nursing Assistant",
      status: "Active",
      lastActive: "3 hours ago",
    },
  ]);

  const [upcomingShifts] = useState([
    {
      id: 1,
      position: "Registered Nurse",
      location: "City Hospital",
      date: "2024-03-20",
      time: "7:00 AM - 7:00 PM",
      status: "Filled",
    },
    {
      id: 2,
      position: "Licensed Practical Nurse",
      location: "Community Care",
      date: "2024-03-21",
      time: "3:00 PM - 11:00 PM",
      status: "Open",
    },
    {
      id: 3,
      position: "Certified Nursing Assistant",
      location: "Senior Living",
      date: "2024-03-22",
      time: "6:00 AM - 2:00 PM",
      status: "Pending",
    },
  ]);

  return (
    <RecruiterLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's what's happening with your recruitment today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Candidates */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
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
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Candidates
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.totalCandidates}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Active Jobs */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Jobs
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.activeJobs}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Shifts */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Shifts
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.pendingShifts}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* New Messages */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      New Messages
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.newMessages}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Recent Candidates */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Candidates
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {recentCandidates.map((candidate) => (
                  <li key={candidate.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500 text-sm font-medium">
                              {candidate.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {candidate.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {candidate.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            candidate.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {candidate.status}
                        </span>
                        <span className="ml-4 text-sm text-gray-500">
                          {candidate.lastActive}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upcoming Shifts */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Upcoming Shifts
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {upcomingShifts.map((shift) => (
                  <li key={shift.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {shift.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {shift.location}
                        </div>
                        <div className="text-sm text-gray-500">
                          {shift.date} • {shift.time}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          shift.status === "Filled"
                            ? "bg-green-100 text-green-800"
                            : shift.status === "Open"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {shift.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </RecruiterLayout>
  );
}
