import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import "../../styles/NewExpense.css";

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);
  
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    setShowForm(false);
  }

  const startEditHandler = () => {
    setShowForm(true);
  }

  const CancelHandler = () => {
    setShowForm(false);
  };
  
  //  return a form for user's input
  return (
    <div className='new-expense'>
        { !showForm && <button type="button" onClick={startEditHandler}>Add New Expense</button>}
        { showForm && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCanael={CancelHandler}/>}
    </div>
  )
}

export default NewExpense;