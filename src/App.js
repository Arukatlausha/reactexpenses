import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import Personform from './components/Personform';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex justify-around">
            <li>
              <Link to="/" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/income" className="hover:underline">Income</Link>
            </li>
            <li>
              <Link to="/expense" className="hover:underline">Expense</Link>
            </li>
            <li>
              <Link to="/person" className="hover:underline">Person</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
          <Route path="/person" element={<Personform/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
