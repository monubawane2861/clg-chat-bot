import React, { useState, useRef, useEffect } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { MessageSquareText } from "lucide-react";
import "./Chatbox.css";

const Chatbox = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your friendly assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Secure way to use API keys (use environment variables)
  const API_KEY = "AIzaSyBfehF_t4NQE9GXqt_gYJ2PZ7uxNtubazA";

  // Predefined responses for specific questions
  const predefinedResponses = {
    hi: "Hi there! How are you doing today?",
    hello: "Hello! Nice to meet you.",
    hey: "Hey! How can I help you?",
    "how are you": "I'm fine, thank you for asking! How are you?",
    "how are you doing": "I'm doing well, thanks for asking!",
    "what's up": "Not much, just here to help you out!",
  };

  // Simulate response delay
  const simulateDelay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const fetchGeminiResponse = async (userMessage) => {
    // Check for predefined responses first
    const lowercaseMessage = userMessage.toLowerCase().trim();
    for (const [trigger, response] of Object.entries(predefinedResponses)) {
      if (lowercaseMessage.includes(trigger)) {
        // Simulate delay for predefined responses
        await simulateDelay(2000);
        return response;
      }
    }

    if (!API_KEY) {
      console.error(
        "API key is missing. Ensure it's set in your environment variables."
      );
      return "API key is not configured. Please contact the administrator.";
    }

    try {
      // Simulate initial delay before API call
      await simulateDelay(2000);

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userMessage }] }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Gemini API Response:", data);

      const botResponse =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I'm not sure how to respond to that.";
      return botResponse;
    } catch (error) {
      console.error("Error fetching Gemini API:", error);
      return `Oops! Something went wrong: ${error.message}. Please try again.`;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = inputValue;
    setMessages([...messages, { text: userMessage, isUser: true }]);
    setInputValue("");
    setIsTyping(true);

    try {
      const botResponse = await fetchGeminiResponse(userMessage);
      setIsTyping(false);
      setMessages((prev) => [...prev, { text: botResponse, isUser: false }]);
    } catch (error) {
      setIsTyping(false);
      console.error("Error in handleSendMessage:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Failed to get response.", isUser: false },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chatbot-container">
      {/* Floating chat button */}
      <button className="floating-chat-button" onClick={toggleChat}>
        {/* <LuMessageCircle className="chat-icon" /> */}

        <MessageSquareText className="chat-icon " />
      </button>

      {/* Chat Window - slides in from right */}
      {isChatOpen && (
        <div className="chat-window chat-slide-in">
          <div className="chat-header">
            <div className="header-title">
              <span className="status-indicator"></span>
              <span className="header-text">Smart Assistant</span>
            </div>
            <button className="close-button" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="messages-container">
            {/* Chat Bubble Decorations */}
            <div className="chat-decoration bubble-decoration-1 floating-element"></div>
            <div className="chat-decoration bubble-decoration-2 floating-element"></div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={`message message-animation ${
                  message.isUser ? "user-message" : "bot-message"
                }`}
              >
                {message.text}
              </div>
            ))}

            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot dot-1"></div>
                <div className="typing-dot dot-2"></div>
                <div className="typing-dot dot-3"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              className="chat-input"
            />
            <button onClick={handleSendMessage} className="send-button">
              <LuSendHorizontal className="send-icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
