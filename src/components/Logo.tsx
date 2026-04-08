"use client";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring */}
      <circle
        cx="100"
        cy="100"
        r="88"
        stroke="url(#outerGrad)"
        strokeWidth="6"
        opacity="0.5"
      />
      {/* Middle ring */}
      <circle
        cx="100"
        cy="100"
        r="70"
        stroke="url(#midGrad)"
        strokeWidth="5"
        opacity="0.7"
      />
      {/* Inner swirl / vortex */}
      <path
        d="M100 45C69.6 45 45 69.6 45 100C45 130.4 69.6 155 100 155C120 155 137.5 144 147 127.5"
        stroke="url(#swirlGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow tip */}
      <path
        d="M140 118L152 128L145 112"
        fill="#F57C00"
        stroke="#F57C00"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Center dot */}
      <circle cx="100" cy="100" r="12" fill="url(#centerGrad)" />

      <defs>
        <linearGradient id="outerGrad" x1="0" y1="0" x2="200" y2="200">
          <stop stopColor="#BF5B04" />
          <stop offset="1" stopColor="#F57C00" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="midGrad" x1="30" y1="30" x2="170" y2="170">
          <stop stopColor="#F57C00" stopOpacity="0.6" />
          <stop offset="1" stopColor="#BF5B04" />
        </linearGradient>
        <linearGradient id="swirlGrad" x1="45" y1="45" x2="155" y2="155">
          <stop stopColor="#FF9D3D" />
          <stop offset="1" stopColor="#F57C00" />
        </linearGradient>
        <radialGradient id="centerGrad" cx="100" cy="100" r="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9D3D" />
          <stop offset="1" stopColor="#F57C00" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function Wordmark({ className = "text-xl" }: { className?: string }) {
  return (
    <span className={`font-sans tracking-tight ${className}`}>
      <span className="font-bold text-foreground">group</span>
      <span className="font-light text-foreground-secondary">found</span>
    </span>
  );
}
