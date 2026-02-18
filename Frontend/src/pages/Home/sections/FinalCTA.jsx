import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="bg-blue-900 py-16 text-white border-t-4 border-yellow-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold uppercase tracking-wide">
          Begin Official Document Evaluation
        </h2>

        <p className="mt-4 text-blue-100 text-sm">
          Access the certified AI recruitment assessment system and verify your
          application compatibility today.
        </p>

        <Link
          to="/ats"
          className="inline-block rounded mt-8 bg-white text-blue-900 px-8 py-3 font-bold uppercase hover:bg-slate-100 transition"
        >
          Access Analyzer Portal
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
