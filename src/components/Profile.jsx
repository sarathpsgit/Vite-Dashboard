import React from 'react';
import profilePic from '../assets/images/Profile.png'; // Adjust the path as necessary


const Profile = () => {
  return (
    <div className="profile-container">
      <img src={profilePic} alt="Profile" className="profile-picture" />
      <span className="notification-badge">4</span>
    </div>
  );
};

export default Profile;
