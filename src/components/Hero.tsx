// import React from 'react';
import image from '../assets/ngc/hero background.png';
import { HeroText } from "../content.json";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowLeft } from "react-icons/fi";

const Hero = () => {
  const scrollNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }
  return (
    // hero section:
    // hight: 100vh at least 500px
    // bg: image from assets folder
    // have a div with a class of container mx-auto px-4
    // have a div contain the text (large title and normal text)

    <div id="hero" className='min-h-screen bg-cover bg-center bg-no-repeat bg-ngc_dark' style={{ backgroundImage: `url("${image}")` }}>
      <div className='min-h-screen container max-w-6xl mx-auto px-4 py-14 flex flex-col justify-center h-full'>
        <motion.h1 
          initial={{ y: "4rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
          className='max-w-2xl text-3xl md:text-5xl lg:text-7xl max-md:text-center text-ngc_white font-bold !leading-relaxed mb-4'>
          {HeroText.MainHeader}
        </motion.h1>
        <motion.p 
          initial={{ y: "4rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          className='max-w-2xl text-lg lg:text-xl max-md:text-center text-ngc_white !leading-snug font-thin mb-8'>
          {HeroText.SubHeader}
        </motion.p>
        <div className='text-base md:text-lg lg:text-2xl max-md:text-center'>
          <motion.button
            onClick={scrollNextSection}
            initial={{ x: "-5rem", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}
            className='group inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-4 bg-ngc_white text-ngc_brown'>
            {HeroText.Button.Title} <span className='relative group-hover:-left-1'><FiArrowLeft /></span>
          </motion.button>
        </div>
      </div>

      <button 
        type='button' 
        className='absolute left-1/2 -translate-x-1/2 bottom-5 transition-all hover:bottom-6 rounded-full bg-[#00000050] hover:bg-[#00000090] p-3'
        onClick={scrollNextSection}
      >
        <span className='text-ngc_white text-2xl w-8 h-8 bg-ngc_brown'><FiArrowDown /></span>
      </button>
    </div>
  )
}

export default Hero