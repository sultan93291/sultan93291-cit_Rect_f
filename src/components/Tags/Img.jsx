import React from "react";

const Img = ({ Img, Alt, imgStyle }) => {
  return (
    <>
      <img src={Img} alt={Alt} className={imgStyle} />
    </>
  );
};

export default Img;
