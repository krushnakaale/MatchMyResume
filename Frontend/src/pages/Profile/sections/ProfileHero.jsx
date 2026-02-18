// ProfileHero.jsx
import React, { useState, useRef } from "react";
import EditProfile from "./EditProfile";
import { FiEdit2, FiDownload } from "react-icons/fi";
import html2canvas from "html2canvas";

const ProfileHero = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const profileRef = useRef(null);

  const handleDownload = async () => {
    if (!profileRef.current) return;
    const canvas = await html2canvas(profileRef.current);
    const dataURL = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = dataURL;
    a.download = `${user.name || "resume"}_profile.png`;
    a.click();
  };

  return (
    <section className="min-h-[40vh] py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        {isEditing ? (
          <EditProfile user={user} onCancel={() => setIsEditing(false)} />
        ) : (
          <div
            ref={profileRef}
            className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 shadow-md"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-2 border-indigo-600 object-cover"
              />
              <div className="flex-1 space-y-2 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user.name}
                </h1>
                <p className="text-indigo-600 font-semibold">{user.role}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 font-mono mt-1">
                  {user.email && <span>{user.email}</span>}
                  {user.phone && <span>{user.phone}</span>}
                  {user.linkedin && <span>{user.linkedin}</span>}
                </div>
              </div>
            </div>

            {/* Summary */}
            {user.summary && (
              <div>
                <h2 className="font-semibold text-gray-700 mb-1">Summary</h2>
                <p className="text-gray-800">{user.summary}</p>
              </div>
            )}

            {/* Skills */}
            {user.skills && (
              <div>
                <h2 className="font-semibold text-gray-700 mb-1">Skills</h2>
                <p className="text-gray-800">{user.skills}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold"
              >
                <FiEdit2 /> Edit
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-xl font-semibold"
              >
                <FiDownload /> Download
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileHero;
