import React from "react";
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/images/Background Image.png";
import dove from "../../assets/images/dove 1.png";
import UpcomingEvents from "../HomePage/components/UpcomingEvents";
import WhoWeAre from "./components/WhoWeAre";
import HeroSection from "../../components/HeroSection";

export default function index() {
  return (
    <section> 
      <HeroSection title="GOD GIVES US POWER" /> 
      <WhoWeAre />
    </section>
  );
}
