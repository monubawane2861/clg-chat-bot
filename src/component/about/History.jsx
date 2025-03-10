import React from "react";
import { Link } from "react-router-dom";
import "./History.css";

const History = () => {
  return (
    <div className="history-page">
      {/* Hero Section */}
      <section className="history-hero">
        <div className="history-hero-content">
          <h1>Our History</h1>
          <p>Exploring the rich heritage and evolution of Horizon College</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content left">
                <div className="timeline-date">1975</div>
                <h3>Foundation</h3>
                <p>
                  Horizon College was founded by Dr. Robert Anderson as a small
                  community college with just three departments: Business,
                  Liberal Arts, and Sciences.
                </p>
                <div className="timeline-image founding-image"></div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content right">
                <div className="timeline-date">1985</div>
                <h3>Campus Expansion</h3>
                <p>
                  The college expanded its campus, adding new academic
                  buildings, a library, and student housing to accommodate
                  growing enrollment.
                </p>
                <div className="timeline-image expansion-image"></div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content left">
                <div className="timeline-date">1992</div>
                <h3>Accreditation & Growth</h3>
                <p>
                  Achieved regional accreditation and introduced graduate
                  programs in Business Administration and Education.
                </p>
                <div className="timeline-image accreditation-image"></div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content right">
                <div className="timeline-date">2000</div>
                <h3>Technology Revolution</h3>
                <p>
                  Launched the School of Computer Science and Information
                  Technology, with state-of-the-art laboratories and research
                  facilities.
                </p>
                <div className="timeline-image technology-image"></div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content left">
                <div className="timeline-date">2010</div>
                <h3>International Recognition</h3>
                <p>
                  Established international partnerships with universities in
                  Europe, Asia, and South America, launching student exchange
                  programs and collaborative research initiatives.
                </p>
                <div className="timeline-image international-image"></div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content right">
                <div className="timeline-date">2018</div>
                <h3>Innovation Center</h3>
                <p>
                  Opened the Center for Innovation and Entrepreneurship,
                  providing resources and mentorship for student startups and
                  research projects.
                </p>
                <div className="timeline-image innovation-image"></div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content left">
                <div className="timeline-date">Present</div>
                <h3>Looking to the Future</h3>
                <p>
                  Today, Horizon College continues to evolve, embracing new
                  technologies, pedagogical approaches, and global challenges
                  while remaining committed to its founding mission of academic
                  excellence and student success.
                </p>
                <div className="timeline-image future-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy-section">
        <div className="container">
          <div className="legacy-content">
            <h2>Our Enduring Legacy</h2>
            <p>
              For nearly five decades, Horizon College has shaped the lives of
              thousands of students, fostering a community of lifelong learners
              and impactful leaders. Our alumni have gone on to make significant
              contributions in various fields, from business and technology to
              education and public service.
            </p>
            <p>
              As we honor our past, we remain focused on the future, committed
              to providing transformative educational experiences that prepare
              students to meet the challenges of an ever-changing world.
            </p>
            <div className="cta-button-container">
              <Link to="/about" className="btn btn-secondary">
                Back to About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
