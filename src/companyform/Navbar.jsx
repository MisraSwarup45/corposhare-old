import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import corposharelogo from '../img/corposharelogo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className='logostyles' src={corposharelogo}></img>
        </Link>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-item" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/admin-dashboard" className="navbar-item" onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link to="/login" className="navbar-item" onClick={toggleMenu}>
            Login
          </Link>
          <Link to="/contact" className="navbar-item" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
