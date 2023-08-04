import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Testimonials</p>
          <h1 className="primary-heading">From our users</h1>
          <p className="primary-text">
            Don't just take it from us. Discover the real success stories from our users
          </p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
          Simplified hiring process! This platform took away the stress of recruitment. 
          Their user-friendly interface and wide range of candidates made finding the right Product Managers a breeze. 
          A must-try for people who are job-hunting.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>John Doe</h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
