import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import { numberWithCommas } from "../../../../utils/format";
import Transaction from "../atoms/transaction.components";
import './balance.styles.css'


const Balance = ({ transactions, amounts }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(parseFloat(amounts?.reduce((acc, item) => (acc += item), 0).toFixed(2)));
  }, [amounts])



  return (
    <div className="balance">
      <h4>my balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </div>
  );
};

export default Balance;
