import { useState } from "react";

const InfinityHub = () => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (side, e) => {
    e.stopPropagation();
    setActivePanel(prev => (prev === side ? null : side));
  };

  const closePanels = (e) => {
    if (!e.target.closest(".panel")) {
      setActivePanel(null);
    }
  };

  return (
    <div
      onClick={closePanels}
      style={{
        position: "relative",
        width: "100%",
        height: "360px",
        background: "transparent",
        marginTop: "-60px",
        marginBottom: "-60px",
      }}
    >

      {/* CENTER HUB */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* LEFT CLICK */}
        <div
          onClick={(e) => togglePanel("left", e)}
          style={{
            position: "absolute",
            left: 0,
            width: "40%",
            height: "100%",
            cursor: "pointer",
          }}
        />

        {/* RIGHT CLICK */}
        <div
          onClick={(e) => togglePanel("right", e)}
          style={{
            position: "absolute",
            right: 0,
            width: "40%",
            height: "100%",
            cursor: "pointer",
          }}
        />

        {/* SVG Infinity */}
        <svg width="600" height="250" viewBox="0 0 800 380" style={{ transform: "translateY(-10px)", overflow: "visible" }}>
          {/* Cyber Glow Path */}
          <path
            d="M400,190 C550,50 720,50 720,190 C720,330 550,330 400,190 C250,50 80,50 80,190 C80,330 250,330 400,190"
            fill="none"
            stroke="rgba(0, 242, 255, 0.4)"
            strokeWidth="16"
            style={{ filter: "drop-shadow(0 0 25px rgba(0, 242, 255, 0.9)) blur(3px)" }}
          />
          {/* Solid Core Path */}
          <path
            d="M400,190 C550,50 720,50 720,190 C720,330 550,330 400,190 C250,50 80,50 80,190 C80,330 250,330 400,190"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="4"
          />

          <text x="210" y="200" fill="#00f2ff" fontSize="22" textAnchor="middle">
            Products
          </text>
          <text x="590" y="200" fill="#ff9d00" fontSize="22" textAnchor="middle">
            Enterprises
          </text>
        </svg>

        {/* LEFT PANEL */}
        <div
          className="panel"
          style={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "260px",
            padding: "20px",
            borderRadius: "16px",
            background: "rgba(0,0,20,0.9)",
            color: "#fff",
            opacity: activePanel === "left" ? 1 : 0,
            transition: "0.4s",
            pointerEvents: activePanel === "left" ? "auto" : "none",
          }}
        >
          <h3 style={{ color: "#00f2ff", marginBottom: '8px', marginTop: 0 }}>Digital Core</h3>
          <p style={{ margin: 0, opacity: 0.8 }}>AI-driven systems and scalable data architecture.</p>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="panel"
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "260px",
            padding: "20px",
            borderRadius: "16px",
            background: "rgba(0,0,20,0.9)",
            color: "#fff",
            opacity: activePanel === "right" ? 1 : 0,
            transition: "0.4s",
            pointerEvents: activePanel === "right" ? "auto" : "none",
          }}
        >
          <h3 style={{ color: "#ff9d00", marginBottom: '8px', marginTop: 0 }}>Human Network</h3>
          <p style={{ margin: 0, opacity: 0.8 }}>Collaboration systems for enterprise ecosystems.</p>
        </div>

        {/* CENTER BUTTON */}
        <button
          style={{
            position: "absolute",
            bottom: "80px",
            padding: "12px 40px",
            borderRadius: "12px",
            border: "none",
            background:
              "linear-gradient(135deg,#00f2ff,#a855f7,#ff9d00)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          LABS
        </button>
      </div>
    </div>
  );
};

export default InfinityHub;
