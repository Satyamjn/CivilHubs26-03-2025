import React, { useState } from "react";
import { FaPhone, FaVideo, FaRegSmile, FaSearch, FaVolumeUp } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import Navbar from "./shared/Navbar";


const messages = [
  { id: 1, sender: "Company Name", avatar: "/assets/Civilhubs/logical.png", type: "voice", duration: "02:36", time: "10:02 AM", unread: 0 },
  { id: 2, sender: "Company Name", avatar: "/assets/Civilhubs/logical.png", message: "Reviewing the blueprint...", unread: 28, time: "11:56 AM" },
  { id: 3, sender: "Company Name", avatar: "/assets/Civilhubs/logical.png ", message: "Checking site measurements...", unread: 17, time: "11:42 AM" },
  { id: 4, sender: "Company Name", avatar: "/assets/Civilhubs/civilpic.jpg", message: "Sent updated site plan.", unread: 0, time: "08:29 AM" },
  { id: 5, sender: "Company Name", avatar: "/assets/Civilhubs/civilpic.jpg", message: "Materials ordered for project.", unread: 0, time: "10:02 AM" },
];


const Chats = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleMessageClick = (msg) => {
    setSelectedMessage(msg);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex bg-orange-50">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4 shadow-md border-r">
          <h2 className="text-lg font-semibold text-teal-500 mb-4">Messages</h2>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-10 border rounded-lg focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <div className="overflow-y-auto h-[75vh]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => handleMessageClick(msg)}
              >
                <img src={msg.avatar} alt={msg.sender} className="w-10 h-10 rounded-full mr-3" />
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
              <h2 className="font-semibold">{selectedMessage ? selectedMessage.sender : "Select a message"}</h2>
              <p className="text-sm text-gray-500">Chat with {selectedMessage ? selectedMessage.sender : "..."}</p>
            </div>
            <div className="flex space-x-4 text-gray-600">
              <FaVideo className="cursor-pointer" />
              <FaPhone className="cursor-pointer" />
              <IoMdMore className="cursor-pointer" />
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedMessage ? (
              <>
                <div className="flex justify-start">
                  <div className="bg-gray-200 p-3 rounded-lg text-gray-700">No problem, Maya.</div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-teal-500 text-white p-3 rounded-lg">Thank you for the files Mr. Knight</div>
                </div>
                <div className="text-center text-gray-500 text-sm">Today</div>

                <div className="flex justify-end items-center space-x-2">
                  <div className="bg-teal-500 p-3 rounded-lg flex items-center space-x-2">
                    <BsFillPlayFill className="text-white text-2xl" />
                    <div className="text-white">0:30</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <img src="/assets/Civilhubs/cat1.png" alt="Chat .png" className="rounded-lg shadow-md" />
                </div>
              </>
            ) : (
              <div className="text-center text-gray-500">Select a message to start chatting.</div>
            )}
          </div>

          {/* Chat Input */}
          <div className="bg-white shadow-md p-4 sticky bottom-0">
            <div className="flex items-center">
              <FaRegSmile className="text-gray-500 text-xl mr -2 cursor-pointer" />
              <input type="text" className="flex-1 p-2 border rounded-lg outline-none" placeholder="Type a message..." />
              <FiSend className="text-orange-500 text-xl ml-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;