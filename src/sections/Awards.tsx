import React from "react";
import { awards } from "../data/awards";

const trophyColors = {
  gold: "#FFD700",
  bronze: "#CD7F32",
};

const trophySVG = (color: string) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    className="mx-auto mb-4"
    style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }}
  >
    <ellipse cx="32" cy="56" rx="16" ry="6" fill="#bbb" opacity="0.2" />
    <path
      d="M16 16v8c0 8.837 7.163 16 16 16s16-7.163 16-16v-8H16z"
      fill={color}
      stroke="#b3742f"
      strokeWidth="2"
    />
    <rect
      x="24"
      y="40"
      width="16"
      height="8"
      rx="4"
      fill={color}
      stroke="#b3742f"
      strokeWidth="2"
    />
    <rect
      x="28"
      y="48"
      width="8"
      height="8"
      rx="4"
      fill={color}
      stroke="#b3742f"
      strokeWidth="2"
    />
    <path
      d="M8 16c0 6 4 12 8 12V16H8zm48 0c0 6-4 12-8 12V16h8z"
      fill={color}
      stroke="#b3742f"
      strokeWidth="2"
    />
  </svg>
);

const Awards: React.FC = () => (
  <section
    id="awards"
    className="py-20 px-6 bg-white dark:bg-gray-900"
    data-aos="fade-up"
    data-aos-once="true"
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 playfair-display-400 text-gray-900 dark:text-white">
        Awards 🏆
      </h2>
      <p className="text-center text-[#CD853F] italic mb-12 montserrat-400 max-w-2xl mx-auto">
        Hackathons and competitions I've excelled in.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {awards.map((award, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={idx * 100}
            data-aos-once="true"
          >
            {trophySVG(trophyColors[award.icon])}
            <h3 className="text-2xl md:text-3xl font-bold playfair-display-400 text-gray-900 dark:text-white mb-2">
              {award.icon === "gold" ? "🥇" : "🥉"} {award.title}{" "}
              <span className="text-lg text-[#CD853F] font-bold">
                - {award.prize}
              </span>
            </h3>
            <p className="montserrat-400 text-gray-700 dark:text-gray-200 mb-4">
              {award.description}
            </p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CD853F] underline montserrat-400"
              >
                More info
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards;
