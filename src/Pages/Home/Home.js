import React from "react";
import SandpaperCarousel from "./SandpaperCarousel";
import HomeTools from "./HomeTools";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <SandpaperCarousel />
      <HomeTools/>
      <BusinessSummary/>
      <Reviews/>
    </div>
  );
};

export default Home;
