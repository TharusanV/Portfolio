import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";

import { menu, close } from "../assets";

import '../stylesheets/navbarStyle.css'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

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

        

        <div className="hamburger-container">
          <img
            src={toggle ? close : menu}
            alt='menu'
            className="hamburger-icon"
            onClick={() => setToggle(!toggle)}
          />

          <div
            style={{ display: toggle ? "flex" : "none" }}
            className="hamburgerMenu-container  black-gradient"
          >
            <ul className="hamburgerMenu-nav-links">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>



      </div>
    </nav>
  )
}

export default Navbar