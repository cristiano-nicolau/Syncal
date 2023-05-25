
import react, { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function NotificationBell() {
    const [showNotifications, setShowNotifications] = useState(false);
    const notifications = [
        "Cristiano Ronaldo accepted your friend request.",
        "Marta accepted your friend request.",
        "Your account has been created successfully",
    ];

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
    };

    const popover = (
        <Popover id="notification-popover">
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
            show={showNotifications}
            onToggle={toggleNotifications}
            overlay={popover}
        >
            <div className="notification-bell">
                <img
                    src={require("../images/bell-icon.png")}
                    alt="Notification Bell"
                    width="20"
                    height="20"
                />
                {notifications.length > 0 && (
                    <span className="notification-badge">{notifications.length}</span>
                )}
            </div>
        </OverlayTrigger>
    );
}

export default NotificationBell;