import React from "react";
import NavBar from '../navbar';
import jobData from '../pages/jobData.json'; 

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