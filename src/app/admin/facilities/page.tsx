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

interface Facility {
  id: string;
  name: string;
  type: string;
  location: string;
  status: "active" | "pending" | "inactive";
  openPositions: number;
  activeShifts: number;
  lastUpdated: string;
  rating: number;
}

// Demo data
const facilities: Facility[] = [
  {
    id: "1",
    name: "Memorial General Hospital",
    type: "Hospital",
    location: "New York, NY",
    status: "active",
    openPositions: 12,
    activeShifts: 45,
    lastUpdated: "2 hours ago",
    rating: 4.5,
  },
  {
    id: "2",
    name: "Sunshine Care Home",
    type: "Nursing Home",
    location: "Los Angeles, CA",
    status: "active",
    openPositions: 5,
    activeShifts: 20,
    lastUpdated: "1 day ago",
    rating: 4.2,
  },
  {
    id: "3",
    name: "City Medical Center",
    type: "Medical Center",
    location: "Chicago, IL",
    status: "pending",
    openPositions: 8,
    activeShifts: 0,
    lastUpdated: "5 minutes ago",
    rating: 0,
  },
  {
    id: "4",
    name: "Golden Years Retirement",
    type: "Retirement Home",
    location: "Houston, TX",
    status: "inactive",
    openPositions: 0,
    activeShifts: 0,
    lastUpdated: "1 week ago",
    rating: 3.8,
  },
  {
    id: "5",
    name: "Valley Health Clinic",
    type: "Clinic",
    location: "Phoenix, AZ",
    status: "active",
    openPositions: 3,
    activeShifts: 15,
    lastUpdated: "3 hours ago",
    rating: 4.7,
  },
];

export default function FacilitiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Filter facilities based on search and filters
  const filteredFacilities = facilities.filter((facility) => {
    const matchesSearch =
      facility.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || facility.status === statusFilter;

    const matchesType = typeFilter === "all" || facility.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  // Get unique facility types for filter
  const facilityTypes = Array.from(new Set(facilities.map((f) => f.type)));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Facilities
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and monitor healthcare facilities
          </p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Add Facility
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search facilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
          />
        </div>
        <div className="flex gap-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Facility Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {facilityTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
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
                Facility
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Type
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Location
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Status
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Open Positions
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Active Shifts
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Rating
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFacilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {facility.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Last updated {facility.lastUpdated}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {facility.type}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {facility.location}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      facility.status === "active"
                        ? "success"
                        : facility.status === "pending"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {facility.status.charAt(0).toUpperCase() +
                      facility.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {facility.openPositions}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {facility.activeShifts}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {facility.rating > 0 ? facility.rating.toFixed(1) : "N/A"}
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
                        Edit Facility
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        View Shifts
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        View Jobs
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 dark:text-red-400">
                        Deactivate
                      </DropdownMenuItem>
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
          Showing {filteredFacilities.length} of {facilities.length} results
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
