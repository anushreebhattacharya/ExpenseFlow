import React, { useEffect, useState } from "react";
import {
  getExpenses,
  deleteExpense,
} from "../services/expenseServices";
import ExpenseCard from "./ExpenseCard";

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();

      const sortedExpenses = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setExpenses(sortedExpenses);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (expense) => {
    setSelectedExpense(expense);
    setShowEditModal(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmDelete) return;

    try {
      await deleteExpense(id);
      fetchExpenses();
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-6">
        <p className="text-indigo-700 font-medium">
          Loading transactions...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">
          All Transactions
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-indigo-100 text-indigo-900">
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {expenses.length > 0 ? (
                expenses.map((expense) => (
                  <tr
                    key={expense._id}
                    className="border-b hover:bg-indigo-50 transition"
                  >
                    <td className="p-3">{expense.title}</td>

                    <td className="p-3">{expense.category}</td>

                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-medium ${
                          expense.type === "income"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {expense.type}
                      </span>
                    </td>

                    <td className="p-3 font-semibold">
                      ₹{expense.amount}
                    </td>

                    <td className="p-3">
                      {new Date(expense.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    <td className="p-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => handleEdit(expense)}
                          className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(expense._id)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && selectedExpense && (
        <ExpenseCard
          expense={selectedExpense}
          onClose={() => {
            setShowEditModal(false);
            setSelectedExpense(null);
          }}
          onUpdate={fetchExpenses}
        />
      )}
    </>
  );
};

export default ExpenseTable;