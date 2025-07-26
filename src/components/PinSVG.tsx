import React from "react";

interface PinSVGProps {
  /** Optional color of the plastic pin head */
  color?: string;
  /** Size (height) in pixels; width auto-scaled */
  size?: number;
}

/**
 * A corkboard push pin style marker: colored plastic head with metal shaft and tip.
 * If no head color is provided, picks a random standard head color and a random highlight.
 */
const PinSVG: React.FC<PinSVGProps> = ({ color, size = 32 }) => {
  // Standard head colors
  const standardColors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
  ];
  // Highlight colors for inner gradient
  const highlightColors = [
    "#ffffff",
    "#f8f8e8",
    "#ffffe0",
    "#ffe4c4",
    "#f0ffff",
    "#f5f5dc",
  ];

  // Random selections if no props
  const headColor =
    color ?? standardColors[Math.floor(Math.random() * standardColors.length)];
  const highlight =
    highlightColors[Math.floor(Math.random() * highlightColors.length)];

  // Dimensions
  const headRadius = size * 0.25;
  const shaftHeight = size * 0.5;
  const tipHeight = size * 0.25;
  const centerX = size / 2;
  const headCenterY = headRadius;
  const shaftY = headCenterY + headRadius;
  const tipY = shaftY + shaftHeight;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Push pin marker"
    >
      <defs>
        {/* Inner highlight gradient */}
        <radialGradient id="headHighlight" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={highlight} stopOpacity={0.8} />
          <stop offset="100%" stopColor="transparent" stopOpacity={0} />
        </radialGradient>
        {/* Metal shaft gradient */}
        <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#a0a0a0" />
        </linearGradient>
      </defs>

      {/* Plastic head base */}
      <circle cx={centerX} cy={headCenterY} r={headRadius} fill={headColor} />
      {/* Plastic head stroke */}
      <circle
        cx={centerX}
        cy={headCenterY}
        r={headRadius}
        fill="none"
        stroke={headColor}
        strokeWidth={size * 0.02}
      />
      {/* Plastic head highlight overlay */}
      <circle
        cx={centerX}
        cy={headCenterY}
        r={headRadius}
        fill="url(#headHighlight)"
      />

      {/* Metal shaft */}
      <rect
        x={centerX - headRadius * 0.15}
        y={shaftY}
        width={headRadius * 0.3}
        height={shaftHeight}
        fill="url(#metalGrad)"
        rx={headRadius * 0.05}
      />

      {/* Pointed tip */}
      <polygon
        points={
          `${centerX - headRadius * 0.15},${tipY} ` +
          `${centerX + headRadius * 0.15},${tipY} ` +
          `${centerX},${tipY + tipHeight}`
        }
        fill="#888"
      />
    </svg>
  );
};

export default PinSVG;
