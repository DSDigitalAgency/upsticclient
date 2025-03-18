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
import {
  Search,
  MoreVertical,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface ComplianceRecord {
  id: string;
  professional: string;
  documentType:
    | "license"
    | "certification"
    | "background_check"
    | "immunization"
    | "training";
  documentName: string;
  status: "valid" | "expiring_soon" | "expired" | "pending" | "rejected";
  issueDate: string;
  expiryDate: string;
  verifiedBy: string | null;
  verificationDate: string | null;
  specialty: string;
  state: string;
}

// Demo data
const complianceRecords: ComplianceRecord[] = [
  {
    id: "1",
    professional: "Sarah Johnson",
    documentType: "license",
    documentName: "Registered Nurse License",
    status: "valid",
    issueDate: "2023-01-15",
    expiryDate: "2025-01-15",
    verifiedBy: "Admin User",
    verificationDate: "2023-01-16",
    specialty: "ICU",
    state: "NY",
  },
  {
    id: "2",
    professional: "Michael Chen",
    documentType: "certification",
    documentName: "BLS Certification",
    status: "expiring_soon",
    issueDate: "2023-03-01",
    expiryDate: "2024-04-01",
    verifiedBy: "Admin User",
    verificationDate: "2023-03-02",
    specialty: "Physical Therapy",
    state: "CA",
  },
  {
    id: "3",
    professional: "Emily Rodriguez",
    documentType: "background_check",
    documentName: "Criminal Background Check",
    status: "pending",
    issueDate: "2024-03-15",
    expiryDate: "2025-03-15",
    verifiedBy: null,
    verificationDate: null,
    specialty: "CNA",
    state: "TX",
  },
  {
    id: "4",
    professional: "James Wilson",
    documentType: "immunization",
    documentName: "COVID-19 Vaccination",
    status: "expired",
    issueDate: "2023-01-01",
    expiryDate: "2024-01-01",
    verifiedBy: "Admin User",
    verificationDate: "2023-01-02",
    specialty: "ER",
    state: "FL",
  },
  {
    id: "5",
    professional: "Lisa Thompson",
    documentType: "training",
    documentName: "HIPAA Compliance Training",
    status: "valid",
    issueDate: "2024-01-01",
    expiryDate: "2025-01-01",
    verifiedBy: "Admin User",
    verificationDate: "2024-01-02",
    specialty: "General Practice",
    state: "CA",
  },
];

export default function CompliancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [documentTypeFilter, setDocumentTypeFilter] = useState<string>("all");
  const [stateFilter, setStateFilter] = useState<string>("all");

  // Filter compliance records based on search and filters
  const filteredRecords = complianceRecords.filter((record) => {
    const matchesSearch =
      record.professional.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.documentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || record.status === statusFilter;

    const matchesDocumentType =
      documentTypeFilter === "all" ||
      record.documentType === documentTypeFilter;

    const matchesState = stateFilter === "all" || record.state === stateFilter;

    return (
      matchesSearch && matchesStatus && matchesDocumentType && matchesState
    );
  });

  const getStatusIcon = (status: ComplianceRecord["status"]) => {
    switch (status) {
      case "valid":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "expiring_soon":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "expired":
      case "rejected":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Compliance Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Monitor and manage healthcare professional compliance documents
          </p>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
          Upload Document
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Valid Documents
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            45
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Expiring Soon
          </div>
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            12
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Expired
          </div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            8
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Pending Review
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            15
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by professional, document, or specialty..."
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
              <SelectItem value="valid">Valid</SelectItem>
              <SelectItem value="expiring_soon">Expiring Soon</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={documentTypeFilter}
            onValueChange={setDocumentTypeFilter}
          >
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Document Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="license">License</SelectItem>
              <SelectItem value="certification">Certification</SelectItem>
              <SelectItem value="background_check">Background Check</SelectItem>
              <SelectItem value="immunization">Immunization</SelectItem>
              <SelectItem value="training">Training</SelectItem>
            </SelectContent>
          </Select>
          <Select value={stateFilter} onValueChange={setStateFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
              <SelectItem value="FL">Florida</SelectItem>
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
                Professional & Document
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Status
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Issue Date
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Expiry Date
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Verification
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                State
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {record.professional}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {record.documentName}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(record.status)}
                    <Badge
                      variant={
                        record.status === "valid"
                          ? "success"
                          : record.status === "expiring_soon"
                          ? "warning"
                          : record.status === "expired" ||
                            record.status === "rejected"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {record.status
                        .split("_")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {new Date(record.issueDate).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {new Date(record.expiryDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {record.verifiedBy ? (
                    <div>
                      <div className="text-gray-900 dark:text-white">
                        {record.verifiedBy}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(
                          record.verificationDate!
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  ) : (
                    <Badge variant="secondary">Not Verified</Badge>
                  )}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {record.state}
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
                        View Document
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-gray-900 dark:text-white">
                        View Professional
                      </DropdownMenuItem>
                      {record.status === "pending" && (
                        <>
                          <DropdownMenuItem className="text-green-600 dark:text-green-400">
                            Approve
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 dark:text-red-400">
                            Reject
                          </DropdownMenuItem>
                        </>
                      )}
                      {record.status === "expired" && (
                        <DropdownMenuItem className="text-blue-600 dark:text-blue-400">
                          Request Renewal
                        </DropdownMenuItem>
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
          Showing {filteredRecords.length} of {complianceRecords.length} results
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
