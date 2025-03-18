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
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  LineChart,
  PieChart,
  Download,
  Calendar,
  Filter,
  FileText,
  Users,
  Building,
  Briefcase,
  Clock,
  DollarSign,
  FileCheck,
} from "lucide-react";

interface ReportCard {
  id: string;
  title: string;
  description: string;
  category: "finance" | "staffing" | "compliance" | "operations";
  lastRun: string | null;
  icon: React.ReactNode;
}

// Demo data for report cards
const reportCards: ReportCard[] = [
  {
    id: "1",
    title: "Revenue Analysis",
    description: "Breakdown of revenue by facility, job type, and time period",
    category: "finance",
    lastRun: "2024-03-17",
    icon: <DollarSign className="h-5 w-5 text-green-500" />,
  },
  {
    id: "2",
    title: "Professional Utilization",
    description: "Analyze professional utilization rates and availability",
    category: "staffing",
    lastRun: "2024-03-15",
    icon: <Users className="h-5 w-5 text-blue-500" />,
  },
  {
    id: "3",
    title: "Compliance Status",
    description: "Overview of document compliance status across professionals",
    category: "compliance",
    lastRun: "2024-03-16",
    icon: <FileCheck className="h-5 w-5 text-purple-500" />,
  },
  {
    id: "4",
    title: "Fill Rate Analysis",
    description: "Job and shift fill rates by specialty and location",
    category: "operations",
    lastRun: "2024-03-14",
    icon: <BarChart3 className="h-5 w-5 text-orange-500" />,
  },
  {
    id: "5",
    title: "Facility Performance",
    description: "Metrics on facility activity, job postings, and fill rates",
    category: "operations",
    lastRun: null,
    icon: <Building className="h-5 w-5 text-indigo-500" />,
  },
  {
    id: "6",
    title: "Job Posting Analytics",
    description:
      "Analysis of job postings, views, applications, and conversions",
    category: "staffing",
    lastRun: "2024-03-12",
    icon: <Briefcase className="h-5 w-5 text-cyan-500" />,
  },
  {
    id: "7",
    title: "Timesheet Summary",
    description: "Summary of submitted, approved, and rejected timesheets",
    category: "finance",
    lastRun: "2024-03-10",
    icon: <Clock className="h-5 w-5 text-yellow-500" />,
  },
  {
    id: "8",
    title: "Accounts Receivable Aging",
    description: "Aging analysis of accounts receivable by facility",
    category: "finance",
    lastRun: null,
    icon: <FileText className="h-5 w-5 text-red-500" />,
  },
];

// Demo data for recent reports
interface RecentReport {
  id: string;
  title: string;
  runDate: string;
  runBy: string;
  format: "PDF" | "CSV" | "Excel";
  status: "completed" | "failed" | "processing";
}

const recentReports: RecentReport[] = [
  {
    id: "1",
    title: "Revenue Analysis - Q1 2024",
    runDate: "2024-03-17",
    runBy: "Admin User",
    format: "Excel",
    status: "completed",
  },
  {
    id: "2",
    title: "Professional Utilization - March 2024",
    runDate: "2024-03-15",
    runBy: "Admin User",
    format: "PDF",
    status: "completed",
  },
  {
    id: "3",
    title: "Compliance Status Report",
    runDate: "2024-03-16",
    runBy: "Admin User",
    format: "CSV",
    status: "completed",
  },
  {
    id: "4",
    title: "Timesheet Summary - February 2024",
    runDate: "2024-03-10",
    runBy: "Admin User",
    format: "PDF",
    status: "failed",
  },
  {
    id: "5",
    title: "Job Posting Analytics - Q1 2024",
    runDate: "2024-03-18",
    runBy: "Admin User",
    format: "Excel",
    status: "processing",
  },
];

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("all");

  // Filter report cards based on search and filters
  const filteredReports = reportCards.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || report.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  // Filter recent reports based on search
  const filteredRecentReports = recentReports.filter((report) =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Reports & Analytics
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Generate and view reports across your healthcare staffing operations
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Create Custom Report
          </Button>
        </div>
      </div>

      {/* Analytics Overview - Placeholder for charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-900 dark:text-white">
              Revenue Trend
            </h2>
            <LineChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-48 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Revenue Chart Placeholder
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-900 dark:text-white">
              Job Distribution
            </h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-48 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Job Distribution Chart Placeholder
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-900 dark:text-white">
              Compliance Status
            </h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
          <div className="h-48 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Compliance Chart Placeholder
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="staffing">Staffing</SelectItem>
              <SelectItem value="compliance">Compliance</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateRangeFilter} onValueChange={setDateRangeFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Report Cards */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Standard Reports
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">{report.icon}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {report.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {report.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <Badge
                      variant="outline"
                      className="text-gray-600 dark:text-gray-300 text-xs capitalize"
                    >
                      {report.category}
                    </Badge>
                    {report.lastRun ? (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Last run:{" "}
                        {new Date(report.lastRun).toLocaleDateString()}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Never run
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button
                      size="sm"
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      Generate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reports Table */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Recent Reports
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-900 dark:text-white">
                  Report
                </TableHead>
                <TableHead className="text-gray-900 dark:text-white">
                  Run Date
                </TableHead>
                <TableHead className="text-gray-900 dark:text-white">
                  Run By
                </TableHead>
                <TableHead className="text-gray-900 dark:text-white">
                  Format
                </TableHead>
                <TableHead className="text-gray-900 dark:text-white">
                  Status
                </TableHead>
                <TableHead className="text-gray-900 dark:text-white w-[100px]">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRecentReports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    {report.title}
                  </TableCell>
                  <TableCell className="text-gray-900 dark:text-white">
                    {new Date(report.runDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-gray-900 dark:text-white">
                    {report.runBy}
                  </TableCell>
                  <TableCell className="text-gray-900 dark:text-white">
                    {report.format}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        report.status === "completed"
                          ? "success"
                          : report.status === "processing"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {report.status.charAt(0).toUpperCase() +
                        report.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {report.status === "completed" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 text-gray-900 dark:text-white"
                        >
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0 text-gray-900 dark:text-white"
                      >
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Scheduled Reports Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Scheduled Reports
          </h2>
          <Button variant="outline" className="text-gray-900 dark:text-white">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule New
          </Button>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center h-20">
            <p className="text-gray-500 dark:text-gray-400">
              No scheduled reports set up yet. Click "Schedule New" to create
              one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
