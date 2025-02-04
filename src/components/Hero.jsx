import React from 'react'
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


      
    </section>
  )
}

export default Hero