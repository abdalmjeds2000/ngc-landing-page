// import React from 'react';
import logo from '../assets/ngc/logo.png';
import { HeaderSection, SocialMediaUrls } from "../content.json";
import { FiArrowLeft } from "react-icons/fi";
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-ngc_mid_orange py-12 lg:py-20  overflow-visible'>
      <div className='container max-w-6xl mx-auto px-2 flex justify-between flex-col md:flex-row gap-10 md:gap-2 min-h-[200px]'>
        <div className='flex-[2] flex flex-col items-center md:items-start'>
          <img src={logo} alt='logo' className='w-52 mb-4 md:mb-16' />
          <p className='text-ngc_secondary max-md:hidden'>
          جميــــع الـحقـــوق مـحفـوظـــة <br />
          لشركة الحبوب الوطنية © 2023
          </p>
        </div>

        <div className='flex-[2] flex justify-center flex-wrap md:flex-col gap-5'>
          {
            HeaderSection.MenuItems.map((item, index) => (
              <a key={index} href={item.Link} className='group flex gap-1 items-center text-ngc_secondary w-fit text-lg font-semibold hover:bg-ngc_brown hover:text-ngc_light_orange px-2 py-1 rounded-md transition-all'>
                <span>{item.Title}</span> <span className='hidden group-hover:inline-block'><FiArrowLeft /></span>
              </a>
            ))
          }
        </div>
        
        <div className='flex-1 text-ngc_secondary'>
          <div className='flex items-center justify-center md:justify-end gap-2'>
            <a href={SocialMediaUrls.Twitter} target='_blank' rel="noopener" className='text-sm relative hover:-top-0.5 border-ngc_secondary text-ngc_secondary border-2 w-6 h-6 rounded-md flex justify-center items-center'>
              <RiTwitterXLine />
            </a>
            <a href={SocialMediaUrls.LinkedIn} target='_blank' rel="noopener" className='text-sm relative hover:-top-0.5 border-ngc_secondary text-ngc_secondary border-2 w-6 h-6 rounded-md flex justify-center items-center'>
              <FaLinkedinIn />
            </a>
            <a href={SocialMediaUrls.Instagram} target='_blank' rel="noopener" className='text-[1.7rem] relative hover:-top-0.5'>
              <FaInstagram />
            </a>
          </div>
        </div>

        <p className='text-ngc_secondary text-center md:hidden'>
          جميــــع الـحقـــوق مـحفـوظـــة <br />
          لشركة الحبوب الوطنية © 2023
        </p>
      </div>
    </div>
  )
}

export default Footer