import { useState } from 'react';
import logo from '/images/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleCloseMenu = () => {
        setOpen(false);
    };

    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <section className='bg-background w-full h-full flex justify-center '>
        
        {open && (
            <div className='fixed inset-0 z-10 bg-black bg-opacity-80 ' onClick={handleCloseMenu}></div>
        )}
        <header className='fixed top-0 w-full flex z-[1000] bg-black'>
            <div className='container  bg-black mx-auto element-center justify-between  py-4 px-6 text-white text-16'>
            
        <div className='w-[80px] cursor-pointer'>
            <Link to="/" ><img src={logo} className='w-full h-full'  />  </Link>   
        </div>
        <div className='hidden lg:block'>
            <ul className='element-center gap-[40px] text-[18px] font-medium  p-0 m-0 w-ful bg-black '>
                
            <li  className=' '>
                <Link to="/" className=' main-link text-primary '>Home</Link>
            </li>
            <li  className=' '>
                <Link to="/movies" className=' main-link'>Movies</Link>
            </li>
            <li  className=' '>
                <Link to="/tv shows" className='main-link '>Tv Shows</Link>
            </li>
            
            <li className="main-link relative group  ">
            <a className="flex items-center text-center group">
                Pages <RiArrowDropDownLine className='w-[30px] h-[30px]' /></a>
            <ul className="bg-background absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 top-14 group-hover:top-10 duration-700 w-[250px] h-[185px] border-t-2 border-primary rounded-xl group ">
                <li className='border-b-2 py-2 border-[#5c6680] border-dashed border-opacity-40 relative group'>
                <Link to="/pricing" className="text-[15px] pl-6 cursor-pointer text-white hover:text-primary hover:pl-8 duration-700 flex items-center text-center group">Pricing</Link>
                
                </li>
            <li className='border-b-2 py-2 border-[#5c6680] border-dashed border-opacity-40'>
                <a href="#" className="second-link">Login</a>
            </li>
            <li className='border-b-2 py-2 border-[#5c6680] border-dashed border-opacity-40'>
                <a href="#" className="second-link">Sign Up</a>
            </li>
            <li className='py-2'>
                <a href="#" className="second-link">Coming Soon</a>
            </li>
            </ul>
            </li>
            
            <li  className='className="text-[18px] cursor-pointer  hover:text-primary duration-700 relative group  '>
            <a  className=" flex items-center text-center">Blog <RiArrowDropDownLine className='w-[30px] h-[30px]'/>	</a>
                <ul className="bg-background absolute invisible opacity-0 group-hover:visible  group-hover:opacity-100 top-14 group-hover:top-10 duration-700 w-[250px] h-[100px] border-t-2 border-primary rounded-xl group">
            <li className='border-b-[1px] py-2 border-[#5c6680] border-dashed border-opacity-40 relative group'>
                <Link to="/blog" className="second-link element-center text-center group">Blog</Link>
                
            </li>
            <li className=''>
                <a href="#" className="second-link">Blog Single</a>
            </li>

                </ul>
            </li>
            <li>
                <Link to="/contact us" className='main-link '>Contact Us</Link>
            </li>
    </ul>
        </div>

        <div className='element-center gap-5'>
            <a className='secend-btn  hidden sm:block'>Subscribe</a>
            <div onClick={() => setOpen(!open)} className={`border-2 border-[#a7a7a785] p-1 hover:bg-primary duration-300 cursor-pointer lg:hidden `}>
                <IoMenu className='w-[35px] h-[35px]' />
            </div>
        </div>
                <div className={`fixed w-[65%]  h-screen px-7 bg-[#000000] duration-300  top-0 ${open ? "left-0" :"left-[-100%]" } `}>
                    <div className='mt-9 cursor-pointer flex justify-between items-center'>
                        <img src={logo} alt="logo" />
                        <IoClose onClick={() => setOpen(!open)} className={`w-[25px] h-[25px] ${!open ? "left-[-100%]" : "left-0"} `} />
                    </div>
                    <ul className='flex flex-col mt-7  h-full text-[18px] font-medium  relative z-[1000]'>
                    <li  className='border-top '>
                        <Link to="/" className='hover-link '>Home</Link>
                    </li>
                    <li  className='border-top '>
                        <Link to="/movies" className='hover-link '>Movies</Link>
                    </li>
                    <li  className=' border-top '>
                        <Link to="/tv shows"  className='hover-link '>Tv Shows</Link>
                    </li>
                    <li className='border-top' onClick={toggleSubMenu}>
                    <a className="element-center justify-between text-center group">
                    Pages <RiArrowDropDownLine className='w-[30px] h-[30px]' /></a>
                        {showSubMenu && (
                            <ul className="pl-4 py-2  duration-1000">
                                <li>
                                    <Link to="/pricing"  className='sub-link' >Pricing</Link>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className='sub-link '>Login</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className='sub-link'>Sign Up</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className='sub-link '>Coming Soon</a>
                                </li>
                            </ul>
                        )}
                    </li>


                    <li className='border-top ' onClick={toggleMenu}>
                    <Link to="/blog" className="element-center justify-between text-center group">
                    Blog<RiArrowDropDownLine className='w-[30px] h-[30px]' /></Link>
                        {showMenu && (
                            <ul className="pl-4 py-2  duration-1000">
                                <li>
                                    <a href="#" className='sub-link ' >Blog Page</a>
                                </li>
                                <li className='mt-2'>
                                    <a href="#" className='sub-link '>Blog Single</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className='border-top'>
                        <Link to="/contact us" className='hover-link '>Contact Us</Link>
                    </li>
                </ul>
                </div>
            </div>
            </header>
        </section>
    );
}

export default Navbar;
