import LeaderboardHero from "./sections/LeaderboardHero";
// import FeatureSection from "./sections/FeatureSection";
// import FooterSection from "./sections/FooterSection";

const LeaderboardPage = () => {
  const leaderboardData = [
    { name: "Alice Johnson", role: "Frontend Engineer", score: 980 },
    { name: "Bob Smith", role: "Backend Engineer", score: 920 },
    { name: "Carol Lee", role: "Fullstack Developer", score: 880 },
    { name: "David Kim", role: "UI Designer", score: 850 },
  ];

  return (
    <>
      {/* <LeaderboardHero /> */}
      <LeaderboardHero leaderboard={leaderboardData} />;
      {/* <FeatureSection /> */}
      {/* <FooterSection /> */}
    </>
  );
};

export default LeaderboardPage;
