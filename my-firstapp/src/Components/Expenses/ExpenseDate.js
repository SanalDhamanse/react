import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(prop) {
  const month = prop.date.toLocaleString("en-Us", { month: "long" });
  const day = prop.date.toLocaleString("en-Us", { day: "numeric" });
  const year = prop.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day ">{day}</div>
    </div>
  );
}
