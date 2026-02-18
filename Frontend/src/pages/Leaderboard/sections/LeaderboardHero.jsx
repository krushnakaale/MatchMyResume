import React, { useState } from "react";

const COLORS = [
  {
    bar: "#facc15",
    glow: "rgba(250,204,21,0.35)",
    text: "text-yellow-400",
    badge: "bg-yellow-400/10 border-yellow-400/30",
    ring: "#facc15",
  },
  {
    bar: "#818cf8",
    glow: "rgba(129,140,248,0.3)",
    text: "text-indigo-400",
    badge: "bg-indigo-500/10 border-indigo-500/20",
    ring: "#818cf8",
  },
  {
    bar: "#34d399",
    glow: "rgba(52,211,153,0.3)",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20",
    ring: "#34d399",
  },
  {
    bar: "#f472b6",
    glow: "rgba(244,114,182,0.25)",
    text: "text-pink-400",
    badge: "bg-pink-500/10 border-pink-500/20",
    ring: "#f472b6",
  },
  {
    bar: "#fb923c",
    glow: "rgba(251,146,60,0.25)",
    text: "text-orange-400",
    badge: "bg-orange-500/10 border-orange-500/20",
    ring: "#fb923c",
  },
];

const MEDALS = ["🥇", "🥈", "🥉"];

const RadialChart = ({ leaderboard, maxScore, activeIdx, onHover }) => {
  const cx = 130,
    cy = 130,
    gap = 6;
  const totalRings = Math.min(leaderboard.length, 5);
  const outerRadius = 118;
  const ringWidth = (outerRadius - 20) / totalRings;

  return (
    <div className="flex flex-col items-center">
      <svg width="260" height="260" viewBox="0 0 260 260">
        <defs>
          {COLORS.map((c, i) => (
            <filter
              key={i}
              id={`glow-${i}`}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>

        {leaderboard.slice(0, 5).map((person, i) => {
          const progress = person.score / maxScore;
          const r = outerRadius - i * (ringWidth + gap / 2);
          const circumference = 2 * Math.PI * r;
          const arcLength = circumference * 0.75;
          const filledLength = arcLength * progress;
          const rotation = 135;
          const isActive = activeIdx === i;

          return (
            <g
              key={i}
              onMouseEnter={() => onHover(i)}
              onMouseLeave={() => onHover(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Track */}
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth={ringWidth - gap}
                strokeDasharray={`${arcLength} ${circumference}`}
                strokeDashoffset={0}
                strokeLinecap="round"
                transform={`rotate(${rotation} ${cx} ${cy})`}
              />
              {/* Fill */}
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke={COLORS[i % COLORS.length].bar}
                strokeWidth={ringWidth - gap}
                strokeDasharray={`${filledLength} ${circumference}`}
                strokeDashoffset={0}
                strokeLinecap="round"
                transform={`rotate(${rotation} ${cx} ${cy})`}
                filter={isActive ? `url(#glow-${i})` : undefined}
                style={{
                  transition: "stroke-dasharray 1s ease, opacity 0.3s",
                  opacity: activeIdx !== null && !isActive ? 0.3 : 1,
                }}
              />
            </g>
          );
        })}

        {/* Center */}
        {activeIdx !== null ? (
          <>
            <text
              x={cx}
              y={cy - 10}
              textAnchor="middle"
              fill={COLORS[activeIdx % COLORS.length].bar}
              fontSize="24"
              fontWeight="800"
              fontFamily="monospace"
            >
              {leaderboard[activeIdx]?.score}
            </text>
            <text
              x={cx}
              y={cy + 10}
              textAnchor="middle"
              fill="rgba(255,255,255,0.5)"
              fontSize="10"
              fontFamily="monospace"
            >
              PTS
            </text>
            <text
              x={cx}
              y={cy + 28}
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="12"
              fontFamily="sans-serif"
              fontWeight="600"
            >
              {leaderboard[activeIdx]?.name.split(" ")[0]}
            </text>
          </>
        ) : (
          <>
            <text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="700"
              fontFamily="sans-serif"
            >
              LEADERBOARD
            </text>
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontSize="9"
              fontFamily="monospace"
              letterSpacing="1"
            >
              HOVER TO EXPLORE
            </text>
          </>
        )}
      </svg>

      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {leaderboard.slice(0, 5).map((p, i) => (
          <button
            key={i}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
            className="flex items-center gap-1.5 transition-opacity duration-200"
            style={{ opacity: activeIdx !== null && activeIdx !== i ? 0.3 : 1 }}
          >
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: COLORS[i % COLORS.length].bar }}
            />
            <span className="text-xs text-slate-400 font-mono truncate max-w-[60px]">
              {p.name.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const dummyLeaderboard = [
  { name: "Aarav Shah", role: "Full Stack Dev", score: 980 },
  { name: "Priya Nair", role: "ML Engineer", score: 870 },
  { name: "Rohit Kulkarni", role: "Backend Dev", score: 810 },
  { name: "Sneha Patil", role: "UI Designer", score: 740 },
  { name: "Dev Mehta", role: "DevOps Eng", score: 690 },
];

const LeaderboardHero = ({ leaderboard = dummyLeaderboard }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const maxScore = Math.max(...leaderboard.map((p) => p.score));

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950/80 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />{" "}
            Live Rankings
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Top <span className="text-yellow-400">Performers</span>
          </h1>
          <p className="text-sm text-slate-400 font-mono">
            Hover the chart to explore scores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: Radial Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">
              Score Distribution
            </p>
            <RadialChart
              leaderboard={leaderboard}
              maxScore={maxScore}
              activeIdx={activeIdx}
              onHover={setActiveIdx}
            />
          </div>

          {/* Right: Rankings List */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">
              Rankings
            </p>

            {leaderboard.map((person, idx) => {
              const color = COLORS[idx % COLORS.length];
              const progress = (person.score / maxScore) * 100;
              const isActive = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  className={`rounded-xl border p-4 cursor-pointer transition-all duration-300 ${color.badge}
                    ${isActive ? "scale-[1.03] shadow-2xl" : "hover:scale-[1.01]"}
                    ${activeIdx !== null && !isActive ? "opacity-40" : "opacity-100"}`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-base w-7 text-center">
                        {idx < 3 ? (
                          MEDALS[idx]
                        ) : (
                          <span className="text-xs font-bold text-slate-500 font-mono">
                            #{idx + 1}
                          </span>
                        )}
                      </span>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-slate-900"
                        style={{ background: color.bar }}
                      >
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white leading-none">
                          {person.name}
                        </p>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {person.role}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-bold font-mono ${color.text}`}
                    >
                      {person.score.toLocaleString()} pts
                    </span>
                  </div>

                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%`, background: color.bar }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardHero;
