import React from "react";
import "./banner.css";

import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <div className="banner">
      <img
        className="d-block w-100 h-50"
        src="https://previews.123rf.com/images/baibakova/baibakova1908/baibakova190800110/129010048-assorted-indian-food-on-black-background-indian-cuisine-top-view-with-copy-space-panorama-banner.jpg"
        alt="First slide"
      />
    </div>
  );
}

export default Banner;
