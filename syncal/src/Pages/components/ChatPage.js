import React, { useState, useEffect } from 'react';
import '../css/Chatcss.css';
import MessageModal from './ModalPerson';

function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    [
      { sender: 'IHC', text: "Group have been created" },
      { sender: 'Joaquim', text: 'Como está a correr o projeto?', photo: '../images/img33.jpg' },
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

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents adding a new line in the input field
      handleSendMessage();
    }
  }

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSender, setSelectedSender] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleSenderHover = (sender, event) => {
    setSelectedSender(sender);
    setIsModalOpen(true);

    const rect = event.currentTarget.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;

    const top = rect.top + scrollTop -200;
    const left = rect.left + scrollLeft +200;

    setModalPosition({ top, left });
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSender(null);
  };




  return (
    <>

      <div id="pagechat">
        <a href="/home">
          <button type="button" class="btn btn-outline-secondary backbut">Go back {'<'}-</button>
        </a>
        <div className="chat-container">
          <div className="chat-selector">
            <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              style={{ width: '70%', height: '3rem', marginBottom: '3rem' }}
            /><p id="headerdots2">...</p>
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
          <div className="chat-content" onClick={handleCloseModal}>
            {filteredMessages.length > 0 ? (
              <>
                <div className="chat-header">
                  <h2 id="textheaderchat">{messages[selectedChat][0].sender}</h2>
                  <p id="headerdots">...</p>
                </div>
                <div className="chat-messages">
                  {filteredMessages.map((msg, index) => (
                    <div className="message" key={index}>
                      <div className={`message-sender ${msg.sender === 'You' ? 'self' : ''}`} style={{ textAlign: 'right' }}
                        onMouseEnter={(e) => handleSenderHover(msg.sender, e)}
                        onClick={(e) => handleSenderHover(msg.sender, e)}>
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
                onKeyDown={handleKeyDown}
                id="inputchat"
              />
              <a href="/calendar_groups">
                <button href='/calendar_groups' id="buttonchat">Calendar</button>
              </a>
              <button onClick={handleSendMessage} id="buttonchat2">Send</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
          <MessageModal isOpen={isModalOpen} onClose={handleCloseModal} sender={selectedSender} position={modalPosition} />
        )}
    </>

  );
}

export default ChatPage;