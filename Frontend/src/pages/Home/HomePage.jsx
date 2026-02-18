import { useEffect, useState } from "react";
import HeroSection from "./sections/HeroHome";
import CoreFeatures from "./sections/CoreFeatures";
import WorkflowSection from "./sections/WorkflowSection";
import ImpactStats from "./sections/ImpactStats";
import FinalCTA from "./sections/FinalCTA";
import { getLatestATSResult, getLeaderboardStats } from "../../api/homeApi";

const HomePage = () => {
  const [latestScore, setLatestScore] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getLatestATSResult().then((res) => setLatestScore(res.data));
    getLeaderboardStats().then((res) => setStats(res.data));
  }, []);

  return (
    <>
      <HeroSection latestScore={latestScore} />
      <CoreFeatures />
      <WorkflowSection />
      <ImpactStats stats={stats} />
      <FinalCTA />
    </>
  );
};

export default HomePage;
