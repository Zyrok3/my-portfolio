import React from "react";

const socialLinks = [
  {
    icon: "fas fa-envelope",
    href: "mailto:felix.reder@gmail.com",
    label: "Email",
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/Zyrok3",
    label: "GitHub",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://linkedin.com/in/felix-reder",
    label: "LinkedIn",
  },
];

const SocialLinks: React.FC = () => (
  <div
    className="fixed right-0 bottom-0 z-50 flex flex-col items-center gap-6 px-2 py-6 bg-transparent mr-4"
    style={{ minHeight: "300px" }}
  >
    <div className="flex flex-col gap-2">
      {socialLinks.map((social, idx) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={
            social.href.startsWith("http") ? "noopener noreferrer" : undefined
          }
          aria-label={social.label}
          className="text-gray-500 hover:text-[#CD853F] transition-colors text-2xl"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
    <div className="w-px h-40 bg-gray-500"></div>
  </div>
);

export default SocialLinks;
