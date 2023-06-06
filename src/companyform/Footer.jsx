import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>About CorpoShare</h4>
          <p>
            CorpoShare is a platform that connects businesses with talented professionals for project-based collaboration.
          </p>
          <div className="social-icons">
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
            <a href="#" className="icon">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h4>Contact Us</h4>
          <p>
            Email: info@corposhare.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-policy">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Cookies Policy</a></li>
        </ul>
      </div>
      <div className="footer-copy">© 2023 CorpoShare. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
