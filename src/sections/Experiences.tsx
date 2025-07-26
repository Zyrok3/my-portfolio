import React from "react";
import { experiences } from "../data/experiences";

const Experiences: React.FC = () => {
  return (
    <section id="experiences" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 playfair-display-400 text-gray-900"
          data-aos="fade-up"
          data-aos-once="true"
        >
          My Professional Experience 🧑‍💻
        </h2>

        <div className="relative">
          {/* Central timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#CD853F]/70"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-24 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1 top-10">
                <div className="h-4 w-4 rounded-full bg-[#CD853F]"></div>
              </div>

              {/* Mobile timeline (vertical left-aligned) */}
              <div className="md:hidden flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-4 w-4 rounded-full bg-[#CD853F]"></div>
                </div>
                <div>
                  <div className="text-[#CD853F]">{exp.period}</div>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold mb-1 text-gray-900 underline hover:text-[#CD853F] cursor-pointer"
                      title={exp.link}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold mb-1 text-gray-900">
                      {exp.company}
                    </h3>
                  )}
                  <div className="text-gray-700">{exp.position}</div>
                  <div className="text-gray-500 mt-2">{exp.description}</div>
                </div>
              </div>

              {/* Desktop layout - alternating sides */}
              <div
                className={`hidden md:block ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+2rem)] text-right"
                    : "md:pl-[calc(50%+2rem)]"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-once="true"
              >
                <div className="text-[#CD853F]">{exp.period}</div>
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold mb-1 text-gray-900 underline hover:text-[#CD853F] cursor-pointer"
                    title={exp.link}
                  >
                    {exp.company}
                  </a>
                ) : (
                  <h3 className="text-2xl md:text-3xl font-bold mb-1 text-gray-900">
                    {exp.company}
                  </h3>
                )}
                <div className="text-lg text-gray-700">{exp.position}</div>
                <div className="text-gray-500 mt-2">{exp.description}</div>
              </div>

              {/* Horizontal connector line */}
              <div
                className={`hidden md:block absolute top-[42px] h-0.5 bg-[#CD853F] w-8
                  ${index % 2 === 0 ? "right-1/2" : "left-1/2"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
