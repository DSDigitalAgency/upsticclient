import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function FacilityJobs() {
  const jobPostings = [
    {
      id: 1,
      title: "Senior Registered Nurse",
      department: "Emergency Medicine",
      type: "Full-time",
      location: "New York, NY",
      salary: "$75,000 - $95,000",
      status: "Active",
      applicants: 12,
      posted: "2024-03-15",
    },
    {
      id: 2,
      title: "ICU Specialist",
      department: "Intensive Care",
      type: "Contract",
      location: "New York, NY",
      salary: "$90,000 - $110,000",
      status: "Active",
      applicants: 8,
      posted: "2024-03-14",
    },
    {
      id: 3,
      title: "Emergency Room Nurse",
      department: "Emergency Medicine",
      type: "Full-time",
      location: "New York, NY",
      salary: "$70,000 - $85,000",
      status: "Closed",
      applicants: 15,
      posted: "2024-03-10",
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_facility">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Job Postings</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your active and closed job listings
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Create New Job
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
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
                <option>All</option>
                <option>Active</option>
                <option>Closed</option>
                <option>Draft</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="department"
                className="block text-sm font-medium text-gray-700"
              >
                Department
              </label>
              <select
                id="department"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>All Departments</option>
                <option>Emergency Medicine</option>
                <option>Intensive Care</option>
                <option>Surgery</option>
                <option>Pediatrics</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
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
                <option>Most Applicants</option>
                <option>Title A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="bg-white shadow rounded-lg">
          <ul role="list" className="divide-y divide-gray-200">
            {jobPostings.map((job) => (
              <li key={job.id} className="p-4 sm:p-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-lg font-medium text-blue-600">
                          {job.title}
                        </h2>
                        <div className="mt-1 flex items-center space-x-4">
                          <p className="text-sm text-gray-500">
                            {job.department}
                          </p>
                          <p className="text-sm text-gray-500">{job.type}</p>
                          <p className="text-sm text-gray-500">
                            {job.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            job.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {job.status}
                        </span>
                        <p className="mt-1 text-sm text-gray-500">
                          {job.applicants} applicants
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <p className="text-sm font-medium text-gray-900">
                          {job.salary}
                        </p>
                        <p className="text-sm text-gray-500">
                          Posted on {job.posted}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                          Edit
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                          View Applicants
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
