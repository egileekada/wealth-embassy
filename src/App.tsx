import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";
import LiveStream from "./pages/LiveStream";
import SermonDetailPage from "./pages/SermonDetailPage";
import SermonPage from "./pages/SermonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sermondetail" element={<SermonDetailPage />} />
        <Route path="/sermon" element={<SermonPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="livestream" element={<LiveStream />} />
      </Routes>
    </Router>
  );
}

export default App;
