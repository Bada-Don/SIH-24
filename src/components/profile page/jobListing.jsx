import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import JobDetails from "./JobDetails";
import jobsData from "./jobData";

const JobListingSection = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    // Select the first job by default when the component mounts
    if (jobsData.jobs.length > 0) {
      setSelectedJob(jobsData.jobs[0]);
    }
  }, []); // The empty dependency array ensures this runs only once on mount

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <>
        <h1 className="w-full text-3xl font-bold mb-4 text-purple-500">Find your dream job</h1>

    <section className=" flex flex-row items-start gap-10 justify-center text-white">
      {/* Left Section - Job Listings (with scroll) */}
      <div 
        className="left-section w-1/3 overflow-y-auto" 
        style={{ maxHeight: 'calc(100vh - 200px)' }} // Set max height for scroll
      >

        <div className="job-list">
          {jobsData.jobs.map((job) => (
              <JobCard
              key={job.id}
              job={job}
              onSelect={handleJobSelect}
              isSelected={selectedJob && selectedJob.id === job.id} // Pass isSelected prop
            />
        ))}
        </div>
      </div>

      {/* Right Section - Job Details */}
      <div className="right-section w-2/3 ">
        {selectedJob ? (
            <JobDetails job={selectedJob} />
        ) : (
            <p>Select a job to view details</p>
        )}
      </div>
    </section>
        </>
  );
};

export default JobListingSection;