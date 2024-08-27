import { useParams } from 'react-router-dom'

import cleander from '/images/calender.png'
import clock from '/images/clock.png'
import { FaPlay } from "react-icons/fa"
const MovieDeatils = () => {

    const Movies = [
        {
            id: "1",
            title: "Avengers Endgame",
            views: "1.5k",
            quality:"HD",
            img: "/images/m-image-01.jpg",
            url:"https://www.youtube.com/watch?v=79uhQ85n0YU"
            
        },
        {
            id: "2",
            title: "The lord of therings",
            views: "1.5k",
            quality:"4K",
            img: "/images/m-image-02.jpg",
            url:"https://www.youtube.com/watch?v=SIfnXiWsgkw"
        },
        {
            id: "3",
            title: "Star Wars",
            views: "1.5k",
            quality:"4K",
            img: "/images/m-image-03.png",
            url:"https://www.youtube.com/watch?v=Hp6e_mPznDw"
        },
        {
            id: "4",
            title: "Joker",
            views: "1.5k",
            quality:"HD",
            img: "/images/m-image-04.png",
            url:"https://www.youtube.com/watch?v=XaeqbOqGx30",
        }
    ];

    const { id } = useParams()
    
    console.log(id);

    const movie = Movies.find(movie => movie.id  === id)
    if (!movie) {
        return <div>Product not found</div>;
        
      }
  
    console.log(movie);
  return (
    <div className=' deatils-image relative  pb-[140px]'>
    <div className=' after-deatils '></div>

    <div className='flex flex-wrap lg:flex-nowrap   items-center    px-5'>
    <div className=" container mx-auto  items-center mt-16 py-10  lg:pt-[190px] lg:pb-[156px] px-5  relative ">
    <h4 className="text-primary text-[24px] font-[800]">New Episodes</h4>
    <h1 className="main-text">The Easy Reach </h1>
  
    <div className='flex items-center  flex-wrap gap-5 text-white'>
    
    <a className='bg-primary  py-2 px-4 rounded-md text-[18px] font-[700]'>Pg 18</a>
    <a className='bg-[#464646] border-2 py-2 px-4 rounded-md text-[16px] font-[700]'>HD</a>
    <a className='text-medium'>Romance, drama</a>
  
  
    <div className='element-center gap-2 border-left  '>
    <img src={cleander} className='ml-3' />
    <a className='text-medium'> 18 MAY 2022</a>
    </div>
  
    <div className='element-center gap-2 border-left '>
    <img src={clock} className='ml-3' />
    <a className='text-medium'> 128 min</a>
    
    </div>
  
    <p>
    Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some
    injected humour.
    </p>

    </div>
    <div >
      <a href={movie.url}  target='_blank' className='element-center text-medium gap-3 text-white mt-14 border-2 w-fit py-3 px-7  rounded-lg hover:bg-primary hover:border-primary duration-500 cursor-pointer'><FaPlay /> <span> Watch Now </span>  </a> 
    </div>
    </div>

    <div className='z-50 relative  w-[330px] sm:w-[400px] lg:w-fit h-full border-[8px] border-white rounded-[30px] overflow-hidden'>
      <img src={movie.img} className=' hover:scale-[1.1] w-full h-full object-cover   duration-500'/>
      <div className='absolute inset-0 bg-black opacity-30' ></div>
    </div>
    </div>

    </div>
  )
}

export default MovieDeatils