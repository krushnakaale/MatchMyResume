const ImpactStats = ({ stats }) => {
  if (!stats) return <p className="text-center py-16">Loading statistics...</p>;

  const data = [
    { number: stats.totalResumes || "0", label: "Documents Evaluated" },
    { number: stats.systemAccuracy + "%", label: "System Accuracy Rate" },
    {
      number: stats.registeredApplicants || "0",
      label: "Registered Applicants",
    },
    {
      number: stats.publicRating || "4.8 / 5",
      label: "Public Feedback Rating",
    },
  ];

  return (
    <section className="bg-white border-t border-b border-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 divide-x divide-slate-300 text-center">
          {data.map((stat, index) => (
            <div key={index} className="px-6">
              <h3 className="text-3xl font-extrabold text-blue-900">
                {stat.number}
              </h3>
              <p className="mt-2 text-slate-600 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
