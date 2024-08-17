import React from 'react';
import IncomeForm from '../components/IncomeForm';
import IncomeList from '../components/IncomeList';

const IncomePage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl text-center mb-10">Income Management</h1>
      <div className="flex justify-center space-x-10">
        <div>
          <h2 className="text-xl text-center mb-5">Add Income</h2>
          <IncomeForm />
        </div>
        <div>
          <h2 className="text-xl text-center mb-5">Income List</h2>
          <IncomeList />
        </div>
      </div>
    </div>
  );
};

export default IncomePage;
