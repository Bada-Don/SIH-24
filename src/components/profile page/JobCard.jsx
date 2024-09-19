import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, onSelect, isSelected }) => {
  return (
    <div
      className={`border bg-slate-900 p-5 w-[80%] max-sm:w-full border-slate-500 rounded-2xl mb-4 cursor-pointer hover:border-[#833fd4] transition-colors 
        ${isSelected ? "border-[#833fd4]" : ""} `} // Apply selected style
      onClick={() => onSelect(job)}
    >
      <h4 className="text-lg font-bold">{job.title}</h4>
      <div className="flex flex-row gap-10 max-sm:gap-1 flex-wrap">
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
      <p className="text-sm">{job.description}</p> {/* Reduced text size */}
      <div className="gap-10 flex flex-row flex-wrap max-sm:gap-1">
        <p className="font-bold text-lg">{job.category}</p>
        <p className="font-bold text-lg">Level: {job.level}</p>
        <div className="bg-gray-900 w-fit p-1 rounded text-sm">
          {job.technicalSkills.map((skill, i) => (
            <span className="font-Stylus" key={i}>
              {skill}
              {i < job.technicalSkills.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </div>
      <Link to="/application">
        <button className="hover:bg-white hover:text-[#833fd4] bg-[#833fd4] py-1 px-3 rounded mt-2">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;