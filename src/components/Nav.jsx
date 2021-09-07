import React from "react";
import { FaPlus, FaShoppingCart, FaHeart, FaSearch, FaBars } from "react-icons/fa";
export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#:)" className={`navbar-brand`}>
          <img src="/large_nutriyummy.png" alt="NUTRIYUMMY" width="40" height="40" />
        </a>
        <label htmlFor="nav-toggle" className="nav-toggle-button">
          <FaBars />
        </label>
        <input type="checkbox" name="" id="nav-toggle" />
        <div className="navbar-group">
          <ul className="navbar-nav navbar-nav-links">
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                Home
                <FaPlus className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                Shop
                <FaPlus className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                Pages
                <FaPlus className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                Portfolio
                <FaPlus className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                News
                <FaPlus className="icon" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-nav-icons">
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                <FaShoppingCart className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                <FaHeart className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#:)">
                <FaSearch className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
