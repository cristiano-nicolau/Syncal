import React, { useState } from 'react';
import './css/Profile.css';
import Navegationbar from './components/navbar';

const ProfilePage = () => {
  // Replace with your logic to fetch user data
  const user = {
    name: 'João',
    lastname: 'Dias',
    email: 'joao.dias@example.com',
    country: 'Portugal',
    city: 'Lisbon',

    // Add more user details as needed
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <>
      <Navegationbar />
      <div id="profile-div">

        <div className={`profile-container ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} id="leftprofile">

          <img src={require("./images/ryan.jpg")} alt="profile" className="profile-img" />
          <h2 id="jdname">João Dias</h2>
          {isHovered && (
            <img id="configbutp" src={require("./images/settings-icon-13.png")} ></img>
          )}
        </div>

        <div className={`profile-container ${isHovered2 ? 'hovered2' : ''}`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)} id="rightprofile">
          {isHovered2 && (
            <img id="configbutp" src={require("./images/settings-icon-13.png")} ></img>
          )}
          <h2 id="profileh2">Profile Page</h2>

          <div className="profile-details">
            <div className="profile-details-item">
              <h3 className="profile-details-item-title">First Name:</h3>
              <p className="profile-details-item-value">{user.name}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> Last Name:</h3>
              <p className="profile-details-item-value">{user.lastname}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> Email:</h3>
              <p className="profile-details-item-value">{user.email}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> Country:</h3>
              <p className="profile-details-item-value">{user.country}</p>
            </div>
            <div className="profile-details-item">
              <h3 className="profile-details-item-title"> City:</h3>
              <p className="profile-details-item-value">{user.city}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
