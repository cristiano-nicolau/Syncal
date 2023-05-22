import React, { useState, useEffect } from 'react';
import '../css/Chatcss.css';

function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    [
      { sender: 'IHC', text: "Group have been created" },
      { sender: 'Joaquim', text: 'Como está a correr o projeto?' },
      { sender: 'You', text: 'Para já bem. Feito por hoje, amanhã há mais ' },
      { sender: 'Joaquim', text: 'Ok, ainda bem.' },
    ],
    [
      { sender: 'CD', text: "Group have been created" },
      { sender: 'Luís', text: 'Vamos chumbar assim' },
      { sender: 'You', text: 'Tá mais que visto', },
      { sender: 'Zé', text: 'Nada está perdido, ainda há esperança.' },
    ],
    [
      { sender: 'Futebolada', text: "Group have been created" },
      { sender: 'Rochinha', text: '17:30 no campo para jogar malta.' },
      { sender: 'You', text: 'Ok, lá estarei.' },
      { sender: 'Rochinha', text: 'Ok, até logo.' },
      { sender: 'Ronaldo', text: 'Vou chegar atrasado, não me esperem.' },
      { sender: 'Rafael Leão', text: 'Ok, sem problema.' },

    ],
    [
      { sender: 'Festa de Aniversário', text: "Group have been created" },
      { sender: 'Eduardo', text: 'Vai haver festa de aniversário no dia 15 de Junho.' },
      { sender: 'You', text: 'Só vou se houver bolo eheh' },
      { sender: 'Eduardo', text: 'Claro que vai haver bolo, não te preocupes.' },
      { sender: 'Eduardo', text: 'Vai ser no meu quintal, por isso não se preocupem com o espaço.' },
      { sender: 'Marta', text: 'Ok, lá estarei.' },
      { sender: 'Marta', text: 'Este João sempre o mesmo ahahah' },
    ],
  ]);
  const [selectedChat, setSelectedChat] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSelectedChat(0); // Set the first chat as selected when entering the page
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);

  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: 'You',
        text: message.trim(),
        photo: 'user.jpg',
      };
      const updatedMessages = [...messages];
      updatedMessages[selectedChat] = [...updatedMessages[selectedChat], newMessage];
      setMessages(updatedMessages);
      setMessage('');
    }
  };

  const handleChatSelect = (index) => {
    setSelectedChat(index);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMessages = messages[selectedChat].filter(
    (msg) =>
      msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="pagechat">
      <div className="chat-container">
        <div className="chat-selector">
          <input
            type="text"
            placeholder="Search chats..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            style={{ width: '70%', height: '3rem', marginBottom: '2.3rem' }}
          />
          <ul>
            {messages.map((chat, index) => (
              <li
                key={index}
                onClick={() => handleChatSelect(index)}
                className={selectedChat === index ? 'selected' : ''}
              >
                <span id="textlichat" >{chat[0].sender}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-content">
          {filteredMessages.length > 0 ? (
            <>
              <div className="chat-header">
                <h2 id="textheaderchat">{messages[selectedChat][0].sender}</h2>
              </div>
              <div className="chat-messages">
                {filteredMessages.map((msg, index) => (
                  <div className="message" key={index}>
                    <div className={`message-sender ${msg.sender === 'You' ? 'self' : ''}`} style={{ textAlign: 'right' }}>
                      {msg.sender}
                    </div>
                    <div className="message-text">{msg.text}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-chat-selected">No chat selected</div>
          )}
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={handleMessageChange}
            />
            <button onClick={handleSendMessage} id="buttonchat">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;