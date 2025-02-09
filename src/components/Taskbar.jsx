import { motion } from "framer-motion";

import React, { useState, useEffect, useRef } from 'react';

import '../stylesheets/taskbarStyle.css'

import { searchIcon } from "../assets";

import Calendar from "./Calendar";

const Taskbar = () => {

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const popupCalendarRef = useRef(null);

  const toggleCalendarPopup = () => {
    if(isCalendarOpen){
      setIsCalendarOpen(false);
    }
    else{
      setIsCalendarOpen(true);
    }
    
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupCalendarRef.current && !popupCalendarRef.current.contains(event.target)) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } 
    else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

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
          <div className="item-container">
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
        <div>
          <Calendar/>
        </div>
      )}   
    </>

  )
}

export default Taskbar