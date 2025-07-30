import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-5 left-0 right-0 z-50 mx-auto max-w-[90%] rounded-xl p-4 bg-black/10 backdrop-blur-sm transition-transform duration-700 ${
        isVisible ? "translate-y-0" : "-translate-y-28"
      }`}
    >
      <div className="container mx-auto max-w-[95%] flex justify-between items-center opacity-100">
        <div className="navbar-font-color text- text-2xl font-bold">
          Felix Reder
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="navbar-font-color hover:text-gray-300">
            Home
          </a>
          <a href="#" className="navbar-font-color hover:text-gray-300">
            Projects
          </a>
          <a href="#" className="navbar-font-color hover:text-gray-300">
            Awards
          </a>
          <a href="#" className="navbar-font-color hover:text-gray-300">
            Experience
          </a>
          <a href="#" className="navbar-font-color hover:text-gray-300">
            About
          </a>
        </div>
        <button className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
