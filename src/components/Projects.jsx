import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/projectStyle.css'

import { fyp, rss, game, } from '../assets';

const Projects = () => {
  
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section id='project' className="project">
      <div className='allproject-container'>
        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/TamilScribe_Uni_FYP")}>
          <h1 className='title'>Tamil Writing App</h1>
          <img style={{width: "212px", height: "400px"}} src={fyp} alt="fyp gif" />
        </div>

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/RSS-Reader")}>
          <h1 className='title'>RSS Reader</h1>
          <img style={{width: "212px", height: "400px"}} src={rss} alt="fyp gif" />
        </div>

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/RSS-Reader")}>
          <h1 className='title'>Fast Lane Feast</h1>
          <img style={{width: "212px", height: "400px"}} src={game} alt="fyp gif" />
        </div>

      </div>
    </section>
  )
}

export default Projects