import React from 'react'
import "./info.css"
import remove from "../../assets/images/remove.png";
import add from "../../assets/images/add.png";
import Img from '../Tags/Img';
const Info = () => {
  return (
    <>
      {/* ==== info started here ====   */}
      <section id="info">
        <div className="info__wrapper">
          <div className="info__hedings">
            <h2 className="common__heading">Frequently asked questions</h2>
            <span className="info__sub_heading">Contact us for more info</span>
          </div>
          <div className="info__faq">
            <div className="faq__items">
              <p className="faq__numbers">01</p>
              <div className="faq__contents">
                <h3 className="faq__heading">How much time does it take?</h3>
                <p className="faq__paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <Img Img={remove} Alt={"not found"} />
            </div>
            <div className="faq__items">
              <p className="faq__numbers">02</p>
              <div className="faq__contents">
                <h3 className="faq__heading">
                  What is your className naming convention?
                </h3>
              </div>
              <Img Img={add} Alt={"not found"} />
            </div>
            <div className="faq__items">
              <p className="faq__numbers">03</p>
              <div className="faq__contents">
                <h3 className="faq__heading">How do you communicate?</h3>
              </div>
              <Img Img={add} Alt={"not found"} />
            </div>
            <div className="faq__items">
              <p className="faq__numbers">04</p>
              <div className="faq__contents">
                <h3 className="faq__heading">
                  I have a bigger project. Can you handle it?
                </h3>
              </div>
              <Img Img={add} Alt={"not found"} />
            </div>
            <div className="faq__items">
              <p className="faq__numbers">05</p>
              <div className="faq__contents">
                <h3 className="faq__heading">
                  What is your className naming convention?
                </h3>
              </div>
              <Img Img={add} Alt={"not found"} />
            </div>
          </div>
        </div>
      </section>
      {/* ==== info ended here ====  */}
    </>
  );
}

export default Info