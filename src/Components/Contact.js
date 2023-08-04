import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact-page-wrapper">
      <p className="primary-subheading">Contact</p>
        <h1 className="primary-heading">Have Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="text" placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
