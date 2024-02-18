import React from 'react'
import Img from '../Tags/Img';
const FeatureCard = ({imgSrc,Alt,heading, paraGraph}) => {
  return (
    <>
      <div className="feature__single__card">
        <Img Img={imgSrc} Alt={Alt} />
        <h2 className="feature__card__heading"> {heading} </h2>
        <p className="common__paragraph">
          {paraGraph}
        </p>
      </div>
    </>
  );
}

export default FeatureCard