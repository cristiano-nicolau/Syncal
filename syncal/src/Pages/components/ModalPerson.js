import React, { useState } from 'react';
import '../css/Chatcss.css';
import PropTypes from 'prop-types';

function MessageModal({ isOpen, onClose, sender,position,handleViewProfile }) {
  if (!isOpen) {
    return null;
  }


  return (
    <div className="message-modal" id="message-modal" >
      <div  id ="contentmodalperson" className="modal-content" style={{ top: position.top, left: position.left }}>
        <h3 id="personh3">{sender}</h3>
        <button  type="button" id="viewprofileperson" onClick={handleViewProfile} >View Profile</button>
        <button id="closemodalperson"onClick={onClose}>Close</button>
      </div> 
    </div>
  );
}

MessageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  sender: PropTypes.shape({
    photo: PropTypes.string.isRequired,
  }).isRequired,
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }).isRequired,
};

export default MessageModal;
