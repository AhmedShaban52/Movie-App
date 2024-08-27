
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import clock from '/images/clock.png'
import { CiHeart } from "react-icons/ci";

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";



const UpComing = () => {
    const Movies = [
        {
            id: "1",
            title: "Avengers Endgame",
            views: "1.5k",
            quality:"HD",
            img: "/images/m-image-01.jpg"
        },
        {
            id: "2",
            title: "The lord of therings",
            views: "1.5k",
            quality:"4K",
            img: "/images/m-image-02.jpg"
        },
        {
            id: "3",
            title: "Star Wars",
            views: "1.5k",
            quality:"4K",
            img: "/images/m-image-03.png"
        },
        {
            id: "4",
            title: "Joker",
            views: "1.5k",
            quality:"HD",
            img: "/images/m-image-04.png"
        }
    ];
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }

        const [slidesToShow, setSlidesToShow] = useState(4)

    const setSlides = () => {
      if(window.innerWidth <= 1280 && window.innerWidth > 1000) {
        setSlidesToShow(3)
      }else if(window.innerWidth <= 1000 && window.innerWidth > 650) {
        setSlidesToShow(2)
      }else if(window.innerWidth <= 600) {
        setSlidesToShow(1)
      }
    }



  return (
    <>
    <div className="text-white bg-background  py-[80px] relative  ">
    <div className="container mx-auto  px-5">
    <div className="flex flex-col  items-center  lg:items-baseline  text-center lg:flex-row lg:gap-[80px] px-2">

    <div className="text-center lg:text-left mt-[70px] px-2 w-full">
    <a className="main-btn  ">Online Streaming</a>
    <h1 className="main-title ">Upcoming Movies</h1>
    </div>

    <div className=" flex gap-3  mt-[30px]">
    <button className="bg-[#20212b] border-2 border-[#2d303d] hover:border-primary duration-500 py-2  w-[100px] font-medium  rounded-[30px] leading-5 ">Tv Shows</button>
    <button className="bg-[#20212b] border-2 border-[#2d303d] hover:border-primary duration-500 py-2 px-4 font-medium  rounded-[30px] leading-5">Movies</button>
    <button className="bg-[#20212b] border-2 border-[#2d303d] hover:border-primary duration-500 py-2 px-4  font-medium rounded-[30px] leading-5">Anime</button>
    </div>
    </div>
   
    <Slider {...settings}>
      {Movies.map((movie ,indx) => (
        <div  key={indx} className=" relative   mt-[70px]  ">

      <div className="border-[2px] border-[#2d303d] rounded-xl overflow-hidden">
          <Link to={`/movies/${movie.id}`} >    <img className="h-fit hover:scale-[1.1]  cursor-pointer  duration-500" src={movie.img} /> </Link>
      </div>
      
        <div className="flex justify-between  mt-3 items-center text-center">
        <span className="font-medium">2022</span>
       <p className="text-primary text-[20px] md:text-[18px]  overflow-hidden">{movie.title.slice(0, 12)}..</p> 
        
      <div className="flex gap-[3px]  items-center text-[18px] hover:text-primary  duration-700">
      <CiHeart className="text-[20px]" />
      <p className="font-medium  text-[18px] " >{movie.views}</p>
      </div>
    
        </div>

        <div className="flex justify-between mt-2">
        <a className="bg-[#464646]  py-1 px-2 rounded-md text-[14px] font-[700]">{movie.quality}</a>
        <div className='element-center gap-2  '>
        <img src={clock} className='ml-3' />
        <a className='text-medium'> 128 min</a>
        </div>
        </div>
        </div>
      
      ))}
      </Slider>
      </div>
      
    </div>
    </>
  )
}

export default UpComing