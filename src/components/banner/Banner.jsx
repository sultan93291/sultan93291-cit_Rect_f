import React from "react";
import "./banner.css";
import Devpng from "../../assets/images/dev.png";
import Img from "../Tags/Img";
const Banner = () => {
  return (
    <>
      {/* -- ==== banner started here ====  -- */}
      <section id="banner">
        <div className="banner__wrapper">
          <div className="banner__contents">
            <h1 className="main__heading">
              Building stellar websites for early startups
            </h1>
            <p className="common__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="banner__btn">
              <button className="common__btn">View our work</button>
              <button className="common__btn">View Pricing →</button>
            </div>
          </div>
          <div className="banner__img">
            <Img Img={Devpng} Alt={"not found"} />
          </div>
        </div>
      </section>
      {/* -- ==== banner ended here ==== -- */}
    </>
  );
};

export default Banner;
