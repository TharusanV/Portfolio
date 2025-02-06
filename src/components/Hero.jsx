import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/heroStyle.css'
import { wolf, github } from "../assets";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-header-container'>
        <div>
          <motion.h1
            className="hero-header-text"
            initial={{ opacity: 0, y: 20 }} // Start hidden & slightly lower
            animate={{ opacity: 1, y: 0 }} // Fade in & move up
            transition={{ delay: 1, duration: 1, ease: "easeOut" }} // Smooth animation
            style={{paddingLeft: "40px"}}
          >
            Hi, I'm Tharusan 
          </motion.h1>
        </div>
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
          <img
            src={github}
            alt='github'
            className='github-img'
          />  
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