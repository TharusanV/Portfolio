import React, { useState, useEffect } from "react";
import "../stylesheets/startMenuStyle.css";

import { offIcon } from "../assets";

import { useNavigate } from "react-router-dom";

import { aboutIcon, educationIcon, projectIcon, programmingIcon } from "../assets";

import { About, Tech, Tab, Education, Projects} from "../components";

const StartMenu = ({openedTabs, setOpenedTabs}) => {
  const navigate = useNavigate();

  const handleShutdown = () =>{
    navigate("/");
  }

  const allMenuItems = [
    { id: 1, name: "About Me", icon: aboutIcon, comp: <About/>},
    { id: 2, name: "Education", icon: educationIcon, comp: <Education/>},
    { id: 3, name: "Tech", icon: programmingIcon, comp: <Tech/>},
    { id: 4, name: "Projects", icon: projectIcon, comp: <Projects/>},
  ];

  const handleMenuItemClick = (menuItem) => {
    setOpenedTabs((prevTabs) =>
      prevTabs.some((tab) => tab.id === menuItem.id) ? prevTabs : [...prevTabs, menuItem]
    );
  };


  return (
    <div id="startmenu" className="startmenu">
      <div className="startmenu-container">
        <div className="sidebar">
          <div className="top">
            T
          </div>
          <div className="bottom">
            <div className="icon-container" onClick={handleShutdown}>
              <img src={offIcon} alt="off-Icon" className="icon" />
            </div>
          </div>
        </div>

        <div className="main-panel">
          {allMenuItems.map((menuItem) => (
            <div className="menu-item" key={menuItem.id} onClick={() => handleMenuItemClick(menuItem)}>
              <img src={menuItem.icon} alt="menu-Icon" className="menu-icon" />
              <p className="menuItem-text">{menuItem.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StartMenu