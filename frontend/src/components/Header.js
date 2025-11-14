import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🏥</span>
          <h1>HBMT</h1>
        </div>
        <p className="tagline">Hospital Bed & Medicine Availability Tracker</p>
      </div>
    </header>
  );
};

export default Header;

