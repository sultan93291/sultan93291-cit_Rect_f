import React from "react";
import "./clients.css";
import client from "../../assets/images/client.png";
import Img from "../Tags/Img";
const Clients = () => {
  return (
    <>
      {/* ==== clients started here ====   */}
      <section id="clients">
        <div className="clients__wrapper">
          <div className="client__heading">
            <h2 className="client__main_heading">
              What our clients say about us
            </h2>
            <p className="common__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
            </p>
          </div>
          <div className="client__contents">
            <h3>
              {
                "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
              }
            </h3>
            <div className="client__info">
              <Img imgStyle="client__img" Img={client} Alt={"not found"} />
              <div className="client__soft_info">
                <h5>Jenny Wilson</h5>
                <span>Vice President</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==== clients ended here ====  */}
    </>
  );
};

export default Clients;
