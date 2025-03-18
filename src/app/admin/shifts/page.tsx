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
import { Search, MoreVertical, Calendar } from "lucide-react";

interface Shift {
  id: string;
  jobTitle: string;
  facility: string;
  professional: string | null;
  date: string;
  time: string;
  duration: string;
  rate: string;
  status: "open" | "assigned" | "completed" | "cancelled";
  specialty: string;
  urgency: "high" | "medium" | "low";
}

// Demo data
const shifts: Shift[] = [
  {
    id: "1",
    jobTitle: "ICU Registered Nurse",
    facility: "Memorial General Hospital",
    professional: "Sarah Johnson",
    date: "2024-03-19",
    time: "07:00 AM",
    duration: "12 hours",
    rate: "$65/hr",
    status: "assigned",
    specialty: "ICU",
    urgency: "high",
  },
  {
    id: "2",
    jobTitle: "ER Physician",
    facility: "City Medical Center",
    professional: null,
    date: "2024-03-19",
    time: "08:00 PM",
    duration: "12 hours",
    rate: "$200/hr",
    status: "open",
    specialty: "Emergency Medicine",
    urgency: "high",
  },
  {
    id: "3",
    jobTitle: "Physical Therapist",
    facility: "Valley Health Clinic",
    professional: "Michael Chen",
    date: "2024-03-18",
    time: "09:00 AM",
    duration: "8 hours",
    rate: "$45/hr",
    status: "completed",
    specialty: "Physical Therapy",
    urgency: "medium",
  },
  {
    id: "4",
    jobTitle: "LPN",
    facility: "Sunshine Care Home",
    professional: null,
    date: "2024-03-20",
    time: "03:00 PM",
    duration: "8 hours",
    rate: "$35/hr",
    status: "open",
    specialty: "Long-term Care",
    urgency: "medium",
  },
  {
    id: "5",
    jobTitle: "CNA",
    facility: "Golden Years Retirement",
    professional: "Emily Rodriguez",
    date: "2024-03-19",
    time: "02:00 PM",
    duration: "8 hours",
    rate: "$25/hr",
    status: "assigned",
    specialty: "Geriatric Care",
    urgency: "low",
  },
];

export default function ShiftsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [urgencyFilter, setUrgencyFilter] = useState<string>("all");

  // Filter shifts based on search and filters
  const filteredShifts = shifts.filter((shift) => {
    const matchesSearch =
      shift.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (shift.professional?.toLowerCase() || "").includes(
        searchQuery.toLowerCase()
      );

    const matchesStatus =
      statusFilter === "all" || shift.status === statusFilter;

    const matchesDate = dateFilter === "all" || shift.date === dateFilter;

    const matchesUrgency =
      urgencyFilter === "all" || shift.urgency === urgencyFilter;

    return matchesSearch && matchesStatus && matchesDate && matchesUrgency;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shifts
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and monitor all shifts
          </p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Create Shift
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search shifts..."
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
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="assigned">Assigned</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Dates</SelectItem>
              <SelectItem value="2024-03-18">Mar 18, 2024</SelectItem>
              <SelectItem value="2024-03-19">Mar 19, 2024</SelectItem>
              <SelectItem value="2024-03-20">Mar 20, 2024</SelectItem>
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
                Shift Details
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Facility
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Professional
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Date & Time
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Duration & Rate
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Status
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Urgency
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredShifts.map((shift) => (
              <TableRow key={shift.id}>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {shift.jobTitle}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {shift.specialty}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {shift.facility}
                </TableCell>
                <TableCell>
                  {shift.professional ? (
                    <span className="text-gray-900 dark:text-white">
                      {shift.professional}
                    </span>
                  ) : (
                    <Badge variant="secondary">Unassigned</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-gray-900 dark:text-white">
                      {new Date(shift.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {shift.time}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-gray-900 dark:text-white">
                      {shift.duration}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {shift.rate}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      shift.status === "open"
                        ? "secondary"
                        : shift.status === "assigned"
                        ? "success"
                        : shift.status === "completed"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {shift.status.charAt(0).toUpperCase() +
                      shift.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      shift.urgency === "high"
                        ? "destructive"
                        : shift.urgency === "medium"
                        ? "warning"
                        : "secondary"
                    }
                  >
                    {shift.urgency.charAt(0).toUpperCase() +
                      shift.urgency.slice(1)}
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
                        Edit Shift
                      </DropdownMenuItem>
                      {shift.status === "open" && (
                        <DropdownMenuItem className="text-gray-900 dark:text-white">
                          Assign Professional
                        </DropdownMenuItem>
                      )}
                      {shift.status === "assigned" && (
                        <>
                          <DropdownMenuItem className="text-gray-900 dark:text-white">
                            View Professional
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 dark:text-red-400">
                            Cancel Shift
                          </DropdownMenuItem>
                        </>
                      )}
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
          Showing {filteredShifts.length} of {shifts.length} results
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
