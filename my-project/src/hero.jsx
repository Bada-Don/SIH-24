import Hero_logo from '/hero.svg'

function Hero() {
    return (
        <section className='absolute z-10 w-[100%] flex flex-row items-center justify-evenly'>
            <div className=''>
                <h1 className='text-[3.5rem] w-[35.125rem] text-wrap'>Your CAREER starts here!</h1>
                <br />
                <p className='text-[2.25rem] font-Stylus w-[46.25rem]'>We aim to bridge the gap between education and the industries by connecting individuals with companies.</p>
                <br />
                <button className='rounded-full bg-transparent border-2 px-6 py-2 border-white	'>Learn More</button>
            </div>
            <img src={Hero_logo} alt="Hero" />
        </section>
    );
}

export default Hero;
