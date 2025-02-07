import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/heroStyle.css'
import { wolf, github } from "../assets";

const Hero = () => {
  return (
    <>
      <div class="fog-container">
        <div class="fog-img fog-img-first"></div>
        <div class="fog-img fog-img-second"></div>
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