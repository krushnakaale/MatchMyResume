import { useState } from "react";

const ATSHero = ({ onAnalyze }) => {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e) => setResumeFile(e.target.files[0]);

  const handleAnalyze = () => {
    if (!resumeFile || !jobDesc) {
      alert("Please upload a resume and enter a job description!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const dummyResult = {
        score: 78,
        level: "Good Match",
        skillsMatched: ["React", "Docker"],
        totalSkills: ["React", "Node.js", "Docker", "MongoDB"],
      };
      setResult(dummyResult);
      setLoading(false);
      if (onAnalyze) onAnalyze({ resumeFile, jobDesc });
    }, 1200);
  };

  const circumference = 2 * Math.PI * 54;
  const offset = result
    ? circumference - (circumference * result.score) / 100
    : circumference;

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900/100 to-slate-950/80 py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            ATS Resume Analyzer
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Check Your Resume <span className="text-indigo-400">Score</span>
          </h1>
          <p className="text-sm text-slate-400 font-mono">
            Upload resume + paste job description → get instant ATS
            compatibility score
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* File Upload */}
            <div className="space-y-2">
              <label className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Resume File
              </label>
              <label className="cursor-pointer block">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleUpload}
                  className="hidden"
                />
                <div
                  className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl p-8 transition-all duration-200
              ${
                resumeFile
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-white/10 bg-white/5 hover:border-indigo-500 hover:bg-indigo-500/10"
              }`}
                >
                  {resumeFile ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-indigo-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-indigo-300 font-medium text-center break-all">
                        {resumeFile.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        Click to change
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-slate-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-400">
                        Click to upload resume
                      </span>
                      <span className="text-xs text-slate-500">
                        PDF, DOC, DOCX
                      </span>
                    </>
                  )}
                </div>
              </label>
            </div>

            {/* Job Description */}
            <div className="space-y-2">
              <label className="text-xs font-mono tracking-widest text-slate-400 uppercase">
                Job Description
              </label>
              <textarea
                rows={7}
                placeholder="Paste the job description here..."
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-400 resize-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 font-mono backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-white/10 disabled:cursor-not-allowed text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm tracking-wide"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </div>

        {/* Result Card */}
        {result && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-md">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Skill Breakdown</h2>
              <span
                className={`text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full border
          ${
            result.score >= 75
              ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
              : result.score >= 50
                ? "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
                : "text-red-400 bg-red-500/10 border-red-500/20"
          }`}
              >
                {result.level}
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* SVG Circle Score */}
              <div className="flex flex-col items-center gap-3 shrink-0">
                <div className="relative">
                  <svg
                    width="140"
                    height="140"
                    viewBox="0 0 140 140"
                    className="-rotate-90"
                  >
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="10"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r="54"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      style={{ transition: "stroke-dashoffset 1s ease" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-white">
                      {result.score}%
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      ATS Score
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  {result.skillsMatched.length}/{result.totalSkills.length}{" "}
                  skills matched
                </p>
              </div>

              {/* Skills List */}
              <div className="flex-1 w-full space-y-2.5">
                {result.totalSkills.map((skill, idx) => {
                  const matched = result.skillsMatched.includes(skill);
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-200
                ${
                  matched
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-white/10 bg-white/5"
                }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${matched ? "bg-emerald-400" : "bg-white/30"}`}
                        />
                        <span
                          className={`text-sm font-semibold ${matched ? "text-white" : "text-slate-400"}`}
                        >
                          {skill}
                        </span>
                      </div>
                      {matched ? (
                        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                          ✓ Matched
                        </span>
                      ) : (
                        <span className="text-xs font-mono text-slate-400 bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-full">
                          Missing
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ATSHero;
