import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import ScrollToSection from "./components/ScrollToSection";
import SEO from "./components/SEO";
import FAQ from "./components/FAQ";
import { ContactPage, NotFoundPage, ServicesPage, TrainingPage } from "./components/LandingPages";

function App() {
  return (
    <>
      <SEO />
      <ScrollToSection />

      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>

      <Routes>
        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Training />
              <FAQ />
              <Contact />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      </main>
      <Footer />
    </>
  );
}

export default App;
