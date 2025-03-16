'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Shift {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  department: string;
  unit: string;
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  type: 'Regular' | 'Overtime' | 'On-Call';
  notes?: string;
}

interface ShiftSwapRequest {
  id: number;
  requestedShiftId: number;
  requestedByName: string;
  requestedByShiftId: number;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestDate: string;
}

// Mock data - replace with API call
const mockShifts: Shift[] = [
  {
    id: 1,
    date: '2024-03-20',
    startTime: '07:00',
    endTime: '15:00',
    department: 'Emergency',
    unit: 'ER-A',
    status: 'Scheduled',
    type: 'Regular',
    notes: 'Morning shift in ER'
  },
  {
    id: 2,
    date: '2024-03-21',
    startTime: '15:00',
    endTime: '23:00',
    department: 'ICU',
    unit: 'ICU-2',
    status: 'Scheduled',
    type: 'Regular'
  },
  {
    id: 3,
    date: '2024-03-22',
    startTime: '23:00',
    endTime: '07:00',
    department: 'Emergency',
    unit: 'ER-B',
    status: 'Scheduled',
    type: 'Overtime',
    notes: 'Coverage needed'
  }
];

const mockSwapRequests: ShiftSwapRequest[] = [
  {
    id: 1,
    requestedShiftId: 2,
    requestedByName: 'Sarah Johnson',
    requestedByShiftId: 4,
    status: 'Pending',
    requestDate: '2024-03-19'
  }
];

export default function ShiftManagement() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'completed' | 'swaps'>('upcoming');
  const [showSwapModal, setShowSwapModal] = useState(false);
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getStatusColor = (status: Shift['status']) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const upcomingShifts = mockShifts.filter(shift => 
    ['Scheduled', 'In Progress'].includes(shift.status)
  );

  const completedShifts = mockShifts.filter(shift => 
    shift.status === 'Completed'
  );

  const handleSwapRequest = (shift: Shift) => {
    setSelectedShift(shift);
    setShowSwapModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Shift Management</h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage your upcoming shifts, completed shifts, and shift swap requests
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-4" aria-label="Tabs">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'upcoming'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming Shifts
            </button>
            <button
              onClick={() => setSelectedTab('completed')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'completed'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Completed Shifts
            </button>
            <button
              onClick={() => setSelectedTab('swaps')}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedTab === 'swaps'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Shift Swaps
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {selectedTab === 'upcoming' && (
            <>
              {upcomingShifts.map((shift) => (
                <div key={shift.id} className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-lg font-medium text-gray-900">
                          {shift.department} - {shift.unit}
                        </h2>
                        <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(shift.status)}`}>
                          {shift.status}
                        </span>
                        <span className="ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {shift.type}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {formatDate(shift.date)}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                      </p>
                      {shift.notes && (
                        <p className="mt-2 text-sm text-gray-600">
                          {shift.notes}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => handleSwapRequest(shift)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Request Swap
                    </button>
                  </div>
                </div>
              ))}

              {upcomingShifts.length === 0 && (
                <div className="bg-white shadow-sm rounded-lg p-8 text-center">
                  <h3 className="text-lg font-medium text-gray-900">No upcoming shifts</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    You don't have any scheduled shifts at the moment
                  </p>
                </div>
              )}
            </>
          )}

          {selectedTab === 'completed' && (
            <>
              {completedShifts.map((shift) => (
                <div key={shift.id} className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-lg font-medium text-gray-900">
                          {shift.department} - {shift.unit}
                        </h2>
                        <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(shift.status)}`}>
                          {shift.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {formatDate(shift.date)}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {completedShifts.length === 0 && (
                <div className="bg-white shadow-sm rounded-lg p-8 text-center">
                  <h3 className="text-lg font-medium text-gray-900">No completed shifts</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    You haven't completed any shifts yet
                  </p>
                </div>
              )}
            </>
          )}

          {selectedTab === 'swaps' && (
            <>
              {mockSwapRequests.map((request) => (
                <div key={request.id} className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center">
                        <h2 className="text-lg font-medium text-gray-900">
                          Swap Request from {request.requestedByName}
                        </h2>
                        <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          request.status === 'Approved' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {request.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Requested on {formatDate(request.requestDate)}
                      </p>
                    </div>
                    {request.status === 'Pending' && (
                      <div className="flex space-x-4">
                        <button
                          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                          Accept
                        </button>
                        <button
                          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Decline
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {mockSwapRequests.length === 0 && (
                <div className="bg-white shadow-sm rounded-lg p-8 text-center">
                  <h3 className="text-lg font-medium text-gray-900">No swap requests</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    You don't have any pending shift swap requests
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Shift Swap Modal */}
        {showSwapModal && selectedShift && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Request Shift Swap</h2>
              <p className="text-sm text-gray-500 mb-4">
                Selected shift: {formatDate(selectedShift.date)} ({formatTime(selectedShift.startTime)} - {formatTime(selectedShift.endTime)})
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Reason for swap request
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Please provide a reason for your swap request..."
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowSwapModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // TODO: Implement swap request submission
                      setShowSwapModal(false);
                    }}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 