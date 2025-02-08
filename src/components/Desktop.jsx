import React, { useState } from 'react';

import '../stylesheets/desktopStyle.css'

import Shortcut from './Shortcut';

import { aboutIcon, educationIcon, projectIcon, programmingIcon } from "../assets";

import { About, Tech, Tab, Education, Projects} from "../components";


const Desktop = () => {

  const [openedTabs, setOpenedTabs] = useState([]);
  
  const allShortcuts = [
    { id: 1, name: "About Me", icon: aboutIcon, comp: <About/>},
    { id: 2, name: "Education", icon: educationIcon, comp: <Education/>},
    { id: 3, name: "Tech", icon: programmingIcon, comp: <Tech/>},
    { id: 4, name: "Projects", icon: projectIcon, comp: <Projects/>},
  ];

  const handleShortcutClick = (shortcut) => {
    setOpenedTabs((prevTabs) =>
      prevTabs.some((tab) => tab.id === shortcut.id) ? prevTabs : [...prevTabs, shortcut]
    );
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
          <Tab key={tab.id} tab={tab} setOpenedTabs={setOpenedTabs}/>
        ))}
      </div>

    </div>
  )
}

export default Desktop