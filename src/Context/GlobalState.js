import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};
//create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  async function getTransactions() {
    try {
      const {data} = await axios.get("https://savingappforbetterlife.herokuapp.com/api/v1/transactions");
      console.log("My Transaction", data);
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`https://savingappforbetterlife.herokuapp.com/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const {data} = await axios.post("https://savingappforbetterlife.herokuapp.com/api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload:data,
      });
      console.log("transaction added success:", data)
    } catch (err) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
