import { useEffect, useRef, useState } from "react";
import "./productShowcase.css";
const ProductShowcase = () => {
  /* ------------------------ INTERSECTION OBSERVER API ----------------------- */

  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null, //Means we are observing from the frame of reference of the browser. we can set it to another div or any element as well.
    rootMargin: "0px", //From bottom, from how much margin do we want to observe. i.e.from center means 500px.
    threshold: 0.5, //How much part needs to be visible to call the toggle animation.
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      <div className="showcase-wrapper">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
          alt="iphone-images"
          className="showcase-ui showcase-mockup-1"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
          alt="iphone-images"
          className="showcase-ui showcase-mockup-2"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
          alt="iphone-images"
          className="showcase-ui showcase-mockup-3"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
          alt="iphone-images"
          className="showcase-ui showcase-mockup-4"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
          alt="iphone-images"
          className="showcase-ui showcase-mockup-5"
        />
      </div>
    </div>
  );
};

export default ProductShowcase;
