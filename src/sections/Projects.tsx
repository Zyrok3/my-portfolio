import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  // Create pairs of projects for each row
  const firstRowProjects = projects.slice(0, 2);
  const secondRowProjects = projects.slice(2, 4);
  const thirdRowProjects = projects.slice(4, 6);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-right pr-44 mb-6 playfair-display-400"
          data-aos="fade-up"
          data-aos-once="true"
        >
          My Projects
        </h2>

        <p
          className="text-right pr-44 text-[#CD853F] italic mb-16 montserrat-400 hidden md:block"
          data-aos="fade-up"
          data-aos-once="true"
        >
          hover over any project to learn more!
        </p>

        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {firstRowProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              animationDirection={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {secondRowProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              animationDirection={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {thirdRowProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              animationDirection={index % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
