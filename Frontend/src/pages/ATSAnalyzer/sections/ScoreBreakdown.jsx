const ScoreBreakdown = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Skill Match Breakdown
        </h2>

        <div className="space-y-4">
          {skills.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-slate-700">
                  {item.skill}
                </span>
                <span className="font-bold text-slate-900">{item.score}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded h-3">
                <div
                  className="bg-blue-800 h-3 rounded transition-all duration-700"
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScoreBreakdown;
