
import logo from '/images/logo.png'
import location from '/images/location.png'
import email from '/images/email.png'
import call from '/images/call.png'

import appstore from '/images/app_01.png'
import googleplay from '/images/app_02.png'

import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react'

import Accordian from './Accordian'

const Footer = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  
  return (
    <section className='bg-[#01111b] pt-[80px]'>
    <div className='container mx-auto px-10 text-[#cfd3d7] font-medium'>
    <div className='flex justify-center  flex-col'>
   <div className='lg:flex lg:justify-between'>
  
    <div >
    <img src={logo} className='cursor-pointer' />
    <div className='flex gap-4 mt-8 cursor-pointer'>
    <img src={location}  className='h-[25px] ' />
    <a >8819 Ohio St. South Gate, CA 90280</a>
    </div>
    <div className='flex gap-4 mt-5 cursor-pointer'>
    <img src={email} className=' h-[25px]' />
    <a>Ourstudio@hello.com</a>
    </div>

    <div className='flex gap-4 mt-5 cursor-pointer'>
    <img src={call}  className='h-[25px]'/>
    <a>+1 386-688-3295</a>
    </div>
    <h1 className='text-primary font-medium  mt-5'>Follow Us</h1>

    <div className='flex gap-5 mt-5  '>
    <a className='icon '> <FaInstagram   /> </a>
    <a className='icon'>  <FaDribbble   /> </a>
    <a className='icon'>  <FaTwitter  /> </a>
    <a className='icon'>  <FaYoutube  /> </a>

    </div>
    </div>

    <div className='flex  gap-20 hidden md:flex'>
    <div className='mt-[100px]'>
    <h1 className='text-primary text-[18px] font-medium font-family'>Service</h1>
    <ul className='footer'>
    <li className='mt-4'>FAQs</li>
    <li className='mt-4'>Gallary</li>
    <li className='mt-4'>Adopt Pet</li>
    <li className='mt-4'>Our Team</li>
    <li className='mt-4'>Site Map</li>
    <li className='mt-4'>Privacy Policy</li>
    </ul>
    </div>

    <div className='mt-[100px]'>
    <h1 className='text-primary text-[18px] font-medium font-family'>Company</h1>
    <ul className='footer'>
    <li className='mt-4'>Service</li>
    <li className='mt-4'>Features</li>
    <li className='mt-4'>Our Team</li>
    <li className='mt-4'>Portfolio</li>
    <li className='mt-4'>Blog</li>
    <li className='mt-4'>Contact Us</li>
    </ul>
    </div>

    <div className='mt-[100px]'>
    <h1 className='text-primary text-[18px] font-medium font-family'>Categories</h1>
    <ul className='footer'>
    <li className='mt-4'>Movies</li>
    <li className='mt-4'>Tv Shows</li>
    <li className='mt-4'>Comedy</li>
    <li className='mt-4'>Cartoons</li>
    <li className='mt-4'>Horrer</li>
    <li className='mt-4'>Other</li>
    </ul>
    </div>

    <div className='mt-[100px]'>
    <h1 className='text-primary text-[18px] font-medium font-family'>Download App</h1>
    <ul className='footer'>
    <li className='mt-4'>Download Our Mobile App</li>
    <li className='mt-4'>Gallary</li>
    <img src={appstore} className='mt-8' />
    <img src={googleplay} className='mt-8' />
    </ul>
 

    </div>
    </div>
  
    </div>

  <div className='mt-[80px]  text-black rounded-lg  block md:hidden'>
  <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${!accordionOpen ? "grid-rows-[1fr] opacity-100 " :"grid-rows-[0fr] opacity-0  "}`}>
 
  <Accordian/>
  </div>
  </div>
  
  </div>
    <div className='flex justify-center text-center md:items-baseline md:flex-row md:justify-between  flex-col-reverse  mt-20 border-t-[1px] border-[#5c6680] py-10'>

    <div className='text-white  my-5'>
    <p>© 2024 <span className='text-primary'>XiroStreaming</span>. All rights reserved
    </p>
    </div>

    <div className='text-white '>
    <div className='flex gap-3 justify-center items-center text-center  flex-wrap'>
    <a className='border-right '>Privacy Policy </a>
    <a className='border-right'>Sitemap</a>
    <a className='border-right '>Disclaimer</a>
    <a className=' '> Terms & Conditions</a>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Footer