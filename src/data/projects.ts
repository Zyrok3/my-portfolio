export interface Project {
  title: string;
  description: string;
  image?: string;
  videoUrl?: string;
  mediaType: "image" | "video";
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with modern web technologies. Features project showcases, skill highlights, and contact information with a clean, minimalist design.",
    image: "/images/tempimage-600x400.svg",
    mediaType: "image",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveLink: "/",
    codeLink: "https://github.com/Zyrok3/my-portfolio",
  },
  {
    title: "Vienna Hackathon 3rd Place Project",
    description:
      "An innovative solution developed during the Vienna Hackathon that earned 3rd place recognition. Created an interactive application focused on urban sustainability and smart city solutions.",
    image: "/images/tempimage-600x400.svg",
    mediaType: "image",
    technologies: ["Unity", "C#", "AR", "Firebase"],
    liveLink: "felixreder.me/ViennaHackathon2025",
    codeLink: "https://www.google.com/",
  },
  {
    title: "Vienna Hackathon 3rd Place Project",
    description:
      "An innovative solution developed during the Vienna Hackathon that earned 3rd place recognition. Created an interactive application focused on urban sustainability and smart city solutions.",
    image: "/images/tempimage-600x400.svg",
    mediaType: "image",
    technologies: ["Unity", "C#", "AR", "Firebase"],
    liveLink: "felixreder.me/ViennaHackathon2025",
    codeLink: "https://www.google.com/",
  },

  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with modern web technologies. Features project showcases, skill highlights, and contact information with a clean, minimalist design.",
    image: "/images/tempimage-600x400.svg",
    mediaType: "image",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveLink: "felixreder.me",
    codeLink: "https://github.com/Zyrok3/my-portfolio",
  },
];
