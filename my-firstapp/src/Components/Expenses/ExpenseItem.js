import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(prop) {
  const [title, setTitle] = useState(prop.title);

  const clickHandler = () => {
    setTitle("Updated Title");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          <p>${prop.amount}</p>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
