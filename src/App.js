import "./App.css";
import { useEffect, useState } from "react";
import Register from "./screens/register";

import { GlobalProvider } from "./Context/GlobalState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTransactions from "./screens/addTransactions";
import HomePage from "./screens/homePage";
import MySpace from "./screens/mySpace";
import Login from "./screens/login/index";
import { useBackground } from "./Context/background.context";
import { NavBar } from "./NavBar";
import { LogOutContext } from "./Context/app.context";
import UserAuth from "./userAuth";
import AddTransaction from "./screens/addTransactions";
import axios from "axios";





function App() {
  const background = useBackground();
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    async function getTransactions() {
      const userIdTrans = JSON.parse(window.localStorage.getItem("userDetails"))._id;
      const { data: { data: transactionsData } } = await axios.get("https://savingappserver.herokuapp.com/api/v1/transactions/" + userIdTrans);
      console.log(transactionsData)
      setTransactions(transactionsData)
    }
    getTransactions()
  })


  return (
    <BrowserRouter>
      <NavBar />
      <GlobalProvider>
        <div style={{ backgroundImage: `url(${background})` }} className="App">
          <Routes>
            <Route path="/" element={<UserAuth/>}>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/mySpace" element={<MySpace transactions={transactions} setTransactions={setTransactions} />} />
            <Route path="/addTransactions" element={<AddTransactions setTransactions={setTransactions} />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
