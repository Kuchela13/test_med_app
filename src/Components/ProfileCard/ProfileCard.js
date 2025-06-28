
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ user }) => {
  if (!user) {
    return <div className="profile-card">No user data available</div>;
  }

  return (
    <div className="profile-card">
      <img 
        src={user.avatarUrl || 'https://via.placeholder.com/150'} 
        alt={`${user.name}'s avatar`} 
        className="profile-avatar"
      />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-email">{user.email}</p>
      <p className="profile-phone">{user.phone}</p>
    </div>
  );
};

export default ProfileCard;