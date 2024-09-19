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
    <section className="flex flex-row items-start justify-center min-h-screen text-white">
      {/* Left Section - Job Listings */}
      <div className="left-section w-1/3 bg-gray-900 p-4">
        <h2 className="text-2xl font-bold mb-4">Job Listings</h2>
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
      <div className="right-section w-2/3 bg-blue-900 p-4">
        {selectedJob ? (
          <JobDetails job={selectedJob} />
        ) : (
          <p>Select a job to view details</p>
        )}
      </div>
    </section>
  );
};

export default JobListingSection;