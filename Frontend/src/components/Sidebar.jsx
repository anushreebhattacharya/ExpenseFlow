import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ReceiptText,
  PlusCircle
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-800 to-purple-900 text-slate-300 h-[calc(100vh-4rem)] border-r border-purple-700 p-4 shrink-0">

      <div className="flex flex-col gap-8 mt-2">

        <p className="px-4 text-xs font-bold text-purple-200 uppercase tracking-[0.2em]">
          Workspace
        </p>

        <nav className="flex flex-col gap-2">

          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive('/dashboard')
                ? 'bg-white/15 text-white shadow-lg'
                : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/expenses"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive('/expenses')
                ? 'bg-white/15 text-white shadow-lg'
                : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <ReceiptText size={18} />
            <span>All Expenses</span>
          </Link>

          <Link
            to="/add-expense"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              isActive('/add-expense')
                ? 'bg-white/15 text-white shadow-lg'
                : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            <PlusCircle size={18} />
            <span>Add Expense</span>
          </Link>

        </nav>
      </div>

      <div className="mt-auto pt-6 border-t border-purple-700">
        <p className="text-xs text-purple-200 text-center">
          ExpenseFlow v1.0
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;