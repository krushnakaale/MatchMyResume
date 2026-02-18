const CoreFeatures = () => {
  const features = [
    {
      title: "AI Skill Extraction",
      desc: "Automated neural parsing of candidate competencies.",
      percentage: 98, // Accuracy metric
      color: "stroke-blue-800",
    },
    {
      title: "Ranking Algorithm",
      desc: "Standardized scoring for consistent role matching.",
      percentage: 85, // Efficiency metric
      color: "stroke-indigo-800",
    },
    {
      title: "Analytical Reports",
      desc: "Detailed breakdown of competency alignment and gaps.",
      percentage: 100, // Completeness metric
      color: "stroke-emerald-700",
    },
    {
      title: "National Benchmarking",
      desc: "Comparative performance metrics across verified applicants.",
      percentage: 72, // Market reach metric
      color: "stroke-amber-600",
    },
  ];

  return (
    <section className="bg-white border-t border-slate-200 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="border-l-8 border-blue-900 pl-6 mb-16">
          <p className="text-xs font-bold text-blue-900 uppercase tracking-[0.3em]">
            System Intelligence Metrics
          </p>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mt-2">
            Operational <span className="text-blue-900">Capabilities</span>
          </h2>
        </div>

        {/* Circular Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((item, index) => {
            // Calculate SVG Dash Array for the "Pie" effect
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const offset =
              circumference - (item.percentage / 100) * circumference;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Gauge / Circular Chart */}
                <div className="relative mb-6">
                  <svg className="w-32 h-32 transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r={radius}
                      className="stroke-slate-100 fill-none"
                      strokeWidth="8"
                    />
                    {/* Progress Circle (The Pie Part) */}
                    <circle
                      cx="64"
                      cy="64"
                      r={radius}
                      className={`${item.color} fill-none transition-all duration-1000 ease-out`}
                      strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="square"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-black text-slate-800">
                      {item.percentage}%
                    </span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                      Status
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="border-t border-slate-100 pt-4 w-full">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide mb-2 group-hover:text-blue-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[40px]">
                    {item.desc}
                  </p>
                </div>

                {/* Official Status Badge */}
                <div className="mt-4 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  System Verified
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
