import React, { useState } from "react";
import { updateExpense } from "../services/expenseServices";

const ExpenseCard = ({ expense, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: expense.title,
    amount: expense.amount,
    category: expense.category,
    type: expense.type,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateExpense(expense._id, formData);

      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating expense:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-indigo-900">
            Edit Transaction
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Amount
            </label>

            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Type
            </label>

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              Update Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseCard;