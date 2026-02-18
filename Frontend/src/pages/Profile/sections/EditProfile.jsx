// EditProfile.jsx
import React, { useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";
import axios from "../../../api/axios";

const EditProfile = ({ user, onCancel, onUpdate }) => {
  const [name, setName] = useState(user.name || "");
  const [role, setRole] = useState(user.role || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [linkedin, setLinkedin] = useState(user.linkedin || "");
  const [summary, setSummary] = useState(user.summary || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("linkedin", linkedin);
      formData.append("summary", summary);
      formData.append("skills", skills);
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

  const hasChanges =
    name !== user.name ||
    role !== user.role ||
    email !== user.email ||
    phone !== user.phone ||
    linkedin !== user.linkedin ||
    summary !== user.summary ||
    skills !== user.skills ||
    avatar;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Edit Profile
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-md"
      >
        {/* Avatar */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={avatarPreview || "https://i.pravatar.cc/150"}
            alt="Avatar Preview"
            className="w-32 h-32 rounded-full object-cover border-2 border-indigo-600"
          />
          <label className="flex items-center gap-2 cursor-pointer text-indigo-600 font-semibold mt-2">
            <FiUpload /> Change Avatar
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Name, Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Role / Title"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="LinkedIn / Portfolio"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Summary */}
        <textarea
          placeholder="Professional Summary"
          rows={3}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
        />

        {/* Skills */}
        <textarea
          placeholder="Skills (comma separated)"
          rows={2}
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
        />

        {/* Buttons */}
        <div className="flex justify-between items-center mt-2 gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-xl font-semibold"
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
