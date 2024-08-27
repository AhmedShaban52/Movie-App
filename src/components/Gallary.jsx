import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const items = [
    { id: "1", img: "/images/gallery-01.jpg" },
    { id: "2", img: "/images/gallery-02.jpg" },
    { id: "3", img: "/images/gallery-03.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBeforeChange = (oldIndex, newIndex) => {
    setCurrentIndex(newIndex);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: handleBeforeChange,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black py-[120px]">
      <div className="container  mx-auto px-10">
        <div className="text-center">
          <a className="main-btn  ">
            Online Streaming
          </a>
          <h1 className="text-3xl md:text-5xl font-[700] mt-[30px] text-white">
            Best Gallery For You
          </h1>
        </div>
      </div>

      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={item.id} className="max-w-full relative mt-[120px]">
            <img
              src={item.img}
              className="w-[450px] h-[280px] object-cover rounded-xl"
              style={{
                marginTop: currentIndex === index ? "-50px" : "0",
              }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
