import React from "react";
import BannerImage from "../Assets/1.svg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import About from './About';
import Work from './Work';
import Testimonials from './Testimonial';
import Contact from './Contact';

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-container">
        <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/testimonial" component={Testimonials} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Find Your Dream Team Today!
            </h1>
            <p className="primary-text">
            Discover your dream job with us, where companies in India and beyond are searching for top-notch talent like you.
            </p>
            <button className="secondary-button">
            Find Jobs <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
