import React, { useState } from 'react';
import SecondaryNavBar from '../secNavBar';
import Jobs from './jobListing';
import SkillsTable from '../techSkills';
import ProfileInfo from '../personalInfo';
import ProfileOverview from '../profileOverview';
import ExperienceForm from '../experience';
import EducationSection from '../education';
import Header from '../Header';

const ProgressBar = () => {
    const progress = 40;

    const containerStyle = {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '2rem',
        margin: '20px 0',
        position: 'relative',
    };

    const progressBarStyle = {
        width: `${progress}%`,
        height: '0.3rem',
        backgroundColor: '#632aa0',
        borderRadius: '2rem',
    };

    const textStyle = {
        position: 'absolute',
        top: '-1.5rem',
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
    const [activeTab, setActiveTab] = useState('profile');  // Default active tab is 'profile'
    const [activeProfileSection, setActiveProfileSection] = useState('personal-info');  // Default profile section

    // Handler for switching the profile sections (left sidebar)
    const handleProfileSectionChange = (section) => {
        setActiveProfileSection(section);
    };

    return (
        <>
            <Header />
            <section className="flex flex-col w-full h-screen">

                {/* Secondary Navbar for Toggling Between Profile, Courses, and Jobs */}
                <SecondaryNavBar activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* Main Content Section */}
                <section className="flex flex-row w-full">
                    {/* Conditionally render Left Sidebar only for Profile tab */}
                    {activeTab === 'profile' && (
                        <section className="left-sec bg-black pr-10 pt-10 pl-3 text-white w-[20%]">
                            <h3>Harshit Singla</h3>
                            <p>1.3 Years of experience</p>
                            <ProgressBar />  {/* Reusing Progress Bar component */}

                            {/* Sidebar Buttons for Profile Sections */}
                            <div className='mt-10 flex flex-col w-full gap-5'>
                                <button 
                                    className={`profile-btn text-left pl-5 w-full h-10 ${activeProfileSection === 'personal-info' ? 'bg-purple-500' : 'bg-black'}`} 
                                    onClick={() => handleProfileSectionChange('personal-info')}>
                                    Personal Info
                                </button>
                                <button 
                                    className={`profile-btn text-left pl-5 w-full h-10 ${activeProfileSection === 'technical-skills' ? 'bg-purple-500' : 'bg-black'}`} 
                                    onClick={() => handleProfileSectionChange('technical-skills')}>
                                    Technical Skills
                                </button>
                                <button 
                                    className={`profile-btn text-left pl-5 w-full h-10 ${activeProfileSection === 'profile-overview' ? 'bg-purple-500' : 'bg-black'}`} 
                                    onClick={() => handleProfileSectionChange('profile-overview')}>
                                    Profile Overview
                                </button>
                                <button 
                                    className={`profile-btn text-left pl-5 w-full h-10 ${activeProfileSection === 'experience' ? 'bg-purple-500' : 'bg-black'}`} 
                                    onClick={() => handleProfileSectionChange('experience')}>
                                    Experience
                                </button>
                                <button 
                                    className={`profile-btn text-left pl-5 w-full h-10 ${activeProfileSection === 'education' ? 'bg-purple-500' : 'bg-black'}`} 
                                    onClick={() => handleProfileSectionChange('education')}>
                                    Education
                                </button>
                            </div>
                        </section>
                    )}

                    {/* Right Content Based on Active Tab */}
                    <section className={`right-sec ${activeTab === 'profile' ? 'w-[80%]' : 'w-full'} bg-[black] p-10`}>
                        {activeTab === 'profile' && (
                            <>
                                {activeProfileSection === 'personal-info' && <ProfileInfo />}
                                {activeProfileSection === 'technical-skills' && <SkillsTable />}
                                {activeProfileSection === 'profile-overview' && <ProfileOverview />}
                                {activeProfileSection === 'experience' && <ExperienceForm />}
                                {activeProfileSection === 'education' && <EducationSection />}
                            </>
                        )}
                        {activeTab === 'courses' && <Jobs />}
                        {activeTab === 'jobs' && <Jobs />}
                    </section>
                </section>
            </section>
        </>
    );
}

export default Profile;
