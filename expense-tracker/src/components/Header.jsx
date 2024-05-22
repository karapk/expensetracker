import React from 'react';

function Header({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <header>
      <h1>Expense Tracker</h1>
      <div>Total Expense: ${total.toFixed(2)}</div>
    </header>
  );
}

export default Header;
