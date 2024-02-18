import React from "react";
import Img from "../Tags/Img";
const BlogCard = ({ Imgsrc, Alt, date, tittle, paragraph, link }) => {
  return (
    <>
      <div className="blog__single__cards">
        <Img Img={Imgsrc} Alt={Alt} />
        <h6 className="common__paragraph"> {date} </h6>
        <h4>{tittle}</h4>
        <p className="common__paragraph">{paragraph}</p>
        <h5> {link} </h5>
      </div>
    </>
  );
};

export default BlogCard;
