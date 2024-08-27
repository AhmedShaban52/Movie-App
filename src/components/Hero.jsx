
import cleander from '/images/calender.png'
import clock from '/images/clock.png'
import { FaPlay } from "react-icons/fa";


const Hero = () => {
  return (
    <section className='hero h-full text-white  py-[140px]  relative '>
  <div className=' after'></div>
  <div className=" container mx-auto  items-center  px-6  relative ">
  <h4 className="text-primary text-[24px] font-[800]">Xiro</h4>
  <h1 className="main-text">Unlimited <span className="text-primary">Movie</span> <br/> TVs Shows, & More. </h1>

  <div className='element-center flex-wrap gap-5'>
  <a className='bg-primary py-2 px-4 rounded-md text-[18px] font-[700]'>Pg 18</a>
  <a className='bg-[#464646] border-2 py-2 px-4 rounded-md text-[16px] font-[700]'>HD</a>
  <a className='text-medium'>Romance, drama</a>

  <div className='element-center gap-2 border-left '>
  <img src={cleander} className='ml-3' />
  <a className='text-medium'> 18 MAY 2022</a>
  </div>

  <div className='element-center gap-2 border-left '>
  <img src={clock} className='ml-3' />
  <a className='text-medium'> 128 min</a>
  </div>

  </div>
  <div>
    <a href='https://youtu.be/tv7LfFeamsc'  target='_blank' className='element-center text-medium gap-3  mt-8 border-2 w-fit py-3 px-7  rounded-lg hover:bg-primary hover:border-primary duration-500 cursor-pointer'><FaPlay /> <span> Watch Now </span>  </a> 
  </div>
  </div>
    </section>
  )
}

export default Hero