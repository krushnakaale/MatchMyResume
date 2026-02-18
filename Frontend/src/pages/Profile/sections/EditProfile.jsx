// EditProfile.jsx
import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import { FiUpload, FiX } from "react-icons/fi";

const EditProfile = ({ user, onCancel, onUpdate }) => {
  const [name, setName] = useState(user.name || "");
  const [role, setRole] = useState(user.role || "");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle avatar file selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      if (avatar) formData.append("avatar", avatar);

      const res = await axios.put(`/profile/${user._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("Profile updated successfully!");
      if (onUpdate) onUpdate(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  // Check if form has changes
  const hasChanges = name !== user.name || role !== user.role || avatar;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Edit Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 shadow-md"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center gap-2 relative">
          <img
            src={avatarPreview || "https://i.pravatar.cc/150"}
            alt="Avatar Preview"
            className="w-32 h-32 rounded-full object-cover border-2 border-indigo-600 shadow-md"
          />
          <label className="flex items-center gap-2 cursor-pointer text-indigo-600 font-semibold mt-2">
            <FiUpload />
            <span>Change Avatar</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-mono text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-900"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col">
          <label className="text-sm font-mono text-gray-600">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-900"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-xl font-semibold transition-all duration-200"
          >
            <FiX /> Cancel
          </button>

          <button
            type="submit"
            disabled={loading || !hasChanges}
            className={`flex-1 py-3 rounded-xl font-bold transition-all duration-200 ${
              loading || !hasChanges
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500 text-white"
            }`}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Feedback */}
        {message && (
          <p
            className={`text-center mt-2 font-semibold ${
              message.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
