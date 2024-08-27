
import { useState } from 'react';
import Items from './Items';


const TvShows = () => {
    const Movies = [
        {
            id: "1",
            title: "Dead By Daylight",
            img: "/images/tvshow-01.png",
            url:"https://www.youtube.com/watch?v=MOCaj4uhWv8&pp=ygUQZGVhZCBieSBkYXlsaWdodA%3D%3D"
        },
        {
            id: "2",
            title: "The Witcher 3",
            img: "/images/tvshow-02.jpg",
            url:"https://www.youtube.com/watch?v=SzS8Ao0H6Co"
        },
        {
            id: "3",
            title: "Pan Am Pilot ",
            img: "/images/tvshow-03.png",
            url:"https://www.youtube.com/watch?v=S5IrcQEN1_Y"
        },
        {
            id: "4",
            title: "Birds of Prey",
            img: "/images/tvshow-04.jpg",
            url:"https://www.youtube.com/watch?v=tHMF_ZQMd4Y"
        },
        {
            id: "5",
            title: "THE THOR ",
            img: "/images/tvshow-05.jpg",
            url:"https://www.youtube.com/watch?v=XwUH3xNg_I8&pp=ygUQdGhvciAgZnVsbCBtb3ZpZQ%3D%3D"
        },
        {
            id: "6",
            title: "The Hoppit",
            img: "/images/tvshow-06.jpg",
            url:"https://www.youtube.com/watch?v=hTIC4t2yXDQ&pp=ygUMYWN0aW9uIG1vdmll"
        },
        {
            id: "7",
            title: "Big Legend",
            img: "/images/tvshow-07.jpg",
            url:"https://www.youtube.com/watch?v=QVvPyaDsAFU&pp=ygUQYmlnIGxlZ2VuZCBtb3ZpZQ%3D%3D"
        },
        {
            id: "8",
            title: "The Collector",
            img: "/images/tvshow-08.jpg",
            url:"https://www.youtube.com/watch?v=2Nbv5NxacZk&pp=ygUTdGhlIGNvbGxlY3RvciBtb3ZpZQ%3D%3D"
        },
        {
            id: "9",
            title: "Avatar",
            img: "/images/tvshow-09.jpg",
            url:"https://www.youtube.com/watch?v=AXxT0KjftWI&pp=ygURZnVsbCBtb3ZpZSBhdmF0YXI%3D"
        },
        {
            id: "10",
            title: "The Viking ",
            img: "/images/tvshow-10.jpg",
            url:"https://www.youtube.com/watch?v=G63JsaZ1s5Q&pp=ygURdmlraW5nIGZ1bGwgbW92aWU%3D"
        },
        {
            id: "11",
            title: "1917 World War",
            img: "/images/tvshow-11.jpg",
            url:"https://www.youtube.com/watch?v=C7Q4Ej7JQXY&pp=ygUVbW92aWUgMTkxNyBmdWxsIG1vdmll"
        },
        {
            id: "12",
            title: "A Boy Called ",
            img: "/images/tvshow-12.jpg",
            url:"https://www.youtube.com/watch?v=a68qzsv3TS0&pp=ygUWYSBib3kgY2FsbGVkIGNocmlzdG1hcw%3D%3D"
        },
    ];

    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };
   
  return (
    <section className='show-section flex justify-center relative after-show py-[120px]  '>
    {open && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-75 ' onClick={handleCloseMenu}></div>
      )}
    <div className="container relative z-[1] px-10 ">
    <div className='text-center'>
    <a className="main-btn">Online Streaming</a>
    <h1 className="main-title">TV Shows</h1>
    </div>

    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-6 text-white mt-20 ">
        {Movies.map((item) => (
            <Items key={item.id} img={item.img} title={item.title} url={item.url} />
    ))}
    </div>
    </div>
    </section>
  )
}

export default TvShows