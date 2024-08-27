import { FaRegHeart } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import playButton  from "/images/play-button.png"
import { Link } from "react-router-dom";


const Items = ({img, title ,url}) => {
    
  return (
    <section className=" group">
      <div className=" h-[220px] overflow-hidden relative flex flex-col items-center rounded-xl">
      <img src={img} className="w-full object-cover  group-hover:scale-[1.1]  duration-500 "  /> 
      <div className="absolute h-full w-full bg-background flex items-center justify-center -bottom-96 group-hover:bottom-0   duration-500">
      <Link to={url} target="_blank"  className="bg-black text-white py-2 cursor-pointer px-5"><img src={playButton} /> </Link>
    </div>
      </div>

      <div className="flex   justify-between relative bottom-5 py-4 px-2 bg-background rounded-b-xl">
        <h1 className=" font-bold ">{title}</h1>
        <div className="flex gap-2 items-center text-center ">
          <FaRegHeart className="color-primary" />
          <AiOutlinePlusCircle className="color-primary"/>
          <FiShare2 className="color-primary" />
        </div>
      </div>
    </section>
  );
}

export default Items;
