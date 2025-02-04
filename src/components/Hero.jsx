import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/heroStyle.css'


const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-header-container'>
        <div>
          <h1 className='hero-header-text'>
            {"<h1> "} 
            <span className='hero-header-span'>Hi, I'm Tharusan</span>
            {" </h1>"}
          </h1>
          {/*
          <p className="hero-header-description">
            {"<p></p>"} 
          </p>
          */}
        </div>
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