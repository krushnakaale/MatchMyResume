import ProfileHero from "./sections/ProfileHero";
// import FeatureSection from "./sections/FeatureSection";
// import FooterSection from "./sections/FooterSection";

const ProfilePage = () => {
  // Dummy user data
  const dummyUser = {
    name: "John Doe",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/300",
    posts: 34,
    followers: 120,
    following: 45,
    history: [
      { activity: "Uploaded resume to ATS", date: "2026-02-15" },
      { activity: "Completed React tutorial", date: "2026-02-12" },
      { activity: "Joined Hackathon Challenge", date: "2026-01-28" },
    ],
  };

  return (
    <>
      {/* <ProfileHero /> */}
      <ProfileHero user={dummyUser} />
      {/* <FeatureSection /> */}
      {/* <FooterSection /> */}
    </>
  );
};

export default ProfilePage;
