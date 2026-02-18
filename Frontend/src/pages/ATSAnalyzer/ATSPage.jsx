import { useState } from "react";
import ATSHero from "./sections/ATSHero";
// import ResultSection from "./sections/ResultSection ";
// import ScoreBreakdown from "./sections/ScoreBreakdown";

const ATSPage = () => {
  // Local state to store analysis result and skills
  const [result, setResult] = useState(null);
  const [skills, setSkills] = useState([]);

  // Simulate analysis
  const handleAnalyze = ({ resumeFile, jobDesc }) => {
    // Dummy result data
    const dummyResult = {
      matchScore: 82,
      keywordsMatched: 14,
      totalKeywords: 17,
      level: "High Match",
    };

    const dummySkills = [
      { skill: "JavaScript", score: 90 },
      { skill: "React.js", score: 85 },
      { skill: "Node.js", score: 78 },
      { skill: "Tailwind CSS", score: 95 },
      { skill: "MongoDB", score: 80 },
    ];

    // Update local state
    setResult(dummyResult);
    setSkills(dummySkills);
  };

  return (
    <>
      <ATSHero onAnalyze={handleAnalyze} />
      {/* <ResultSection result={result} /> */}
      {/* <ScoreBreakdown skills={skills} /> */}
    </>
  );
};

export default ATSPage;
