import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function ProfessionalJobs() {
  const jobs = [
    {
      id: 1,
      title: "Senior Registered Nurse",
      facility: "Memorial Hospital",
      department: "Emergency Medicine",
      type: "Full-time",
      location: "New York, NY",
      salary: "$75,000 - $95,000",
      posted: "2024-03-15",
      requirements: ["5+ years experience", "BSN Required", "NYS RN License"],
      shift: "Day Shift",
      matched: 95,
    },
    {
      id: 2,
      title: "ICU Specialist",
      facility: "City Medical Center",
      department: "Intensive Care",
      type: "Contract",
      location: "Los Angeles, CA",
      salary: "$90,000 - $110,000",
      posted: "2024-03-14",
      requirements: [
        "8+ years ICU experience",
        "CCRN Certification",
        "CA RN License",
      ],
      shift: "Night Shift",
      matched: 88,
    },
    {
      id: 3,
      title: "Emergency Room Nurse",
      facility: "County General Hospital",
      department: "Emergency Medicine",
      type: "Full-time",
      location: "Chicago, IL",
      salary: "$70,000 - $85,000",
      posted: "2024-03-13",
      requirements: [
        "3+ years ER experience",
        "BLS & ACLS Certification",
        "IL RN License",
      ],
      shift: "Rotating",
      matched: 92,
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_professional">
      <div className="space-y-6">
        {/* Page Header */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Find Jobs</h1>
            <p className="mt-1 text-sm text-gray-500">
              Browse and apply for healthcare positions that match your skills
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-3">
            <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Saved Jobs
            </button>
            <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Job Alerts
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-2">
              <label htmlFor="search" className="sr-only">
                Search jobs
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search by job title, facility, or location"
                />
              </div>
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
                Job Type
              </label>
              <select
                id="type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>All Types</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Per Diem</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Within 25 miles
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              $70k+ salary
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          {job.title}
                        </h2>
                        <div className="mt-1">
                          <p className="text-sm font-medium text-blue-600">
                            {job.facility}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {job.matched}% Match
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Posted {job.posted}
                          </p>
                        </div>
                        <button className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Department
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job.department}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Job Type
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job.type}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Location
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job.location}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Shift
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {job.shift}
                        </dd>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-500">
                        Requirements
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {job.requirements.map((req, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-lg font-medium text-gray-900">
                        {job.salary}
                      </p>
                      <div className="flex space-x-3">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          View Details
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                          Quick Apply
                        </button>
                      </div>
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
