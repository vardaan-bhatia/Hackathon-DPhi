import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ChallengeDetailsPage from "./pages/ChallengeDetailsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-challenge" element={<ChallengeDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
