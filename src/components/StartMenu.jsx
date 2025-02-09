import React, { useState, useEffect } from "react";
import "../stylesheets/startMenuStyle.css";

import { offIcon } from "../assets";

import { useNavigate } from "react-router-dom";

const StartMenu = () => {
  const navigate = useNavigate();

  const handleShutdown = () =>{
    navigate("/");
  }

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

        </div>
      </div>
    </div>
  )
}

export default StartMenu