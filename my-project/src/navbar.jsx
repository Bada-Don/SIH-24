import logo from '/Logo.png'
function Navbar() {
    return (
        <nav className='bg-[#3d52a0] py-[2rem] px-[4rem] flex flex-row justify-between items-center w-[100%]'>
            <div className=" gap-6 logo flex flex-row items-center w-fit">
                <img src={logo} className='h-[4.5rem] w-min' alt="" />
                <h1 className='text-[2rem]'>Nayi Disha</h1>
            </div>
            <ul className='flex flex-row gap-10'>
                <li className='font-Stylus text-[2.2rem]'>Sources</li>
                <li className='font-Stylus text-[2.2rem]'>About us</li>
                <li className='font-Stylus text-[2.2rem]'>Contact us</li>
                <li className='font-Stylus text-[2.2rem]'>
                    <button className='w-[13.25rem] h-[3.5rem] rounded-full bg-[#7091E6]'>Sign-Up</button>
                    </li>
            </ul>
        </nav>
    )
}
export default Navbar;