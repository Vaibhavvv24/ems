import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center bg-blue-300 p-5">
      <nav className="flex justify-center">
        <div className="flex justify-center px-7">
          <h1>Employee Management App</h1>
        </div>

        <div className="flex justify-center">
          <ul className="flex gap-6">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/add">
              <li>Add Employee</li>
            </Link>
            <Link to="/employees">
              <li>Employee List</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
