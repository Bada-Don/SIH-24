import React, { useState } from 'react';
import SkillsTable from '../techSkills';
import ProfileInfo from '../personalInfo';
import ProfileOverview from '../profileOverview';
import ExperienceForm from '../experience';
import EducationSection from '../education';

const ProgressBar = () => {
    const progress = 40; // Set the fixed progress value here

    const containerStyle = {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '2rem',
        margin: '20px 0',
        position: 'relative', // Add relative positioning for better control
    };

    const progressBarStyle = {
        width: `${progress}%`,
        height: '0.3rem',
        backgroundColor: '#632aa0',
        borderRadius: '2rem',
    };

    const textStyle = {
        position: 'absolute',
        top: '-1.5rem', // Adjust this value to move the text above the progress bar
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle}>
            <div style={textStyle}>
                <p>{`Progress ${progress}%`}</p>
            </div>
            <div style={progressBarStyle}></div>
        </div>
    );
};

function Profile() {
    // State to track which section is active
    const [activeSection, setActiveSection] = useState('PersonalInfo');

    return (
        <section className="flex flex-row w-full h-screen ">
            {/* Left Section */}
            <section className="left-sec flex flex-col gap-2 w-[20%] bg-[black] pr-10 pt-10 pl-3 text-white ">
                <h3>Harshit Singla</h3>
                <p>1.3 Years of experience</p>
                <ProgressBar /> {/* Progress bar here */}
                <div className='mt-10 flex flex-col w-full gap-5'>
                    <button
                        className={`profile-btn text-left pl-5 w-full h-10 ${activeSection === 'PersonalInfo' ? 'bg-[#632aa0]' : 'bg-black'}`}
                        onClick={() => setActiveSection('PersonalInfo')}
                    >
                        Personal Info
                    </button>
                    <button
                        className={`profile-btn text-left pl-5 w-full h-10 ${activeSection === 'TechnicalSkills' ? 'bg-[#632aa0]' : 'bg-black'}`}
                        onClick={() => setActiveSection('TechnicalSkills')}
                    >
                        Technical Skills
                    </button>
                    <button
                        className={`profile-btn text-left pl-5 w-full h-10 ${activeSection === 'ProfileOverview' ? 'bg-[#632aa0]' : 'bg-black'}`}
                        onClick={() => setActiveSection('ProfileOverview')}
                    >
                        Profile Overview
                    </button>
                    <button
                        className={`profile-btn text-left pl-5 w-full h-10 ${activeSection === 'Experience' ? 'bg-[#632aa0]' : 'bg-black'}`}
                        onClick={() => setActiveSection('Experience')}
                    >
                        Experience
                    </button>
                    <button
                        className={`profile-btn text-left pl-5 w-full h-10 ${activeSection === 'Education' ? 'bg-[#632aa0]' : 'bg-black'}`}
                        onClick={() => setActiveSection('Education')}
                    >
                        Education
                    </button>
                </div>
            </section>

            {/* Right Section */}
            <section className="right-sec w-[80%] bg-[black] p-10">
                {activeSection === 'PersonalInfo' && <ProfileInfo />}
                {activeSection === 'TechnicalSkills' && <SkillsTable />}
                {activeSection === 'ProfileOverview' && <ProfileOverview />}
                {activeSection === 'Experience' && <ExperienceForm />}
                {activeSection === 'Education' && <EducationSection />}
            </section>
        </section>
    );
}

export default Profile;
