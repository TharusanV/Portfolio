import React, { useState } from 'react';

import '../stylesheets/desktopStyle.css'

import Shortcut from './Shortcut';

import { aboutIcon, educationIcon, projectIcon } from "../assets";

import { About} from "../components";

const Desktop = () => {

  const [openedTabs, setOpenedTabs] = useState([]);
  
  const allShortcuts = [
    { id: 1, name: "About Me", icon: aboutIcon, comp: <About/>},
    { id: 2, name: "Education", icon: educationIcon, comp: <About/>},
    { id: 3, name: "Projects", icon: projectIcon, comp: <About/>},
  ];

  const handleShortcutClick = (shortcut) => {
    setOpenedTabs((prevTabs) =>
      prevTabs.some((tab) => tab.id === shortcut.id) ? prevTabs : [...prevTabs, shortcut]
    );
  };

  const closeTab = (id) => {
    setOpenedTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== id));
  };
  
  return (
    <div className='desktop'>
      <div className='shortcut-container'>
        {allShortcuts.map((shortcut) => (
          <Shortcut key={shortcut.id} shortcutObj={shortcut} onClick={() => handleShortcutClick(shortcut)} />
        ))}
      </div>

      <div className='tabs-container'>
        {openedTabs.map((tab) => (
          <div key={tab.id} className='tab'>
            <div className='tab-header'>
              <span>{tab.name}</span>
              <button className='close-btn' onClick={() => closeTab(tab.id)}>X</button>
            </div>
            <div className='tab-content'>{tab.comp}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Desktop