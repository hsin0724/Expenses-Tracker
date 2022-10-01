import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "../../styles/ExpensesList.css";

const ExpensesList = (props) => {

  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  };

  const removeExpenseHandler = (id) => {
    props.onRemoveExpense(id);
  }

  return (
    <ul className='expenses-list'>
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onRemove={() => removeExpenseHandler(expense.id)}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;