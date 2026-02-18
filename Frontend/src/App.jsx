// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h2>Nueral Ninjas</h2>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/Home/HomePage";
import ATSPage from "./pages/ATSAnalyzer/ATSPage";
import LeaderboardPage from "./pages/Leaderboard/LeaderboardPage";
import HelpPage from "./pages/Help/HelpPage";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ats" element={<ATSPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
