import React from "react";
import SandpaperCarousel from "./SandpaperCarousel";
import HomeTools from "./HomeTools";
import BusinessSummary from "./BusinessSummary";
import Review from "./Review";

const Home = () => {
  return (
    <div>
      <SandpaperCarousel />
      <HomeTools/>
      <BusinessSummary/>
      <Review/>
    </div>
  );
};

export default Home;
