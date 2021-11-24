import React, { useState, useEffect } from "react";
import { sliderImages } from "../data/slider-images.js";

const Slider = ({
  width,
  height,
  loop = true,
  autoPlay = true,
  autoPlayInterval = 6000,
  showArrowControls = false,
  showDotControls = true,
  bgColor = "none",
}) => {
  let [active, setActive] = useState(0);

  const setPreviousImage = () => {
    if (active !== 0) {
      setActive((active -= 1));
    } else {
      if (loop) {
        setActive((active = sliderImages.length - 1));
      }
    }
  };

  const setNextImage = () => {
    if (active !== sliderImages.length - 1) {
      setActive((active += 1));
    } else {
      if (loop) {
        setActive((active = 0));
      }
    }
  };

  const leftClickHandle = () => {
    setPreviousImage();
  };

  const rightClickHandle = () => {
    setNextImage();
  };

  const dotClickHandler = (e) => {
    const dotNum = e.target.getAttribute("data-key");
    setActive((active = parseInt(dotNum)));
  };

  useEffect(() => {
    if (autoPlay) {
      let autoSlider = setInterval(setNextImage, autoPlayInterval);
      return () => clearInterval(autoSlider);
    }
  }, [active]);

  return (
    <div>
      <div className="wrapper" style={{ backgroundColor: bgColor }}>
        {((showArrowControls && !loop && active !== 0) || loop) && (
          <div className="leftClick" onClick={leftClickHandle}>
            <img className="button" src="../icons/back.svg" alt="back" />
          </div>
        )}
        <img
          src={sliderImages[active].url}
          style={{
            width: "100%",
            height: height,
            objectFit: "cover",
          }}
          alt="image"
        />
        {((showArrowControls && !loop && active !== sliderImages.length - 1) ||
          loop) && (
          <div className="rightClick" onClick={rightClickHandle}>
            <img className="button" src="../icons/next.svg" alt="next" />
          </div>
        )}
      </div>
      {showDotControls && (
        <div className="dots">
          {sliderImages.map((el, index) => {
            if (index !== active) {
              return (
                <div
                  key={index}
                  className="dot"
                  data-key={index}
                  onClick={dotClickHandler}
                />
              );
            } else {
              return <div key={index} className="activeDot"></div>;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Slider;
