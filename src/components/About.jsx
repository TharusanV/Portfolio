import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/aboutStyle.css'
import { java, cLogo, python, reactLogo } from "../assets";

const About = () => {
  return (
    <section id='about' className="about">
      <div className='about-intro-container'>
        <div>
          <h2 className="about-subheader-text">About</h2>
          <h2 className="about-header-text">Introduction</h2>
        </div>

        <div>
          <p className="about-intro-text">
            Hey there! 👋 My name is Tharusan and thanks for checking out my portfolio! <br />
            I am a passionate developer and recent Computer Science graduate, eager to make an impact in the world of technology.<br /> 
            Growing up I was facinated by futuristic media (e.g. Matrix, Blade Runner) which led me down the path of wanting to persue tech career.<br />
            Through this portfolio I hope you get a good overall understanding of myself. Take care 👍
          </p>
        </div>

        <div>
          <h2 className="about-header-text">My technologies</h2>
          <div className='technologies-container'>
            <img src={java} alt='java' className='tech-logo-img'/> 
            <img src={python} alt='python' className='tech-logo-img'/> 
            <img src={reactLogo} alt='react' className='tech-logo-img'/> 
            <img src={cLogo} alt='c++' className='tech-logo-img'/> 
          </div>
          <div className='education-container'>
            
          </div>
          <div className='intrests-container'>

          </div>
        </div>
      </div>

    </section>
  )
}

export default About