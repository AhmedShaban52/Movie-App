
import Movie from "./Movie";


const WatchShowing = () => {
    const Movies = [
        {
            id: "1",
            title: "Avengers Endgame",
            img: "/images/m-show-01.jpg"
        },
        {
            id: "2",
            title: "The lord of the rings",
            img: "/images/m-show-02.jpg"
        },
        {
            id: "3",
            title: "Star Wars",
            img: "/images/m-show-03.jpg"
        },
    ];
  return (
    <section className=" bg-background py-[150px]  flex justify-center">
    <div className="container mx-auto ">
    <div className='text-center'>
    <a className="main-btn  py-3 px-5 ">Online Streaming</a>
    <h1 className="main-title">Wacth Shows Online</h1>
    </div>

    <div className="flex justify-center  flex-wrap gap-6 mt-10 ">
    {Movies.map((item) => (
        <Movie key={item.id} img={item.img} title={item.title} />
    ))}
    </div>
    </div>
    </section>
  )
}

export default WatchShowing