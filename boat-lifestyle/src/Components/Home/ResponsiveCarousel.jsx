import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ResponsiveCarousal = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay="true"
      infiniteLoop="true"
      interval="2000"
      showThumbs=""
      // width={"94%"}
      // centerMode="true"
      // dynamicHeight="false"
    >
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/diwali-banner_2000x.gif?v=1664442921"
          alt="Sale"
        />
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-190-_1_1_2000x.png?v=1664173128"
          alt="AirDopes"
        />
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/orion_2000x.jpg?v=1664373865"
          alt="Cinema Week"
        />
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SN-Desktop-Banner-Wave-Style_1_2000x.jpg?v=1663914840"
          alt="Wave Style"
        />
      </div>
    </Carousel>
  );
};

export default ResponsiveCarousal;
