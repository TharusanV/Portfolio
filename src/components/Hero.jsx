import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/heroStyle.css'
import { wolf } from "../assets";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-header-container'>
        <div>
          <motion.h1
            className="hero-header-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}       
          >
            {"<div>"} 
          </motion.h1>


          <motion.h1
            className="hero-header-text"
            initial={{ opacity: 0, y: 20 }} // Start hidden & slightly lower
            animate={{ opacity: 1, y: 0 }} // Fade in & move up
            transition={{ delay: 1, duration: 1, ease: "easeOut" }} // Smooth animation
            style={{paddingLeft: "40px"}}
          >
            {"<h1> "} 
            <motion.span
              className="hero-header-span"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }} // Delay span for a staggered effect
            >
              Hi, I'm Tharusan
            </motion.span>
            {" </h1>"}
          </motion.h1>

          <motion.p 
            className="hero-header-text" 
            initial={{ opacity: 0, y: 20 }} // Start hidden & slightly lower
            animate={{ opacity: 1, y: 0 }} // Fade in & move up
            transition={{ delay: 1, duration: 1, ease: "easeOut" }} // Smooth animation
            style={{paddingLeft: "40px"}}
          >
            {"<p>"} 
            <motion.span
              className="hero-header-span"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {" CS Graduate "}
            </motion.span>
            {"</p>"} 
          </motion.p>

          <motion.h1
            className="hero-header-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}        
          >
            {"</div>"} 
          </motion.h1>
          
        </div>
      </div>

      <div className='hero-moon-container'>
        <motion.div
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "#fdf6c9", // Moon color
            borderRadius: "50%",
            boxShadow: "0 0 10px rgba(255, 255, 200, 0.5)", // Initial glow
            marginLeft: "auto", // Pushes it to the right
            marginRight: "20px", // Add some spacing from the edge
          }}
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
        />
      </div>

      <div className='hero-wolf-container'>
        <img
          src={wolf}
          alt='wolf'
          style={{width: "300px", height: "230px", position: "absolute", bottom: "0", right: "-10px",}}
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