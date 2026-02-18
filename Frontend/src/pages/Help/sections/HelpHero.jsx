// HelpHero.jsx
import React from "react";
import { FiUpload, FiBarChart2, FiShield, FiHeadphones } from "react-icons/fi";

const icons = [FiUpload, FiBarChart2, FiShield, FiHeadphones];

const HelpHero = ({ topics }) => {
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

        {/* Help Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {topics && topics.length > 0 ? (
            topics.map((topic, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-md hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer shadow-md"
                >
                  {/* Badge */}
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
                  <p className="text-sm text-slate-400 font-mono">
                    {topic.description}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-slate-400 text-center col-span-2">
              No help topics available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HelpHero;
