import React from "react";

import "./AddExpense.css";

const AddExpense = (props) => {
  return (
    <div className="add-expense">
      <button className="add-expense__actions" onClick={props.onStartEditting}>
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpense;
