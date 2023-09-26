import React from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import logo from '../assets/ngc/logo.png';
import logo_light from '../assets/ngc/logo-light.png';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine, RiCloseFill } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi';
import { HeaderSection, SocialMediaUrls } from "../content.json";
import { motion } from "framer-motion";


type OverlayMobileMenuPropsTypes = {
  isOpen: boolean;
  close: () => void;
}
const OverlayMobileMenu = ({ isOpen, close }: OverlayMobileMenuPropsTypes) => {
  return ReactDOM.createPortal(
    <div className={cn('fixed inset-0 bg-white z-50 block md:!hidden text-ngc_dark', { "hidden": !isOpen })}>
      <div className='px-2 h-20 flex items-center justify-between border-b'>
        <div>
          <img src={logo} alt='logo' className='h-12' />
        </div>
        <button className='p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all' onClick={close}>
          <RiCloseFill />
        </button>
      </div>
      <div className='my-8'>
        <div className='flex flex-col items-center gap-3 overflow-auto'>
          {
            HeaderSection.MenuItems.map((item, index) => (
              <a key={index} href={item.Link} onClick={close} className='text-lg font-semibold hover:bg-ngc_brown hover:text-ngc_light_orange px-2 py-1 rounded-md transition-all'>{item.Title}</a>
            ))
          }
        </div>
      </div>
    </div>,
    document.getElementById('app-header')!
  )
}


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  return ReactDOM.createPortal(
    <motion.div 
      initial={{ y: "-8rem", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
      className='text-ngc_white absolute top-0 w-full h-20 z-40'
    >
      <div className='container mx-auto px-2 h-full flex items-center justify-between'>
        <div>
          <img src={logo_light} alt='logo' className='h-12' />
        </div>
        <div className='max-md:hidden'>
          <div className='flex items-center gap-3'>
            {
              HeaderSection.MenuItems.map((item, index) => (
                <a key={index} href={item.Link} className='text-lg font-semibold hover:bg-ngc_brown hover:text-ngc_light_orange px-2 py-1 rounded-md transition-all'>{item.Title}</a>
              ))
            }
          </div>
        </div>
        <div className='max-md:hidden'>
          <div className='flex items-center gap-2'>
            <a href={SocialMediaUrls.Twitter} target='_blank' rel="noopener" className='text-sm relative hover:-top-0.5 border-ngc_white border-2 w-6 h-6 rounded-md flex justify-center items-center'>
              <RiTwitterXLine />
            </a>
            <a href={SocialMediaUrls.LinkedIn} target='_blank' rel="noopener" className='text-sm relative hover:-top-0.5 border-ngc_white border-2 w-6 h-6 rounded-md flex justify-center items-center'>
              <FaLinkedinIn />
            </a>
            <a href={SocialMediaUrls.Instagram} target='_blank' rel="noopener" className='text-[1.7rem] relative hover:-top-0.5'>
              <FaInstagram />
            </a>
          </div>
        </div>
        {/* open button on mobile */}
        <div className='block md:hidden'>
          <button className='p-2 bg-black bg-opacity-5 hover:bg-opacity-20 rounded-full transition-all' onClick={toggleMenu}>
            <FiMenu />
          </button>
        </div>
        {/* overlay menu on mobile */}
        <OverlayMobileMenu isOpen={isOpen} close={toggleMenu} />
      </div>
    </motion.div>,
    document.getElementById('app-header')!
  )
}

export default Header