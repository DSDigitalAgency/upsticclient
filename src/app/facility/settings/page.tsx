import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function FacilitySettings() {
  return (
    <ProtectedLayout userRole="healthcare_facility">
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your facility profile and preferences
          </p>
        </div>

        {/* Facility Profile */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Facility Profile
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Update your facility's information
            </p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="facility-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facility Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="facility-name"
                    id="facility-name"
                    defaultValue="Memorial Hospital"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="facility-type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Facility Type
                </label>
                <div className="mt-1">
                  <select
                    id="facility-type"
                    name="facility-type"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option>Hospital</option>
                    <option>Clinic</option>
                    <option>Long-term Care</option>
                    <option>Rehabilitation Center</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue="Leading healthcare facility providing comprehensive medical services..."
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="website"
                    id="website"
                    defaultValue="https://memorialhospital.com"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    defaultValue="(555) 123-4567"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 text-right rounded-b-lg">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save Changes
            </button>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Notification Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Choose how you want to be notified
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="new-applications"
                    name="new-applications"
                    type="checkbox"
                    defaultChecked
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="new-applications"
                    className="font-medium text-gray-700"
                  >
                    New Applications
                  </label>
                  <p className="text-sm text-gray-500">
                    Get notified when a candidate applies to your job posting
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="messages"
                    name="messages"
                    type="checkbox"
                    defaultChecked
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="messages"
                    className="font-medium text-gray-700"
                  >
                    Messages
                  </label>
                  <p className="text-sm text-gray-500">
                    Get notified when you receive new messages from candidates
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="reminders"
                    name="reminders"
                    type="checkbox"
                    defaultChecked
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="reminders"
                    className="font-medium text-gray-700"
                  >
                    Reminders
                  </label>
                  <p className="text-sm text-gray-500">
                    Get reminders about scheduled interviews and pending actions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 text-right rounded-b-lg">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save Preferences
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Account Settings
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage your account credentials and security
            </p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue="admin@memorialhospital.com"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="current-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Current Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="current-password"
                    id="current-password"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="new-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 text-right rounded-b-lg">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Update Account
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6">
            <h2 className="text-lg font-medium text-red-600">Danger Zone</h2>
            <p className="mt-1 text-sm text-gray-500">
              Irreversible and destructive actions
            </p>
            <div className="mt-6">
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
