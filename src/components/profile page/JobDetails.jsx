import React from "react";
import SkillMatch from "./SkillMatch.jsx"; // Import the SkillMatch component

const JobDetails = ({ job }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-lg mb-2">{job.company}</p>
      <p className="mb-4">
        <span className="font-bold">Location:</span> {job.location}
      </p>

      <h3 className="text-xl font-bold mb-2">Job Description</h3>
      <p className="mb-4">{job.description}</p>

      <h3 className="text-xl font-bold mb-2">Preferred Requirements</h3>
      <ul>
        {job.technicalSkills.map((skill, index) => (
          <SkillMatch key={index} skill={skill} />
        ))}
      </ul>

      {/* Add Suggested Courses section here (similar to SkillMatch) */}
    </div>
  );
};

export default JobDetails;