import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function FacilityApplications() {
  const applications = [
    {
      id: 1,
      candidate: {
        name: "Sarah Johnson",
        title: "Registered Nurse",
        image: "/avatars/sarah.jpg",
        experience: "5 years",
        location: "New York, NY",
      },
      position: "Senior Registered Nurse",
      department: "Emergency Medicine",
      appliedDate: "2024-03-15",
      status: "Under Review",
      rating: 4.5,
    },
    {
      id: 2,
      candidate: {
        name: "Michael Chen",
        title: "ICU Specialist",
        image: "/avatars/michael.jpg",
        experience: "8 years",
        location: "Los Angeles, CA",
      },
      position: "ICU Specialist",
      department: "Intensive Care",
      appliedDate: "2024-03-14",
      status: "Interview Scheduled",
      rating: 4.8,
    },
    {
      id: 3,
      candidate: {
        name: "Emily Davis",
        title: "Emergency Nurse",
        image: "/avatars/emily.jpg",
        experience: "3 years",
        location: "Chicago, IL",
      },
      position: "Emergency Room Nurse",
      department: "Emergency Medicine",
      appliedDate: "2024-03-13",
      status: "New",
      rating: 4.2,
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_facility">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Applications</h1>
          <p className="mt-1 text-sm text-gray-500">
            Review and manage candidate applications
          </p>
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
                <option>All Status</option>
                <option>New</option>
                <option>Under Review</option>
                <option>Interview Scheduled</option>
                <option>Offer Extended</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Position
              </label>
              <select
                id="position"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>All Positions</option>
                <option>Senior Registered Nurse</option>
                <option>ICU Specialist</option>
                <option>Emergency Room Nurse</option>
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
                <option>Rating: High to Low</option>
                <option>Experience: High to Low</option>
                <option>Name A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {applications.map((application) => (
            <div key={application.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-600">
                      {application.candidate.name[0]}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-medium text-blue-600">
                      {application.candidate.name}
                    </h2>
                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                      <p>{application.candidate.title}</p>
                      <p>{application.candidate.experience} experience</p>
                      <p>{application.candidate.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      application.status === "Interview Scheduled"
                        ? "bg-green-100 text-green-800"
                        : application.status === "Under Review"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {application.status}
                  </span>
                  <div className="mt-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(application.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15.585l-7.07 3.714 1.35-7.862L.72 7.177l7.88-1.146L10 0l2.4 6.03 7.88 1.146-5.56 5.426 1.35 7.862z"
                        />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-500">
                      {application.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Applied for {application.position}
                  </p>
                  <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                    <p>{application.department}</p>
                    <p>Applied on {application.appliedDate}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                    View Profile
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                    Download Resume
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700">
                    Schedule Interview
                  </button>
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
