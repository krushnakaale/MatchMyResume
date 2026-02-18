import HeroHome from "./sections/HeroHome";
import CoreFeatures from "./sections/CoreFeatures";
import WorkflowSection from "./sections/WorkflowSection";
import ImpactStats from "./sections/ImpactStats";
import FinalCTA from "./sections/FinalCTA";

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <CoreFeatures />
      <WorkflowSection />
      <ImpactStats />
      <FinalCTA />
    </>
  );
};

export default HomePage;
