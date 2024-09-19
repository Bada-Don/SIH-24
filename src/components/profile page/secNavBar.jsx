import React from 'react';

const SecondaryNavBar = ({ activeTab, setActiveTab }) => {
    return (
        <nav className='w-fit mx-auto flex flex-row justify-center gap-10 bg-transparent py-4 text-white'>
            <button 
                className={`text-lg ${activeTab === 'profile' ? 'border-b-2 border-purple-500' : ''}`}
                onClick={() => setActiveTab('profile')}
            >
                Profile
            </button>
            <button 
                className={`text-lg ${activeTab === 'courses' ? 'border-b-2 border-purple-500' : ''}`}
                onClick={() => setActiveTab('courses')}
            >
                Recommended Courses
            </button>
            <button 
                className={`text-lg ${activeTab === 'jobs' ? 'border-b-2 border-purple-500' : ''}`}
                onClick={() => setActiveTab('jobs')}
            >
                Jobs Found
            </button>
        </nav>
    );
};

export default SecondaryNavBar;
