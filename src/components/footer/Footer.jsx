import React from 'react'
import "./footer.css"
import logo from "../../assets/images/logo.png";
import Img from '../Tags/Img';
const Footer = () => {
  return (
    <>
      {/* ==== footer started here ====    */}
      <footer id="footer">
        <div className="footer__wrapper">
          <div className="footer__contents">
            <div className="footer__headings">
              <Img Img={logo} Alt={"not found"} />
              <p className="common__paragraph">
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
            <div className="footer__icons">
              <h2 className="common__heading">Lets Talk!</h2>
              <p className="common__paragraph">
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="icons__group">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="footer__box">
            <div>
              <h4>Email me at</h4>
              <p>contact@website.com</p>
            </div>
            <div>
              <h4> Call us </h4>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>
      </footer>
      {/* ==== footer ended here ====  */}
    </>
  );
}

export default Footer