import React, { useState, useContext, useLayoutEffect } from "react";
import { useSetBackground } from "../../Context/background.context";
import { GlobalContext } from "../../Context/GlobalState";
import "./addTransactions.styles.css";
import  axios  from 'axios';

const AddTransaction = ({setTransactions}) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const setBackground = useSetBackground();



  const onSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("userDetails"));
    const transaction = {
      _id: user._id,
      text,
      amount: +amount,
    };
    alert(`${text} transaction of ${amount} has been added`);
    const {data:{data:newTransaction}} = await axios.post("https://savingappforbetterlife.herokuapp.com/api/v1/transactions", transaction);
    console.log(newTransaction);
    setTransactions((state) => {
      state.push(newTransaction)
      console.log(state)
      return state
    });

  };
  return (
    <div className="container">
      <div className="add-transaction-container">
        <h3 className="add-transaction">Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Transaction Name</label>
            <input
              className="add-input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text.."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount (negative-expanse, positive- income)
            </label>
            <input
              className="add-input"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount.."
            />
          </div>
          <button className="add-btn">Add Transaction</button>
        </form>
      </div>
      <div className="img-container"></div>
    </div>
  );
};

export default AddTransaction;
