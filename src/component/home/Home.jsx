import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../common/footer/Footer";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUniversity,
  FaGlobe,
} from "react-icons/fa";
import { FaClock, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FaUserGraduate, FaBookOpen, FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-logo"></div>
            <h1>Welcome to Horizon College</h1>
            <p className="hero-subtitle">
              Shaping futures through quality education
            </p>
            <div className="hero-buttons">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="features">
          <div className="features-container">
            <h2 className="section-title">Why Choose Horizon College?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FaGraduationCap
                    className="icon"
                    style={{ color: "#5c6bc0" }}
                  />
                </div>
                <h3>Excellence in Education</h3>
                <p>
                  Our programs are designed to provide you with the knowledge
                  and skills needed to excel in your career.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaChalkboardTeacher
                    className="icon"
                    style={{ color: "#5c6bc0" }}
                  />
                </div>
                <h3>Experienced Faculty</h3>
                <p>
                  Learn from industry experts and experienced professors who are
                  dedicated to your success.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaUniversity className="icon" style={{ color: "#5c6bc0" }} />
                </div>
                <h3>State-of-the-Art Facilities</h3>
                <p>
                  Access modern laboratories, libraries, and research centers
                  equipped with the latest technology.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <FaGlobe className="icon" style={{ color: "#5c6bc0" }} />
                </div>
                <h3>Global Opportunities</h3>
                <p>
                  Benefit from our international partnerships and exchange
                  programs with leading institutions worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Programs Highlight */}
        <section className="programs">
          <div className="programs-container">
            <h2 className="section-title">Featured Programs</h2>
            <div className="programs-grid">
              <div className="program-card">
                <div className="program-image business-img">
                  <div className="program-overlay"></div>
                </div>
                <div className="program-content">
                  <h3>Business Administration</h3>
                  <p>
                    Develop essential skills for a successful career in business
                    management, marketing, and entrepreneurship.
                  </p>
                  <Link to="/courses" className="program-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="program-card">
                <div className="program-image cs-img">
                  <div className="program-overlay"></div>
                </div>
                <div className="program-content">
                  <h3>Computer Science</h3>
                  <p>
                    Master programming, software development, and cutting-edge
                    technologies in our comprehensive program.
                  </p>
                  <Link to="/courses" className="program-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div className="program-card">
                <div className="program-image liberal-arts-img">
                  <div className="program-overlay"></div>
                </div>
                <div className="program-content">
                  <h3>Liberal Arts</h3>
                  <p>
                    Explore diverse disciplines that cultivate critical
                    thinking, creativity, and communication skills.
                  </p>
                  <Link to="/courses" className="program-link">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">
                <FaUserGraduate className="icon" style={{ color: "white" }} />
              </div>
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Students</span>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaChalkboardTeacher
                  className="icon"
                  style={{ color: "white" }}
                />
              </div>
              <span className="stat-number">200+</span>
              <span className="stat-label">Faculty Members</span>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaBookOpen className="icon" style={{ color: "white" }} />
              </div>
              <span className="stat-number">50+</span>
              <span className="stat-label">Programs</span>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <FaBriefcase className="icon" style={{ color: "white" }} />
              </div>
              <span className="stat-number">95%</span>
              <span className="stat-label">Graduate Employment Rate</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="testimonials-container">
            <h2 className="section-title">What Our Students Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-quote"></div>
                <div className="testimonial-content">
                  <p>
                    My experience at Horizon College has been transformative.
                    The faculty's dedication and the quality of education have
                    prepared me well for my career.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1687485793912-023b5f006366?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Sarah Johnson"
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4>Sarah Johnson</h4>
                    <p>Computer Science, Class of 2023</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-quote"></div>
                <div className="testimonial-content">
                  <p>
                    The opportunities for research and practical experience at
                    Horizon College are unmatched. I've developed skills that
                    employers are actively seeking.
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Michael Chen"
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4>Michael Chen</h4>
                    <p>Business Administration, Class of 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section (New) */}
        <section className="events-section">
          <div className="events-container">
            <h2 className="section-title">Upcoming Events</h2>
            <div className="events-grid">
              <div className="event-card">
                <div className="event-date">
                  <span className="event-month">MAR</span>
                  <span className="event-day">15</span>
                </div>
                <div className="event-details">
                  <h3>Open House</h3>
                  <p className="event-time">
                    <FaClock className="event-icon" /> 10:00 AM - 3:00 PM
                  </p>
                  <p className="event-location">
                    <FaMapMarkerAlt className="event-icon" /> Main Campus
                  </p>
                  <Link to="/events" className="btn btn-small">
                    Register
                  </Link>
                </div>
              </div>

              <div className="event-card">
                <div className="event-date">
                  <span className="event-month">APR</span>
                  <span className="event-day">10</span>
                </div>
                <div className="event-details">
                  <h3>Career Fair</h3>
                  <p className="event-time">
                    <FaClock className="event-icon" /> 9:00 AM - 4:00 PM
                  </p>
                  <p className="event-location">
                    <FaMapMarkerAlt className="event-icon" /> Student Center
                  </p>
                  <Link to="/events" className="btn btn-small">
                    Register
                  </Link>
                </div>
              </div>

              <div className="event-card">
                <div className="event-date">
                  <span className="event-month">APR</span>
                  <span className="event-day">22</span>
                </div>
                <div className="event-details">
                  <h3>Guest Lecture Series</h3>
                  <p className="event-time">
                    <FaClock className="event-icon" /> 6:00 PM - 8:00 PM
                  </p>
                  <p className="event-location">
                    <FaMapMarkerAlt className="event-icon" /> Auditorium
                  </p>
                  <Link to="/events" className="btn btn-small">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Join our community of learners and innovators today.</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn btn-primary btn-large">
                Apply Now
              </Link>
              <Link to="/courses" className="btn btn-outline btn-large">
                Take a Virtual Tour
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
