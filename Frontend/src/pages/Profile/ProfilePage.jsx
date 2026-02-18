import React, { useEffect, useState } from "react";
import ProfileHero from "./sections/ProfileHero";
import DashboardPage from "../Dashboard/DashboardPage";
import axios from "../../api/axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/profile/12345"); // dummy ID
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <>
      <ProfileHero user={user} />
      <DashboardPage />
    </>
  );
};

export default ProfilePage;
