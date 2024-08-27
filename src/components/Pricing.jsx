import { Link } from "react-router-dom"

import { RiArrowDropRightLine } from "react-icons/ri";

import { useState } from "react";
const Pricing = () => {
    const Sercices = [
        {
            id: "1",
            title: "Basic",
            desc:"1-Month Plan",
            price:"09",
            img: "/images/service-02.png"
        },
        {
            id: "2",
            title: "Standerd",
            desc:"6-Month Plan",
            price:"49",
            img: "/images/service-02.png"
        },
        {
            id: "3",
            title: "premium",
            desc:"12-Month Plan",
            price:"100",
            img: "/images/service-02.png"
        },
    ];

    const lists = [
        {img:"/images/icon.png" , text:"Ask One Question"},
        {img:"/images/icon.png" , text:"Half-Hour Reading"},
        {img:"/images/icon.png" , text:"Newborn / Child Reading"},
        {img:"/images/icon.png" , text:"Relationship Reading"},
    ]

    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

  return (
    <section className="text-white bg-background ">
        
    {open && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-75 ' onClick={handleCloseMenu}></div>
    )}
    <section className="contact-image  py-[120px] mt-16 flex justify-center  relative after-contact">
    <div className='container text-white element-center  justify-center   flex-col  text-center z-[1] relative '>
    <h1 className=" text-5xl sm:text-6xl font-[800] font-family">Pricing Plan</h1>
    <div className="flex  items-center text-center justify-center mt-5">
    <Link to="/pricing" className="hover:text-primary text-[22px] font-bold flex justify-center items-end  cursor-pointer  duration-500">Home <RiArrowDropRightLine className="w-[30px] h-[30px]"/>  </Link>
    
    <span className="text-primary text-[22px] font-family font-[800]">Pricing Plan</span>
    </div>
    </div>
    </section>

    <section className="py-[120px]">
    <div className="container mx-auto">
    <div className='text-center'>
    <a className="main-btn">Start Secure browsing</a>
    <h1 className="main-title">Our Pricing Strategy</h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center text-center mt-12 cta-section gap-4 relative py-[120px] after-cta">
    
    {
        Sercices.map((item, index) => (
            <div key={item.id} className={`relative z-[1] w-[350px] md:w-[380px] h-auto px-8 group hover:-translate-y-4 ${index === 1 ? "-translate-y-3" : ""} duration-500`}>
                <div className='bg-background text-white p-7 grid place-items-center rounded-xl  group'>
                    <img src={item.img} className={`w-[80px] ${index === 1 ? "brightness-[4]" : "brightness-0"} group-hover:brightness-[4] duration-500 invert`} />
                    <h1 className={`text-4xl font-medium cursor-pointer mt-5 group-hover:text-primary duration-500 ${index === 1 ? "text-primary" : ""}`}>{item.title}</h1>
                    <p className="font-medium text-[18px] mt-5 text-[#5c6680]">{item.desc}</p>
                    <div className="mt-4 flex items-center">
                        <sup className={`${index === 1 ? "text-primary" : ""} group-hover:text-primary font-bold duration-500 text-[22px]`}>$</sup>
                        <span className={`${index === 1 ? "text-primary" : ""} group-hover:text-primary duration-500 text-[50px] font-bold mr-2`}>{item.price}</span>
                        <div className="w-full">
                            <span className="text-[#5c6680] before:content-['|'] text-[15px]"> Per <br/> Month</span>
                        </div>
                    </div>

                    {lists.map((list, index) => (
                        <ul key={index} className="">
                            <li className="flex items-center w-[200px] text-[14px] text-start"><img src={list.img} className="w-[15px] h-[15px] my-3 mr-3" /> {list.text}</li>
                        </ul>
                    ))}
                    
                    <a className={`py-3 px-11 my-10 rounded-lg font-medium text-[18px] hover:bg-transparent border border-primary text-white cursor-pointer duration-700  group-hover:bg-primary ${index === 1 ? "bg-primary" : ""}`}>
                        Buy Now
                    </a>
                </div>
            </div>
        ))
    }
  </div>
 </div>
    </section>

    <section className="cta-section text-center relative py-[120px] after-cta ">
    <div className="container mx-auto relative z-[1]">
    <h1 className="text-2xl sm:text-4xl uppercase font-bold font-family">TRIAL START FIRST 30 DAYS.</h1>
    <p className="text-[18px] text-[#5c6680] mt-3">Enter your email to create or restart your membership.</p>
    <form className="mt-10 flex  items-center   justify-center flex-col sm:flex-row  gap-4 px-8">
    <input placeholder="Enter Your Email" type="text" className="bg-white text-black py-3 px-6 rounded-lg w-full sm:w-[344px] outline-0 border-[1px] focus:border-primary duration-700 " />
   
    <a className='py-3 px-6 bg-primary rounded-lg hover:bg-transparent border-primary border-[1px]  w-full sm:w-auto   hover:text-primary font-medium text-[18px] cursor-pointer duration-700 '>Get Started</a>
    </form>
    </div>
    </section>
    </section>
  )
}

export default Pricing