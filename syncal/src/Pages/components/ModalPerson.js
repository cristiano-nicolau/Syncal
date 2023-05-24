import React, { useState } from 'react';
import '../css/Chatcss.css';
import PropTypes from 'prop-types';

function MessageModal({ isOpen, onClose, sender, position, handleViewProfile, photo }) {
  if (!isOpen) {
    return null;
  }

  console.log('Sender:', sender);
  console.log('handleViewProfile:', handleViewProfile);


  return (
    <div className="message-modal" id="message-modal" >
      <div id="contentmodalperson" className="modal-content" style={{ top: position.top, left: position.left }}>
        <img id="imgperson" src={photo} alt="No photo Available" />
        <h3 id="personh3">{sender}</h3>
        <button type="button" id="viewprofileperson" onClick={handleViewProfile} >View Profile</button>
        <button id="closemodalperson" onClick={onClose}>Close</button>
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
  handleViewProfile: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
};

export default MessageModal;
