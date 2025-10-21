import React, { useState, useEffect } from "react";

const SignupPage = () => {
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
                paddingRight: isMobile ? "0" : "0px",
                paddingBottom: isMobile ? "0px" : "0",
            }}
            >
                <div
                style={{
                    fontFamily: "Joan",
                    backgroundImage: 'url("/public/assets/photos/Background1.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "60%",
                    width: "100%",
                    paddingRight: isMobile ? "0" : "130px",
                    textAlign: isMobile ? "center" : "left",
                    }}
                >
                    <h1
                    style={{
                        fontSize: isMobile ? "42px" : "68px",
                        fontWeight: "400",
                        color: "rgba(0, 0, 0, 0.6)",
                        width: "100%",
                        }}
                    >
                        Be <br />
                        Successful <br />
                        With Us
                    </h1>
                </div>

                <div
                style={{
                    fontFamily: "Joan",
                    backgroundImage: 'url("/public/assets/photos/Background2.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50%",
                    width: "100%",
                    paddingRight: isMobile ? "0" : "130px",
                    textAlign: isMobile ? "center" : "left",
                }}
                >
                    <h1
                    style={{
                        fontSize: isMobile ? "42px" : "68px",
                        fontWeight: "400",
                        textAlign: isMobile ? "center" : "left",
                        width: "100%",
                        color: "rgba(0, 0, 0, 0.6)",
                    }}
                    >
                        MDA
                        <img
                        src="/assets/photos/Stethoscope.png"
                        style={{
                            width: isMobile ? "60px" : "100px",
                            height: "auto",
                        }}
                        alt="Stethoscope"
                        />
                    </h1>
                </div>
            </div>
            {/* نهاية القسم اليسار */}


            {/* القسم اليميني */}
            <div
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                width: "85%",
                height: "100%",
                padding: isMobile ? "25px" : "0 200px",
            }}
            >
                {/* تسجيل الدخول */}
                <div
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    fontFamily: "Joan",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                >
                    <h2
                    style={{
                        fontSize: "32px",
                        fontWeight: "400",
                        textAlign: "center",
                        color: "#000000",
                    }}
                    >
                        Sign In
                    </h2>

                    <p
                    style={{
                        textAlign: "center",
                        color: "#00000080",
                        fontSize: "16px",
                        }}
                    >
                        Fill your information or register with your social account
                    </p>

                    <div style={{ marginBottom: "20px" }}>
                        <input
                        type="email"
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            fontSize: "16px",
                            borderRadius: "24px",
                            border: "none",
                            height: "48px",
                        }}
                        placeholder="   Email Address"
                        />
                    </div>
                    
                    <div 
                    style={{ 
                        marginBottom: "15px" 
                    }}
                    >
                        <input
                        type="password"
                        style={{
                            backgroundColor: "white",
                            width: "100%",
                            fontSize: "16px",
                            borderRadius: "24px",
                            border: "none",
                            height: "48px",
                        }}
                        placeholder="   Password"
                        />
                    </div>

                    <div 
                    style={{
                        textAlign: "right", 
                        marginBottom: "25px" 
                    }}
                    >
                        <a
                        href="#"
                        style={{
                            color: "#000000ff",
                            textDecoration: "none",
                            fontSize: "14px",
                        }}
                        >
                            Forget your password?
                        </a>
                    </div>

                    <div
                    style={{
                        justifyContent: "center",
                        display: "flex"
                    }}
                    >
                    <button
                    style={{
                        backgroundColor: "#52C6F8",
                        border: "none",
                        borderRadius: "40px",
                        color: "#FFFFFF",
                        fontWeight: "500",
                        cursor: "pointer",
                        width: "25%",
                        fontSize: "16px",
                        boxShadow: "0px 4px 4px 0px #00000040",
                        height: "48px",
                    }}
                    >
                        Log in
                    </button>
                    </div>

                    <div 
                    style={{
                    textAlign: "center"
                    }}
                    >
                        <span 
                        style={{ 
                        color: "#00000080", fontSize: "14px" 
                        }}
                        >
                            Don't have an account?
                        </span>
                        <a
                        href="/CreateAccount"
                        style={{
                            color: "#52C6F8",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: "500",
                        }}
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
