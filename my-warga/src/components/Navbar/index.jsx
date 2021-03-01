import React from "react";
import "./index.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <div className="nav-logo">
          <h2>
            <a href="a" className="button-logo-navbar">
              Warga Ku
            </a>
          </h2>
        </div>
        <div className="nav-menu">
          <ul>
            <li className="list-navbar">
              <a href="a" className="button-list-navbar">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
