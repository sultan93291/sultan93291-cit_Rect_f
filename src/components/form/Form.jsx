import React from "react";
import woman from "../../assets/images/woman.jpg";
import "./form.css";
import Img from "../Tags/Img";
const Form = () => {
  return (
    <>
      {/* ==== form started here ====   */}
      <section id="form">
        <div className="form__wrapper">
          <div className="form__banner">
            <Img Img={woman} Alt={"not found"} />
            <div className="form__banner__content">
              <h2 className="banner__form__heading">
                Building stellar websites for early startups
              </h2>
              <p className="common__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>
          <div className="form__contents">
            <h3 className="form__heading">Send inquiry</h3>
            <p className="common__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <form className="form__form" action="">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="email" />
              <input type="text" placeholder="paste your figma design" />
              <button className="common__btn">Send an Inquiry</button>
              <span>Get in touch with us →</span>
            </form>
          </div>
        </div>
      </section>
      {/* ==== form ended here ====  */}
    </>
  );
};

export default Form;
