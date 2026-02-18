const ResultSection = ({ result }) => {
  if (!result) return null; // Show nothing if no result yet

  return (
    <section className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          ATS Evaluation Result
        </h2>
        <p className="text-slate-600 mb-8">
          This is a simulated score based on your uploaded document and job
          description.
        </p>

        <div className="bg-white rounded shadow p-8 inline-block">
          <h3 className="text-6xl font-black text-blue-800">
            {result.matchScore}%
          </h3>
          <p className="text-sm text-slate-500 mt-2">
            {result.level} – Keywords: {result.keywordsMatched}/
            {result.totalKeywords}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
