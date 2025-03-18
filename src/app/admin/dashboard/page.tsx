"use client";

import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  TooltipProps,
} from "recharts";

interface UserData {
  email: string;
  role: string;
  name: string;
}

interface StatItem {
  name: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

interface RevenueDataItem {
  name: string;
  value: number;
}

interface ShiftDataItem {
  name: string;
  shifts: number;
}

interface SpecialtyDataItem {
  name: string;
  value: number;
}

interface ActivityItem {
  id: number;
  type: string;
  user: string;
  action: string;
  time: string;
}

// Icon paths for the stats
const statIconPaths: Record<string, string> = {
  "user-group":
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  "building-office":
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  calendar:
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  "shield-check":
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  banknotes:
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "clipboard-document-check":
    "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
};

// Activity icon paths
const activityIconPaths: Record<string, string> = {
  approval: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  registration:
    "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z",
  shift:
    "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  payment:
    "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z",
  compliance:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

export default function AdminDashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);

  // Stats data (would come from API in real app)
  const stats: StatItem[] = [
    {
      name: "Total Professionals",
      value: "3,862",
      change: "+12%",
      trend: "up",
      icon: "user-group",
    },
    {
      name: "Active Facilities",
      value: "592",
      change: "+8%",
      trend: "up",
      icon: "building-office",
    },
    {
      name: "Shifts Filled",
      value: "18,472",
      change: "+18%",
      trend: "up",
      icon: "calendar",
    },
    {
      name: "Compliance Rate",
      value: "94%",
      change: "+2%",
      trend: "up",
      icon: "shield-check",
    },
    {
      name: "Revenue",
      value: "$482,954",
      change: "+15%",
      trend: "up",
      icon: "banknotes",
    },
    {
      name: "Pending Approvals",
      value: "43",
      change: "-7%",
      trend: "down",
      icon: "clipboard-document-check",
    },
  ];

  // Chart sample data
  const revenueData: RevenueDataItem[] = [
    { name: "Jan", value: 32500 },
    { name: "Feb", value: 36000 },
    { name: "Mar", value: 38200 },
    { name: "Apr", value: 37800 },
    { name: "May", value: 42300 },
    { name: "Jun", value: 45100 },
    { name: "Jul", value: 44900 },
    { name: "Aug", value: 46600 },
    { name: "Sep", value: 48500 },
    { name: "Oct", value: 51200 },
    { name: "Nov", value: 54100 },
    { name: "Dec", value: 55754 },
  ];

  const shiftsData: ShiftDataItem[] = [
    { name: "Mon", shifts: 342 },
    { name: "Tue", shifts: 386 },
    { name: "Wed", shifts: 402 },
    { name: "Thu", shifts: 378 },
    { name: "Fri", shifts: 414 },
    { name: "Sat", shifts: 324 },
    { name: "Sun", shifts: 298 },
  ];

  const specialtyData: SpecialtyDataItem[] = [
    { name: "Registered Nurse", value: 45 },
    { name: "LPN/LVN", value: 20 },
    { name: "CNA", value: 15 },
    { name: "Physician", value: 10 },
    { name: "Therapist", value: 7 },
    { name: "Other", value: 3 },
  ];

  const COLORS = [
    "#4f46e5",
    "#818cf8",
    "#a5b4fc",
    "#c7d2fe",
    "#ddd6fe",
    "#e9d5ff",
  ];

  // Recent activities (demo data)
  const recentActivities: ActivityItem[] = [
    {
      id: 1,
      type: "approval",
      user: "John Smith",
      action: "document approved",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "registration",
      user: "Memorial Hospital",
      action: "account created",
      time: "2 hours ago",
    },
    {
      id: 3,
      type: "shift",
      user: "Sarah Johnson",
      action: "shift completed",
      time: "3 hours ago",
    },
    {
      id: 4,
      type: "payment",
      user: "Northwest Medical",
      action: "payment processed",
      time: "Yesterday",
    },
    {
      id: 5,
      type: "compliance",
      user: "James Wilson",
      action: "certification expires soon",
      time: "Yesterday",
    },
  ];

  // Get user data from localStorage on component mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  // Custom label for pie chart
  const renderCustomizedLabel = ({
    name,
    percent,
  }: {
    name: string;
    percent: number;
  }) => {
    return `${name} ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome, {userData?.name || "Admin"}
        </h1>
        <p className="text-gray-500 mt-1">
          Here's what's happening with Upstic today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 rounded-md bg-indigo-100 text-indigo-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={statIconPaths[stat.icon]}
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.trend === "up" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.trend === "up" ? (
                        <svg
                          className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <span className="sr-only">
                        {stat.trend === "up" ? "Increased" : "Decreased"} by
                      </span>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Revenue Trend
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#6b7280" }}
                  tickLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  tick={{ fill: "#6b7280" }}
                  tickLine={{ stroke: "#e5e7eb" }}
                  tickFormatter={(value: number) => `$${value / 1000}k`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${value}`, "Revenue"]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e5e7eb",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  fill="#c7d2fe"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Shifts Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Weekly Shifts
          </h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={shiftsData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#6b7280" }}
                  tickLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  tick={{ fill: "#6b7280" }}
                  tickLine={{ stroke: "#e5e7eb" }}
                />
                <Tooltip
                  formatter={(value: number) => [`${value}`, "Shifts"]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e5e7eb",
                  }}
                />
                <Bar dataKey="shifts" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Additional Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Specialty Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Professional Distribution
          </h2>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={specialtyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={renderCustomizedLabel}
                >
                  {specialtyData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value}%`,
                    name,
                  ]}
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e5e7eb",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="flow-root">
            <ul className="-mb-8">
              {recentActivities.map((activity, activityIdx) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {activityIdx !== recentActivities.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-indigo-100">
                          <svg
                            className="h-5 w-5 text-indigo-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={activityIconPaths[activity.type]}
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            <span className="font-medium text-gray-900">
                              {activity.user}
                            </span>{" "}
                            {activity.action}
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View all activity
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
