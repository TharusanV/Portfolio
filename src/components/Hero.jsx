import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/heroStyle.css'
import { wolf, github } from "../assets";

const Hero = () => {
  return (
    <section className='hero'>
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

      <div className='downIcon-container'>
        <a href='#about'>
          <div className='downIcon-oval'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{width: "0.75rem", height: "0.75rem", borderRadius: "9999px", backgroundColor: 'grey'}}              
            />
          </div>
        </a>
      </div>



    </section>
  )
}

export default Hero