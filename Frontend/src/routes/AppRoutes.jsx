import React from 'react'; // Fixed capitalization of React
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Expense from '../pages/Expense';
import AddExpense from '../pages/AddExpense';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard'; 
import Profile from '../pages/Profile'

const AppRoutes = () => {
  return (
    // Removed <Router> from here so it can live cleanly inside App.jsx wrapping everything
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/expenses" element={<Expense />} />
      <Route path="/add-expense" element={<AddExpense />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Fixed component reference */}
      <Route path="*" element={<NotFound />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;