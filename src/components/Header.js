"use client";
export default function Header() {
  return (
    <header
      style={{
        background: "#060d09",
        borderBottom: "1px solid #1a3020",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Shield icon */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 6V12C3 17.25 7.08 22.17 12 23.25C16.92 22.17 21 17.25 21 12V6L12 2Z"
          stroke="#00ff88"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12L11 14L15 10" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span
        style={{
          color: "#00ff88",
          fontFamily: "'Courier New', monospace",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "2px",
          textShadow: "0 0 8px rgba(0,255,136,0.4)",
        }}
      >
        3 Days Cyber Bootcamp
      </span>
    </header>
  );
}
