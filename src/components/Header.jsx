import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="h4-link">
        <h4 className="btt">Home</h4>
      </Link>
      <Link to="/add-employee" className="h4-link">
        <h4 className="btt">Add Employee</h4>
      </Link>
    </div>
  );
};
export default Header;
