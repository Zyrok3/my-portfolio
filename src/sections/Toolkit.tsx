import React, { useRef, useState, useEffect } from "react";
import { toolkit } from "../data/toolkit";
import { certificates } from "../data/certificates";
import "../styles/toolkit-pinboard.css";
import PinSVG from "../components/PinSVG";

// Position type
interface Position {
  top: string;
  left: string;
}

// Generate grid positions with jitter
function generatePositions(total: number, jitter = 4): Position[] {
  const cols = Math.ceil(Math.sqrt(total));
  const rows = Math.ceil(total / cols);
  return Array.from({ length: total }).map((_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const baseTop = ((row + 1) / (rows + 1)) * 100;
    const baseLeft = ((col + 1) / (cols + 1)) * 100;
    const jitterTop = baseTop + (Math.random() * jitter * 2 - jitter);
    const jitterLeft = baseLeft + (Math.random() * jitter * 2 - jitter);
    return { top: `${jitterTop}%`, left: `${jitterLeft}%` };
  });
}

const Toolkit: React.FC = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [skillPos, setSkillPos] = useState<Position[]>([]);
  const [certPos, setCertPos] = useState<Position[]>([]);

  useEffect(() => {
    setSkillPos(generatePositions(toolkit.length));
    setCertPos(generatePositions(certificates.length));
  }, []);

  return (
    <section id="toolkit" className="toolkit-section">
      <div className="max-w-7xl mx-auto mb-8">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 playfair-display-400 text-gray-900 dark:text-white"
          data-aos="fade-up"
          data-aos-once="true"
        >
          My Toolkit 🛠️
        </h2>
        <p
          className="text-center text-[#CD853F] italic mb-8 montserrat-400 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Technologies and certifications I use to build, secure, and deploy
          projects.
        </p>
      </div>
      <div className="board-container" ref={boardRef}>
        <img
          src="/images/Card-Board-02.svg"
          alt="Cork Board"
          className="board-bg"
        />

        {/* Skills */}
        {toolkit.map((item, idx) => (
          <div
            key={item.name}
            className="pin-wrapper"
            style={{
              top: skillPos[idx]?.top,
              left: skillPos[idx]?.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="pin-marker">
              <PinSVG size={30} />
            </div>
            <div
              className="icon-wrapper skill-icon"
              style={{ width: "6rem", height: "6rem" }}
            >
              <i className={item.icon} title={item.name} />
            </div>
          </div>
        ))}

        {/* Certificates */}
        {certificates.map((cert, idx) => (
          <div
            key={cert.title}
            className="pin-wrapper"
            style={{
              top: certPos[idx]?.top,
              left: certPos[idx]?.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="pin-marker">
              <PinSVG size={24} />
            </div>
            <div
              className="icon-wrapper cert-icon"
              style={{ width: "6rem", height: "6rem" }}
            >
              <img src={cert.icon} alt={cert.title} title={cert.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;
