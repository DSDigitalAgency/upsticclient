"use client";

import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function ProfessionalDashboard() {
  const stats = [
    { name: "Applications Submitted", value: "8" },
    { name: "Interviews Scheduled", value: "3" },
    { name: "Profile Views", value: "24" },
    { name: "Saved Jobs", value: "6" },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior Registered Nurse",
      facility: "Memorial Hospital",
      location: "New York, NY",
      type: "Full-time",
      salary: "$75,000 - $95,000",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "ICU Nurse Specialist",
      facility: "City Medical Center",
      location: "Los Angeles, CA",
      type: "Contract",
      salary: "$90,000 - $110,000",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "Emergency Room Nurse",
      facility: "County General Hospital",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$70,000 - $85,000",
      posted: "5 days ago",
    },
  ];

  const applicationStatus = [
    {
      id: 1,
      position: "Senior RN",
      facility: "Memorial Hospital",
      status: "Interview Scheduled",
      date: "2024-03-20",
    },
    {
      id: 2,
      position: "ICU Specialist",
      facility: "City Medical Center",
      status: "Under Review",
      date: "2024-03-15",
    },
    {
      id: 3,
      position: "ER Nurse",
      facility: "County General",
      status: "Applied",
      date: "2024-03-10",
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_professional">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Professional Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your job search progress and find new opportunities
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

        {/* Job Recommendations */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              Recommended Jobs
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Positions that match your profile and preferences
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {recommendedJobs.map((job) => (
                <li key={job.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-sm font-medium text-blue-600">
                        {job.title}
                      </p>
                      <p className="text-sm text-gray-500">{job.facility}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                    <div className="flex flex-col sm:items-end">
                      <p className="text-sm font-medium text-gray-900">
                        {job.salary}
                      </p>
                      <p className="text-sm text-gray-500">{job.type}</p>
                      <p className="text-xs text-gray-400">{job.posted}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <a
                href="/professional/jobs"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                View all job openings
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Application Status */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">
              Application Status
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Track your current applications
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {applicationStatus.map((application) => (
                <li key={application.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-900">
                        {application.position}
                      </p>
                      <p className="text-sm text-gray-500">
                        {application.facility}
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {application.status}
                      </span>
                      <p className="mt-1 text-sm text-gray-500">
                        {application.date}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <div className="text-sm">
              <a
                href="/professional/applications"
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
                Update Profile
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Browse Jobs
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
