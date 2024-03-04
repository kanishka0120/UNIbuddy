import React, { useState } from 'react';
import './home.css';
const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="side-menu" id="side-menu" style={{ transform: showMenu ? 'translateX(0vh)' : 'translateX(-100%)', position: showMenu ? 'fixed' : 'absolute' }}>
      <div className="close" onClick={toggleMenu}>
        <img src="images/icon/close.png" alt="" />
      </div>
      <ul>
        <li><a href="#about_section">About</a></li>
        <li><a href="#portfolio_section">Portfolio</a></li>
        <li><a href="#team_section">Team</a></li>
        <li><a href="#services_section">Services</a></li>
        <li><a href="#contactus_section">Contact</a></li>
        <li><a href="#feedBACK">Feedback</a></li>
      </ul>
    </div>
  );
};

export default SideMenu;