import React, { useState } from "react";
import { FiUpload, FiBarChart2, FiShield, FiHeadphones } from "react-icons/fi";

// Icons mapping
const icons = [FiUpload, FiBarChart2, FiShield, FiHeadphones];

// Detailed component
const HelpDetail = ({ topic, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto bg-slate-800 rounded-2xl p-8 shadow-lg space-y-6">
        <button
          className="text-indigo-400 hover:text-white font-bold"
          onClick={onBack}
        >
          ← Back
        </button>
        <h2 className="text-3xl font-extrabold">{topic.title}</h2>
        <p className="text-slate-300 font-mono">{topic.description}</p>
        {topic.details && (
          <div className="mt-4 text-slate-200 space-y-2">
            {topic.details.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const HelpHero = ({ topics }) => {
  const [activeTopic, setActiveTopic] = useState(null);

  if (activeTopic) {
    // Show detailed component if a card is clicked
    return (
      <HelpDetail topic={activeTopic} onBack={() => setActiveTopic(null)} />
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Help Center
          </span>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            How Can We Assist You?
          </h1>
          <p className="text-sm text-slate-400 font-mono max-w-2xl mx-auto">
            Browse common questions or reach out to our support team for quick
            assistance.
          </p>
        </div>

        {/* Grid of topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics.map((topic, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                onClick={() => setActiveTopic(topic)}
                className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer shadow-md"
              >
                <div className="absolute -top-3 left-4 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {idx + 1}
                </div>

                <div className="flex items-center gap-4 mb-3 mt-2">
                  <div className="p-3 bg-indigo-600 rounded-xl text-white shadow-lg group-hover:bg-indigo-500 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {topic.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-400 font-mono truncate">
                  {topic.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HelpHero;
