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

  /* So '.?' is known as the 'Optional chaining operator' 
  This operator allows you to safely access deeply nested properties of an object without having to explicitly check for the existence of 
  each property in the chain. If any property in the chain is null or undefined, the expression short-circuits and 
  returns undefined instead of throwing an error. 
  
  In my case thats good as I use it for what you see below where if the user clicks outside the bounds of the pop-up, it doesn't throw
  out a null error. Give I want it to have the option to be null if the use is clicking on nothing as to close the window.
  */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCalendarOpen &&
        popupCalendarRef.current &&
        !popupCalendarRef.current.contains(event.target) &&
        !calendarContainerRef.current?.contains(event.target)
      ) {
        setIsCalendarOpen(false);
      }
  
      if (
        isStarMenuOpen &&
        popupStarMenuRef.current &&
        !popupStarMenuRef.current.contains(event.target) &&
        !starMenuContainerRef.current?.contains(event.target)
      ) {
        setIsStarMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    
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
          <StartMenu openedTabs={openedTabs} setOpenedTabs={setOpenedTabs} setIsStarMenuOpen={setIsStarMenuOpen}/>
        </div>
      )}



    </>

  )
}

export default Taskbar