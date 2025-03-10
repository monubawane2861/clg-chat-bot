import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Contact.css";
import Footer from "../../common/footer/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-page">
        {/* Hero Section with enhanced background and overlay */}
        <div className="hero contact-hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1 className="animate-fade-in">Get in Touch</h1>
            <p className="hero-subtitle animate-fade-in-delayed">
              We're here to answer your questions and help you on your
              educational journey
            </p>
            <div className="contact-quick-links animate-fade-in-delayed">
              <a href="#message-form" className="btn-primary">
                Send a Message
              </a>
              <a href="#campus-map" className="btn-secondary">
                Find Us
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section with improved layout */}
        <div className="container content contact-content">
          <div className="section-intro">
            <h2 className="section-title">Connect With Horizon College</h2>
            <p className="section-description">
              Whether you have questions about admissions, programs, or campus
              life, our team is ready to assist you. Reach out through any of
              the channels below.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info with visual enhancements */}
            <div className="contact-info card">
              <div className="card-content">
                <h2 className="card-title">Campus Information</h2>

                <div className="info-section">
                  <div className="info-icon-wrapper">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div className="info-details">
                    <h3>Campus Address</h3>
                    <p>123 College Avenue</p>
                    <p>Horizon City, HC 12345</p>
                  </div>
                </div>

                <div className="info-section">
                  <div className="info-icon-wrapper">
                    <FaPhone className="info-icon" />
                  </div>
                  <div className="info-details">
                    <h3>Contact Numbers</h3>
                    <p>Main Office: (555) 123-4567</p>
                    <p>Admissions: (555) 123-4568</p>
                  </div>
                </div>

                <div className="info-section">
                  <div className="info-icon-wrapper">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div className="info-details">
                    <h3>Email</h3>
                    <p>info@horizoncollege.edu</p>
                  </div>
                </div>

                <div className="info-section">
                  <div className="info-icon-wrapper">
                    <FaClock className="info-icon" />
                  </div>
                  <div className="info-details">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div className="social-section">
                  <h3>Connect With Us</h3>
                  <div className="social-links">
                    <a href="#" className="social-icon-wrapper">
                      <FaFacebookF className="social-icon" />
                    </a>
                    <a href="#" className="social-icon-wrapper">
                      <FaTwitter className="social-icon" />
                    </a>
                    <a href="#" className="social-icon-wrapper">
                      <FaInstagram className="social-icon" />
                    </a>
                    <a href="#" className="social-icon-wrapper">
                      <FaLinkedinIn className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form with visual improvements */}
            <div id="message-form" className="contact-form card">
              <div className="card-content">
                <h2 className="card-title">Send Us a Message</h2>
                <p className="form-intro">
                  Fill out the form below and our team will get back to you as
                  soon as possible.
                </p>
                <form onSubmit={handleSubmit} className="styled-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <option value="">Select Department</option>
                        <option value="admissions">Admissions</option>
                        <option value="academics">Academics</option>
                        <option value="financial">Financial Aid</option>
                        <option value="housing">Housing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div id="campus-map" className="map-section">
          <div className="container">
            <h2 className="section-title text-center">Visit Our Campus</h2>
            <div className="map-container">
              {/* Placeholder for an actual map - you could integrate Google Maps here */}
              <div className="map-placeholder">
                <FaMapMarkerAlt className="map-marker" />
                <p>Interactive campus map loading...</p>
                <p className="map-address">
                  123 College Avenue, Horizon City, HC 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section" style={{ backgroundColor: "#5c6bc0" }}>
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Join Horizon College?</h2>
              <p>Take the next step in your educational journey with us.</p>
              <div className="cta-buttons">
                <Link to="/courses">
                  <button className="btn-primary">Apply Now</button>
                </Link>
                <Link to="/contact">
                  <button className="btn-secondary">Schedule a Tour</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
