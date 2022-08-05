import React, { useState } from "react";
import Expanses from "./components/Expense/Expanses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITAL_EXPENSES = [
  {
    id: "e1",
    title: "Dinner",
    amount: 15.75,
    date: new Date(2022, 7, 20)
  },
  {
    id: "e2",
    title: "Movie Ticket",
    amount: 10.99,
    date: new Date(2021, 7, 3)
  },
  {
    id: "e3",
    title: "Hotel",
    amount: 100.25,
    date: new Date(2022, 6, 28)
  }
];

function App() {

  const [expenses, setExpenses] = useState(INITAL_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expanses items={expenses} setExpenses={setExpenses}/>
    </div>
  );
}

export default App;
