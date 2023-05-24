import React, { useState } from 'react';
import '../css/Chatcss.css';
import PropTypes from 'prop-types';

function MessageModal({ isOpen, onClose, sender,text,profile,position }) {
  if (!isOpen) {
    return null;
  }



  const handleViewProfile = () => {
    console.log('View profile clicked:', sender);
    if (sender.profile) {
      // Redirect to the profile URL
      window.location.href = profile;
    } else {
      console.log('No profile URL available for:', sender);
      console.log('No profile URL available for:', text);
    }
  };

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
