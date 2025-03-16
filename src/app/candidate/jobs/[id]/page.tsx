"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Temporary";
  salary: string;
  postedDate: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  shift: string;
}

// Mock data - replace with API call
const mockJob: Job = {
  id: 1,
  title: "Emergency Room Nurse",
  department: "Emergency",
  location: "New York, NY",
  type: "Full-time",
  salary: "$70,000 - $90,000",
  postedDate: "2024-03-15",
  experience: "3+ years",
  description: `Join our dynamic emergency department team at City General Hospital. As an Emergency Room Nurse, you will be responsible for providing high-quality patient care in a fast-paced environment.

Key Responsibilities:
• Assess and triage patients
• Administer medications and treatments
• Monitor patient vital signs and conditions
• Collaborate with physicians and healthcare team
• Maintain accurate medical records
• Respond to emergency situations
• Provide patient and family education`,
  requirements: [
    "BSN required",
    "Current RN license",
    "BLS and ACLS certification",
    "Emergency room experience",
    "Strong communication skills",
    "Ability to work in a fast-paced environment",
    "Physical stamina and emotional resilience",
    "Computer proficiency with EMR systems",
  ],
  benefits: [
    "Health insurance",
    "Dental coverage",
    "Vision plan",
    "Retirement plan",
    "Paid time off",
    "Professional development",
    "Tuition reimbursement",
    "Sign-on bonus",
  ],
  shift: "Day shift",
};

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function JobDetail({ params, searchParams }: Props) {
  const router = useRouter();
  const [isApplying, setIsApplying] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement API call to submit application
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push("/candidate/applications");
    } catch (error) {
      console.error("Failed to submit application:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-6">
          <Link
            href="/candidate/jobs"
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Jobs
          </Link>
        </div>

        {/* Job Details */}
        <div className="bg-white shadow-sm rounded-lg">
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {mockJob.title}
                </h1>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-500">
                  <span>{mockJob.department}</span>
                  <span>•</span>
                  <span>{mockJob.location}</span>
                  <span>•</span>
                  <span>{mockJob.type}</span>
                  <span>•</span>
                  <span>{mockJob.shift}</span>
                </div>
                <div className="mt-2">
                  <span className="text-lg font-medium text-gray-900">
                    {mockJob.salary}
                  </span>
                  <span className="mx-2 text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    Posted {formatDate(mockJob.postedDate)}
                  </span>
                </div>
              </div>
              {!isApplying && (
                <button
                  onClick={() => setIsApplying(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Apply Now
                </button>
              )}
            </div>
          </div>

          <div className="px-6 py-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Job Description
            </h2>
            <div className="prose max-w-none text-gray-600">
              {mockJob.description.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="px-6 py-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {mockJob.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          <div className="px-6 py-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockJob.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Form */}
        {isApplying && (
          <div className="mt-6 bg-white shadow-sm rounded-lg">
            <div className="px-6 py-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Apply for this Position
              </h2>
              <form onSubmit={handleApply} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover Letter
                  </label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    rows={6}
                    required
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Resume
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files?.[0] || null)}
                    required
                    className="mt-1 block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-medium
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    PDF, DOC, or DOCX up to 5MB
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
