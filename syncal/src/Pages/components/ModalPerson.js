import React, { useState } from 'react';
import '../css/Chatcss.css';

function MessageModal({ isOpen, onClose, sender,position }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="message-modal" >
      <div  id ="contentmodalperson" className="modal-content" style={{ top: position.top, left: position.left }}>
        <img  id="imgperson" src={sender.photo} alt={sender.name} />
        <h3 id="personh3">{sender}</h3>
        <button  id="viewprofileperson" onClick={(sender.profile)}>View Profile</button>
        <button id="closemodalperson"onClick={onClose}>Close</button>
      </div> 
    </div>
  );
}

export default MessageModal;
