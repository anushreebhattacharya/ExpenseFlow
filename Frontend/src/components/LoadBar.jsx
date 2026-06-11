import React from "react";

const LoadBar = ({ text = "Loading profile..." }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute w-16 h-16 rounded-full bg-purple-200 animate-ping opacity-75"></div>
        
        {/* Middle spinning gradient wheel */}
        <div className="w-14 h-14 border-4 border-t-purple-600 border-r-indigo-500 border-b-purple-300 border-l-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Dynamic textual feedback */}
      <p className="mt-6 text-lg font-bold text-gray-700 tracking-wide animate-pulse">
        {text}
      </p>
    </div>
  );
};

export default LoadBar;