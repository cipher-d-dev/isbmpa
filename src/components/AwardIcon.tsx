import React from "react";

interface AwardIconProps {
  size?: number;
  className?: string;
}

const AwardIcon: React.FC<AwardIconProps> = ({ size = 28, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`award-icon ${className}`}
      aria-hidden="true"
    >
      <style>{`
        .award-icon {
          --ic-gold:   var(--color-gold,   #C9A84C);
          --ic-accent: var(--color-accent,  #3aA876);
          --ic-glow:   var(--color-accent-light, #d0f0e2);
          overflow: visible;
        }

        /* Base trophy parts */
        .aw-cup      { fill: var(--ic-gold); }
        .aw-shine    { fill: #fff; opacity: .28; }
        .aw-stem     { fill: var(--ic-gold); opacity: .85; }
        .aw-base     { fill: var(--ic-gold); }
        .aw-star     { fill: var(--ic-accent); }
        .aw-ring     { fill: none; stroke: var(--ic-accent); stroke-width: 1; opacity: .5; }

        /* Pulse ring */
        .aw-pulse {
          fill: none;
          stroke: var(--ic-accent);
          stroke-width: .8;
          opacity: 0;
          transform-origin: 14px 12px;
        }

        /* Sparkle dots */
        .aw-spark { fill: var(--ic-gold); }

        /* — Animations — */
        @keyframes aw-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-1.5px); }
        }
        @keyframes aw-pulse {
          0%   { opacity: .55; transform: scale(.7); }
          70%  { opacity: 0;   transform: scale(1.55); }
          100% { opacity: 0;   transform: scale(1.55); }
        }
        @keyframes aw-twinkle {
          0%, 100% { opacity: .9; transform: scale(1); }
          50%       { opacity: .3; transform: scale(.5); }
        }
        @keyframes aw-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: no-preference) {
          .aw-body   { animation: aw-float   2.6s ease-in-out infinite; }
          .aw-pulse  { animation: aw-pulse   2.6s ease-out  infinite; }
          .aw-s1     { animation: aw-twinkle 1.8s ease-in-out infinite .0s; }
          .aw-s2     { animation: aw-twinkle 1.8s ease-in-out infinite .6s; }
          .aw-s3     { animation: aw-twinkle 1.8s ease-in-out infinite 1.2s; }
          .aw-orbit  {
            transform-origin: 14px 12px;
            animation: aw-spin 8s linear infinite;
          }
        }
      `}</style>

      {/* Pulse ring behind everything */}
      <circle className="aw-pulse" cx="14" cy="12" r="9" />

      {/* Orbiting dot ring */}
      <g className="aw-orbit">
        <circle cx="14" cy="3.5" r=".9" className="aw-ring" style={{ fill: "var(--ic-accent)", opacity: .35 }} />
      </g>

      {/* Main trophy body (floats) */}
      <g className="aw-body">
        {/* Cup bowl */}
        <path
          className="aw-cup"
          d="M8 4h12l-1.5 8.5c-.4 2-2 3.5-4.5 3.5S9.9 14.5 9.5 12.5L8 4Z"
        />

        {/* Handles */}
        <path
          className="aw-cup"
          d="M8 5.5C6 5.5 5 7 5 8.5S6 11 8 11"
          strokeWidth="1.4"
          stroke="var(--ic-gold)"
          fill="none"
        />
        <path
          className="aw-cup"
          d="M20 5.5C22 5.5 23 7 23 8.5S22 11 20 11"
          strokeWidth="1.4"
          stroke="var(--ic-gold)"
          fill="none"
        />

        {/* Shine on cup */}
        <ellipse className="aw-shine" cx="11.5" cy="8" rx="1.2" ry="2.8" transform="rotate(-10 11.5 8)" />

        {/* Star badge on cup */}
        <path
          className="aw-star"
          d="M14 7l.9 2.8H17.8l-2.4 1.7.9 2.8L14 12.6l-2.3 1.7.9-2.8L10.2 9.8H13.1Z"
        />

        {/* Stem */}
        <rect className="aw-stem" x="12.4" y="16" width="3.2" height="4" rx=".6" />

        {/* Base */}
        <rect className="aw-base" x="9.5" y="20" width="9" height="2.2" rx="1.1" />
        <rect className="aw-base" x="11" y="21.8" width="6" height="1.2" rx=".6" />
      </g>

      {/* Static sparkles (don't float with the cup) */}
      <circle className="aw-spark aw-s1" cx="5"  cy="5"  r=".9" />
      <circle className="aw-spark aw-s2" cx="23" cy="6"  r=".7" />
      <circle className="aw-spark aw-s3" cx="21" cy="19" r=".6" />
    </svg>
  );
};

export default AwardIcon;