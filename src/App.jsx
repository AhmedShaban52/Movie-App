import { Route, Routes, useLocation } from "react-router-dom";
import Blog from "./components/Blog";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Streaming from "./components/Streaming";
import Testimonial from "./components/Testimonial";
import TvShows from "./components/TvShows";
import UpComing from "./components/UpComing";
import WatchShowing from "./components/WatchShowing";
import MovieDeatils from "./components/MovieDeatils";
import ContactUs from "./components/ContactUs";
import Pricing from "./components/Pricing";
import { useRef, useEffect } from "react";

const App = () => {
  const scroll = useRef();
  const location = useLocation(); 

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        scroll.current.style.visibility = "visible";
      } else {
        scroll.current.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  return (
    <div className="overflow-hidden">
      <button
        ref={scroll}
        onClick={top}
        className="text-white font-medium fixed z-50 right-5 bottom-3 bg-primary rounded-[50%] w-[50px] h-[50px] animate-bounce"
      >
        Scroll
      </button>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <UpComing />
              <Streaming />
              <TvShows />
              <WatchShowing />
              <Services />
              <Testimonial />
              <Gallary />
              <Blog />
              <ComingSoon />
            </>
          }
        />
        <Route path="/movies" element={<UpComing />} />
        <Route path="/movies/:id" element={<MovieDeatils />} />
        <Route path="/tv shows" element={<TvShows />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
