import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function ProfessionalApplications() {
  const applications = [
    {
      id: 1,
      position: "Senior Registered Nurse",
      facility: "Memorial Hospital",
      department: "Emergency Medicine",
      location: "New York, NY",
      appliedDate: "2024-03-15",
      status: "Interview Scheduled",
      nextStep: "Virtual Interview on March 20, 2024 at 2:00 PM",
      salary: "$75,000 - $95,000",
      type: "Full-time",
    },
    {
      id: 2,
      position: "ICU Specialist",
      facility: "City Medical Center",
      department: "Intensive Care",
      location: "Los Angeles, CA",
      appliedDate: "2024-03-14",
      status: "Under Review",
      nextStep: "Awaiting response from hiring manager",
      salary: "$90,000 - $110,000",
      type: "Contract",
    },
    {
      id: 3,
      position: "Emergency Room Nurse",
      facility: "County General Hospital",
      department: "Emergency Medicine",
      location: "Chicago, IL",
      appliedDate: "2024-03-10",
      status: "Rejected",
      nextStep: "Position filled",
      salary: "$70,000 - $85,000",
      type: "Full-time",
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_professional">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track and manage your job applications
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Total Applications
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">12</dd>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Active Applications
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">5</dd>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Interviews Scheduled
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">2</dd>
          </div>
          <div className="bg-white shadow rounded-lg p-4 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Offers Received
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">1</dd>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>All Status</option>
                <option>Applied</option>
                <option>Under Review</option>
                <option>Interview Scheduled</option>
                <option>Offer Received</option>
                <option>Rejected</option>
                <option>Withdrawn</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="date-range"
                className="block text-sm font-medium text-gray-700"
              >
                Date Range
              </label>
              <select
                id="date-range"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="sort"
                className="block text-sm font-medium text-gray-700"
              >
                Sort By
              </label>
              <select
                id="sort"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>Most Recent</option>
                <option>Status</option>
                <option>Facility Name</option>
                <option>Position</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {applications.map((application) => (
            <div key={application.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">
                        {application.position}
                      </h2>
                      <div className="mt-1">
                        <p className="text-sm font-medium text-blue-600">
                          {application.facility}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          application.status === "Interview Scheduled"
                            ? "bg-green-100 text-green-800"
                            : application.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : application.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {application.status}
                      </span>
                      <p className="mt-1 text-sm text-gray-500">
                        Applied {application.appliedDate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Department
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {application.department}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {application.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">
                        Job Type
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {application.type}
                      </dd>
                    </div>
                  </div>

                  <div className="mt-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Next Step
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {application.nextStep}
                    </dd>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {application.salary}
                    </p>
                    <div className="flex space-x-3">
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        View Job
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Message Recruiter
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        View Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 rounded-lg">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">3</span> of{" "}
                <span className="font-medium">12</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
