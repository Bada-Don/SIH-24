import React from "react";
import SkillMatch from "./SkillMatch";
import courses from "./courseListing"; // Import your course data

const JobDetails = ({ job }) => {
  // Filter courses based on job's technical skills
  const recommendedCourses = courses.filter((course) =>
    course.skills.some((skill) => job.technicalSkills.includes(skill))
  );

  return (
    <div className="border bg-slate-900 p-5 w-[100%] h-max border-slate-500 rounded-2xl mb-4">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <div className="flex flex-row gap-1 max-sm:gap-1 flex-wrap">
        <p className="font-bold text-lg">{job.company}</p>
        <p className="w-fit p-1 rounded text-sm bg-[#840a26]">
          {job.salary}
        </p>
        <p className="w-fit p-1 rounded text-sm bg-[#010d45]">
          {job.location}
        </p>
        <p className="w-fit p-1 rounded text-sm bg-[#4c1700]">
          Job Type: {job.jobType}
        </p>
      </div>
      <p className="text-sm mt-2">{job.description}</p>
      <div className="gap-5 flex flex-row flex-wrap max-sm:gap-1 mt-2">
        <p className="font-bold text-lg">{job.category}</p>
        <p className="font-bold text-lg">Level: {job.level}</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Preferred Requirements</h3>
        <ul className="flex flex-wrap gap-2">
          {job.technicalSkills.map((skill, index) => (
            <SkillMatch key={index} skill={skill} />
          ))}
        </ul>
      </div>
      <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Recommended Courses</h3>
      <div className="flex flex-wrap gap-4"> {/* Use flexbox for layout */}
        {recommendedCourses.map((course) => (
          <div 
            key={course.title} 
            className="w-80 h-40 rounded-md overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300" // Add hover effects
          >
            <img 
              src={course.image} 
              alt={course.title} 
              className="object-contain" 
            />
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};

export default JobDetails;