import React from "react";

const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-3xl font-bold text-indigo-700 mt-2">
        ₹{amount}
      </p>
    </div>
  );
};

export default SummaryCard;