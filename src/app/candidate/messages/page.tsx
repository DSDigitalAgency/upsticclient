"use client";

import { useState } from "react";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  unread: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
}

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with actual data from your backend
  const conversations: Conversation[] = [
    {
      id: "1",
      name: "Recruiter Team",
      avatar: "/avatars/recruiter.jpg",
      lastMessage:
        "Your application has been reviewed. We'd like to schedule an interview.",
      timestamp: "2h ago",
      unread: true,
    },
    {
      id: "2",
      name: "HR Department",
      avatar: "/avatars/hr.jpg",
      lastMessage: "Thank you for submitting your documents.",
      timestamp: "1d ago",
      unread: false,
    },
    {
      id: "3",
      name: "Technical Team",
      avatar: "/avatars/tech.jpg",
      lastMessage: "We've reviewed your technical assessment.",
      timestamp: "2d ago",
      unread: true,
    },
  ];

  const messages: Record<string, Message[]> = {
    "1": [
      {
        id: "1",
        sender: "Recruiter Team",
        avatar: "/avatars/recruiter.jpg",
        content:
          "Your application has been reviewed. We'd like to schedule an interview.",
        timestamp: "2h ago",
        unread: true,
      },
      {
        id: "2",
        sender: "You",
        avatar: "/avatars/user.jpg",
        content: "Thank you! I'm available for an interview.",
        timestamp: "1h ago",
        unread: false,
      },
    ],
    "2": [
      {
        id: "3",
        sender: "HR Department",
        avatar: "/avatars/hr.jpg",
        content: "Thank you for submitting your documents.",
        timestamp: "1d ago",
        unread: false,
      },
    ],
    "3": [
      {
        id: "4",
        sender: "Technical Team",
        avatar: "/avatars/tech.jpg",
        content: "We've reviewed your technical assessment.",
        timestamp: "2d ago",
        unread: true,
      },
    ],
  };

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    // Add the new message to the messages array
    const message: Message = {
      id: Date.now().toString(),
      sender: "You",
      avatar: "/avatars/user.jpg",
      content: newMessage,
      timestamp: "Just now",
      unread: false,
    };

    // Update the conversation's last message
    const updatedConversations = conversations.map((conv) =>
      conv.id === selectedConversation
        ? {
            ...conv,
            lastMessage: newMessage,
            timestamp: "Just now",
            unread: false,
          }
        : conv
    );

    setNewMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Conversations List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Messages</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`w-full p-4 flex items-start space-x-3 hover:bg-gray-50 transition-colors ${
                selectedConversation === conversation.id ? "bg-blue-50" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={conversation.avatar}
                  alt={conversation.name}
                  className="w-10 h-10 rounded-full"
                />
                {conversation.unread && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {conversation.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate">
                  {conversation.lastMessage}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Messages Header */}
            <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
              <img
                src={
                  conversations.find((c) => c.id === selectedConversation)
                    ?.avatar
                }
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-gray-900">
                  {
                    conversations.find((c) => c.id === selectedConversation)
                      ?.name
                  }
                </h2>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>

            {/* Messages List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[selectedConversation]?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "You"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender !== "You" && (
                        <img
                          src={message.avatar}
                          alt=""
                          className="w-6 h-6 rounded-full"
                        />
                      )}
                      <div>
                        <p className="text-sm">{message.content}</p>
                        <span
                          className={`text-xs mt-1 block ${
                            message.sender === "You"
                              ? "text-blue-100"
                              : "text-gray-500"
                          }`}
                        >
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-200"
            >
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
