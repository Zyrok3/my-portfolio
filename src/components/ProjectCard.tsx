import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  mediaType: "image" | "video";
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  animationDirection?: "left" | "right";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  videoUrl,
  mediaType,
  technologies,
  liveLink,
  codeLink,
  animationDirection = "right",
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg transition-all duration-300 h-[300px]"
      data-aos={`fade-${animationDirection}`}
      data-aos-once="true"
    >
      {/* Project Media */}
      {mediaType === "video" && videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={image} alt={title} className="w-full h-full object-cover" />
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 overflow-y-auto">
        <i
          className="fas fa-times fa-2x closeOverlay hidden md:hidden"
          aria-hidden="true"
        ></i>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Technologies */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#CD853F] text-white rounded-lg hover:bg-[#b3742f] transition-colors"
            >
              view live
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#CD853F] text-[#CD853F] rounded-lg hover:bg-[#CD853F] hover:text-white transition-colors"
            >
              github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
