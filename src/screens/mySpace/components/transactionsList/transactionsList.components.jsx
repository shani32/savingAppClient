import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import Transaction from "../atoms/transaction.components";
import "./transactionsList.styles.css";

const TransactionList = ({ transactions, setTransactions }) => {

  const deleteTransaction =async (index) => {
    console.log(index)
    await axios.delete(`https://savingappforbetterlife.herokuapp.com/api/v1/transactions/${transactions[index]._id}`);
    setTransactions(transactions.filter((_, i) => i !== index));
  }


  return (
    <div className="transaction-container">
      <div className="transaction-wrapper">
        <div className="transaction-wrapper-paper">
          <h3 className="transaction-expenses-header">Expenses of the month</h3>
          <ul id="transaction-list">
            {transactions.map((transaction, index) => (
              <Transaction key={transaction._id} transaction={transaction} deleteTransaction={() => deleteTransaction(index)} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
