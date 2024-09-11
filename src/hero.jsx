import purpleCircle from '/PurpleCircle.svg'
import video from '/video.mp4'
function Hero() {
    return (
        <div className=" mx-auto overflow-x-hidden flex flex-col items-center gap-10">
            <div className="w-screen absolute -z-10 top-0 overflow-hidden h-screen">
                <img className='max-sm:scale-[5]' src={purpleCircle} alt="" srcset="" />
            </div>
            <h2 className="text-[3rem] max-xl:w-[90%] flex items-center max-sm:text-left">Build your dream tech team</h2>
            <p className=" max-xl:w-[90%] max-sm:text-left text-[1.25rem]">Nayi Disha is your 1-stop solution to hire dream developers for full-time or contract roles</p>
            <button
                className='w-fit px-[1.5rem] py-[.25rem]  rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] text-xl'

            >
                Hire Developers
            </button>
            <div class=" mx-auto max-w-4xl pt-5 md:pt-15"><video muted loop playsInline autoPlay src={video} className="w-full rounded-[10px]"></video></div>
            <ul className="flex justify-center w-full flex-row max-sm:flex-col max-sm:items-start max-sm:p-10">
                <li><div className="flex flex-col">
                    <h2 className='max-sm:text-[1.5rem]'>$6 Million</h2>
                    <p className='max-sm:text-[.9rem]'>Talent Payments</p></div>
                </li>
                <div class="my-5 h-[1px] w-full bg-white opacity-20 md:mx-8 md:h-10 md:w-[1px] lg:mx-10 "></div>
                <li><div className="flex flex-col">
                    <h2 className='max-sm:text-[1.5rem]'>100,000+</h2>
                    <p className='max-sm:text-[.9rem]'>Engineers Vetted</p>
                </div>
                </li>
                <div class="my-5 h-[1px] w-full bg-white opacity-20 md:mx-8 md:h-10 md:w-[1px] lg:mx-10 "></div>
                <li><div className="flex flex-col">
                    <h2 className='max-sm:text-[1.5rem]'>72 Hrs</h2>
                    <p className='max-sm:text-[.9rem]'>Average time to hire</p>
                </div>
                </li>
            </ul>
        </div>
    );
}

export default Hero;