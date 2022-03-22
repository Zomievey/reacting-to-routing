import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col">
    <nav className="bar">
      <ul className="nav justify-content-center">
        <li id="nav-item" class="nav-item mb-3">
          <Link className="nav-link active" to={"/"}>
            Home
          </Link>
        </li>
        <li id="nav-item"className="nav-item mb-3">
          <Link class="nav-link" to={"/films"}>
            View Films
          </Link>
        </li>
        <li id="nav-item" className="nav-item mb-3">
          <Link class="nav-link" to={"/people"}>
            View People
          </Link>
        </li>
      </ul>
    </nav></div>
  );
};

export default Navbar;
