import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/heroStyle.css'
import { wolf, github } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="fog-container">
        <div className="fog-img fog-img-first"></div>
        <div className="fog-img fog-img-second"></div>
      </div>

      <div style={{position: "absolute", zIndex: 1, width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1>Work in progress</h1>
      </div>

      <div className='hero-moon-container'>
        <motion.div
          className='hero-moon'
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 255, 200, 0.5)", // Dim
              "0 0 40px rgba(255, 255, 150, 1)",   // Bright
              "0 0 10px rgba(255, 255, 200, 0.5)", // Dim again
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse", // Loops smoothly
            ease: "easeInOut",
          }}
        >
        </motion.div>

      </div>

      <div className='hero-wolf-container'>
        <img
          src={wolf}
          alt='wolf'
          className='hero-wolf-image'
        />        
      </div>

    </>
  )
}

export default Hero