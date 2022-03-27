import React from "react";
import "./NavBar.styles.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getUserName = () => {

    if (JSON.parse(localStorage.getItem("userDetails")).name) {
      return JSON.parse(localStorage.getItem("userDetails")).name + "  ";
    }
    return "";
  }
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("isLogin");
  };

  return (
    <div className="navbar-container">
      <div className="side-one">
        <Link to={"/"}>
          <span className="homepage-icon">Homepage</span>
        </Link>
        <Link to={"/mySpace"}>
          <span className="home-icon">My Space</span>
        </Link>
        <Link to={"/addTransactions"}>
          <span className="transaction-icon">Add Transaction</span>
        </Link>
      </div>
      <div className="side-two">
        <Link to={"/register"}>
          <span className="register">
            Register
          </span>
        </Link>
        <Link to={"/login"}>
          <span onClick={logOut} className="login">

            {!localStorage.getItem("token") || location.pathname === "/login" ? "Login" :  getUserName() + "Logout"}
          </span>
        </Link>
      </div>
    </div>
  );
};
