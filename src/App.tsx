import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./sections/Projects";
import HeroSection from "./sections/HeroSection";
import Awards from "./sections/Awards";
import Experiences from "./sections/Experiences";
import Toolkit from "./sections/Toolkit";
import AboutMe from "./sections/AboutMe";
// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import SocialLinks from "./components/SocialLinks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <SocialLinks />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutMe />
              <Projects />
              <Awards />
              <Experiences />
              <Toolkit />
              <Footer />
            </>
          }
        />
        <Route
          path="/ViennaHackathon2025"
          element={
            <div>
              <h1>Vienna Hackathon 2025 Project</h1>
              <p>Details about the Vienna Hackathon 2025 project go here.</p>
            </div>
          }
        />
        <Route
          path="/Javascript-RPG-Game"
          element={
            <div>
              <h1> Javascript-RPG-Game </h1>
              <p> Welcome to my RPG-Game made with HTML + CSS + Javascript</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
