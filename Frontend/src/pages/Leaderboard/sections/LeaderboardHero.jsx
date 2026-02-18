import React, { useState } from "react";

const COLORS = [
  {
    bar: "#facc15",
    glow: "rgba(250,204,21,0.25)",
    text: "text-yellow-400",
    badge: "bg-yellow-400/10 border-yellow-400/30",
  },
  {
    bar: "#818cf8",
    glow: "rgba(129,140,248,0.2)",
    text: "text-indigo-400",
    badge: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    bar: "#34d399",
    glow: "rgba(52,211,153,0.2)",
    text: "text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    bar: "#f472b6",
    glow: "rgba(244,114,182,0.15)",
    text: "text-pink-400",
    badge: "bg-pink-500/10 border-pink-500/20",
  },
  {
    bar: "#fb923c",
    glow: "rgba(251,146,60,0.15)",
    text: "text-orange-400",
    badge: "bg-orange-500/10 border-orange-500/20",
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
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
      </defs>

      {leaderboard.slice(0, 5).map((person, i) => {
        const progress = person.score / maxScore;
        const r = outerRadius - i * (ringWidth + gap / 2);
        const circumference = 2 * Math.PI * r;
        const arcLength = circumference * 0.75; // 270° arc
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
              strokeLinecap="round"
              transform={`rotate(${rotation} ${cx} ${cy})`}
              filter={isActive ? `url(#glow-${i})` : undefined}
              style={{
                transition: "stroke-dasharray 0.8s ease, opacity 0.3s",
                opacity: activeIdx !== null && !isActive ? 0.35 : 1,
              }}
            />
          </g>
        );
      })}

      {/* Center Label */}
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        fill="#fff"
        fontSize="14"
        fontWeight="600"
        fontFamily="monospace"
      >
        {activeIdx !== null
          ? `${leaderboard[activeIdx].name.split(" ")[0]} - ${leaderboard[activeIdx].score} pts`
          : "TOP PERFORMERS"}
      </text>
    </svg>
  );
};

const LeaderboardHero = ({ leaderboard }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const maxScore = Math.max(...leaderboard.map((p) => p.score));

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950/80 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-yellow-400 uppercase bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />{" "}
            Live Rankings
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Top <span className="text-yellow-400">Performers</span>
          </h1>
          <p className="text-sm text-slate-400 font-mono">
            Hover chart or list to explore scores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: Radial Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <RadialChart
              leaderboard={leaderboard}
              maxScore={maxScore}
              activeIdx={activeIdx}
              onHover={setActiveIdx}
            />
          </div>

          {/* Right: Rankings List */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {leaderboard.map((person, idx) => {
              const color = COLORS[idx % COLORS.length];
              const progress = (person.score / maxScore) * 100;
              const isActive = activeIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}
                  className={`rounded-xl border p-4 cursor-pointer transition-all duration-300 ${color.badge} ${isActive ? "scale-[1.03] shadow-2xl" : "hover:scale-[1.01]"} ${activeIdx !== null && !isActive ? "opacity-40" : "opacity-100"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-base w-7 text-center">
                        {idx < 3 ? MEDALS[idx] : `#${idx + 1}`}
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
