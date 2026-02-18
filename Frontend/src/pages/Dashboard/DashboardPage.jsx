import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const DashboardPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const latestScore = { score: 78, percentile: 12 };

  // Sample data
  const sampleHistory = [
    {
      activity: "Resume Uploaded",
      date: "2026-02-15",
      type: "Upload",
      score: 85,
    },
    {
      activity: "ATS Analysis Completed",
      date: "2026-02-16",
      type: "ATS",
      score: 92,
    },
    {
      activity: "Resume Reviewed",
      date: "2026-02-17",
      type: "Review",
      score: 88,
    },
    { activity: "Profile Updated", date: "2026-02-18", type: "Update" },
  ];

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setHistory(sampleHistory);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <p className="text-center mt-20 text-gray-500">Loading dashboard...</p>
    );

  // Prepare chart data
  const scoreData = history
    .filter((h) => h.score !== undefined)
    .map((h) => ({ date: h.date, score: h.score }));

  const typeData = history.reduce((acc, item) => {
    const existing = acc.find((x) => x.name === item.type);
    if (existing) existing.value += 1;
    else acc.push({ name: item.type, value: 1 });
    return acc;
  }, []);

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-10">
        <h1 className="text-3xl font-extrabold text-gray-900 text-start">
          User Dashboard
        </h1>

        {/* Global ATS Score Card */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white rounded-3xl p-6 flex items-center justify-between shadow-2xl relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

          <div className="flex-1 z-10">
            <p className="text-sm font-mono uppercase tracking-widest opacity-80">
              Global ATS Score
            </p>
            <h2 className="text-5xl font-extrabold mt-2">
              {latestScore?.score ?? 78}%
            </h2>
            <p className="text-sm mt-1 opacity-80">
              Top {latestScore?.percentile ?? 12}% of all candidates
            </p>
          </div>

          <div className="w-28 h-28 relative z-10">
            {/* Radial Ring */}
            <svg className="w-full h-full" viewBox="0 0 36 36">
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
                fill="none"
              />
              {/* Score Circle */}
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                stroke="yellow"
                strokeWidth="4"
                strokeDasharray={`${latestScore?.score ?? 78}, 100`}
                strokeLinecap="round"
                fill="none"
                transform="rotate(-90 18 18)"
              />
              {/* Center Text */}
              <text
                x="18"
                y="18"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="6"
                fontWeight="bold"
                fill="white"
              >
                {latestScore?.score ?? 78}%
              </text>
            </svg>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Line Chart for Scores */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4">
              Activity Scores
            </h2>
            {scoreData.length === 0 ? (
              <p className="text-gray-500">No score data available.</p>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={scoreData}>
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Pie Chart for Activity Types */}
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <h2 className="font-semibold text-gray-800 mb-4">Activity Types</h2>
            {typeData.length === 0 ? (
              <p className="text-gray-500">No activity type data available.</p>
            ) : (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={typeData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {typeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend verticalAlign="bottom" height={36} />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Past Activities List */}
        {history.length === 0 ? (
          <p className="text-center text-gray-500">No past activities yet.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {history.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h2 className="font-semibold text-gray-800">{item.activity}</h2>
                <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                {item.type && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full">
                    {item.type}
                  </span>
                )}
                {item.score && (
                  <span className="inline-block mt-2 ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Score: {item.score}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardPage;
