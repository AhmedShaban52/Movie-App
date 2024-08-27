
import playButton  from "/images/play-button.png"
import { FaRegHeart } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";


const Movie = ({ img, title }) => {

    const top = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      
  return (
    <div className='w-[300px]  flex flex-wrap  overflow-hidden relative group rounded-xl  '>
  
      <img  src={img} className='w-full h-[400px] object-cover rounded-xl ' alt={title}  />
      <div className='absolute inset-0 bg-[#2d303d] opacity-0 bg-opacity-80 hover:opacity-100 element-center justify-center text-center flex-col  rounded-xl duration-500 border-2 border-transparent group-hover:border-[#677076] '>

        <div className="absolute right-0 group-hover:right-[10%] bottom-[10%] text-[18px]  flex gap-4 flex-col  text-white transition-all duration-300">
        <FaRegHeart className="color-primary" onClick={top} />
        <AiOutlinePlusCircle className="color-primary" onClick={top} />
        <FiShare2 className="color-primary" onClick={top} />
        </div>

      <a href="https://youtu.be/tv7LfFeamsc" target="_blank">  <img src={playButton}  className="cursor-pointer w-[60px] mt-[120px]"/> </a>  
        <a href='https://youtu.be/tv7LfFeamsc'  target='_blank' className=" text-primary bg-[#2d303d] border-[1px] border-primary text-[16px] hover:bg-primary hover:text-white duration-500 cursor-pointer  font-medium  py-2 px-6   rounded-[30px] mt-2 " >Action</a>
        <a className="text-[18px] text-white mt-4">Stories Of The Dark</a>
        <p className="text-white ">5 Seasons - 2017</p>
      </div>
    </div>
  );
};

export default Movie;
