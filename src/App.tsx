import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SermonPage from "./pages/SermonDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sermondetail" element={<SermonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
