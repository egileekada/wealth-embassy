import React from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Give from "./components/Give";

const index = () => {
  return (
    <div className="w-full " >
      <HeroSection title="GOD GIVES US POWER" />
      <Give />
      <Footer />
    </div>
  );
};

export default index;
