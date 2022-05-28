import React from "react";
import SandpaperCarousel from "./SandpaperCarousel";
import HomeTools from "./HomeTools";
import BusinessSummary from "./BusinessSummary";
import Reviews from "./Reviews";
import ContactUs from "./ContactUs";
import Purposes from "./Purposes";

const Home = () => {
  return (
    <div>
      <SandpaperCarousel />
      <HomeTools/>
      <BusinessSummary/>
      <Reviews/>
      <ContactUs/>
      <Purposes/>
    </div>
  );
};

export default Home;
