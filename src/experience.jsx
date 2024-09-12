import React, { useState } from 'react';

const ExperienceForm = () => {
  const [experience, setExperience] = useState({
    designation: '',
    startDate: '',
    endDate: '',
    isPresent: false,
    companyName: '',
    companyWebsite: '',
    companyTags: '',
    fundingStage: '',
    companyType: '',
    companyDescription: '',
    technicalSkills: '',
    projectResponsibilities: '',
  });

  const [errors, setErrors] = useState({});
  const [timeoutIds, setTimeoutIds] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExperience({
      ...experience,
      [name]: type === 'checkbox' ? checked : value,
    });

    if (errors[name]) {
      clearTimeout(timeoutIds[name]); // Clear any previous timeout
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    if (!experience[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: true }));

      const timeoutId = setTimeout(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
      }, 3000);

      setTimeoutIds((prevTimeouts) => ({ ...prevTimeouts, [name]: timeoutId }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Experience Data:', experience);
  };

  const getInputBorderClass = (fieldName) => {
    return errors[fieldName]
      ? 'border-red-500'
      : 'border-gray-500';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1f2937] flex flex-col gap-5 p-5 text-white">
      <h2 className="text-2xl font-bold mb-4">Add/Edit Experience</h2>

      {/* Designation */}
      <label className="block mb-2">
        Designation*
        <input
          type="text"
          name="designation"
          value={experience.designation}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('designation')}`}
          placeholder="Eg: Software Developer"
          required
        />
      </label>

      {/* Start Date & End Date */}
      <div className="flex space-x-4 mb-4">
        <label className="block flex-1">
          Start Date*
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 bg-transparent border ${getInputBorderClass('startDate')}`}
            required
          />
        </label>
        <label className="block flex-1">
          End Date*
          <input
            type="date"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 bg-transparent border ${getInputBorderClass('endDate')}`}
            disabled={experience.isPresent}
            required={!experience.isPresent}
          />
        </label>
      </div>

      {/* Present checkbox */}
      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          name="isPresent"
          checked={experience.isPresent}
          onChange={handleChange}
          className="mr-2"
        />
        Present
      </label>

      {/* Company Name */}
      <label className="block mb-2">
        Company Name*
        <input
          type="text"
          name="companyName"
          value={experience.companyName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('companyName')}`}
          placeholder="Eg: Flexiple"
          required
        />
      </label>

      {/* Company Website */}
      <label className="block mb-2">
        Company Website
        <input
          type="url"
          name="companyWebsite"
          value={experience.companyWebsite}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('companyWebsite')}`}
          placeholder="Eg: www.flexiple.com"
        />
      </label>

      {/* Company Tags */}
      <label className="block mb-2">
        Company Tags*
        <input
          type="text"
          name="companyTags"
          value={experience.companyTags}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('companyTags')}`}
          placeholder="Eg: Bootstrapped"
          required
        />
      </label>

      {/* Funding Stage */}
      <label className="block mb-2">
        Funding Stage
        <input
          type="text"
          name="fundingStage"
          value={experience.fundingStage}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('fundingStage')}`}
          placeholder="Eg: Seed"
        />
      </label>

      {/* Company Type */}
      <label className="block mb-4">
        Company Type
        <input
          type="text"
          name="companyType"
          value={experience.companyType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('companyType')}`}
          placeholder="Eg: Service Company"
        />
      </label>

      {/* Company Description */}
      <label className="block mb-4">
        Company Description
        <textarea
          name="companyDescription"
          value={experience.companyDescription}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('companyDescription')}`}
          placeholder="Your company description here..."
        ></textarea>
      </label>

      {/* Technical Skills */}
      <label className="block mb-2">
        Technical Skills relevant to experience*
        <input
          type="text"
          name="technicalSkills"
          value={experience.technicalSkills}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('technicalSkills')}`}
          placeholder="Eg: Python, ReactJS"
          required
        />
      </label>

      {/* Project Responsibilities */}
      <label className="block mb-4">
        Project Responsibilities*
        <textarea
          name="projectResponsibilities"
          value={experience.projectResponsibilities}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 bg-transparent border ${getInputBorderClass('projectResponsibilities')}`}
          placeholder="Your project responsibilities here..."
          required
        ></textarea>
        <p className="text-sm mt-1">Description should be greater than 100 characters</p>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded"
      >
        Save
      </button>
    </form>
  );
};

export default ExperienceForm;
