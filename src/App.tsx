import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

import "./css/App.css";
import Gallery from "./pages/Gallery";
import OurTeam from "./pages/OurTeam";
import GoverningCouncil from "./pages/GoverningCouncil";
import { useState } from "react";
import NotFound from "./pages/404";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [navOpen, setnavOpen] = useState<boolean>(false);

  return (
    <div className={navOpen ? "condensedBody" : ""}>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={<MainLayout navOpen={navOpen} setnavOpen={setnavOpen} />}
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="governing-council" element={<GoverningCouncil />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
