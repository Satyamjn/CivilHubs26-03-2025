import React, { useState } from "react";
import { FaPhone, FaVideo, FaRegSmile, FaSearch, FaVolumeUp } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";

import NavbarProperty from "./NavbarProperty";

const messages = [
  { id: 1, sender: "John Doe", avatar: "/assets/Civilhubs/civilpic.jpg", type: "voice", duration: "02:36", time: "10:02 AM", unread: 0 },
  { id: 2, sender: "Emily Clark", avatar: "/assets/Civilhubs/civilpic.jpg", message: "Reviewing the blueprint...", unread: 28, time: "11:56 AM" },
  { id: 3, sender: "Michael Smith", avatar: "/assets/Civilhubs/civilpic.jpg", message: "Checking site measurements...", unread: 17, time: "11:42 AM" },
  { id: 4, sender: "Sarah Johnson", avatar: "/assets/Civilhubs/civilpic.jpg", message: "Sent updated site plan.", unread: 0, time: "08:29 AM" },
  { id: 5, sender: "David Brown", avatar: "/assets/Civilhubs/civilpic.jpg", message: "Materials ordered for project.", unread: 0, time: "10:02 AM" },
];

const ChatsComponent = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleMessageClick = (msg) => {
    setSelectedMessage(msg);
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <NavbarProperty />
      <div className="w-full h-screen flex flex-col md:flex-row bg-orange-50">
        {/* Sidebar */}
        <div
          className={`w-full md:w-1/4 bg-white p-4 shadow-md border-r md:block ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-teal-500">Messages</h2>
            <button
              className="md:hidden text-gray-500 text-xl"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              ✕
            </button>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="overflow-y-auto h-[70vh] md:h-[75vh]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => handleMessageClick(msg)}
              >
                <img
                  src={msg.avatar}
                  alt={msg.sender}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <p className="font-bold">{msg.sender}</p>
                  {msg.type === "voice" ? (
                    <div className="flex items-center text-sm text-gray-600">
                      <FaVolumeUp className="mr-2" /> Voice Message - {msg.duration}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600">{msg.message}</p>
                  )}
                </div>
                <div className="text-xs text-gray-500">{msg.time}</div>
                {msg.unread > 0 && (
                  <span className="ml-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                    {msg.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-white shadow-md">
            <div>
              <h2 className="font-semibold">
                {selectedMessage ? selectedMessage.sender : "Select a message"}
              </h2>
              <p className="text-sm text-gray-500">
                Chat with {selectedMessage ? selectedMessage.sender : "..."}
              </p>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <FaVideo className="cursor-pointer" />
              <FaPhone className="cursor-pointer" />
              <IoMdMore className="cursor-pointer" />
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-orange-50">
            {selectedMessage ? (
              <>
                <div className="flex justify-start">
                  <div className="bg-gray-200 p-3 rounded-lg text-gray-700">
                    No problem, Maya.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-teal-500 text-white p-3 rounded-lg">
                    Thank you for the files Mr. Knight
                  </div>
                </div>
                <div className="text-center text-gray-500 text-sm">Today</div>

                <div className="flex justify-end items-center space-x-2">
                  <div className="bg-teal-500 p-3 rounded-lg flex items-center space-x-2">
                    <BsFillPlayFill className="text-white text-2xl" />
                    <div className="text-white">0:30</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <img
                    src="/assets/Civilhubs/cat1.png"
                    alt="Chat"
                    className="rounded-lg shadow-md w-full max-w-xs"
                  />
                </div>
              </>
            ) : (
              <div className="text-center text-gray-500">
                Select a message to start chatting.
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="bg-white shadow-md p-4 sticky bottom-0">
            <div className="flex items-center">
              <FaRegSmile className="text-gray-500 text-xl mr-2 cursor-pointer" />
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg outline-none"
                placeholder="Type a message..."
              />
              <FiSend className="text-orange-500 text-xl ml-2 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Back to messages on small screen */}
        {selectedMessage && (
          <button
            className="md:hidden fixed top-4 left-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md"
            onClick={() => setShowSidebar(true)}
          >
            Back to Messages
          </button>
        )}
      </div>
    </>
  );
};

export default ChatsComponent;
