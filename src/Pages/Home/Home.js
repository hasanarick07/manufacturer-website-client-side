import React from "react";
import SandpaperCarousel from "./SandpaperCarousel";
import HomeTools from "./HomeTools";
import BusinessSummary from "./BusinessSummary";

const Home = () => {
  return (
    <div>
      <SandpaperCarousel />
      <HomeTools/>
      <BusinessSummary/>
    </div>
  );
};

export default Home;
