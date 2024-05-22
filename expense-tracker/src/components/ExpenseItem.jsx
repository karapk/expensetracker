import React from 'react';
import { format } from 'date-fns';

function ExpenseItem({ expense, removeExpense }) {
  return (
    <li>
      {expense.title}: ${expense.amount.toFixed(2)} on {format(expense.date, 'MM-dd-yyyy')}
      <button onClick={() => removeExpense(expense.id)}>Remove</button>
    </li>
  );
}

export default ExpenseItem;
