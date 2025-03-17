"use client";

import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function FacilityDashboard() {
  const stats = [
    { name: "Active Job Postings", value: "12" },
    { name: "Total Applications", value: "48" },
    { name: "Interviews Scheduled", value: "8" },
    { name: "Positions Filled", value: "5" },
  ];

  const recentApplications = [
    {
      id: 1,
      position: "Registered Nurse",
      applicant: "Sarah Johnson",
      date: "2024-03-15",
      status: "Under Review",
    },
    {
      id: 2,
      position: "ICU Specialist",
      applicant: "Michael Chen",
      date: "2024-03-14",
      status: "Interview Scheduled",
    },
    {
      id: 3,
      position: "Emergency Nurse",
      applicant: "Emily Davis",
      date: "2024-03-13",
      status: "New",
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_facility">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Facility Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Overview of your recruitment activities and metrics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Applications */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              Recent Applications
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Latest candidates who applied to your positions
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {recentApplications.map((application) => (
                <li key={application.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {application.position}
                      </p>
                      <p className="text-sm text-gray-500">
                        {application.applicant}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-sm text-gray-500">
                        {application.date}
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {application.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <a
                href="/facility/applications"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                View all applications
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Post New Job
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Review Applications
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Schedule Interviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
