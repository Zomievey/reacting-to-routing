import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className=" mt-3 col-12">
        <nav className="bar row">
          <div id="image-row" className="row">
            <div id="nav-image" className="col-6"></div>
          </div>
          <ul className="nav">
            <li id="nav-item" class="nav-item mb-3">
              <Link className="nav-link active" to={"/"}>
                Home |
              </Link>
            </li>
            <li id="nav-item" className="nav-item mb-3">
              <Link class="nav-link" to={"/films"}>
                Films |
              </Link>
            </li>
            <li id="nav-item" className="nav-item mb-3">
              <Link class="nav-link" to={"/people"}>
                Characters |
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
