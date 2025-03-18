"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical, Filter } from "lucide-react";

interface Job {
  id: string;
  title: string;
  facility: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Temporary";
  specialty: string;
  status: "active" | "draft" | "closed" | "filled";
  applicants: number;
  salary: string;
  postedDate: string;
  urgency: "high" | "medium" | "low";
}

// Demo data
const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Registered Nurse",
    facility: "Memorial General Hospital",
    location: "New York, NY",
    type: "Full-time",
    specialty: "Registered Nurse",
    status: "active",
    applicants: 15,
    salary: "$75,000 - $95,000",
    postedDate: "2 days ago",
    urgency: "high",
  },
  {
    id: "2",
    title: "Licensed Practical Nurse",
    facility: "Sunshine Care Home",
    location: "Los Angeles, CA",
    type: "Part-time",
    specialty: "LPN/LVN",
    status: "active",
    applicants: 8,
    salary: "$45,000 - $55,000",
    postedDate: "1 week ago",
    urgency: "medium",
  },
  {
    id: "3",
    title: "Emergency Room Physician",
    facility: "City Medical Center",
    location: "Chicago, IL",
    type: "Full-time",
    specialty: "Physician",
    status: "draft",
    applicants: 0,
    salary: "$250,000 - $300,000",
    postedDate: "Not posted",
    urgency: "high",
  },
  {
    id: "4",
    title: "Certified Nursing Assistant",
    facility: "Golden Years Retirement",
    location: "Houston, TX",
    type: "Contract",
    specialty: "CNA",
    status: "filled",
    applicants: 25,
    salary: "$35,000 - $45,000",
    postedDate: "1 month ago",
    urgency: "low",
  },
  {
    id: "5",
    title: "Physical Therapist",
    facility: "Valley Health Clinic",
    location: "Phoenix, AZ",
    type: "Full-time",
    specialty: "Physical Therapist",
    status: "active",
    applicants: 5,
    salary: "$70,000 - $90,000",
    postedDate: "3 days ago",
    urgency: "medium",
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [urgencyFilter, setUrgencyFilter] = useState<string>("all");

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || job.status === statusFilter;

    const matchesType =
      typeFilter === "all" ||
      job.type.toLowerCase() === typeFilter.toLowerCase();

    const matchesUrgency =
      urgencyFilter === "all" || job.urgency === urgencyFilter;

    return matchesSearch && matchesStatus && matchesType && matchesUrgency;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Jobs
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and monitor job listings
          </p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Post New Job
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="filled">Filled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="temporary">Temporary</SelectItem>
            </SelectContent>
          </Select>
          <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Urgency</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-900 dark:text-white">
                Job Details
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Facility
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Type
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Status
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Applicants
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Salary
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Urgency
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {job.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {job.location} • Posted {job.postedDate}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {job.facility}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {job.type}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      job.status === "active"
                        ? "success"
                        : job.status === "draft"
                        ? "secondary"
                        : job.status === "filled"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {job.applicants}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {job.salary}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      job.urgency === "high"
                        ? "destructive"
                        : job.urgency === "medium"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {job.urgency.charAt(0).toUpperCase() + job.urgency.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4 text-gray-900 dark:text-white" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        Edit Job
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        View Applicants
                      </DropdownMenuItem>
                      {job.status === "active" ? (
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          Close Job
                        </DropdownMenuItem>
                      ) : job.status === "draft" ? (
                        <DropdownMenuItem className="text-green-600 dark:text-green-400">
                          Publish Job
                        </DropdownMenuItem>
                      ) : null}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredJobs.length} of {jobs.length} results
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-gray-900 dark:text-white"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-900 dark:text-white"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
