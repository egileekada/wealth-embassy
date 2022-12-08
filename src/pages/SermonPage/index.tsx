import React from "react";
import Sermons from "./components/Sermons";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";

const sermonpage = () => {
  return (
    <section>
      <HeroSection title="GOD GIVES US POWER" />
      <Sermons />
      <Footer />
    </section>
  );
};

export default sermonpage;
