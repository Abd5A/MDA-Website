import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import StartPage from "./pages/StartPage";
import SignupPage from "./pages/SignupPage";
import CreateAccount from "./pages/CreateAccount";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/StartPage" element={<StartPage />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
    </Routes>
  );
};

export default App;
