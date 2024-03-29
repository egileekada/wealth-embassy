import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import EventDetailPage from "./pages/EventDetailPage";
import EventPage from "./pages/EventPage";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";
import HomePage from "./pages/HomePage";
import LiveStream from "./pages/LiveStream";
import SermonDetailPage from "./pages/SermonDetailPage";
import SermonPage from "./pages/SermonPage";
import ScrollToTop from "./ScrollToTop";
import Login from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import DashboardPage from "./pages/DashboardPage";
import EditSermon from "./admin/components/EditSermon";
import AdminGallery from "./admin/components/AdminGallery";

function App() {
  return (
    <> 
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin-login" element={<Login />} />
          <Route path="/sermondetail" element={<SermonDetailPage />} />
          <Route path="/sermon" element={<SermonPage />} />
          <Route path="/eventdetail" element={<EventDetailPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="livestream" element={<LiveStream />} />
          <Route path="/give" element={<Give />} />
          <Route path="/dashboard" element={<DashboardPage />} >
            <Route path="/dashboard/" element={<Dashboard />} />
            <Route path="/dashboard/sermon" element={<EditSermon />} />
            <Route path="/dashboard/gallery" element={<AdminGallery />} />
          </Route>
        </Routes>
      </Router>
    </>
  );

}

export default App;
