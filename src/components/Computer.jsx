import React from 'react'

import { motion } from "framer-motion";

import '../stylesheets/computerStyle.css'
import Hero from './Hero';
import Taskbar from './Taskbar';

const Computer = () => {
  return (
    <section className='computer'>
      <Hero/>

      <Taskbar/>
    </section>
  )
}

export default Computer