import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ChallengeDetailsPage from "./pages/ChallengeDetailsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ManageHackathon from "./pages/ManageHackathon";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-challenge" element={<ChallengeDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/managehackathon" element={<ManageHackathon />} />
      </Routes>
    </Router>
  );
};

export default App;
