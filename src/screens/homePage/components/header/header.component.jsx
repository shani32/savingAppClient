import React from "react";
import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="homepage">
      <h2>Saving App</h2>
      <Link to="/login">
        <button className="entry-btn">Entry</button>
      </Link>
    </div>
  );
};

export default Header;
