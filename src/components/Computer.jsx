import { useState } from "react";

import { motion } from "framer-motion";

import '../stylesheets/computerStyle.css'
import Hero from './Hero';
import Taskbar from './Taskbar';
import Desktop from './Desktop';

const Computer = () => {
  
  const [openedTabs, setOpenedTabs] = useState([]);

  return (
    <section className='computer'>
      <Hero/>

      <Desktop openedTabs={openedTabs} setOpenedTabs={setOpenedTabs}/>

      <Taskbar openedTabs={openedTabs} setOpenedTabs={setOpenedTabs}/>
    </section>
  )
}

export default Computer