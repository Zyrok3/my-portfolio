import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 relative overflow-visible"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-0 relative">
        {/* Left: Large Image, overlaps next section */}
        <div className="w-full flex justify-center md:justify-start mb-0 md:mb-0 relative">
          <img
            src="/images/AboutMe-Image-01.jpg"
            alt="Felix hiking in the mountains"
            className="object-cover shadow-2xl border border-gray-200 dark:border-gray-800 md:-left-48 md:-top-52"
            style={{ zIndex: 10 }}
          />
        </div>
        {/* Right: Content */}
        <div className="w-full flex flex-col items-start">
          <h2
            className="text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Felix Reder
          </h2>
          <p
            className="text-xl italic mb-6 text-[#CD853F]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            HTL Information Technology Student & AI Enthusiast
          </p>
          <div
            className="text-lg text-gray-800 dark:text-gray-100 mb-6 leading-relaxed w-full max-w-none"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hi, I'm Felix Reder, passionate about artificial intelligence,
            neural networks, and network security. I thrive on hackathons, enjoy
            tackling complex problems, and love collaborating with others to
            build innovative solutions. My journey is fueled by curiosity,
            creativity, and a drive to make technology accessible and impactful
            for everyone.
          </div>
          <a
            href="/files/Felix_Reder-Resume.pdf"
            download
            className="px-5 py-2 rounded border border-gray-400 text-gray-900 dark:text-white bg-transparent text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
