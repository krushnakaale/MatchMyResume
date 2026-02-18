// JobHero.jsx
import React from "react";

const JobHero = ({ title, description, imageUrl, onCheckResume }) => {
  return (
    <div className="job-card bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 hover:shadow-xl transition w-full max-w-md mx-auto">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-lg"
        />
      )}

      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {onCheckResume && (
        <button
          onClick={onCheckResume}
          className="mt-2 md:mt-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
        >
          Check Resume
        </button>
      )}
    </div>
  );
};

export default JobHero;
