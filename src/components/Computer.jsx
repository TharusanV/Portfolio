import React from 'react'

import { motion } from "framer-motion";

import '../stylesheets/computerStyle.css'
import Hero from './Hero';
import Taskbar from './Taskbar';
import Desktop from './Desktop';
import Calendar from './Calendar';

const Computer = () => {
  return (
    <section className='computer'>
      <Hero/>

      <Desktop />

      <Calendar/>

      <Taskbar/>
    </section>
  )
}

export default Computer