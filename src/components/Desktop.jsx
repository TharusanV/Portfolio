import React from 'react'

import '../stylesheets/desktopStyle.css'

import Shortcut from './Shortcut';

import { aboutIcon, educationIcon, projectIcon } from "../assets";

const Desktop = () => {
  
  const allShortcuts = [
    { id: 1, name: "About Me", icon: aboutIcon},
    { id: 2, name: "Education", icon: educationIcon},
    { id: 2, name: "Projects", icon: projectIcon},

    
  ];
  
  return (
    <div className='desktop'>
      {allShortcuts.map((shortcut) => (
        <Shortcut key={shortcut.id} shortcutObj={shortcut} />
      ))}
    </div>
  )
}

export default Desktop