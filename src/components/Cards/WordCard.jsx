import React from 'react'
import Img from '../Tags/Img';
const WordCard = ({imgSrc, Alt , heading, paragraph}) => {
  return (
    <>
      <div className="work__cards_single">
        <div className="work__card_number">
          <Img Img={imgSrc} Alt={Alt} />
        </div>
        <h2 className="work__heading"> {heading} </h2>
        <p className="common__paragraph">
          {paragraph}
        </p>
      </div>
    </>
  );
}

export default WordCard