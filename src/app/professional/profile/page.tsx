import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function ProfessionalProfile() {
  const profile = {
    name: "Sarah Johnson",
    title: "Registered Nurse",
    image: "/avatars/sarah.jpg",
    location: "San Francisco Bay Area",
    license: "RN123456",
    state: "California",
    yearsExperience: "5+ years",
    availability: "Available from July 2024",
    about:
      "Experienced registered nurse with a proven track record in emergency medicine and critical care. Passionate about providing high-quality patient care and working collaboratively with healthcare teams.",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Certifications", value: "4" },
      { label: "Profile Views", value: "124" },
      { label: "Positions Matched", value: "8" },
    ],
    certifications: [
      {
        name: "Registered Nurse (RN)",
        issuer: "California Board of Registered Nursing",
        date: "2019",
        expires: "2025",
        verified: true,
      },
      {
        name: "Basic Life Support (BLS)",
        issuer: "American Heart Association",
        date: "2023",
        expires: "2025",
        verified: true,
      },
      {
        name: "Advanced Cardiac Life Support (ACLS)",
        issuer: "American Heart Association",
        date: "2023",
        expires: "2025",
        verified: true,
      },
      {
        name: "Trauma Nursing Core Course (TNCC)",
        issuer: "Emergency Nurses Association",
        date: "2022",
        expires: "2024",
        verified: true,
      },
    ],
    experience: [
      {
        title: "Emergency Room Nurse",
        facility: "Memorial Hospital",
        location: "San Francisco, CA",
        startDate: "2021",
        endDate: "Present",
        description: [
          "Lead nurse for high-acuity patient care in Level I trauma center",
          "Coordinated care for 8-10 patients per shift in fast-paced environment",
          "Mentored new graduate nurses during orientation period",
          "Achieved 95% patient satisfaction score",
        ],
      },
      {
        title: "ICU Nurse",
        facility: "City Medical Center",
        location: "Oakland, CA",
        startDate: "2019",
        endDate: "2021",
        description: [
          "Provided critical care to patients in 20-bed ICU",
          "Specialized in post-surgical and cardiac care",
          "Implemented new patient monitoring protocols",
          "Reduced medication errors by 30%",
        ],
      },
    ],
    skills: [
      "Emergency Medicine",
      "Critical Care",
      "Trauma Care",
      "Patient Assessment",
      "IV Administration",
      "Medication Management",
      "Electronic Health Records",
      "Team Leadership",
      "Patient Education",
      "Crisis Management",
    ],
    languages: [
      { language: "English", proficiency: "Native" },
      { language: "Spanish", proficiency: "Professional" },
    ],
  };

  return (
    <ProtectedLayout userRole="healthcare_professional">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex items-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-600">
                  {profile.name[0]}
                </div>
                <div className="ml-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile.name}
                  </h1>
                  <p className="text-lg text-gray-600">{profile.title}</p>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {profile.location}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
                <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Download Resume
                </button>
                <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6"
                >
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">About</h2>
                <div className="mt-2 text-sm text-gray-500">
                  {profile.about}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Experience
                </h2>
                <div className="mt-6 flow-root">
                  <ul className="-mb-8">
                    {profile.experience.map((role, roleIdx) => (
                      <li key={roleIdx}>
                        <div className="relative pb-8">
                          {roleIdx !== profile.experience.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                                <svg
                                  className="h-5 w-5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div>
                                <div className="text-sm">
                                  <div className="font-medium text-gray-900">
                                    {role.title}
                                  </div>
                                  <div className="text-gray-500">
                                    {role.facility} • {role.location}
                                  </div>
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                  {role.startDate} - {role.endDate}
                                </div>
                              </div>
                              <div className="mt-2">
                                <ul className="list-disc pl-5 text-sm text-gray-500">
                                  {role.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* License & Certifications */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">
                  License & Certifications
                </h2>
                <div className="mt-6 flow-root">
                  <ul className="divide-y divide-gray-200">
                    {profile.certifications.map((cert) => (
                      <li key={cert.name} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            {cert.verified && (
                              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                                <svg
                                  className="h-5 w-5 text-green-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">
                              {cert.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {cert.issuer} • Expires {cert.expires}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Skills</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-lg font-medium text-gray-900">Languages</h2>
                <div className="mt-4 space-y-4">
                  {profile.languages.map((lang) => (
                    <div
                      key={lang.language}
                      className="flex items-center justify-between"
                    >
                      <div className="text-sm font-medium text-gray-500">
                        {lang.language}
                      </div>
                      <div className="text-sm text-gray-900">
                        {lang.proficiency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
