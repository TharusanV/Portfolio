import { motion } from "framer-motion";

import React, { useState, useEffect } from 'react';

import '../stylesheets/taskbarStyle.css'

import { searchIcon } from "../assets";

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23' 
  })

  return (
    <section className='taskbar'>
      <div className='farLeft-side-container'>
        <div className="item-container">
          <span className="item">TV</span>
        </div>
        
        <div className="item-container">
          <img src={searchIcon} className="item" alt="search icon" style={{ width: '16px', height: '16px', filter: 'invert(100%)' }} />
        </div>
      </div>

      <div className='farRight-side-container'>
        <div className="item-container">
          <span className="item">{formattedTime}</span>
        </div>
        
      </div>


    </section>
  )
}

export default Taskbar