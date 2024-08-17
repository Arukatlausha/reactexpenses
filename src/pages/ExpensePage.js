import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const ExpensePage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl text-center mb-10">Expense Management</h1>
      <div className="flex justify-center space-x-10">
        <div>
          <h2 className="text-xl text-center mb-5">Add Expense</h2>
          <ExpenseForm />
        </div>
        <div>
          <h2 className="text-xl text-center mb-5">Expense List</h2>
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default ExpensePage;
