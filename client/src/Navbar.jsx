import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to={"/"}>
        Home
      </Link>
      <Link className="link" to={"/add"}>
        Add
      </Link>
      <Link className="link" to={"/book"}>
        Books
      </Link>
      <Link className="link" to={"/login"}>
        Login
      </Link>
      <Link className="link" to={"/register"}>
        Register
      </Link>
    </div>
  );
};

export default Navbar;
