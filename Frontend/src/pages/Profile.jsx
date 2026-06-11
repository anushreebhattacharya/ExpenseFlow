import React, { useEffect, useState } from "react";
import { User, Mail, ShieldAlert, Loader } from "lucide-react";
import { getProfile, updateProfile } from "../services/userServices";
import LoadBar from "../components/LoadBar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token"); 
  navigate("/");
};
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      
      // Fallback configuration if API returns 'username' instead of 'name'
      setProfile({
        name: data.name || data.username || "",
        email: data.email || "",
      });

      setTimeout(() => {
        setLoading(false);
      }, 50);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profile);
      setMessage("Profile updated successfully!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setMessage("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-xl font-bold text-gray-700">
        <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <LoadBar />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Header Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 h-32" />

        {/* Profile Avatar Wrapper */}
        <div className="flex justify-center -mt-14">
          <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white">
            <User size={55} className="text-purple-600" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-4 px-6">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Account Profile</h1>
          <p className="text-gray-500 mt-1 font-medium">Manage your personal information details</p>
        </div>

        {/* SECTION 1: Read-Only Current Profile Details Grid */}
        <div className="mx-8 mt-6 p-5 bg-purple-50/60 border border-purple-100 rounded-2xl">
          <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-3">Current Active Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
              <User size={18} className="text-purple-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Username / Name</p>
                <p className="text-sm font-bold text-gray-800 capitalize">{profile.name || "Not set"}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
              <Mail size={18} className="text-purple-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-400 font-medium">Email Address</p>
                <p className="text-sm font-bold text-gray-800 break-all">{profile.email || "Not set"}</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mx-8 mt-6 border-gray-200/80" />

        {/* SECTION 2: Update Input Form */}
        <form onSubmit={handleUpdate} className="p-8 pt-4 flex flex-col gap-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400">Update Information</h2>
          
          {message && (
            <div
              className={`text-center py-3 rounded-xl font-semibold transition-all ${
                message.includes("success")
                  ? "bg-green-50 border border-green-200 text-green-600"
                  : "bg-red-50 border border-red-200 text-red-600"
              }`}
            >
              {message}
            </div>
          )}

          {/* Name Field Group */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-sm">
              Username
            </label>
            <input
              type="text"
              name="name"
              value={profile.username}
              onChange={handleChange}
              className="w-full h-14 border border-gray-300 rounded-xl px-4 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Email Field Group */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full h-14 border border-gray-300 rounded-xl px-4 bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="mt-2 w-full h-14 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            Update Profile
          </button>
        </form>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleLogout}
          className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;