import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import StartPage from "./pages/StartPage";
import SigninPage from "./pages/SigninPage";
import CreateAccount from "./pages/CreateAccount";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/StartPage" element={<StartPage />} />
      <Route path="/SigninPage" element={<SigninPage />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
    </Routes>
  );
};

export default App;
