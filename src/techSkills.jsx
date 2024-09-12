import { useState } from 'react';

const SkillsTable = () => {
    const allSkills = ['ExpressJS', 'Graphic Design', 'JavaScript', 'MongoDB', 'MySQL', 'NodeJS', 'ReactJS']; // predefined skills

    const [skills, setSkills] = useState([
        { name: 'ExpressJS', isTechnical: false },
        { name: 'JavaScript', isTechnical: false },
    ]);

    const handleSkillChange = (index, event) => {
        const newSkills = [...skills];
        newSkills[index].name = event.target.value;
        setSkills(newSkills);
    };

    const handleTechnicalChange = (index, event) => {
        const newSkills = [...skills];
        newSkills[index].isTechnical = event.target.value === 'Yes';
        setSkills(newSkills);
    };

    const addSkill = () => {
        setSkills([...skills, { name: '', isTechnical: false }]);
    };

    const removeSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    // Centralized styles for the table
    const tableStyles = 'w-full text-left text-white bg-transparent ';

    return (
        <section className='bg-[#1f2937] flex flex-col gap-5 p-5' >
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
                                        value={skill.isTechnical ? 'Yes' : 'No'}
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
                                        &#128465; {/* trash icon */}
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="3" className="p-2">
                                <button
                                    onClick={addSkill}
                                    className="text-blue-500"
                                >
                                    + Add Skill
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button
                className='max-xl:hidden w-fit px-[1.5rem] py-[.25rem]  rounded-xl bg-[#7c35c7] hover:bg-[#4d217b] text-xl'>
                Save
            </button>
        </section>
    );
};

export default SkillsTable;
