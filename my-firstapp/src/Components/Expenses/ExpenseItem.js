import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";

function ExpenseItem(prop) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={prop.date} />
        <div className="expense-item__description">
          <h2>{prop.title}</h2>
          <div className="expense-item__price">
            <p>${prop.amount}</p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
