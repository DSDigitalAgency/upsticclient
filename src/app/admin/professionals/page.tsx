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

interface Professional {
  id: string;
  name: string;
  email: string;
  specialty: string;
  status: "active" | "pending" | "inactive";
  location: string;
  experience: string;
  lastActive: string;
}

// Demo data
const professionals: Professional[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    specialty: "Registered Nurse",
    status: "active",
    location: "New York, NY",
    experience: "5 years",
    lastActive: "2 hours ago",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.c@example.com",
    specialty: "Physician",
    status: "pending",
    location: "Los Angeles, CA",
    experience: "8 years",
    lastActive: "1 day ago",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@example.com",
    specialty: "LPN/LVN",
    status: "active",
    location: "Chicago, IL",
    experience: "3 years",
    lastActive: "5 minutes ago",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.k@example.com",
    specialty: "CNA",
    status: "inactive",
    location: "Houston, TX",
    experience: "2 years",
    lastActive: "1 week ago",
  },
  {
    id: "5",
    name: "Lisa Patel",
    email: "lisa.p@example.com",
    specialty: "Physical Therapist",
    status: "active",
    location: "Phoenix, AZ",
    experience: "6 years",
    lastActive: "3 hours ago",
  },
];

export default function ProfessionalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [specialtyFilter, setSpecialtyFilter] = useState<string>("all");

  // Filter professionals based on search and filters
  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || professional.status === statusFilter;

    const matchesSpecialty =
      specialtyFilter === "all" || professional.specialty === specialtyFilter;

    return matchesSearch && matchesStatus && matchesSpecialty;
  });

  // Get unique specialties for filter
  const specialties = Array.from(
    new Set(professionals.map((p) => p.specialty))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Professionals
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage and monitor healthcare professionals
          </p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Add Professional
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search professionals..."
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
          <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
            <SelectTrigger className="w-[180px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
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
                Name
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Specialty
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Location
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Experience
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Status
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Last Active
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProfessionals.map((professional) => (
              <TableRow key={professional.id}>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {professional.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {professional.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {professional.specialty}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {professional.location}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {professional.experience}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      professional.status === "active"
                        ? "success"
                        : professional.status === "pending"
                        ? "warning"
                        : "destructive"
                    }
                  >
                    {professional.status.charAt(0).toUpperCase() +
                      professional.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {professional.lastActive}
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
                        Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        View Documents
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
          Showing {filteredProfessionals.length} of {professionals.length}{" "}
          results
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
