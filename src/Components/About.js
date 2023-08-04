import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div id="about" className="about">
    <div className="about-section-container">
      <div className="about-background-image-container">
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Empowering Dreams, Building Teams
        </h1>
        <p className="primary-text">
        We empower the dreams of job seekers and businesses alike, fostering a symbiotic relationship that drives collective success.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Hire Talents <FiArrowRight />{" "}</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
