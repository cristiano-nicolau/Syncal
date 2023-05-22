import React, { useState } from 'react';
import '../css/Chatcss.css';

function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'John', text: 'Hey, how are you?' },
    { sender: 'Jane', text: 'I\'m good, thanks! How about you?' },
    { sender: 'John', text: 'I\'m doing great too!' },
  ]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: 'You',
        text: message.trim(),
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div className="message" key={index}>
            <div className="message-sender">{msg.sender}</div>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatPage;