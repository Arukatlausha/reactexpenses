import React, { useState, useEffect } from 'react';
import { getMonthlyData } from '../utils/dateUtils';
import { useSelector } from 'react-redux';

const PersonForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });
  const [monthlyData, setMonthlyData] = useState({});
  
  // Fetching data from Redux store
  const expenses = useSelector((state) => state.expenses.expenses || []);
  const income = useSelector((state) => state.income.income || []);

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = getMonthlyData(income, expenses);
        console.log('Fetched data:', data); // For debugging
        setMonthlyData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [income, expenses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <h2 className="text-xl text-center mb-5">Enter Your Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Display fetched monthly data */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold">Monthly Data</h3>
        <div className="mt-4">
          <p><strong>Income:</strong> {monthlyData.monthlyIncome ? JSON.stringify(monthlyData.monthlyIncome) : 'Loading...'}</p>
          <p><strong>Expenses:</strong> {monthlyData.monthlyExpenses ? JSON.stringify(monthlyData.monthlyExpenses) : 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonForm;
