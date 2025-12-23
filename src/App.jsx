import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToSection from "./components/ScrollToSection";

function App() {
  return (
    <>
      {/* 🔥 REQUIRED */}
      <ScrollToSection />

      <Navbar />

      <Routes>
        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Training />
              <Contact />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;