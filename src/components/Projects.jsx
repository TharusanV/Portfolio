import React from 'react'
import { motion } from "framer-motion";

import '../stylesheets/projectStyle.css'

import { fyp, rss, game, chess, poke, fighting, eCommerce, media} from '../assets';

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

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/Chess")}>
          <h1 className='title'>Chess</h1>
          <img style={{width: "212px", height: "400px"}} src={chess} alt="fyp gif" />
        </div>

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/Pokemon")}>
          <h1 className='title'>Pokemon</h1>
          <img style={{width: "212px", height: "400px"}} src={poke} alt="fyp gif" />
        </div>

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/media-review-app")}>
          <h1 className='title'>Media Review</h1>
          <img style={{width: "212px", height: "400px"}} src={media} alt="fyp gif" />
        </div>

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/e-commerce-site")}>
          <h1 className='title'>E-Commerce</h1>
          <img style={{width: "212px", height: "400px"}} src={eCommerce} alt="fyp gif" />
        </div>

        <div className='project-container' onClick={() => handleClick("https://github.com/TharusanV/Fighting-Game")}>
          <h1 className='title'>Fighting Game</h1>
          <img style={{width: "212px", height: "400px"}} src={fighting} alt="fyp gif" />
        </div>

      </div>
    </section>
  )
}

export default Projects