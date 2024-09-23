import React, { useState } from "react";
import Modal from "../test page/modal.jsx";
import ResultModal from "../test page/resultModal.jsx";
import NewJobsModal from "../test page/newJobsModal.jsx";
import { useNavigate } from "react-router-dom";

const SkillsTable = () => {
  const allSkills = [
    "ExpressJS",
    "Graphic Design",
    "JavaScript",
    "MongoDB",
    "MySQL",
    "NodeJS",
    "ReactJS",
  ];

  const [skills, setSkills] = useState([
    { name: "ExpressJS", isTechnical: true },
    { name: "JavaScript", isTechnical: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isNewJobsModalOpen, setIsNewJobsModalOpen] = useState(false);
  const [attemptNumber, setAttemptNumber] = useState(0);

  const navigate = useNavigate();

  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].name = event.target.value;
    setSkills(newSkills);
  };

  const handleTechnicalChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index].isTechnical = event.target.value === "Yes";
    setSkills(newSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", isTechnical: false }]);
  };

  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSaveClick = () => {
    setIsModalOpen(true); // Show the modal 
  };

  const handleAttemptNow = () => {
    const selectedTechnicalSkills = skills
      .filter((skill) => skill.isTechnical)
      .map((skill) => skill.name);

    navigate("/test", { state: { selectedSkills: selectedTechnicalSkills } });
    setIsModalOpen(false); // Close the modal after navigation
  };

  const handleCloseResultModal = () => {
    setIsResultModalOpen(false);
  };

  const handlePassTest = () => {
    setIsResultModalOpen(false);
    setIsNewJobsModalOpen(true);
  };

  const handleCloseJobsModal = () => {
    setIsNewJobsModalOpen(false);
  };

  const tableStyles = "w-full text-left text-white bg-transparent ";

  return (
    <section className="bg-[#1f2937] flex flex-col gap-5 p-5">
      <h3>Technical skills</h3>
      <hr />

      <div className="skills-table">
        <table className={tableStyles}>
          <thead>
            <tr className="border-b border-gray-500">
              <th className="p-2">Skills</th>
              <th className="p-2">Show as Technical Skill</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="border-b border-gray-500">
                <td className="p-2">
                  <select
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, e)}
                    className="p-2 bg-transparent border bg-gray-800 border-gray-500 text-white outline-none"
                  >
                    <option value="" disabled>
                      Select a skill
                    </option>
                    {allSkills.map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-2">
                  <select
                    value={skill.isTechnical ? "Yes" : "No"}
                    onChange={(e) => handleTechnicalChange(index, e)}
                    className="p-2 bg-transparent border border-gray-500 text-white outline-none"
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => removeSkill(index)}
                    className="text-red-500"
                  >
                     {/* trash icon */}
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="p-2">
                <button onClick={addSkill} className="text-blue-500">
                  + Add Skill
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSaveClick}
        className="max-xl:hidden w-fit px-[1.5rem] py-[.25rem]  rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] text-xl"
      >
        Save
      </button>

      {/* Modal (conditionally rendered) */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAttemptNow={handleAttemptNow} 
        />
      )}
      {isResultModalOpen && (
        <ResultModal
          isOpen={isResultModalOpen}
          onClose={handleCloseResultModal}
          onPass={handlePassTest}
          attemptNumber={attemptNumber}
        />
      )}
      {isNewJobsModalOpen && (
        <NewJobsModal
          isOpen={isNewJobsModalOpen}
          onClose={handleCloseJobsModal}
        />
      )}
    </section>
  );
};

export default SkillsTable;