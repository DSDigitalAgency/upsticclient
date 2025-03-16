'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Temporary';
  salary: string;
  postedDate: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  shift: string;
}

// Mock data - replace with API call
const mockJobs: Job[] = [
  {
    id: 1,
    title: 'Emergency Room Nurse',
    department: 'Emergency',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    postedDate: '2024-03-15',
    experience: '3+ years',
    description: 'Join our dynamic emergency department team...',
    requirements: [
      'BSN required',
      'Current RN license',
      'BLS and ACLS certification',
      'Emergency room experience'
    ],
    benefits: [
      'Health insurance',
      'Dental coverage',
      'Vision plan',
      'Retirement plan',
      'Paid time off'
    ],
    shift: 'Day shift'
  },
  {
    id: 2,
    title: 'ICU Nurse',
    department: 'ICU',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$75,000 - $95,000',
    postedDate: '2024-03-16',
    experience: '4+ years',
    description: 'Seeking experienced ICU nurses...',
    requirements: [
      'BSN required',
      'Current RN license',
      'ICU experience',
      'Critical care certification'
    ],
    benefits: [
      'Competitive salary',
      'Health benefits',
      'Sign-on bonus',
      'Relocation assistance'
    ],
    shift: 'Night shift'
  }
];

const departments = ['All', 'Emergency', 'ICU', 'Pediatrics', 'Surgery', 'General Care'];
const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Temporary'];
const shifts = ['All', 'Day shift', 'Night shift', 'Evening shift', 'Rotating shift'];

export default function CandidateJobs() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedShift, setSelectedShift] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  // Filter and sort jobs
  const filteredJobs = mockJobs
    .filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesShift = selectedShift === 'All' || job.shift === selectedShift;
      
      return matchesSearch && matchesDepartment && matchesType && matchesShift;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') {
        return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
      }
      // Add more sorting options here
      return 0;
    });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Available Jobs</h1>
        <p className="text-gray-600">Find your next healthcare opportunity.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Specialties</option>
              <option>ICU</option>
              <option>Emergency</option>
              <option>Pediatrics</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Locations</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {[
          {
            title: 'ICU Nurse',
            facility: 'Memorial Hospital',
            location: 'New York, NY',
            type: 'Full-time',
            salary: '$80-100k/year',
            posted: '2 days ago'
          },
          {
            title: 'Emergency Room Nurse',
            facility: 'City General Hospital',
            location: 'Los Angeles, CA',
            type: 'Contract',
            salary: '$75-90/hour',
            posted: '1 day ago'
          },
          {
            title: 'Pediatric Nurse',
            facility: "St. Mary's Medical Center",
            location: 'Chicago, IL',
            type: 'Part-time',
            salary: '$45-55/hour',
            posted: '3 days ago'
          }
        ].map((job, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                <p className="text-gray-600">{job.facility}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.type}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.salary}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-500">{job.posted}</span>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 