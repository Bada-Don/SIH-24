import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SecondaryNavBar from '../secNavBar';
import Jobs from './jobListing';
import RecommendedCourses from './courseListing.jsx';
import SkillsTable from '../techSkills';
import ProfileInfo from '../personalInfo';
import ProfileOverview from '../profileOverview';
import ExperienceForm from '../experience';
import EducationSection from '../education';
import Header from '../Header';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-white rounded-full h-2.5 mb-4 mt-2">
            <div 
                className="bg-purple-600 h-2.5 rounded-full" 
                style={{ width: `${progress}%` }}
            ></div>
            <p className="text-center text-sm">{`Progress ${progress}%`}</p>
        </div>
    );
};

function Profile() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'profile');
    const [activeProfileSection, setActiveProfileSection] = useState('personal-info');

    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location]);

    const handleProfileSectionChange = (section) => {
        setActiveProfileSection(section);
    };

    const renderProfileContent = () => {
        switch (activeProfileSection) {
            case 'personal-info':
                return <ProfileInfo />;
            case 'technical-skills':
                return <SkillsTable />;
            case 'profile-overview':
                return <ProfileOverview />;
            case 'experience':
                return <ExperienceForm />;
            case 'education':
                return <EducationSection />;
            default:
                return <ProfileInfo />;
        }
    };

    return (
        <>
            <Header />
            <section className="flex flex-col w-full min-h-screen bg-gray-900 text-white">
                <SecondaryNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
                
                <section className="flex flex-row w-full flex-grow">
                    {activeTab === 'profile' && (
                        <section className="left-sec bg-black w-1/5 p-6">
                            <h3 className="text-xl font-bold">Harshit Singla</h3>
                            <p className="text-sm mb-2">1.3 Years of experience</p>
                            <ProgressBar progress={40} />

                            <div className='mt-10 flex flex-col w-full gap-3'>
                                {['personal-info', 'technical-skills', 'profile-overview', 'experience', 'education'].map((section) => (
                                    <button 
                                        key={section}
                                        className={`profile-btn text-left pl-5 w-full py-2 rounded ${activeProfileSection === section ? 'bg-purple-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                        onClick={() => handleProfileSectionChange(section)}
                                    >
                                        {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className={`right-sec ${activeTab === 'profile' ? 'w-4/5' : 'w-full'} bg-gray-800 p-10`}>
                        {activeTab === 'profile' && renderProfileContent()}
                        {activeTab === 'courses' && <RecommendedCourses />}
                        {activeTab === 'jobs' && <Jobs />}
                    </section>
                </section>
            </section>
        </>
    );
}

export default Profile;