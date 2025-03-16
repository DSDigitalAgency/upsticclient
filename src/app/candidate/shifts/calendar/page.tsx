'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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

export default function ShiftCalendar() {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null);

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getShiftsForDate = (date: string) => {
    return mockShifts.filter(shift => shift.date === date);
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-32" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateString = date.toISOString().split('T')[0];
      const shiftsForDate = getShiftsForDate(dateString);

      days.push(
        <div
          key={day}
          className={`h-32 border border-gray-200 p-2 ${
            date.toDateString() === new Date().toDateString()
              ? 'bg-blue-50'
              : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium ${
              date.toDateString() === new Date().toDateString()
                ? 'text-blue-600'
                : 'text-gray-900'
            }`}>
              {day}
            </span>
          </div>
          <div className="mt-1 space-y-1">
            {shiftsForDate.map((shift) => (
              <button
                key={shift.id}
                onClick={() => setSelectedShift(shift)}
                className="w-full text-left px-2 py-1 rounded text-xs bg-blue-100 text-blue-800 hover:bg-blue-200"
              >
                {formatTime(shift.startTime)} - {shift.department}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Shift Calendar</h1>
            <Link
              href="/candidate/shifts"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              View List
            </Link>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Monthly overview of your scheduled shifts
          </p>
        </div>

        {/* Calendar Navigation */}
        <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-medium text-gray-900">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-px border-b border-gray-200 bg-gray-50">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="px-4 py-2">
                <span className="text-sm font-medium text-gray-900">{day}</span>
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {generateCalendarDays()}
          </div>
        </div>

        {/* Shift Details Modal */}
        {selectedShift && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Shift Details
                </h2>
                <button
                  onClick={() => setSelectedShift(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="mt-1">{selectedShift.department} - {selectedShift.unit}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Time</p>
                  <p className="mt-1">
                    {formatTime(selectedShift.startTime)} - {formatTime(selectedShift.endTime)}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Type</p>
                  <p className="mt-1">{selectedShift.type}</p>
                </div>
                {selectedShift.notes && (
                  <div>
                    <p className="text-sm font-medium text-gray-500">Notes</p>
                    <p className="mt-1">{selectedShift.notes}</p>
                  </div>
                )}
                <div className="flex justify-end">
                  <button
                    onClick={() => router.push(`/candidate/shifts?shift=${selectedShift.id}`)}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Full Details
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