import React from "react";

const SkillMatch = ({ skill }) => {
  const userSkills = ["ExpressJS", "JavaScript"]; // User's known skills

  // Check if the job skill is present in the user's skills
  const isMatch = userSkills.includes(skill);

  return (
    <li className="mb-2">
      {skill} {isMatch ? "✅" : "❌"}
    </li>
  );
};

export default SkillMatch;