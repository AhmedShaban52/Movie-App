
import { FaRegHeart } from "react-icons/fa";
const Blog = () => {
    const Items = [
        {
            id: "1",
            title: "Some toughly useful much darn",
            desc: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            date:"15 July 2022",
            img: "/images/blog-01.png"
        },
        {
            id: "2",
            title: "Some toughly useful much darn",
            desc: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            date:"15 July 2022",
            img: "/images/blog-02.png"
        },
        {
            id: "3",
            title: "Some toughly useful much darn",
            desc: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
            date:"15 July 2022",
            img: "/images/blog-03.png"
        },
        
    ];
  return (
    <section className="bg-[#01111b] py-[120px]">
    <div className="container mx-auto px-10">
    <div className="text-center">
          <a className="main-btn  ">
          Our lastest blog
          </a>
          <h1 className="main-title">
          Our Latest <span className="text-primary"> News Updates</span> 
          </h1>
        </div>

  <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  mt-[60px] place-items-center ">
    {Items.map((item) => (
    <div key={item.id}  className=" bg-[#1a1a1a] group w-[280px] lg:w-[280px]    h-[480px] element-center   flex-col  text-center  rounded-xl  overflow-hidden">
    <div className=" relative text-white overflow-hidden w-[280px] lg:w-[280px]   ">
    <img src={item.img} className=" w-full h-[200px]  group-hover:transform group-hover:scale-[1.1] group-hover:rotate-3  duration-500 " />
    <span className=" bg-primary absolute top-[10px] left-[20px] py-1 px-3 rounded-md">July 22</span>
    <span className=" absolute bottom-[25px] left-[20px]">{item.date}</span>
    <FaRegHeart className="color-primary absolute bottom-[25px] right-[20px]" />
    </div>
   
    <div className=" text-white py-4 px-6   ">
    <h1 className="text-xl group-hover:text-primary duration-300 font-medium cursor-pointer ">{item.title.slice(0,20)}...</h1>
    <p className="capitalize text-[18px] font-medium mt-4">{item.desc}</p>
    </div>
    <a className='bg-primary group-hover:bg-transparent text-white group-hover:text-primary py-3 px-6 rounded-lg font-medium text-[18px] hover:bg-transparent border border-primary color-primary duration-300  my-3   '>Read More</a>
    </div>
    ))}
    </div>
    </div>
    </section>
  )
}

export default Blog