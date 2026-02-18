import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from "./pages/Home/HomePage";
import ATSPage from "./pages/ATSAnalyzer/ATSPage";
import LeaderboardPage from "./pages/Leaderboard/LeaderboardPage";
import HelpPage from "./pages/Help/HelpPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import JobPage from "./pages/Jobs/JobPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ats" element={<ATSPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
