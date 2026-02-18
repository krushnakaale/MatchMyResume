import api from "./axios";

export const getLatestATSResult = () => api.get("/ats/latest");
export const getLeaderboardStats = () => api.get("/leaderboard/stats");
