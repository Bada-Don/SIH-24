import Hero_logo from '/hero.svg'
import { motion } from "framer-motion";

function Hero() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        
        <section className='hero w-[100%] flex flex-row items-center justify-evenly'>
            
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
