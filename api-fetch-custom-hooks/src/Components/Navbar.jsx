import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link text-warning fw-bold" : "nav-link text-light";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
      <div className="container-fluid">

        {/* Brand */}
        <NavLink className="navbar-brand fw-bold text-warning" to="/">
          MyApp
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <NavLink className={linkClass} to="/Products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={linkClass} to="/Recipes">
                Recipes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={linkClass} to="/Users">
                Users
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;