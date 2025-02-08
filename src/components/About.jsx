import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/aboutStyle.css'
import { java, cLogo, python, reactLogo } from "../assets";

const About = () => {
  return (
    <section id='about' className="about">
      <div className='about-container'>
        <h1>About Me.</h1>
        <p>Hey there! 👋 My name is Tharusan and thanks for checking out my portfolio! I am a passionate developer and recent Computer Science graduate, eager to make an impact in the world of technology.<br /> <br /> </p>
        
        <h2>What made you interested in technology?</h2>
        <p>Growing up I was facinated by futuristic media (e.g. Matrix, Blade Runner) which led me down the path of wanting to persue tech career.<br />
          This then lead me to take up computer science in my GCSE's and continuing it through my A-Levels and my degree.<br/>
          Now I am looking to continue my development by getting real-world experience. Working on projects that aim to help others and propel the industry forward. <br/><br/></p>
      </div>

    </section>
  )
}

export default About