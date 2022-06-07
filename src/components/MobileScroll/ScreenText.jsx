import React, { useEffect, useRef, useState } from "react";
import "./mobileScroll.css";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  /* ------------------------ INTERSECTION OBSERVER API ----------------------- */

  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null, //Means we are observing from the frame of reference of the browser. we can set it to another div or any element as well.
    rootMargin: "0px", //From bottom, from how much margin do we want to observe. i.e.from center means 500px.
    threshold: 0.6, //How much part needs to be visible to call the toggle animation.
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              alt="Mobile screens"
              className="mobile-screen-img"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
