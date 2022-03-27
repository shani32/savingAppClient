import React, { useEffect, useLayoutEffect, useState } from "react";
import Balance from "./components/balance/balance.component";

import IncomeExpenses from "./components/incomeExpenses/incomeExpenses.components";
import TransactionList from "./components/transactionsList/transactionsList.components";
import "./mySpace.styles.css"
import { useSetBackground } from "../../Context/background.context";
import axios from 'axios';

const MySpace = ({ transactions ,setTransactions }) => {
  const setBackground = useSetBackground();

  const [amounts, setAmounts] = useState([])



  useEffect(() => {
    setAmounts(transactions.map((transaction) => transaction.amount));
  }, [transactions]);


  useLayoutEffect(() => {
    setBackground(
      "https://top-studio.co.il/wp-content/uploads/2021/02/2752334387_w640_h640_2752334387.jpg"
    );
  }, []);

  return (
    <div id="my-space-container">

      <Balance transactions={transactions} amounts={amounts} />
      <IncomeExpenses amounts={amounts} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
      <div className="sentence"> "Do not save what is left after spending, but spend what is left after saving." Warren Buffett</div>
    </div>
  );
};

export default MySpace;
