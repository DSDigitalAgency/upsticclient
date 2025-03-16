"use client";

import { useState } from "react";
import CandidateLayout from "@/components/layout/CandidateLayout";

export default function CandidateDashboard() {
  const [stats] = useState({
    appliedJobs: 5,
    upcomingShifts: 3,
    completedShifts: 12,
    newMessages: 2,
  });

  const [upcomingShifts] = useState([
    {
      id: 1,
      position: "Registered Nurse",
      location: "City Hospital",
      date: "2024-03-20",
      time: "7:00 AM - 7:00 PM",
      status: "Confirmed",
    },
    {
      id: 2,
      position: "Licensed Practical Nurse",
      location: "Community Care",
      date: "2024-03-21",
      time: "3:00 PM - 11:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      position: "Certified Nursing Assistant",
      location: "Senior Living",
      date: "2024-03-22",
      time: "6:00 AM - 2:00 PM",
      status: "Confirmed",
    },
  ]);

  const [recentApplications] = useState([
    {
      id: 1,
      position: "Registered Nurse",
      location: "City Hospital",
      appliedDate: "2024-03-15",
      status: "Under Review",
    },
    {
      id: 2,
      position: "Licensed Practical Nurse",
      location: "Community Care",
      appliedDate: "2024-03-14",
      status: "Interview Scheduled",
    },
    {
      id: 3,
      position: "Certified Nursing Assistant",
      location: "Senior Living",
      appliedDate: "2024-03-13",
      status: "Application Received",
    },
  ]);

  return (
    <CandidateLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here's an overview of your job search and shifts.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Applied Jobs */}
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
                      Applied Jobs
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.appliedJobs}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Shifts */}
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
                      Upcoming Shifts
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.upcomingShifts}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Completed Shifts */}
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Completed Shifts
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {stats.completedShifts}
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
                          shift.status === "Confirmed"
                            ? "bg-green-100 text-green-800"
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

          {/* Recent Applications */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Applications
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {recentApplications.map((application) => (
                  <li key={application.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {application.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {application.location}
                        </div>
                        <div className="text-sm text-gray-500">
                          Applied on {application.appliedDate}
                        </div>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          application.status === "Interview Scheduled"
                            ? "bg-blue-100 text-blue-800"
                            : application.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {application.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}
