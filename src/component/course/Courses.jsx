import React, { useState } from "react";
import "./Courses.css";
import Footer from "../../common/footer/Footer";
import { Link } from "react-router-dom";

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showPopup, setShowPopup] = useState(false);

  const filters = [
    { id: "all", name: "All Programs" },
    { id: "undergraduate", name: "Undergraduate" },
    { id: "graduate", name: "Graduate" },
    { id: "online", name: "Online Learning" },
  ];

  const courses = [
    {
      id: 1,
      title: "Bachelor of Business Administration",
      category: "undergraduate",
      image: "https://ced.ncsu.edu/wp-content/uploads/2018/06/matprogram.jpg",
      duration: "4 Years",
      credits: 120,
      description:
        "Develop essential business skills and knowledge in management, marketing, finance, and entrepreneurship.",
      features: [
        "Internship opportunities",
        "Industry-led projects",
        "International exchange options",
        "Career counseling",
      ],
    },
    {
      id: 2,
      title: "Bachelor of Computer Science",
      category: "undergraduate",
      image:
        "https://www.findlay.edu/education/graduate-programs/PublishingImages/UI%20Refresh/Master-of-Arts-in-Education-international.jpg",
      duration: "4 Years",
      credits: 120,
      description:
        "Master programming, software development, algorithms, and cutting-edge technologies for the digital era.",
      features: [
        "Modern computing labs",
        "Industry partnerships",
        "Hackathons and coding competitions",
        "Research opportunities",
      ],
    },
    {
      id: 3,
      title: "Bachelor of Arts in Psychology",
      category: "undergraduate",
      image:
        "https://www.teacherph.com/wp-content/uploads/2020/10/5-Reasons-Why-Teachers-Should-Pursue-a-Masters-Degree-in-Education-scaled.jpg",
      duration: "4 Years",
      credits: 120,
      description:
        "Explore human behavior, mental processes, and gain foundational knowledge for careers in psychology.",
      features: [
        "Research opportunities",
        "Practical experience",
        "Modern laboratories",
        "Expert faculty",
      ],
    },
    {
      id: 4,
      title: "Master of Business Administration",
      category: "graduate",
      image:
        "https://www.muskingum.edu/sites/default/files/images/news/mu-grad-comm-03.jpg",
      duration: "2 Years",
      credits: 60,
      description:
        "Advance your business career with our comprehensive MBA program featuring specializations in various business domains.",
      features: [
        "Executive mentorship",
        "Business incubator access",
        "Global business projects",
        "Leadership workshops",
      ],
    },
    {
      id: 5,
      title: "Master of Science in Data Science",
      category: "graduate",
      image:
        "https://dcfwfuaf91uza.cloudfront.net/online/wp-content/uploads/educational-studies-masters-degree.jpg",
      duration: "2 Years",
      credits: 60,
      description:
        "Develop expertise in big data, machine learning, and statistical analysis for the data-driven economy.",
      features: [
        "Industry partnerships",
        "Cutting-edge technology",
        "Research opportunities",
        "Capstone projects",
      ],
    },
    {
      id: 6,
      title: "Online Certificate in Digital Marketing",
      category: "online",
      image:
        "https://teachereducation.steinhardt.nyu.edu/wp-content/uploads/sites/17/2021/09/Screen-Shot-2021-09-24-at-11.00.33-AM.png",
      duration: "6 Months",
      credits: 18,
      description:
        "Master digital marketing strategies, social media, SEO, and analytics through our flexible online program.",
      features: [
        "Self-paced learning",
        "Industry-recognized certification",
        "Real-world projects",
        "Expert instructors",
      ],
    },
    {
      id: 7,
      title: "Bachelor of Science in Engineering",
      category: "undergraduate",
      image:
        "https://www.teacher.org/wp-content/uploads/2015/01/Dollarphotoclub_61178210.jpg",
      duration: "4 Years",
      credits: 130,
      description:
        "Build a strong foundation in engineering principles with specializations in mechanical, electrical, or civil engineering.",
      features: [
        "State-of-the-art labs",
        "Industry projects",
        "Engineering competitions",
        "Internship placements",
      ],
    },
    {
      id: 8,
      title: "Master of Arts in Education",
      category: "graduate",
      image:
        "https://www.montclair.edu/responsive-media/cache/academics/wp-content/uploads/sites/9/2017/02/MAT-e1496171991110.jpg.5.1x.generic.jpg",
      duration: "2 Years",
      credits: 60,
      description:
        "Advance your career in education with specializations in curriculum development, educational leadership, or special education.",
      features: [
        "Teaching practicum",
        "Research opportunities",
        "Educational technology training",
        "Leadership development",
      ],
    },
    {
      id: 9,
      title: "Online Bachelor of Business",
      category: "online",
      image:
        "https://lpubatangas.edu.ph/wp-content/uploads/2021/07/DSC_1375-scaled.jpg",
      duration: "4 Years",
      credits: 120,
      description:
        "Earn your business degree with the flexibility of online learning, covering all essential business disciplines.",
      features: [
        "24/7 learning platform",
        "Virtual networking events",
        "Same accreditation as on-campus",
        "Dedicated online support",
      ],
    },
  ];

  const filteredCourses =
    activeFilter === "all"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  // Function to handle apply button click
  const handleApplyClick = () => {
    setShowPopup(true);

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <div className="courses-page">
        {/* Hero Section */}
        <section className="courses-hero">
          <div className="courses-hero-content">
            <h1>Academic Programs</h1>
            <p>
              Discover our diverse range of undergraduate, graduate, and online
              learning opportunities
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="container">
            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-button ${
                    activeFilter === filter.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="courses-grid-section">
          <div className="container">
            <div className="courses-grid">
              {filteredCourses.map((course) => (
                <div key={course.id} className="course-card">
                  <div
                    className="course-image"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  >
                    <div className="course-category">{course.category}</div>
                  </div>
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <div className="course-meta">
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        {course.duration}
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-graduation-cap"></i>{" "}
                        {course.credits} Credits
                      </div>
                    </div>
                    <p className="course-description">{course.description}</p>
                    <div className="course-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {course.features.map((feature, index) => (
                          <li key={index}>
                            <i className="fas fa-check"></i> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="button-container">
                      <button className="btn-apply" onClick={handleApplyClick}>
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admission Info */}
        <section
          className="admission-section"
          style={{ backgroundColor: "#4c5797b6" }}
        >
          <div className="container">
            <div className="admission-content">
              <h2>Ready to Apply?</h2>
              <p>
                Our admissions team is here to help you through every step of
                the application process. Learn about requirements, deadlines,
                and financial aid opportunities.
              </p>
              <Link to="/contact">
                <button className="btn-primary">Contact Admissions</button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Successfully Applied!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Courses;
