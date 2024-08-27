
import { BsChevronRight } from "react-icons/bs";

const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-[0px] -top-[0px]" onClick={onClick}>
    <div className="bg-primary text-[15px] h-[40px] w-[40px]  rounded-full grid place-items-center cursor-pointer">
    <BsChevronRight /> 
    </div>
    </div>
  )
}

export default NextArrow