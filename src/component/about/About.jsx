import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../../common/footer/Footer";

const About = () => {
  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Horizon College</h1>
            <p>Discover our legacy of academic excellence and innovation</p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2>Our Mission</h2>
                <p>
                  At Horizon College, our mission is to provide transformative
                  educational experiences that prepare students for success in a
                  rapidly changing world. We are committed to academic
                  excellence, innovative research, and community engagement.
                </p>
                <p>
                  We strive to cultivate critical thinking, creativity, and
                  ethical leadership in our students, empowering them to make
                  meaningful contributions to society and address the complex
                  challenges of the 21st century.
                </p>
              </div>
              <div className="about-image mission-image"></div>
            </div>
          </div>
        </section>

        <section className="about-section bg-light">
          <div className="container">
            <div className="about-grid reverse">
              <div className="about-image vision-image"></div>
              <div className="about-content">
                <h2>Our Vision</h2>
                <p>
                  Horizon College aspires to be a leading institution recognized
                  globally for academic excellence, innovative research, and
                  impactful community engagement.
                </p>
                <p>
                  We envision a learning community where diversity is
                  celebrated, intellectual curiosity is fostered, and students
                  develop the knowledge, skills, and values needed to thrive in
                  a complex global society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-section">
          <div className="container">
            <h2 className="centered-heading">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Academic Excellence</h3>
                <p>
                  We are committed to the highest standards of teaching,
                  learning, and scholarship.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3>Innovation</h3>
                <p>
                  We embrace creativity, critical thinking, and new approaches
                  to education and research.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Global Perspective</h3>
                <p>
                  We foster an international outlook and prepare students for
                  success in a diverse global society.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Community Engagement</h3>
                <p>
                  We are dedicated to serving our communities through education,
                  research, and outreach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="about-section bg-light">
          <div className="container">
            <h2 className="centered-heading">Our Leadership</h2>
            <div className="leadership-grid">
              <div className="leader-card">
                <div className="leader-image"></div>
                <h3>Dr. Jennifer Williams</h3>
                <p className="leader-title">President</p>
                <p>
                  Dr. Williams brings over 25 years of experience in higher
                  education leadership and a commitment to academic excellence
                  and innovation.
                </p>
              </div>

              <div className="leader-card">
                <div className="leader-image2"></div>
                <h3>Dr. Michael Thompson</h3>
                <p className="leader-title">Provost</p>
                <p>
                  With a background in educational policy and curriculum
                  development, Dr. Thompson oversees the academic programs at
                  Horizon College.
                </p>
              </div>

              <div className="leader-card">
                <div className="leader-image3"></div>
                <h3>Dr. Sarah Chen</h3>
                <p className="leader-title">Dean of Students</p>
                <p>
                  Dr. Chen is dedicated to enhancing the student experience and
                  fostering a supportive campus community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Link */}
        <section className="about-section">
          <div className="container">
            <div className="history-link-container">
              <h2>Our Rich History</h2>
              <p>
                Founded in 1975, Horizon College has grown from a small
                community college to a renowned institution with a global
                impact. Learn more about our journey and milestones.
              </p>
              <Link to="/history" className="btn btn-primary">
                Explore Our History
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
