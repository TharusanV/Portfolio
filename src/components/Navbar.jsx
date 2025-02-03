import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

//import { logo } from "../assets";

import '../stylesheets/navbarStyle.css'

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/*<img src={logo} alt="logo" className="logo" />*/}
          <p className="logo-text">
            TharusanV &nbsp;
            <span className="desktop-only"> | Portfolio</span>
          </p>
        </Link>

        <ul className="nav-links">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="nav-item"
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar