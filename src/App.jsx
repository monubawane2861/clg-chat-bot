import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Courses from "./component/course/Courses";
import Contact from "./component/contact/Contact";
import Chatbox from "./component/chatbox/Chatbox";
import History from "./component/about/History";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Chatbox />
      </div>
    </Router>
  );
}

export default App;
