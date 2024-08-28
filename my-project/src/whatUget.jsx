import { motion } from "framer-motion";
import student_logo from '/Student.svg'
import mentor from '/mentor.svg'
import company from '/Company.svg'

function Student(){
    return(
        <section className='relative flex flex-row justify-center items-center gap-32'>
            <img src={student_logo} alt="" srcset="" />
            <div className='flex flex-col gap-20'>
                <h1 className='text-[2.5rem]'>Students / Job Seeker</h1>
                <p className='font-Stylus text-[2.2rem] leading-extra-loose text-right'>AI-Driven Job Matches
                    <br />
                    Diverse Internship Listings
                    <br />
                    Skill Enhancement
                    <br />
                    Career Counseling
                    <br />
                    Mentorship Programs
                </p>
            </div>
        </section>
    )
}
function Mentor() {
    return (
        <section className='relative flex flex-row justify-center items-center gap-32'>

            <div>
                <h1 className='text-[2.5rem]'>Students / Job Seeker</h1>
                <p className='font-Stylus text-[2.2rem] leading-extra-loose text-left'>AI-Driven Job Matches
                    Connect with Talent
                    <br />
                    Tailored Matches
                    <br />
                    Flexible Engagement
                    <br />
                    Recognition
                    <br />
                    Industry Insights

                </p>
            </div>
            <img src={mentor} alt="" srcset="" />
        </section>
    )
}

function Company() {
    return (
        <section className='relative flex flex-row justify-center items-center gap-32'>

            <img src={company} alt="" srcset="" />
            <div>
                <h1 className='text-[2.5rem]'>Students / Job Seeker</h1>
                <p className='font-Stylus text-[2.2rem] leading-extra-loose text-left'>
                    AI-Powered Hiring
                    <br />
                    Diverse Talent Pool
                    <br />
                    Streamlined Recruitment
                    <br />
                    Brand Visibility
                    <br />
                    Collaborative Partnerships


                </p>
            </div>
        </section>
    )
}

function WhatUget() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="flex flex-col gap-32 justify-center items-center">
            <h1 className='text-[3.5rem] w-[35.125rem] text-wrap'>What you get?</h1>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                variants={sectionVariants}
            >
                <Student />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                variants={sectionVariants}
            >
                <Mentor />
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                variants={sectionVariants}
            >
                <Company />
            </motion.div>
        </section>
    );
}

export default WhatUget;
