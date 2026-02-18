import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] border-b-4 border-[#1a365d] py-16 lg:py-24">
      {/* ROBOTIC/TECHNICAL BACKGROUND ELEMENT */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Abstract Robotic Arm / Circuit Path Design */}
          <path
            d="M100 100 L150 150 L150 300 L300 300 L350 350"
            stroke="#1a365d"
            strokeWidth="20"
            fill="none"
          />
          <circle cx="350" cy="350" r="40" fill="#1a365d" />
          <path
            d="M700 700 L600 600 L500 600 L450 500"
            stroke="#1a365d"
            strokeWidth="15"
            fill="none"
          />
          <rect
            x="400"
            y="450"
            width="100"
            height="100"
            stroke="#1a365d"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
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
            </span>{" "}
            <br />& ANALYSIS PORTAL
          </h1>

          <p className="mt-8 text-lg text-slate-700 leading-relaxed border-l-4 border-[#1a365d] pl-6 max-w-xl">
            Official infrastructure for document parsing. Our neural networks
            analyze semantic alignment between candidate profiles and industry
            benchmarks.
          </p>

          {/* Action Cards (Structured Grid) */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {/* Upload Module */}
            <div className="group bg-white border border-slate-300 p-0 shadow-sm hover:border-[#1a365d] transition-all relative overflow-hidden">
              {/* Identification Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-2 flex justify-between items-center">
                <h3 className="text-[10px] font-black text-[#1a365d] uppercase tracking-[0.2em]">
                  Input Node: 01
                </h3>
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                </div>
              </div>

              <div className="p-5">
                <div className="relative border-2 border-dashed border-slate-200 group-hover:border-blue-400 py-10 text-center transition-colors bg-slate-50/50">
                  {/* Subtle Scanning Line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-in-out pointer-events-none"></div>

                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                    Secure Document Upload
                  </p>
                  <p className="text-[9px] text-slate-400 mt-1 uppercase font-medium">
                    Supported: PDF, DOCX (Max 5MB)
                  </p>
                </div>
                <button className="mt-4 w-full bg-[#1a365d] text-white py-3 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition shadow-[4px_4px_0px_0px_rgba(30,41,59,0.1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                  Initialize Upload
                </button>
              </div>
            </div>

            {/* Requirement Module */}
            <div className="group bg-white border border-slate-300 shadow-sm hover:border-[#1a365d] transition-all relative overflow-hidden rounded-md">
              {/* Identification Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-2 flex justify-between items-center">
                <h3 className="text-[10px] font-black text-[#1a365d] uppercase tracking-widest">
                  Input Node: 02
                </h3>
                {/* Animated Progress Bar */}
                <div className="h-1 w-10 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Textarea Section */}
              <div className="p-5">
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="ENTER SYSTEM REQUIREMENTS / JOB DESCRIPTION..."
                    className="w-full border border-slate-200 bg-[#fcfcfc] text-[11px] font-mono p-4 placeholder:text-slate-300 placeholder:uppercase placeholder:tracking-tight resize-none leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#1a365d] rounded-md"
                  />

                  {/* Terminal Corner Ornaments */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-300"></div>
                  <div className="absolute bottom-2 right-0 w-2 h-2 border-b border-r border-slate-300"></div>
                </div>

                {/* Status & Encoding */}
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 animate-pulse rounded-full"></div>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">
                      Awaiting Data String
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-300 font-mono italic">
                    UTF-8 ENCODING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Data Visualization */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Decorative Tech Rings */}
            <div className="absolute inset-0 rounded-full border border-blue-100 scale-125 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-0 rounded-full border-t-2 border-blue-800 scale-110 animate-[spin_4s_linear_infinite]"></div>

            {/* Main Score Display */}
            <div className="bg-white w-72 h-72 rounded-full border-[12px] border-slate-100 shadow-2xl flex flex-col items-center justify-center relative z-10">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">
                Index Score
              </span>
              <h2 className="text-7xl font-black text-[#1a365d]">
                82<span className="text-3xl">%</span>
              </h2>
              <div className="mt-2 px-4 py-1 bg-green-100 text-green-800 text-[10px] font-black uppercase rounded-full">
                High Match
              </div>
            </div>

            {/* Floating Data Points */}
            <div className="absolute -top-4 -right-8 bg-white border border-slate-200 p-3 shadow-lg hidden lg:block">
              <p className="text-[9px] font-bold text-slate-400 uppercase">
                Keywords Found
              </p>
              <p className="text-lg font-black text-blue-800">14 / 17</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
