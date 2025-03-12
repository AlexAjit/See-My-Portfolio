// components/AvatarChat.jsx
"use client"
import { useState, useRef, useEffect } from 'react';
import avatar from "@/assets/avatar1.png";
import Image from 'next/image';

const AvatarChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotRef = useRef(null);

  // Click outside to close chatbot
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed left-8 bottom-8 z-50">
      <div className="relative">
        {/* Avatar */}
        <button 
          onClick={toggleChatbot}
          className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-teal-500 hover:border-teal-400 transition-all shadow-lg"
          aria-label="Open chat"
        >
          <Image
            src={avatar}
            alt="Your Avatar" 
            width={64} 
            height={64} 
            className="object-cover"
          />
        </button>
        
        {/* Chatbot */}
        {isOpen && (
          <div 
            ref={chatbotRef}
            className="absolute bottom-20 left-0 w-80 bg-gray-800 rounded-lg shadow-xl border border-teal-500 overflow-hidden"
          >
            <div className="bg-teal-600 p-3 flex justify-between items-center">
              <span className="font-bold">Chat with me</span>
              <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="h-64 p-4 bg-gray-900 overflow-y-auto">
              <div className="bg-teal-700 rounded-lg p-2 mb-2 max-w-xs ml-auto">
                Hi there! How can I help you?
              </div>
              <div className="bg-gray-700 rounded-lg p-2 mb-2 max-w-xs">
                Tell me about your portfolio
              </div>
              <div className="bg-teal-700 rounded-lg p-2 mb-2 max-w-xs ml-auto">
                I'm a developer with expertise in React, Next.js, and cloud solutions. Check out my projects!
              </div>
            </div>
            <div className="p-3 border-t border-gray-700 flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 rounded-l-lg px-3 py-2 focus:outline-none text-white"
              />
              <button className="bg-teal-600 rounded-r-lg px-4 py-2 hover:bg-teal-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarChat;