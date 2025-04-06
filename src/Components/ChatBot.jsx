// src/components/Chatbot.jsx
import React, { useState } from "react";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I assist you?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
    setInputMessage('');
  };

  const handleQuestionClick = async (index) => {
    const questions = [
      "What is your name?",
      "What services do you offer?",
      "Get today's special data"
    ];

    const userQuestion = questions[index];
    setMessages(prev => [...prev, { type: 'user', text: userQuestion }]);

    if (index === 2) {
      const response = await fetchService();
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    } else {
      const reply = "This is a static response for question: " + userQuestion;
      setMessages(prev => [...prev, { type: 'bot', text: reply }]);
    }
  };

  const fetchService = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Here's today's special: 50% off on all items!");
      }, 1000);
    });
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div
        className="bg-gray-400 rounded-t-full rounded-br-full fixed right-5 bottom-10 w-[85px] h-[85px] flex items-center justify-center cursor-pointer"
        onClick={toggleChat}
      >
        <img
          src="src/Images/chatbot.png"
          alt="chatbot"
          className="w-[90%] h-[90%] p-2"
        />
      </div>

      {/* Chatbot UI */}
      {isChatOpen && (
        <div className="fixed right-5 bottom-[130px] w-[300px] h-[450px] bg-white shadow-lg rounded-lg flex flex-col">
          <div className="bg-blue-600 text-white p-2 flex justify-between items-center">
            <span>Chatbot</span>
            <button className="text-white" onClick={toggleChat}>✖</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-1 text-sm ${msg.type === 'user' ? 'text-right m1-1' : 'text-left mr-1 '} text-gray-600 `}
              >
                <span className={`${msg.type === 'user' ? ' bg-gray-400' : 'bg-purple-400'} p-2 rounded-lg inline-block`}>
                  {msg.text}
                </span>
              </div>
            ))}

            {/* Predefined Questions */}
            <div className="mt-3">
              <p className="font-semibold text-gray-600 mb-1">Quick Questions:</p>
              <ul className="space-y-1">
                <li className="text-blue-600 cursor-pointer" onClick={() => handleQuestionClick(0)}>1. What is your name?</li>
                <li className="text-blue-600 cursor-pointer" onClick={() => handleQuestionClick(1)}>2. What services do you offer?</li>
                <li className="text-blue-600 cursor-pointer" onClick={() => handleQuestionClick(2)}>3. Get today's special data</li>
              </ul>
            </div>
          </div>

          <div className="p-2 border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 p-2 border rounded-l-lg"
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-r-lg"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
