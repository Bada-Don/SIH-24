import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import droparrow from '/droparrow.svg'; // Make sure the path is correct
import { Link } from 'react-router-dom'; // Import Link for navigation

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle state
    };

    return (
        <nav className='transition-all duration-500 bg-black backdrop-blur-sm mb-10 rounded-b-xl py-[1rem] px-[12.5%] flex flex-row justify-between items-center w-screen max-sm:w-[100%] max-sm:px-0 max-xl:sticky  max-sm:top-0'>
            <div className="max-sm:px-7 logo flex flex-row items-center max-xl:w-[40%] gap-5">
                {/* Menu Icon */}
                <div className='cursor-pointer hidden max-sm:block'>

                    <ion-icon
                        onClick={onToggleMenu}
                        name={menuOpen ? 'close' : 'menu'}
                        size="large"
                    ></ion-icon>
                </div>

                <h3 className='cursor-pointer max-sm:text-[1rem]'>Nayi Disha</h3>
            </div>
            {/* Nav Links */}
            <ul className={`nav-links flex flex-row gap-10 max-xl:flex-col max-xl:bg-black max-xl:items-center max-xl:w-full max-xl:h-auto max-xl:absolute max-xl:left-0 transition-all duration-500 ${menuOpen ? 'top-[100%]' : 'top-[-1000px]'}`}>
                <li className='max-sm:my-6 cursor-pointer text-[1.1rem] text-[#b9b8b8] flex gap-3'>For Companies <img src={droparrow} className='w-3' alt="" /></li>
                <li className='max-sm:my-6 cursor-pointer text-[1.1rem] text-[#b9b8b8] flex gap-3'>For Talent <img src={droparrow} className='w-3' alt="" /></li>
                <li className='max-sm:my-6 cursor-pointer text-[1.1rem] text-[#b9b8b8] flex gap-3'>Our Products <img src={droparrow} className='w-3' alt="" /></li>
            </ul>
            {/* Buttons */}
            <div className="flex gap-5 items-center">
                <Link to="/jobs">
                    <button className='max-xl:hidden px-[1.5rem] py-[.25rem] rounded-xl border-[1px] border-slate-500 hover:bg-[#29282a] hover:border-white'>Find Jobs</button>
                </Link>
                <Link to="/signup">
                    <button className='px-[1.5rem] py-[.25rem] max-sm:mx-7 rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] max-sm:px-[1.2rem] max-sm:text-[0.7rem] max-sm:rounded-lg'>
                        Hire Developers
                    </button>
                </Link>
                <a href="/login" className="max-xl:hidden text-[#b9b8b8] font-semibold hover:text-slate-300">Login</a>
            </div>
        </nav>
    );
}

export default NavBar;
