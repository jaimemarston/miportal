// src/components/TopBar.js
import React from 'react';
import './TopBar.css';

const TopBar = ({ username }) => {
  return (
    <div className="topbar">
      <div className="topbar-content">
        <span className="username">Welcome, {username}!</span>
      </div>
    </div>
  );
};

export default TopBar;
