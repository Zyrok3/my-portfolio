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
    <>
      <SocialLinks />
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Awards />
      <Experiences />
      <Toolkit />
      <Footer />
    </>
  );
}

export default App;
