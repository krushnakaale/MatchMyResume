// ProfileHero.jsx
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import EditProfile from "./EditProfile";

const ProfileHero = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-indigo-600 object-cover shadow-md"
            />
          </div>

          {/* User Info or Edit Form */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            {isEditing ? (
              <>
                <EditProfile user={user} onCancel={() => setIsEditing(false)} />
                <div className="flex justify-center md:justify-start mt-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-xl font-semibold transition-all duration-200"
                  >
                    View Profile
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                  {user.name}
                </h1>
                <p className="text-sm text-gray-500 font-mono">{user.role}</p>

                {/* Stats */}
                <div className="flex justify-center md:justify-start gap-6 mt-4">
                  <div className="text-center">
                    <span className="block text-xl font-bold text-gray-900">
                      {user.posts}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      Posts
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl font-bold text-gray-900">
                      {user.followers}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      Followers
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-xl font-bold text-gray-900">
                      {user.following}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      Following
                    </span>
                  </div>
                </div>

                {/* Edit Button */}
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold transition-all duration-200"
                  >
                    <FiEdit2 /> Edit Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Past Activities */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Past Activities</h2>
          {user.history && user.history.length > 0 ? (
            <ul className="space-y-3">
              {user.history.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex justify-between items-center"
                >
                  <span className="text-gray-700">{item.activity}</span>
                  <span className="text-xs text-gray-400 font-mono">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-sm text-center">
              No past activities yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
