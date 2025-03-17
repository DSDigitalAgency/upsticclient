import ProtectedLayout from "@/components/layout/ProtectedLayout";

export default function ProfessionalMessages() {
  const conversations = [
    {
      id: 1,
      facility: {
        name: "Memorial Hospital",
        department: "Emergency Medicine",
        image: "/logos/memorial.jpg",
        online: true,
      },
      lastMessage: {
        text: "Hi Sarah, thank you for your application. Would you be available for an interview this Wednesday at 2 PM?",
        timestamp: "5m ago",
        unread: true,
      },
      position: "Senior Registered Nurse",
    },
    {
      id: 2,
      facility: {
        name: "City Medical Center",
        department: "Intensive Care",
        image: "/logos/citymed.jpg",
        online: false,
      },
      lastMessage: {
        text: "We've reviewed your application and would like to discuss the next steps.",
        timestamp: "2h ago",
        unread: false,
      },
      position: "ICU Specialist",
    },
    {
      id: 3,
      facility: {
        name: "County General Hospital",
        department: "Emergency Medicine",
        image: "/logos/county.jpg",
        online: true,
      },
      lastMessage: {
        text: "Thank you for your interest. Unfortunately, we've filled this position.",
        timestamp: "1d ago",
        unread: false,
      },
      position: "Emergency Room Nurse",
    },
  ];

  return (
    <ProtectedLayout userRole="healthcare_professional">
      <div className="h-[calc(100vh-64px)] flex">
        {/* Conversation List */}
        <div className="w-1/3 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="mt-1 text-sm text-gray-500">
              Communicate with healthcare facilities
            </p>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Conversations */}
          <div className="overflow-y-auto h-[calc(100vh-220px)]">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-600">
                        {conversation.facility.name[0]}
                      </span>
                    </div>
                    {conversation.facility.online && (
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h2 className="text-sm font-medium text-gray-900 truncate">
                        {conversation.facility.name}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {conversation.lastMessage.timestamp}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {conversation.position}
                    </p>
                    <p
                      className={`text-sm truncate ${
                        conversation.lastMessage.unread
                          ? "text-gray-900 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {conversation.lastMessage.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Selected conversation header */}
          <div className="p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-600">M</span>
                </div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Memorial Hospital
                </h2>
                <p className="text-sm text-gray-500">Emergency Medicine</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Time separator */}
              <div className="flex items-center">
                <div className="flex-1 border-t border-gray-200" />
                <p className="mx-4 text-sm text-gray-500">Today</p>
                <div className="flex-1 border-t border-gray-200" />
              </div>

              {/* Message bubbles */}
              <div className="flex">
                <div className="bg-white text-gray-900 rounded-lg px-4 py-2 max-w-md shadow-sm">
                  <p className="text-sm">
                    Hi, I'm interested in learning more about the Senior
                    Registered Nurse position. Could you tell me more about the
                    shift schedule?
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-md">
                  <p className="text-sm">
                    Hi Sarah, thank you for your application. Would you be
                    available for an interview this Wednesday at 2 PM?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="text-white bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
}
