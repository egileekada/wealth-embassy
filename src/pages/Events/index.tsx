import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UpcomingEvents from "../HomePage/components/UpcomingEvents";
import backgroundImage from "../../assets/images/Background Image.png";
import dove from "../../assets/images/dove 1.png";
import Event from "./components/Event";
import HeroSection from "../../components/HeroSection";

const index = () => {
  return (
    <section> 
      <HeroSection title="GOD GIVES US POWER" /> 
      <Event />
      <Footer />
    </section>
  );
};

export default index;
