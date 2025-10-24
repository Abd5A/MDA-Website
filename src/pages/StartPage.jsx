import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#52C6F880",
      }}
    >
      {/* القسم اليساري */}
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <div
          style={{
            fontFamily: "Joan",
            backgroundImage: 'url("/assets/photos/Background1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            width: "100%",
            padding: isMobile ? "20px" : "0",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "42px" : "68px",
              fontWeight: "400",
              textAlign: isMobile ? "center" : "left",
              width: "100%",
              color: "rgba(0, 0, 0, 0.6)",
              lineHeight: "1.2",
            }}
          >
            Be <br />
            Successful <br />
            With Us
          </h1>
        </div>

        <p
          style={{
            width: isMobile ? "90%" : "80%",
            color: "#FFFFFF",
            fontSize: isMobile ? "18px" : "22px",
            textAlign: isMobile ? "center" : "left",
            marginTop: "20px",
          }}
        >
          Learn with us the unified national examination question models and be
          one of the distinguished ones in it because we provide you with a
          comprehensive encyclopedia of it
        </p>

        <p
          style={{
            fontWeight: "400",
            color: "#00000080",
            fontSize: isMobile ? "20px" : "25px",
            cursor: "pointer",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Learn more
        </p>
      </div>

      {/* القسم اليميني */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* أزرار التسجيل والدخول */}
        <div
          style={{
            width: "50%",
            fontFamily: "Joan",
            position: isMobile ? "static" : "absolute",
            fontWeight: "400",
            fontSize: isMobile ? "20px" : "25px",
            top: isMobile ? "auto" : "40px",
            right: isMobile ? "auto" : "40px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#52C6F8",
              border: "none",
              padding: "10px 20px",
              borderRadius: "40px",
              color: "#FFFFFF",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: "0px 4px 4px 0px #00000040",
            }}
            onClick={() => navigate("/SigninPage")}
          >
            Log in
          </button>

          <button
            style={{
              backgroundColor: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "40px",
              color: "#5CC9FF",
              fontWeight: "500",
              boxShadow: "0px 4px 4px 0px #00000040",
              cursor: "pointer",
            }}
            onClick={() => navigate("/CreateAccount")}
          >
            Sign up
          </button>
        </div>

        <img
          src="/assets/photos/Doctors.png"
          alt="Doctors"
          style={{
            width: isMobile ? "70%" : "85%",
            maxWidth: isMobile ? "350px" : "550px",
            height: "auto",
            
          }}
        />
      </div>
    </div>
  );
};

export default StartPage;
