import React from "react";
import "../styles/globals.css";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-6
              bg-[url('/images/HeaderImage-02.jpg')] bg-cover bg-center bg-no-repeat
              relative"
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content with relative positioning to appear above overlay */}
      <article className="relative bottom-16 text-white flex flex-col items-center text-center w-full mx-auto">
        <p className="text-8xl playfair-display-400">Hello! I'm Felix. 👋</p>

        <p className="text-2xl text-gray-100 montserrat-400 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          An HTL Information Technology student & AI enthusiast specializing in
          neural networks and network security, thriving on hackathons and
          complex problem-solving. 🚀
        </p>
      </article>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
