const HeroSection = ({ latestScore }) => {
  fetch("http://localhost:8080/api/resume/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Krushna", file: "resume.pdf" }),
  })
    .then((res) => res.json())
    .then(console.log);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] border-b-4 border-[#1a365d] py-16 lg:py-24">
      {/* Background SVG stays the same */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        {/* SVG content */}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-900">
              System Live: AI Verification Engine
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter">
            ATS{" "}
            <span className="text-blue-800 underline decoration-yellow-500 underline-offset-8">
              VALIDATION
            </span>
            <br />& ANALYSIS PORTAL
          </h1>

          <p className="mt-8 text-lg text-slate-700 leading-relaxed border-l-4 border-[#1a365d] pl-6 max-w-xl">
            Official infrastructure for document parsing. Our neural networks
            analyze semantic alignment between candidate profiles and industry
            benchmarks.
          </p>

          {/* Action Cards */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {/* Upload Module */}
            {/* Keep same */}

            {/* Requirement Module */}
            {/* Keep same */}
          </div>
        </div>

        {/* RIGHT SIDE - Data Visualization */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Decorative rings stay same */}

            {/* Main Score Display */}
            <div className="bg-white w-72 h-72 rounded-full border-[12px] border-slate-100 shadow-2xl flex flex-col items-center justify-center relative z-10">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                Index Score
              </span>
              <h2 className="text-7xl font-black text-[#1a365d]">
                {latestScore?.score ?? 0}
                <span className="text-3xl">%</span>
              </h2>
              <div
                className={`mt-2 px-4 py-1 text-[10px] font-black uppercase rounded-full ${latestScore?.score >= 80 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
              >
                {latestScore?.score >= 80 ? "High Match" : "Moderate Match"}
              </div>
            </div>

            {/* Floating Data Points */}
            <div className="absolute -top-4 -right-8 bg-white border border-slate-200 p-3 shadow-lg hidden lg:block">
              <p className="text-[9px] font-bold text-slate-400 uppercase">
                Keywords Found
              </p>
              <p className="text-lg font-black text-blue-800">
                {latestScore?.keywordsFound ?? 0} / 17
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
