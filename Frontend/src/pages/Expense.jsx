import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ExpenseTable from "../components/ExpenseTable";

const Expense = () => {
  return (
    <div className="min-h-screen bg-indigo-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6">
          <ExpenseTable />
        </main>
      </div>
    </div>
  );
};

export default Expense;