
import { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const ContactUs = () => {
    const items = [
        {img:"/images/icon_01.png", email:"+8100-123-13312" , email2:"+1123-123-44565"},
        {img:"/images/icon_02.png", email:"AstroZeen@example.com" , email2:"Live@example.com"},
        {img:"/images/icon_03.png", email:"123, A Street B Block Dewas, " , email2:"M.P. #455001"},
    ]

    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };
  return (
    <section className= ' text-white bg-background  '>

    {open && (
      <div className='fixed inset-0 z-50 bg-black bg-opacity-75 ' onClick={handleCloseMenu}></div>
    )}
    <section className="contact-image  py-[150px] mt-16 flex justify-center  relative after-contact">
    <div className='container text-white element-center  justify-center   flex-col  text-center z-[1] relative '>
    <h1 className=" text-5xl sm:text-6xl font-[800] font-family">Contact Us</h1>
    <div className="flex  items-center text-center justify-center">
    <Link to="/" className="hover:text-primary text-[22px] font-bold flex justify-center items-end  cursor-pointer  duration-500">Home <RiArrowDropRightLine className="w-[30px] h-[30px]"/>  </Link>
    
    <span className="text-primary text-[20px] font-family font-[800]">Contact</span>
    </div>
    </div>
    </section>
    
    <section className="text-center mx-auto  max-w-full py-[80px] flex justify-center ">
    <div className="container">
    
    <h1 className="text-4xl uppercase font-bold font-family">Need help contact us</h1>
    <p className="font-medium capitalize mx-auto mt-5 w-full md:w-[510px]">
      Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat hello Aenean world.
    </p>
    </div>
  </section>

  <section className=" mx-5 ">
  <div className=" container  mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   text-center gap-5">
  {items.map((item) => (
    <div key={item.email} className="text-[#5c6680]  p-10 text-center flex flex-col border-[1px] border-[#17384e]  ">
    <img src={item.img} className=" w-auto mx-auto object-cover" />
    <a className="mt-5 hover:text-primary duration-500 cursor-pointer text-[20px]">{item.email}</a>
    <a className="hover:text-primary duration-500 cursor-pointer text-[20px]">{item.email2}</a>
  </div>
  ))}
  </div>
  </section>

  <section className="text-center mx-auto  max-w-full py-[100px]">
  <div className="container mx-auto" >
  <h1 className="text-4xl uppercase font-bold font-family">Fill free Enquiry Form</h1>
  <p className="font-medium capitalize mx-auto mt-5  w-[315px] lg:[w-550px]">
    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat hello Aenean world.
  </p>

  <section className="w-full mx-auto px-6 mt-10" >
  <form >
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
  <input placeholder='Name*' type='text'  className='input-form ' />
  <input placeholder='Email*' type='text' className='input-form  ' />
  <textarea placeholder="Your Message" className="input-form   h-[150px] mt-3 lg:col-span-2" />
  </div>
  </form>
  <div className="py-[30px] text-left ">
  <a className='py-3 px-6 bg-primary rounded-lg hover:bg-transparent border-primary border-[1px] hover:text-primary font-medium text-[18px] cursor-pointer duration-700 '>Send A Message</a>
  </div>
  </section>

  <section className="cta-section relative py-[120px] mt-20 after-cta ">
  <div className="relative z-[1]">
  <h1 className="text-2xl sm:text-4xl uppercase font-bold font-family">TRIAL START FIRST 30 DAYS.</h1>
  <p className="text-[18px] text-[#5c6680] mt-3">Enter your email to create or restart your membership.</p>
  <form className="mt-10 flex  items-center   justify-center flex-col sm:flex-row  gap-4 px-8">
  <input placeholder="Enter Your Email" type="text" className="bg-white text-black py-3 px-6 rounded-lg w-full sm:w-[344px] outline-0 border-[1px] focus:border-primary duration-700 " />
 
  <a className='py-3 px-6 bg-primary rounded-lg hover:bg-transparent border-primary border-[1px]  w-full sm:w-auto   hover:text-primary font-medium text-[18px] cursor-pointer duration-700 '>Get Started</a>
  </form>
  </div>
  </section>
  </div>
  </section>
  
     </section>
  )
}

export default ContactUs





