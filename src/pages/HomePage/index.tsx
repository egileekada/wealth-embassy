import React from "react";
import Navbar from "../../components/Navbar";
import backgroundImage from "../../assets/images/Background Image.png";
import dove from "../../assets/images/dove 1.png";
import UpcomingEvents from "./components/UpcomingEvents";
import GiveSection from "./components/GiveSection";
import Events from "./components/Events";
import SecondSection from "./components/SecondSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import Schedules from "./components/Schedules";
export default function Index() {
  return (
    <header> 
      <HeroSection title="Kingdom Oriented" />
      <SecondSection />
      <GiveSection />
      <Schedules />
      <Events />
      <Footer />
    </header>
  );
}
