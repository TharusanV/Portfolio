import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/taskbarStyle.css'

const Taskbar = () => {
  return (
    <section className='taskbar'>
      <div className='farLeft-side-container'>
        <span>Start</span>
        <span>Other Item</span>
      </div>

      <div className='farRight-side-container'>
        <span>Wi-Fi</span>
        <span>Volume</span>
        <span>Battery</span>
      </div>


    </section>
  )
}

export default Taskbar