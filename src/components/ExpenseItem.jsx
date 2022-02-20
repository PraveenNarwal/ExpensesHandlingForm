import React, { useState } from "react";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, date, amount }) => {
  const [tile, setTile] = useState(title);
  const handlesumit = () => {
    setTile("uspde");
    console.log(tile);
  };
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{tile}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handlesumit}>changle</button>
    </div>
  );
};

export default ExpenseItem;
