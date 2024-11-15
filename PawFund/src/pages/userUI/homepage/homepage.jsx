//import React from "react";
import Header from "../../../component/header/header";
import Body from "../../../component/body/body";
import Footer from "../../../component/footer/footer";
import CarouselPage from "../../../component/carouselPage/carouselImage.jsx";

const homepage = () => {
  return (
    <div>
      <Header />
      <CarouselPage />
      <Body />
      <Footer />
    </div>
  );
};

export default homepage;
