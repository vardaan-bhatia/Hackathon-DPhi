import React from "react";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import StatsSection from "../components/sections/StatSection";
import BannerSection from "../components/sections/BannerSection";
import SearchSection from "../components/sections/SearchSection";

const Homepage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <StatsSection />
      <BannerSection />
      <SearchSection />
    </>
  );
};

export default Homepage;
