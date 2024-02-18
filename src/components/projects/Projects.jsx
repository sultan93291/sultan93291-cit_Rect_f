import React from 'react'
import "./projects.css"
import card from "../../assets/images/Card.jpg";
import Card2 from "../../assets/images/card2.jpg";
const Projects = () => {
  return (
    <>
      {/* -- ==== projects started here ==== -- */}
  <section id="projects">
    <div className="projects__wrapper">
      <div className="project__headings">
        <h2 className="common__heading">View our projects</h2>
        <h4> View More →</h4>
      </div>
      <div className="projects__cards">
        <div className="projects__single__card">
          <img src={card} alt=""/>
          <div className="project__card__content">
            <h2 className="card__heading">Workhub office Webflow Webflow Design</h2>
            <p className="common__paragraph">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
            </p>
            <span>View project →</span>
          </div>
        </div>
        <div className="projects__single__card">
          <img src={Card2} alt=""/>
          <div className="project__card__content">
            <h2 className="card__heading">Unisaas Website
              Design</h2>
            <span>View portfolio →</span>
          </div>
        </div>
        <div className="projects__single__card">
          <img src={card} alt=""/>
        </div>
      </div>
    </div>
  </section>
  {/* -- ==== projects ended here ====  -- */}
    </>
  )
}

export default Projects