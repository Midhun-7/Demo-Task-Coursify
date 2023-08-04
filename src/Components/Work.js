import React from "react";
import GlobalReach from "../Assets/5.svg";
import ExpertMatching from "../Assets/6.svg";
import IndustryFocused from "../Assets/7.svg";

const Work = () => {
  const workInfoData = [
    {
      image: GlobalReach,
      title: "Global Reach",
      text: "Access to exceptional talent worldwide",
    },
    {
      image: ExpertMatching,
      title: "Expert Matching",
      text: "We match you with the right candidates",
    },
    {
      image: IndustryFocused,
      title: "Industry Focused",
      text: "Specialized in tech and IT positions",
    },
  ];
  return (
    <div id="work" className="work">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Work</p>
          <h1 className="primary-heading">What we provide</h1>
          <p className="primary-text">
          Unlock your growth potential with our unparalleled talent acquisition services
          </p>
        </div>
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-info" key={data.title}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
