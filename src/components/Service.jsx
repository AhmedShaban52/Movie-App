

const Service = ({img, title,desc}) => {
  return (
    <>
    <div className='w-[300px]   h-[480px] bg-background text-white grid place-items-center py-[50px] px-[40px] rounded-xl  group hover:bg-primary duration-1000'>
    <img src={img}  className='w-[80px]  brightness-0 invert'/>
    <h1 className='text-2xl font-medium cursor-pointer'>{title}</h1>
    <p className=' leading-8 font-normal'>{desc}</p>
    <a className=" text-primary border-[1px] border-primary  text-[18px]  font-medium  py-2 px-6 rounded-[30px] cursor-pointer group-hover:bg-white group-hover:border-primary duration-1000 ">Learn More</a>
    </div>
    </>
  )
}

export default Service