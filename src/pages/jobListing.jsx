import React from "react";
import NavBar from '../navbar';
import jobsData from './jobData.js';


import { useState } from 'react';

const FilterOption = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center text-white mb-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span>{label}</span>
            </div>
            {isOpen && (
                <select
                    value={value}
                    onChange={onChange}
                    className="w-full bg-gray-800 text-gray-400 p-2 rounded"
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

const Categories = () => {
    const [filters, setFilters] = useState({
        country: '',
        employmentType: '',
        skillset: '',
        category: '',
        level: ''
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const filterOptions = {
        country: [
            { value: '', label: 'Country' },
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' }
        ],
        employmentType: [
            { value: '', label: 'Type of Employment' },
            { value: 'full-time', label: 'Full-time' },
            { value: 'part-time', label: 'Part-time' },
            { value: 'contract', label: 'Contract' },
            { value: 'freelance', label: 'Freelance' }
        ],
        skillset: [
            { value: '', label: 'Choose Skillset' },
            { value: 'javascript', label: 'JavaScript' },
            { value: 'python', label: 'Python' },
            { value: 'react', label: 'React' },
            { value: 'node', label: 'Node.js' }
        ],
        category: [
            { value: '', label: 'Choose Category' },
            { value: 'frontend', label: 'Frontend' },
            { value: 'backend', label: 'Backend' },
            { value: 'fullstack', label: 'Full Stack' },
            { value: 'devops', label: 'DevOps' }
        ],
        level: [
            { value: '', label: 'Choose Level' },
            { value: 'junior', label: 'Junior' },
            { value: 'mid', label: 'Mid-level' },
            { value: 'senior', label: 'Senior' },
            { value: 'lead', label: 'Lead' }
        ]
    };

    return (
        <form className="outer bg-gray-900 p-4 rounded-lg max-sm:hidden">
            <div className="flex justify-between items-center text-white mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
            </div>
            {Object.entries(filterOptions).map(([key, options]) => (
                <FilterOption
                    key={key}
                    label={options[0].label}
                    options={options}
                    value={filters[key]}
                    onChange={(e) => handleFilterChange(key, e.target.value)}
                />
            ))}
            <button
                className="w-full bg-purple-600 text-white py-2 rounded mt-4 hover:bg-purple-700 transition-colors"
                onClick={() => console.log('Filters applied:', filters)}
            >
                Apply Filters
            </button>
        </form>
    );
};



function Jobs() {
    return (
        <section className="flex flex-col items-center">
            <NavBar />
            <h3>Find Your Dream Job</h3>
            <section className="flex flex-row items-start justify-center max-sm:flex-col">
                {/* Make the Categories section sticky */}
                <div className="sticky-categories">
                    <Categories />
                </div>

                {/* Job listing section will be scrollable */}
                <section className="scrollable-jobs flex flex-col gap-5 items-center">
                    {jobsData.jobs.map((job, index) => (
                        <div key={job.id} className="border p-5 w-[80%] max-sm:w-full border-slate-500 hover:border-[#833fd4] rounded-2xl">
                            <h4>{job.title}</h4>
                            <div className="flex flex-row gap-5 max-sm:gap-1 flex-wrap">
                                <p className="font-bold text-lg">{job.company}</p>
                                <p className="w-fit p-1 rounded text-sm bg-[#840a26]">{job.salary}</p>
                                <p className="w-fit p-1 rounded text-sm bg-[#010d45]">{job.location}</p>
                                <p className="w-fit p-1 rounded text-sm bg-[#4c1700]">Job Type: {job.jobType}</p>
                            </div>
                            <p>{job.description}</p>
                            <div className="gap-10 flex flex-row flex-wrap max-sm:gap-1">
                                <p className="font-bold text-lg">{job.category}</p>
                                <p className="font-bold text-lg">Level: {job.level}</p>
                                <div className="bg-gray-900 w-fit p-1 rounded text-sm">
                                    {job.technicalSkills.map((skill, i) => (
                                        <span className="font-Stylus" key={i}>{skill}{i < job.technicalSkills.length - 1 ? ', ' : ''}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="hover:bg-white hover:text-[#833fd4] bg-[#833fd4] py-1 px-3 rounded">Apply Now</button>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default Jobs;