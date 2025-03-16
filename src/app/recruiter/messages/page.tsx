"use client";

import { useState } from "react";
import RecruiterLayout from "@/components/layout/RecruiterLayout";

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const [conversations] = useState([
    {
      id: 1,
      candidate: {
        name: "Sarah Johnson",
        role: "Registered Nurse",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      lastMessage: "Thank you for the opportunity. I'll be there at 7 AM.",
      timestamp: "10:30 AM",
      unread: true,
      messages: [
        {
          id: 1,
          sender: "recruiter",
          content: "Hi Sarah, I see you've applied for the ICU position.",
          timestamp: "9:00 AM",
        },
        {
          id: 2,
          sender: "candidate",
          content: "Yes, I'm very interested in the position.",
          timestamp: "9:15 AM",
        },
        {
          id: 3,
          sender: "recruiter",
          content: "Great! Would you be available for a shift tomorrow?",
          timestamp: "9:30 AM",
        },
        {
          id: 4,
          sender: "candidate",
          content: "Thank you for the opportunity. I'll be there at 7 AM.",
          timestamp: "10:30 AM",
        },
      ],
    },
    {
      id: 2,
      candidate: {
        name: "Michael Chen",
        role: "Licensed Practical Nurse",
        avatar:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      lastMessage: "I've updated my availability for next week.",
      timestamp: "Yesterday",
      unread: false,
      messages: [
        {
          id: 1,
          sender: "recruiter",
          content: "Hi Michael, thanks for applying.",
          timestamp: "2:00 PM",
        },
        {
          id: 2,
          sender: "candidate",
          content: "I've updated my availability for next week.",
          timestamp: "Yesterday",
        },
      ],
    },
    {
      id: 3,
      candidate: {
        name: "Emily Rodriguez",
        role: "Travel Nurse",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      lastMessage: "I can start immediately.",
      timestamp: "2 days ago",
      unread: true,
      messages: [
        {
          id: 1,
          sender: "recruiter",
          content: "Hi Emily, are you available for immediate start?",
          timestamp: "2 days ago",
        },
        {
          id: 2,
          sender: "candidate",
          content: "I can start immediately.",
          timestamp: "2 days ago",
        },
      ],
    },
  ]);

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.candidate.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // In a real app, this would be handled by an API call
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <RecruiterLayout>
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <button
                key={conversation.id}
                className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 ${
                  selectedConversation === conversation.id ? "bg-blue-50" : ""
                }`}
                onClick={() => setSelectedConversation(conversation.id)}
              >
                <img
                  src={conversation.candidate.avatar}
                  alt={conversation.candidate.name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {conversation.candidate.name}
                    </p>
                    {conversation.unread && (
                      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {conversation.candidate.role}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                  <p className="text-xs text-gray-400">
                    {conversation.timestamp}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {currentConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
                <img
                  src={currentConversation.candidate.avatar}
                  alt={currentConversation.candidate.name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {currentConversation.candidate.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentConversation.candidate.role}
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "recruiter"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs rounded-lg px-4 py-2 ${
                        message.sender === "recruiter"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "recruiter"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </RecruiterLayout>
  );
}
