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
        <p>Growing up I was facinated by futuristic media (e.g. Matrix, Blade Runner) which led me down the path of wanting to persue tech career.
          This then lead me to take up computer science in my GCSE's and continuing it through my A-Levels and my degree.<br/>
          Now I am looking to continue my development by getting real-world experience. Working on projects that aim to help others and propel the industry forward. <br/>
          <br/>
        </p>
      


      </div>

    </section>
  )
}

export default About