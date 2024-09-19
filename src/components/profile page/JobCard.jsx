import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, onSelect, isSelected }) => {
  return (
    <div
      className={`border bg-slate-900 p-5 w-full max-sm:w-full border-slate-500 rounded-2xl mb-4 cursor-pointer hover:border-[#833fd4] transition-colors 
        ${isSelected ? "border-[#833fd4]" : ""} `} // Apply selected style
      onClick={() => onSelect(job)}
    >
      <h4 className="text-lg font-bold">{job.title}</h4>

      <p className="text-sm">{job.description}</p> {/* Reduced text size */}
     
       

        <button className="hover:bg-white hover:text-[#833fd4] bg-[#833fd4] py-1 px-3 rounded mt-2">
          Apply Now
        </button>

    </div>
  );
};

export default JobCard;