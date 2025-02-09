import { motion } from "framer-motion";

import React, { useState, useEffect, useRef } from 'react';

import '../stylesheets/taskbarStyle.css'

import { searchIcon } from "../assets";

import Calendar from "./Calendar";
import StartMenu from "./StartMenu";

const Taskbar = ({openedTabs, setOpenedTabs}) => {

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const popupCalendarRef = useRef(null);
  const calendarContainerRef = useRef(null);

  const [isStarMenuOpen, setIsStarMenuOpen] = useState(false);
  const popupStarMenuRef = useRef(null);
  const starMenuContainerRef = useRef(null);

  const toggleCalendarPopup = () => {
    setIsCalendarOpen(!isCalendarOpen);  
  };

  const toggleStarMenuPopup = () => {
    setIsStarMenuOpen(!isStarMenuOpen); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close calendar if clicked outside
      if (popupCalendarRef.current && !popupCalendarRef.current.contains(event.target) && !calendarContainerRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }

      if (popupStarMenuRef.current && !popupStarMenuRef.current.contains(event.target) && !starMenuContainerRef.current.contains(event.target)) {
        setIsStarMenuOpen(false);
      }
    };

    // event listener only if either popup is open
    if (isCalendarOpen || isStarMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener when component unmounts or state changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen, isStarMenuOpen]);

  /////////////////////////////////////////////////////////////////

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);


  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23' 
  })

  return (
    <>
      <section className='taskbar'>
        <div className='farLeft-side-container'>
          <div className="item-container" ref={popupStarMenuRef} onClick={toggleStarMenuPopup}>
            <span className="item">TV</span>
          </div>
          
          <div className="item-container">
            <img src={searchIcon} className="item" alt="search icon" style={{ width: '16px', height: '16px', filter: 'invert(100%)' }} />
          </div>
        </div>

        <div className='farRight-side-container'>
          <div className="item-container" ref={popupCalendarRef} onClick={toggleCalendarPopup}>
            <span className="item">{formattedTime}</span>
          </div>
        </div>
      </section>

      {isCalendarOpen && (
        <div ref={calendarContainerRef}>
          <Calendar/>
        </div>
      )}  

      {isStarMenuOpen && (
        <div ref={starMenuContainerRef}>
          <StartMenu openedTabs={openedTabs} setOpenedTabs={setOpenedTabs}/>
        </div>
      )}



    </>

  )
}

export default Taskbar