
import { BsChevronLeft } from "react-icons/bs";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[50px] -top-[-0px] z-[1]" onClick={onClick}>
    <div className="bg-primary text-[15px] h-[40px] w-[40px]  rounded-full grid place-items-center cursor-pointer">
    <BsChevronLeft /> 
    </div>
    </div>
  )
}

export default PrevArrow