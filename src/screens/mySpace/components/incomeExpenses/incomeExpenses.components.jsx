import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../Context/GlobalState";
import { numberWithCommas } from "../../../../utils/format";
import "./incomeExpenses.styles.css";

const IncomeExpenses = ({ amounts }) => {
  const [income, setIncome] = useState([0]);
  const [expense, setExpense] = useState([0]);


  const calculateIncome = () => {
    const incomes = amounts?.filter((item) => item > 0);
    !incomes.length && incomes.push(0)
    const newIncome = parseFloat(incomes.reduce((acc, item) => (acc += item), 0).toFixed(2))
    setIncome(newIncome);
  }
  const calculateExpense = () => {
    const expenses = amounts?.filter((item) => item < 0)
    !expenses.length && expenses.push(0)
    const newExpense = parseFloat(expenses.reduce((acc, item) => (acc += item), 0).toFixed(2));
    setExpense(newExpense);
  }


  useEffect(() => {
    calculateIncome()
    calculateExpense()
  }, [amounts]);



  return (
    <div className="income-warpper">
      <div className="income-container">
        <div className="money">
          <h4>Income</h4>
          <p id="money-plus" className="money-plus">
            ${numberWithCommas(income)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money-minus">
            ${numberWithCommas(expense)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
