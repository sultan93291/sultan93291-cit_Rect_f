import React from "react";
import "./work.css";
import work1 from "../../assets/images/work1.png";
import work2 from "../../assets/images/work2.png";
import work3 from "../../assets/images/work3.png";
import work4 from "../../assets/images/work4.png";
import WordCard from "../Cards/WordCard";
const Work = () => {
  return (
    <>
      {/* -- ==== work started here ====  -- */}
      <section id="work">
        <div className="work__wrapper">
          <div className="work__contents">
            <h2 className="common__heading">How we work</h2>
            <p className="common__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <span>Get in touch with us →</span>
          </div>
          <div className="work__cards">
            <WordCard
              imgSrc={work1}
              Alt={"not found"}
              heading={"Strategy"}
              paragraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              }
            />
            <WordCard
              imgSrc={work2}
              Alt={"not found"}
              heading={"Wireframing"}
              paragraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              }
            />
            <WordCard
              imgSrc={work3}
              Alt={"not found"}
              heading={"Strategy"}
              paragraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              }
            />
            <WordCard
              imgSrc={work4}
              Alt={"not found"}
              heading={"Devolpment"}
              paragraph={
                "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."
              }
            />
          </div>
        </div>
      </section>
      {/* -- ==== work ended here ==== -- */}
    </>
  );
};

export default Work;
