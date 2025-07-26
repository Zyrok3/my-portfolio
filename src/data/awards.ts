export interface Award {
  title: string;
  description: string;
  prize: string;
  icon: "gold" | "bronze";
  link?: string;
}

export const awards: Award[] = [
  {
    title: "FH OÖ Farm Future Hackathon",
    description:
      "Created a modular AI-powered farming support system enabling intuitive maintenance and diagnostics, using JavaScript, HTML/CSS, and Figma.",
    prize: "600€",
    icon: "gold",
    link: "",
  },
  {
    title: "Vienna Hackathon 2025",
    description:
      "Developed an interactive educational game that teaches critical thinking and raises awareness about radicalization through decision-based storytelling.",
    prize: "1000€",
    icon: "bronze",
    link: "",
  },
];
