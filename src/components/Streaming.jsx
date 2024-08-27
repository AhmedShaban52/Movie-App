
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import clock from '/images/clock.png'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Streaming = () => {
    const Movies = [
        {
            id: "1",
            title: "Avengers Endgame",
            img: "/images/thriller-01.jpg",
            url:"https://www.youtube.com/watch?v=79uhQ85n0YU"
        },
        {
            id: "1",
            title: "The lord of the rings",
            img: "/images/thriller-02.jpg",
            url:"https://www.youtube.com/watch?v=79uhQ85n0YU"
        },
        {
            id: "1",
            title: "Star Wars",
            img: "/images/thriller-03.jpg",
            url:"https://www.youtube.com/watch?v=79uhQ85n0YU"
        },
    ];
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
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
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
  return (
    <section className="bg-background py-[120px] text-center text-white">
    <div className="container mx-auto  px-10">
    <a className="main-btn py-3 px-5   ">Online Streaming</a>
    <h1 className="main-title   ">Powerful Crime Thrillers</h1>

    <Slider {...settings}>
        {Movies.map((movie, index) => (
            <div key={index} className="mt-[70px] w-[180px]  " >
            <div className=" rounded-xl overflow-hidden cursor-pointer">
        <Link to={`/movies/${movie.id}`} > <img src={movie.img}  className="h-[200px]  hover:transform hover:scale-[1.1]  duration-500"/>  </Link>   
            </div>
            
            <div className=' element-center justify-center text-center mt-3   '>
            <img src={clock} className="mr-[2px]"/>
            <a className='text-medium mr-5'> 128 min</a>
            <a className="text-primary">Action</a>
            </div>

            <div className="flex  justify-between mt-5 text-center">
            <div className=" ">
            <h className=" text-[18px] font-bold">Avengers Andgame</h>
            </div>

            <div className="element-center gap-3 text-right text-[18px] cursor-pointer">
            <FaRegHeart className="color-primary" />
            <AiOutlinePlusCircle className="color-primary"/>
            <FiShare2 className="color-primary" />
            
            </div>
            </div>
          
            </div>
        ))}
    </Slider>
    </div>
    </section>
  )
}

export default Streaming