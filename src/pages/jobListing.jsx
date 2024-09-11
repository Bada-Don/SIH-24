import React from "react";
import NavBar from '../navbar';
import jobData from '../pages/jobData.json'; 

function Jobs() {
    return (
        <>
            <NavBar />
            <h3>Find Your Dream Job</h3>
            {jobData.joblisting.map((job, index) => (
                <div key={index}>
                    <h4>{job.title}</h4>
                    <h6>Company: {job.company}</h6>
                    <h6>Category: {job.category}</h6>
                    <h6>Salary: {job.salary}</h6>
                    <h6>Location: {job.location}</h6>
                    <h6>Job Type: {job.jobType}</h6>
                    <p>Description: {job.description}</p>
                    <p>Level: {job.level}</p>
                    <div>
                        <strong>Technical Skills:</strong>
                        {job.technicalSkills.map((skill, i) => (
                            <p key={i}>{skill}</p>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Jobs;
