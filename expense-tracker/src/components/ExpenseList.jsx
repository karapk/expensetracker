import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, removeExpense }) {
  return (
    <ul>
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} removeExpense={removeExpense} />
      ))}
    </ul>
  );
}

export default ExpenseList;
