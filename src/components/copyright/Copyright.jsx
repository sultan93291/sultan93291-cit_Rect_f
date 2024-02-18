import React from "react";
import "./copyright.css";
import Img from "../Tags/Img";
const Copyright = () => {
  return (
    <>
      {/* ==== copyright strarted here ====  */}
      <section id="copyright">
        <p>Copyright 2022, Finsweet.com</p>
        <ul className="copyright__menu">
          <li>
            {" "}
            <a href="#" className="copyright__item">
              {" "}
              home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="copyright__item">
              {" "}
              about us
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="copyright__item">
              {" "}
              features
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="copyright__item">
              pricing
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="copyright__item">
              FAQ
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#" className="copyright__item">
              blog
            </a>{" "}
          </li>
        </ul>
      </section>
      {/* ==== copyright ended here ====  */}
    </>
  );
};

export default Copyright;
