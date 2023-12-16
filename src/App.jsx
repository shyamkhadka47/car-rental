import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicle from "./pages/Vehicle";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/vehicle-models" element={<Vehicle/>} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
