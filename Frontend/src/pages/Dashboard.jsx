import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SummaryCard from "../components/SummaryCard";
import ExpenseTable from "../components/ExpenseTable";
import { getExpenses } from "../services/expenseServices";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalIncome = expenses
    .filter((expense) => expense.type === "income")
    .reduce((total, expense) => total + expense.amount, 0);

  const totalExpense = expenses
    .filter((expense) => expense.type === "expense")
    .reduce((total, expense) => total + expense.amount, 0);

  const balance = totalIncome - totalExpense;

  const recentTransactions = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-indigo-700">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-indigo-900">
              Dashboard
            </h1>

            <p className="text-gray-600 mt-2">
              Track your income and expenses efficiently.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SummaryCard
              title="Total Income"
              amount={`₹${totalIncome}`}
            />

            <SummaryCard
              title="Total Expense"
              amount={`₹${totalExpense}`}
            />

            <SummaryCard
              title="Balance"
              amount={`₹${balance}`}
            />
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-indigo-900 mb-4">
              Recent Transactions
            </h2>

            {recentTransactions.length > 0 ? (
              <ExpenseTable expenses={recentTransactions} />
            ) : (
              <p className="text-gray-500">
                No transactions found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;