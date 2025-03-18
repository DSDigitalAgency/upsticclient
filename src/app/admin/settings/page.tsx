"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Bell,
  Lock,
  Mail,
  CreditCard,
  Users,
  FileText,
  Globe,
  Database,
  Shield,
  Zap,
  HelpCircle,
} from "lucide-react";

interface SettingSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  settings: {
    id: string;
    label: string;
    description: string;
    type: "toggle" | "input" | "select" | "textarea";
    value: any;
    options?: { label: string; value: string }[];
  }[];
}

// Demo data for settings sections
const settingsSections: SettingSection[] = [
  {
    id: "general",
    title: "General Settings",
    description: "Basic platform configuration and preferences",
    icon: <Settings className="h-5 w-5 text-blue-500" />,
    settings: [
      {
        id: "platform_name",
        label: "Platform Name",
        description: "The name displayed across the platform",
        type: "input",
        value: "Upstic Healthcare Staffing",
      },
      {
        id: "timezone",
        label: "Default Timezone",
        description: "Set the default timezone for the platform",
        type: "select",
        value: "UTC",
        options: [
          { label: "UTC", value: "UTC" },
          { label: "EST", value: "EST" },
          { label: "PST", value: "PST" },
        ],
      },
      {
        id: "date_format",
        label: "Date Format",
        description: "Choose how dates are displayed",
        type: "select",
        value: "MM/DD/YYYY",
        options: [
          { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
          { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
          { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
        ],
      },
    ],
  },
  {
    id: "notifications",
    title: "Notification Settings",
    description: "Configure how notifications are delivered",
    icon: <Bell className="h-5 w-5 text-green-500" />,
    settings: [
      {
        id: "email_notifications",
        label: "Email Notifications",
        description: "Enable or disable email notifications",
        type: "toggle",
        value: true,
      },
      {
        id: "push_notifications",
        label: "Push Notifications",
        description: "Enable or disable push notifications",
        type: "toggle",
        value: true,
      },
      {
        id: "notification_frequency",
        label: "Notification Frequency",
        description: "How often to send digest emails",
        type: "select",
        value: "daily",
        options: [
          { label: "Real-time", value: "realtime" },
          { label: "Daily", value: "daily" },
          { label: "Weekly", value: "weekly" },
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security Settings",
    description: "Manage security and authentication settings",
    icon: <Lock className="h-5 w-5 text-red-500" />,
    settings: [
      {
        id: "two_factor_auth",
        label: "Two-Factor Authentication",
        description: "Require 2FA for all admin accounts",
        type: "toggle",
        value: true,
      },
      {
        id: "session_timeout",
        label: "Session Timeout",
        description: "Minutes before session expires",
        type: "input",
        value: "30",
      },
      {
        id: "password_policy",
        label: "Password Policy",
        description: "Minimum password requirements",
        type: "textarea",
        value: "Minimum 8 characters, 1 uppercase, 1 number",
      },
    ],
  },
  {
    id: "email",
    title: "Email Settings",
    description: "Configure email delivery and templates",
    icon: <Mail className="h-5 w-5 text-purple-500" />,
    settings: [
      {
        id: "smtp_host",
        label: "SMTP Host",
        description: "Your SMTP server address",
        type: "input",
        value: "smtp.example.com",
      },
      {
        id: "smtp_port",
        label: "SMTP Port",
        description: "SMTP server port",
        type: "input",
        value: "587",
      },
      {
        id: "email_from",
        label: "From Address",
        description: "Default sender email address",
        type: "input",
        value: "noreply@upstic.com",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing Settings",
    description: "Manage payment and billing configurations",
    icon: <CreditCard className="h-5 w-5 text-yellow-500" />,
    settings: [
      {
        id: "currency",
        label: "Default Currency",
        description: "Set the default currency for transactions",
        type: "select",
        value: "USD",
        options: [
          { label: "USD", value: "USD" },
          { label: "EUR", value: "EUR" },
          { label: "GBP", value: "GBP" },
        ],
      },
      {
        id: "tax_rate",
        label: "Default Tax Rate",
        description: "Default tax rate for transactions",
        type: "input",
        value: "0.00",
      },
      {
        id: "invoice_prefix",
        label: "Invoice Prefix",
        description: "Prefix for generated invoice numbers",
        type: "input",
        value: "INV-",
      },
    ],
  },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");
  const [settings, setSettings] = useState(settingsSections);

  const handleSettingChange = (
    sectionId: string,
    settingId: string,
    value: any
  ) => {
    setSettings((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              settings: section.settings.map((setting) =>
                setting.id === settingId ? { ...setting, value } : setting
              ),
            }
          : section
      )
    );
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving settings:", settings);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your platform settings and configurations
          </p>
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </div>

      {/* Settings Navigation */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {settings.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeSection === section.id
                ? "bg-blue-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {section.icon}
            <span>{section.title}</span>
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        {settings
          .filter((section) => section.id === activeSection)
          .map((section) => (
            <div key={section.id} className="p-6">
              <div className="flex items-center gap-2 mb-6">
                {section.icon}
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {section.settings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex-1">
                      <label
                        htmlFor={setting.id}
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {setting.label}
                      </label>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {setting.description}
                      </p>
                    </div>

                    <div className="sm:w-[200px]">
                      {setting.type === "toggle" && (
                        <div className="flex items-center justify-end">
                          <button
                            onClick={() =>
                              handleSettingChange(
                                section.id,
                                setting.id,
                                !setting.value
                              )
                            }
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              setting.value
                                ? "bg-blue-500"
                                : "bg-gray-200 dark:bg-gray-700"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                setting.value
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      )}

                      {setting.type === "input" && (
                        <Input
                          id={setting.id}
                          value={setting.value}
                          onChange={(e) =>
                            handleSettingChange(
                              section.id,
                              setting.id,
                              e.target.value
                            )
                          }
                          className="text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                        />
                      )}

                      {setting.type === "select" && (
                        <select
                          id={setting.id}
                          value={setting.value}
                          onChange={(e) =>
                            handleSettingChange(
                              section.id,
                              setting.id,
                              e.target.value
                            )
                          }
                          className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {setting.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}

                      {setting.type === "textarea" && (
                        <textarea
                          id={setting.id}
                          value={setting.value}
                          onChange={(e) =>
                            handleSettingChange(
                              section.id,
                              setting.id,
                              e.target.value
                            )
                          }
                          rows={3}
                          className="w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Additional Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-blue-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">
              User Management
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage user roles, permissions, and access levels
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="h-5 w-5 text-green-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">
              Document Templates
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Configure document templates and formatting
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="h-5 w-5 text-purple-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">
              Regional Settings
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Set up regional preferences and localizations
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Database className="h-5 w-5 text-yellow-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">
              Data Management
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Configure data retention and backup settings
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-red-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">
              Compliance Settings
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Set up compliance rules and requirements
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-orange-500" />
            <h3 className="font-medium text-gray-900 dark:text-white">
              Performance
            </h3>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Optimize system performance and caching
          </p>
        </div>
      </div>
    </div>
  );
}
