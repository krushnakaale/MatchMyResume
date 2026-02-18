import HelpHero from "./sections/HelpHero";
// import FeatureSection from "./sections/FeatureSection";
// import FooterSection from "./sections/FooterSection";

const HelpPage = () => {
  const helpTopics = [
    {
      title: "Uploading Your Resume",
      description: "Step-by-step guide to upload your resume safely.",
    },
    {
      title: "Understanding ATS Score",
      description: "Learn how the ATS system evaluates your resume.",
    },
    {
      title: "Privacy & Security",
      description: "How we protect your personal data.",
    },
    {
      title: "Contact Support",
      description: "Reach out if you face any issues or questions.",
    },
  ];

  return (
    <>
      {/* <HelpHero /> */}
      <HelpHero topics={helpTopics} />;{/* <FeatureSection /> */}
      {/* <FooterSection /> */}
    </>
  );
};

export default HelpPage;
