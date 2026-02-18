// JobPage.jsx
import React from "react";
import JobHero from "./secttions/JobHero";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const JobPage = () => {
  const sampleImages = [
    "https://images.unsplash.com/photo-1581091012184-7f9e5aef0b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZyb250ZW5kJTIwZGV2ZWxvcGVyfGVufDB8fHx8MTY5NzQ1MjM0NQ&ixlib=rb-4.0.3&q=80&w=200", // Frontend Developer
    "https://images.unsplash.com/photo-1581090460680-3c9b914e37f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGJhY2tlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNjk3NDUyMzU5&ixlib=rb-4.0.3&q=80&w=200", // Backend Developer
    "https://images.unsplash.com/photo-1612831455547-4e77d82321c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHVpJTIwdXglMjBkZXNpZ25lcnd8ZW58MHx8fHwxNjk3NDUyMzc1&ixlib=rb-4.0.3&q=80&w=200", // UI/UX Designer
    "https://images.unsplash.com/photo-1581091215362-8f38dbcf9f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGRldm9wcyUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTY5NzQ1MjM5MQ&ixlib=rb-4.0.3&q=80&w=200", // DevOps Engineer
    "https://images.unsplash.com/photo-1590608897129-79f5766d8a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxkYXRhJTIwc2NpZW50aXN0fGVufDB8fHx8MTY5NzQ1MjQwOQ&ixlib=rb-4.0.3&q=80&w=200", // Data Scientist
    "https://images.unsplash.com/photo-1590608897129-3f839d8d2d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxtb2JpbGUlMjBkZXZlbG9wZXJ8ZW58MHx8fHwxNjk3NDUyNDI0&ixlib=rb-4.0.3&q=80&w=200", // Mobile App Developer
    "https://images.unsplash.com/photo-1581091012184-0f9d1c9b5f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHtwcm9kdWN0JTIwbWFuYWdlcnxlbnwwfHx8fDE2OTc0NTI0NDk&ixlib=rb-4.0.3&q=80&w=200", // Product Manager
  ];

  const jobRoles = [
    {
      title: "Frontend Developer",
      description: "Build UI with React.",
      percentage: 25,
    },
    {
      title: "Backend Developer",
      description: "Work on APIs.",
      percentage: 15,
    },
    {
      title: "UI/UX Designer",
      description: "Design user experiences.",
      percentage: 10,
    },
    {
      title: "DevOps Engineer",
      description: "Manage infrastructure.",
      percentage: 10,
    },
    {
      title: "Data Scientist",
      description: "Analyze data and build models.",
      percentage: 15,
    },
    {
      title: "Mobile App Developer",
      description: "Create mobile apps.",
      percentage: 15,
    },
    {
      title: "Product Manager",
      description: "Lead product strategy.",
      percentage: 10,
    },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AA336A",
    "#9933FF",
    "#FF3333",
  ];

  const handleCheckResume = (role) => {
    alert(`Checking resumes for ${role}`);
  };

  // Sample images for prototype
  //   const sampleImages = [
  //     "https://via.placeholder.com/150/0088FE/ffffff?text=Frontend",
  //     "https://via.placeholder.com/150/00C49F/ffffff?text=Backend",
  //     "https://via.placeholder.com/150/FFBB28/ffffff?text=UIUX",
  //     "https://via.placeholder.com/150/FF8042/ffffff?text=DevOps",
  //     "https://via.placeholder.com/150/AA336A/ffffff?text=Data",
  //     "https://via.placeholder.com/150/9933FF/ffffff?text=Mobile",
  //     "https://via.placeholder.com/150/FF3333/ffffff?text=PM",
  //   ];

  return (
    <div className="job-page container mx-auto p-6 space-y-8">
      {/* Trending Job Roles Pie Chart */}
      <div className="trending-chart bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Trending Job Roles</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={jobRoles}
              dataKey="percentage"
              nameKey="title"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {jobRoles.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Job Cards Grid with Sample Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {jobRoles.map((job, index) => (
          <JobHero
            key={index}
            title={job.title}
            description={job.description}
            imageUrl={sampleImages[index]}
            onCheckResume={() => handleCheckResume(job.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default JobPage;
