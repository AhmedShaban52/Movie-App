import { FaQuoteLeft } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";


const Testimonial = () => {
    const Items = [
        {
            id: "1",
            title: "Benjamin Robert",
            desc: "Customer",
            img: "/images/avatar.png"
        },
        {
            id: "2",
            title: "Taylor Robert",
            desc: "Manager",
            img: "/images/avatar-02.png"
        },
        {
            id: "3",
            title: "Jhon Doe",
            desc: "Customer",
            img: "/images/avatar-03.png"
        },
        {
            id: "4",
            title: "Alex Robert",
            desc: "Manager",
            img: "/images/avatar-04.png"
        }
    ];

    
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='bg-background py-[120px] '>
            <div className='container mx-auto px-10'>
                <div className='text-center lg:text-left'>
                    <a className="main-btn ">Testimonial</a>
                    <h1 className="text-[30px] md:text-[42px] leading-[60px] font-[700] mt-[35px] text-white lg:w-[430px] ">
                        Don’t Believe Me? Check
                        <span className="mt-4 text-primary"> What Clients </span>
                        Think Of Us
                    </h1>

                <Slider {...settings} >
                        {Items.map((item) => (
                            <div key={item.id} className='text-primary bg-[#180f18]  w-[350px] mt-[50px] p-6   rounded-xl relative'>
                                <div className="flex ">
                                    <img src={item.img} className="w-[50px] h-[50px]" alt="Avatar" />
                                    <div className="ml-4 text-white">
                                    <h1 className="text-[16px] ">{item.title}</h1>
                                    <p>{item.desc}</p>
                                    
                                    </div>
                                </div>
                                <FaQuoteLeft className="w-[20px] h-[20px] absolute right-8 top-[10%] " />
                                
                                <div className="mt-10">
                                <p className="text-white   leading-8">
                                    “It's really very nice to be able to feel the very satisfying service in this sports place, I didn't choose the wrong place and it's so comfortable and beautiful, for those of you who are going to exercise try this place.”
                                </p>
                            </div>
                                </div>
                        ))}
                        </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
