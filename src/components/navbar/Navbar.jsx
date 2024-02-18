import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import Img from "../Tags/Img";
export const Navbar = () => {
  return (
    <>
      {/* // -- ==== navbar started here ==== -- */}
      <nav id="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <Img Img={logo} Alt={"not found"} />
          </div>
          <ul className="navbar__menu">
            <li>
              {" "}
              <a href="#" className="navbar__menu__item">
                {" "}
                home
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="navbar__menu__item">
                {" "}
                about us
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="navbar__menu__item">
                {" "}
                features
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="navbar__menu__item">
                pricing
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="navbar__menu__item">
                FAQ
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#" className="navbar__menu__item">
                blog
              </a>{" "}
            </li>
          </ul>
          <div className="navbar__btn">
            <button className="common__btn">Contact us</button>
          </div>
        </div>
      </nav>
      {/* -- ==== navbar ended here ==== -- */}
    </>
  );
};
