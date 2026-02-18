const WorkflowSection = () => {
  const steps = [
    {
      title: "Upload Resume",
      desc: "Submit your document in PDF/DOCX format for standardized evaluation.",
    },
    {
      title: "Enter Job Criteria",
      desc: "Provide the official job description for benchmark comparison.",
    },
    {
      title: "Receive Evaluation",
      desc: "Get a certified compatibility score with detailed remarks.",
    },
  ];

  return (
    <section className="bg-slate-100 border-t border-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm text-blue-900 font-semibold uppercase tracking-widest">
            Official Procedure
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 uppercase tracking-wide mt-2">
            Evaluation Process
          </h2>
          <div className="w-28 h-1 bg-blue-900 mx-auto mt-4"></div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-slate-300"></div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded border border-slate-300 p-4 text-center relative"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-blue-900 text-white font-bold text-xl relative z-10">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-800 uppercase tracking-wide">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-1 w-12 bg-yellow-500 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
