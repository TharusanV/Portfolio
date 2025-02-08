import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/techStyle.css'
import { java, cLogo, python, reactLogo } from "../assets";

const Tech = () => {
  return (
    <section id='tech' className="tech">
      <div className='tech-container'>
        <h1>Technologies.</h1>
        <div className='technologies-container'>
            <img src={java} alt='java' className='tech-logo-img'/> 
            <img src={python} alt='python' className='tech-logo-img'/> 
            <img src={reactLogo} alt='react' className='tech-logo-img'/> 
            <img src={cLogo} alt='c++' className='tech-logo-img'/> 
            
          </div>
      </div>

    </section>
  )
}

export default Tech