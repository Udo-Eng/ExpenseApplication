import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onStartEditting = () => {
    setIsEditting(true);
  };

  const onStopEditting =  () => {
    setIsEditting(false);
  };

  if (!isEditting) {
    return <AddExpense onStartEditting={onStartEditting} />;
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onStopEditting={onStopEditting}
        />
      </div>
    );
  }
};

export default NewExpense;
