import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/aboutStyle.css'
import { java, cLogo, python, reactLogo } from "../assets";

const About = () => {

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id='about' className="about">
      <div className='about-container'>
        <h1>About Me.</h1>
        <p>Hey there! 👋 My name is Tharusan and thanks for checking out my portfolio! I am a passionate developer and Computer Science graduate, eager to make an impact in the world of technology.<br /> </p>
        
        <br />

        <h3>GitHub</h3>
        <span className='link-item' onClick={() => handleClick("https://github.com/TharusanV")}>TharusanV<br/></span>

        <br/>

        <h3>Technical Skills</h3>
        <span>Programming Languages : Java (Primary), Python, JavaScript (ReactJS), C++, MySQL, C#<br/></span>
        <span>Other Technologies : Java Spring Boot, Django, ThreeJS<br/></span>
        <span>Knowledge of : OOP, Design Principles, Agile Methodology, TDD<br/></span>
        <br/>


        <h3>What made you interested in technology?</h3>
        <p>Growing up, I was captivated by futuristic media like The Matrix and Blade Runner, which sparked my fascination with technology 
          and its potential to shape the world. This curiosity drove me to explore how computers work, 
          leading me to pursue Computer Science from my GCSEs through my A-Levels and ultimately my degree.<br/> 
          
          <br/>

          Beyond academics, I've immersed myself in personal projects, coding challenges, and emerging technologies 
          to deepen my understanding in this ever-growing field. Now, I'm eager to take the next step by gaining hands-on experience in the industry. 
          I'm looking for opportunities to contribute to innovative projects, collaborate with like-minded individuals, 
          and continue growing as a developer, problem-solver, and person.<br/>
          <br/>
        </p>
      


      </div>

    </section>
  )
}

export default About