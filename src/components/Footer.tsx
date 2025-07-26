import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-white text-gray-900 py-8 px-6 border-t border-gray-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="text-2xl font-bold playfair-display-400 text-gray-900">
        {`{ Felix Reder }`}
      </span>
      <div className="flex gap-4 text-xl">
        <a
          href="https://github.com/Zyrok3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#CD853F] transition-colors"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/felix-reder"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#CD853F] transition-colors"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="mailto:felix.reder@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:text-[#CD853F] transition-colors"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <span className="text-sm text-gray-400 montserrat-400">
        © {new Date().getFullYear()} Felix Reder
      </span>
    </div>
  </footer>
);

export default Footer;
