import React from "react";
import person from "../../assets/images/person.png";
import tick from "../../assets/images/tick.png";
import pen from "../../assets/images/pen.png";
import question from "../../assets/images/question.png";
import timer from "../../assets/images/timer.png";
import document from "../../assets/images/document.png";
import "./features.css";
import FeatureCard from "../Cards/FeatureCard";
const Features = () => {
  return (
    <>
      {/* -- ==== features started here ==== -- */}
      <section id="features">
        <div className="features__wrapper">
          <div className="features__headings">
            <h4>Features</h4>
            <h2 className="common__heading">
              Design that solves problems, one product at a time
            </h2>
          </div>
          <div className="features__cards">
            <FeatureCard
              imgSrc={person}
              Alt={"not found"}
              heading={"Uses Client First"}
              paraGraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi Pellentesque et velit aliquam sed mi."
              }
            />
            <FeatureCard
              imgSrc={tick}
              Alt={"not found"}
              heading={"Two Free Revision Round"}
              paraGraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi Pellentesque et velit aliquam sed mi."
              }
            />
            <FeatureCard
              imgSrc={pen}
              Alt={"not found"}
              heading={"Template Customization"}
              paraGraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi Pellentesque et velit aliquam sed mi."
              }
            />
            <FeatureCard
              imgSrc={question}
              Alt={"not found"}
              heading={"24/7 Support"}
              paraGraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi Pellentesque et velit aliquam sed mi."
              }
            />
            <FeatureCard
              imgSrc={timer}
              Alt={"not found"}
              heading={"Quick Delivery"}
              paraGraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi Pellentesque et velit aliquam sed mi."
              }
            />
            <FeatureCard
              imgSrc={document}
              Alt={"not found"}
              heading={"Hands-on approach"}
              paraGraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi Pellentesque et velit aliquam sed mi."
              }
            />
          </div>
        </div>
      </section>
      {/* -- ==== features ended here ====  -- */}
    </>
  );
};

export default Features;
