import Hero_logo from '/hero.svg'
import { motion } from "framer-motion";
import CountUp from 'react-countup'; // Import CountUp

function Hero({ usersCount, mentorsCount, companiesCount }) {
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className=' w-[100%] flex flex-col items-center justify-evenly'>
            <div className='hero w-[100%] flex flex-row items-center justify-evenly'>
                <div className=''>
                    <h1 className='text-[3.5rem] w-[35.125rem] text-wrap'>Your CAREER starts here!</h1>
                    <br />
                    <p className='text-[2.25rem] font-Stylus w-[46.25rem]'>We aim to bridge the gap between education and the industries by connecting individuals with companies.</p>
                    <br />
                    <button className='rounded-full bg-transparent border-2 px-6 py-2 border-white'>Learn More</button>
                </div>
                <img src={Hero_logo} alt="Hero" />
            </div>
            <div className='flex flex-row w-full justify-between'>
                <div className='bg-[#3462bb] flex flex-col items-center p-4 rounded-2xl shadow-2xl'>
                    <h1 className='text-[2.5rem]'>
                        <CountUp start={0} end={usersCount} duration={5} />+
                    </h1>
                    <p className='text-[1rem] font-Swis text-center'>Graduates <br /> benefited</p>
                </div>
                <div className='bg-[#480978] flex flex-col items-center p-4 rounded-2xl shadow-2xl'>
                    <h1 className='text-[2.5rem]'>
                        <CountUp start={0} end={mentorsCount} duration={5} />+
                    </h1>
                    <p className='text-[1rem] font-Swis text-center'>Mentors <br /> available</p>
                </div>
                <div className='bg-[#CC114B] flex flex-col items-center p-4 rounded-2xl shadow-2xl'>
                    <h1 className='text-[2.5rem]'>
                        <CountUp start={0} end={companiesCount} duration={5} />+
                    </h1>
                    <p className='text-[1rem] font-Swis text-center'>Companies <br /> connected</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
