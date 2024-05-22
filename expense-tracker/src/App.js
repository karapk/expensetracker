import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <Header expenses={expenses} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

