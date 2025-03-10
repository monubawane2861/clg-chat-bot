import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: "#12141e" }}>
      <div className="footer-container">
        <div className="footer-section">
          <h2>Horizon College</h2>
          <p>
            Empowering minds, shaping futures. Join us on a journey of academic
            excellence and personal growth.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              className="social-icon"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-icon"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Programs</h3>
          <ul className="footer-links">
            <li>
              <Link to="/courses">Undergraduate</Link>
            </li>
            <li>
              <Link to="/courses">Graduate</Link>
            </li>
            <li>
              <Link to="/courses">Online Learning</Link>
            </li>
            <li>
              <Link to="/courses">Professional Development</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <address>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Education Ave,
              Knowledge City
            </p>
            <p>
              <i className="fas fa-phone"></i> (123) 456-7890
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@horizoncollege.edu
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Horizon College. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
