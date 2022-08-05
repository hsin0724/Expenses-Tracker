import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "../../styles/Expenses.css";

const Expanses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectChangeHandler = (selectValue) => {
    setSelectedYear(selectValue);
  };

  const FilteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onSelectChange={selectChangeHandler}
        />
        <ExpensesList items={FilteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expanses;