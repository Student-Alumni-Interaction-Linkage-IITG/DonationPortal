import { useState,useEffect,useRef,useReducer } from 'react';
import React from 'react';
import img3 from "../assets/images/Rectangle 50.png";
import img4 from "../assets/images/Rectangle 51.png";
const colors = [img3, img4, img3];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        
        {colors.map((backgroundImage, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundImage}
           />
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx} className="slideshowDot"></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;