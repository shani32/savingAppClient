import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import { numberWithCommas } from "../../../../utils/format";
import "./homePage.atoms.styles.css";

const Transaction = ({ transaction:{amount, _id, text}, deleteTransaction }) => {




  const sign = amount < 0 ? "-" : "+";
  return (
    <li
      className={amount < 0 ? "list-item minus" : "list-item plus"}
    >
      {text}
      <span>
        {sign}${numberWithCommas(Math.abs(amount))}
      </span>
      <button
        onClick={deleteTransaction}
        className="delete-button"
      >
        DELETE
      </button>
    </li>
  );
};

export default Transaction;
