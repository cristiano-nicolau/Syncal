
import React, { useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseInsidePopover, setIsMouseInsidePopover] = useState(false);
  const [notifications, setNotifications] = useState([
    "Cristiano Ronaldo accepted your friend request.",
    "Marta accepted your friend request.",
    "Your account has been created successfully",
  ]);

  const handleMouseEnter = () => {
    setIsOpen(true);
    setIsMouseInsidePopover(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInsidePopover(false);
    if (!isMouseInsidePopover) {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (event.target.closest('.notification-bell')) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const handleNotificationClick = () => {
    setIsOpen(false);
  };

  const popover = (
    <Popover
      id="notification-popover"
      onMouseEnter={() => setIsMouseInsidePopover(true)}
      onMouseLeave={() => setIsMouseInsidePopover(false)}
    >
      <Popover.Body>
        {notifications.map((notification, index) => (
          <div className="notification-list-item" key={index}>
            {notification}
          </div>
        ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      show={isOpen}
      onToggle={toggleNotifications}
      overlay={popover}
    >
      <div
        className="notification-bell"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={require("../images/bell-icon.png")}
          alt="Notification Bell"
          width="25"
          height="25"
        />
        {notifications.length > 0 && (
          <span className="notification-badge">{notifications.length}</span>
        )}
      </div>
    </OverlayTrigger>
  );
}

export default NotificationBell;
