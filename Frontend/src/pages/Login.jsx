import React, { useState } from "react";
import { loginUser } from "../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-50">

      {/* Logo Section */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <img
          src={logo}
          alt="ExpenseFlow Logo"
          className="h-24 w-24 object-contain mb-3 drop-shadow-sm"
        />

        <h1 className="text-5xl font-black text-gray-900 tracking-tight">
          ExpenseFlow
        </h1>

        <p className="mt-2 text-lg text-gray-500">
          Sign in to continue managing your expenses
        </p>
      </div>

      {/* Login Card */}
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100 p-10">

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-2xl shadow-sm    h-16 px-4 focus-within:ring-2 focus-within:ring-purple-600">
           <Mail size={20} className="text-gray-400 mr-3 flex-shrink-0" />

           <input
               type="email"
               name="email"
               placeholder="Email Address"
               value={formData.email}
               onChange={handleChange}
               className="w-full outline-none text-lg bg-transparent"
              required
           />
          </div>

            {/* Password */}
            <div className="flex items-center border border-gray-300 rounded-2xl shadow-sm h-16 px-4 focus-within:ring-2 focus-within:ring-purple-600">
              <Lock
                size={20}
                className="text-gray-400 mr-3 flex-shrink-0"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none text-lg bg-transparent"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                h-16
                bg-gradient-to-r
                from-purple-600
                to-indigo-600
                text-white
                text-xl
                font-bold
                rounded-2xl
                shadow-lg
                hover:shadow-xl
                hover:scale-[1.01]
                transition-all
              "
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-purple-600 hover:text-purple-700 hover:underline"
              >
                Create Account
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;