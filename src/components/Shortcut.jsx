import React from 'react';
import '../stylesheets/shortcutStyle.css';
import { shortcutIcon } from "../assets";

const Shortcut = ({ shortcutObj, onClick }) => {
  return (
    <div className="shortcut" onClick={onClick}>
      <img src={shortcutObj.icon} alt="Shortcut Icon" className="shortcut-icon" />
      <img src={shortcutIcon} alt="shortcut-arrow" className="shortcut-arrow" />
      <p className="shortcut-text">{shortcutObj.name}</p>
    </div>
  );
};

export default Shortcut;
