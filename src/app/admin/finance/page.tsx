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
  DollarSign,
  CreditCard,
  FileText,
  BarChart3,
  Download,
  Calendar,
} from "lucide-react";

interface Transaction {
  id: string;
  type: "invoice" | "payment" | "refund" | "adjustment";
  facility: string;
  reference: string;
  amount: number;
  status: "paid" | "pending" | "overdue" | "cancelled" | "refunded";
  date: string;
  dueDate?: string;
  paymentMethod?: string;
  description: string;
}

// Demo data
const transactions: Transaction[] = [
  {
    id: "1",
    type: "invoice",
    facility: "Memorial General Hospital",
    reference: "INV-20240315-001",
    amount: 12500.0,
    status: "paid",
    date: "2024-03-15",
    dueDate: "2024-04-15",
    description: "Staffing services - March 1-15, 2024",
  },
  {
    id: "2",
    type: "invoice",
    facility: "City Medical Center",
    reference: "INV-20240315-002",
    amount: 8750.0,
    status: "pending",
    date: "2024-03-15",
    dueDate: "2024-04-15",
    description: "Staffing services - March 1-15, 2024",
  },
  {
    id: "3",
    type: "payment",
    facility: "Memorial General Hospital",
    reference: "PAY-20240315-001",
    amount: 12500.0,
    status: "paid",
    date: "2024-03-15",
    paymentMethod: "Credit Card",
    description: "Payment for INV-20240315-001",
  },
  {
    id: "4",
    type: "invoice",
    facility: "Sunshine Care Home",
    reference: "INV-20240302-003",
    amount: 4250.0,
    status: "overdue",
    date: "2024-03-02",
    dueDate: "2024-04-02",
    description: "Staffing services - February 15-28, 2024",
  },
  {
    id: "5",
    type: "refund",
    facility: "Valley Health Clinic",
    reference: "REF-20240310-001",
    amount: 750.0,
    status: "refunded",
    date: "2024-03-10",
    paymentMethod: "Bank Transfer",
    description: "Refund for cancelled shifts",
  },
];

export default function FinancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateRangeFilter, setDateRangeFilter] = useState<string>("all");

  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.facility.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = typeFilter === "all" || transaction.type === typeFilter;

    const matchesStatus =
      statusFilter === "all" || transaction.status === statusFilter;

    // Simple date range filter for demo
    const transactionDate = new Date(transaction.date);
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(today.getDate() - 90);

    const matchesDateRange =
      dateRangeFilter === "all" ||
      (dateRangeFilter === "30days" && transactionDate >= thirtyDaysAgo) ||
      (dateRangeFilter === "90days" && transactionDate >= ninetyDaysAgo);

    return matchesSearch && matchesType && matchesStatus && matchesDateRange;
  });

  // Calculate summary metrics
  const totalInvoiced = filteredTransactions
    .filter((t) => t.type === "invoice")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalReceived = filteredTransactions
    .filter((t) => t.type === "payment" && t.status === "paid")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalPending = filteredTransactions
    .filter((t) => t.status === "pending" || t.status === "overdue")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalRefunded = filteredTransactions
    .filter((t) => t.type === "refund")
    .reduce((sum, t) => sum + t.amount, 0);

  const getTypeIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "invoice":
        return <FileText className="h-4 w-4 text-blue-500" />;
      case "payment":
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case "refund":
        return <CreditCard className="h-4 w-4 text-red-500" />;
      case "adjustment":
        return <BarChart3 className="h-4 w-4 text-purple-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Financial Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage invoices, payments, and financial reports
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Create Invoice
          </Button>
          <Button variant="outline" className="text-gray-900 dark:text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Total Invoiced
          </div>
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {formatCurrency(totalInvoiced)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Total Received
          </div>
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {formatCurrency(totalReceived)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Pending/Overdue
          </div>
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {formatCurrency(totalPending)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Total Refunded
          </div>
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            {formatCurrency(totalRefunded)}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="invoice">Invoices</SelectItem>
              <SelectItem value="payment">Payments</SelectItem>
              <SelectItem value="refund">Refunds</SelectItem>
              <SelectItem value="adjustment">Adjustments</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
              <SelectItem value="refunded">Refunded</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dateRangeFilter} onValueChange={setDateRangeFilter}>
            <SelectTrigger className="w-[150px] text-gray-900 dark:text-white bg-white dark:bg-gray-800">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
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
                Type
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Reference
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Facility
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Amount
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Status
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Date
              </TableHead>
              <TableHead className="text-gray-900 dark:text-white">
                Due Date
              </TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(transaction.type)}
                    <span className="text-gray-900 dark:text-white capitalize">
                      {transaction.type}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white font-medium">
                  {transaction.reference}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {transaction.facility}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white font-medium">
                  {formatCurrency(transaction.amount)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaction.status === "paid"
                        ? "success"
                        : transaction.status === "pending"
                        ? "secondary"
                        : transaction.status === "overdue"
                        ? "destructive"
                        : transaction.status === "refunded"
                        ? "warning"
                        : "outline"
                    }
                  >
                    {transaction.status.charAt(0).toUpperCase() +
                      transaction.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {new Date(transaction.date).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-gray-900 dark:text-white">
                  {transaction.dueDate
                    ? new Date(transaction.dueDate).toLocaleDateString()
                    : "-"}
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
                      {transaction.type === "invoice" && (
                        <>
                          <DropdownMenuItem className="text-gray-900 dark:text-white">
                            Download PDF
                          </DropdownMenuItem>
                          {transaction.status === "pending" && (
                            <DropdownMenuItem className="text-green-600 dark:text-green-400">
                              Record Payment
                            </DropdownMenuItem>
                          )}
                          {(transaction.status === "pending" ||
                            transaction.status === "overdue") && (
                            <DropdownMenuItem className="text-red-600 dark:text-red-400">
                              Cancel Invoice
                            </DropdownMenuItem>
                          )}
                        </>
                      )}
                      {transaction.type === "payment" && (
                        <DropdownMenuItem className="text-gray-900 dark:text-white">
                          View Receipt
                        </DropdownMenuItem>
                      )}
                      {transaction.type === "payment" &&
                        transaction.status === "paid" && (
                          <DropdownMenuItem className="text-red-600 dark:text-red-400">
                            Issue Refund
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
          Showing {filteredTransactions.length} of {transactions.length} results
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
