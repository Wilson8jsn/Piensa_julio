import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo33.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to = "/data">Alcohol</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
