import { useState } from "react";
import Service from "./Service";


const Services = () => {
    const Sercices = [
        {
            id: "1",
            title: "Access while traveling",
            desc:"Keep access to your entertainment content while roaming the world.Pick from thousands.",
            img: "/images/service-01.png"
        },
        {
            id: "2",
            title: "Stream with no interruptions",
            desc:"Keep access to your entertainment content while roaming the world.Pick from thousands.",
            img: "/images/service-02.png"
        },
        {
            id: "3",
            title: "Access while traveling",
            desc:"Keep access to your entertainment content while roaming the world.Pick from thousands.",
            img: "/images/service-03.png"
        },
    ];

    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

  return (
    <section className="service-section after-service flex justify-center relative ">
    {open && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-75 ' onClick={handleCloseMenu}></div>
      )}
    <div className="container px-6 py-[150px] relative z-[1] ">
    <div className='text-center'>
    <a className="main-btn ">Online Streaming</a>
    <h1 className=" main-title leading-10 ">
    Best pick for hassle-free 
    <br/>
    <h1 className="mt-4">   streaming experience.</h1>
  
    </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   place-items-center text-center gap-5 mt-12  ">
    {
        Sercices.map((item) => (
            <div key={item.id} className="">
            <Service  img={item.img} title={item.title}  desc={item.desc} />
            </div>
        ) )
    }
    </div>
    </div>
    </section>
  )
}

export default Services