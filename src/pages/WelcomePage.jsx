import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowOverlay(true);
    // بعد نصف ثانية من ظهور الـ overlay، انتقل للصفحة الجديدة
    setTimeout(() => navigate("StartPage"), 500);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundImage: 'url("/assets/photos/WelcomeBackground.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "2rem",
        fontWeight: "bold",
        textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <h2
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          margin: 0,
          color: "black",
        }}
      >
        Welcome With <br />
        <span
          style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
        >
          MDA
          <img
            src="assets/photos/Stethoscope.png"
            alt="Stethoscope"
            style={{ width: "80px", height: "auto", verticalAlign: "middle" }}
          />
        </span>
      </h2>

      <img
        src="/assets/photos/G-hat.png"
        alt="G-hat"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          width: "150px",
          height: "auto",
        }}
      />

      {/* Overlay effect */}
      {showOverlay && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
            transition: "opacity 0.5s ease",
          }}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
