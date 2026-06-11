import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { addExpense } from "../services/expenseServices";

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addExpense(formData);

      setMessage("Transaction added successfully!");
      setIsError(false);

      setFormData({
        title: "",
        amount: "",
        category: "",
        type: "expense",
      });
    } catch (error) {
      console.error(error);

      setMessage("Failed to add transaction.");
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 flex justify-center items-start py-10 px-8">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-10">
              Add Transaction
            </h1>

            {message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  isError
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                  className="w-full h-14 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Amount
                </label>

                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                  className="w-full h-14 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full h-14 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Travel">Travel</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Bills">Bills</option>
                  <option value="Salary">Salary</option>
                  <option value="Freelancing">Freelancing</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Type
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full h-14 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg transition"
              >
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;