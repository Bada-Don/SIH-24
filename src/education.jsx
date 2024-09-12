import React, { useState } from 'react';

const EducationForm = ({ onSave, initialData = null }) => {
  const [education, setEducation] = useState(
    initialData || {
      collegeName: '',
      degree: '',
      cgpa: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      description: '',
    }
  );

  const [formErrors, setFormErrors] = useState({});
  const [formCollapsed, setFormCollapsed] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEducation({
      ...education,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!education.collegeName) errors.collegeName = 'This field is mandatory';
    if (!education.degree) errors.degree = 'This field is mandatory';
    if (!education.cgpa) errors.cgpa = 'This field is mandatory';
    if (!education.startDate) errors.startDate = 'This field is mandatory';
    if (!education.endDate && !education.isPresent) {
      errors.endDate = 'This field is mandatory';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSave(education);
      setEducation({
        collegeName: '',
        degree: '',
        cgpa: '',
        startDate: '',
        endDate: '',
        isPresent: false,
        description: '',
      });
      setFormCollapsed(true); // Collapse form after save
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="education-section">
      <button
        onClick={() => setFormCollapsed(!formCollapsed)}
        className="mb-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {formCollapsed ? 'Add New Education' : 'Collapse Form'}
      </button>

      {!formCollapsed && (
        <form onSubmit={handleSubmit} className="p-6 bg-gray-800 text-white rounded">
          <div className="flex space-x-4">
            <label className="block mb-2 w-full">
              College Name*
              <input
                type="text"
                name="collegeName"
                value={education.collegeName}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border ${
                  formErrors.collegeName ? 'border-red-500' : 'border-gray-500'
                }`}
                placeholder="Eg: BITS Pilani"
                required
              />
              {formErrors.collegeName && (
                <p className="text-red-500 text-sm">{formErrors.collegeName}</p>
              )}
            </label>

            <label className="block mb-2 w-full">
              Degree & Specialization*
              <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border ${
                  formErrors.degree ? 'border-red-500' : 'border-gray-500'
                }`}
                placeholder="Eg: B.E. Electrical & Electronics"
                required
              />
              {formErrors.degree && (
                <p className="text-red-500 text-sm">{formErrors.degree}</p>
              )}
            </label>
          </div>

          <div className="flex space-x-4">
            <label className="block mb-2 w-full">
              CGPA*
              <input
                type="number"
                step="0.01"
                name="cgpa"
                value={education.cgpa}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border ${
                  formErrors.cgpa ? 'border-red-500' : 'border-gray-500'
                }`}
                placeholder="Eg: 9.50"
                required
              />
              {formErrors.cgpa && (
                <p className="text-red-500 text-sm">{formErrors.cgpa}</p>
              )}
            </label>

            <label className="block mb-2 w-full">
              Start Date*
              <input
                type="date"
                name="startDate"
                value={education.startDate}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border ${
                  formErrors.startDate ? 'border-red-500' : 'border-gray-500'
                }`}
                required
              />
              {formErrors.startDate && (
                <p className="text-red-500 text-sm">{formErrors.startDate}</p>
              )}
            </label>
          </div>

          <div className="flex space-x-4">
            <label className="block mb-2 w-full">
              End Date*
              <input
                type="date"
                name="endDate"
                value={education.endDate}
                onChange={handleChange}
                className={`w-full p-2 bg-transparent border ${
                  formErrors.endDate ? 'border-red-500' : 'border-gray-500'
                }`}
                disabled={education.isPresent}
                required={!education.isPresent}
              />
              {formErrors.endDate && (
                <p className="text-red-500 text-sm">{formErrors.endDate}</p>
              )}
            </label>

            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                name="isPresent"
                checked={education.isPresent}
                onChange={handleChange}
                className="mr-2"
              />
              Present
            </label>
          </div>

          <label className="block mb-4">
            Education Description
            <textarea
              name="description"
              value={education.description}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500"
              placeholder="Your education description here..."
            ></textarea>
          </label>

          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

const EducationCard = ({ education, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded flex justify-between items-center mb-4">
      <div>
        <h3 className="text-xl font-bold">{education.degree}</h3>
        <p>{education.collegeName}</p>
        <p className="text-sm">
          {new Date(education.startDate).toLocaleDateString()} -{' '}
          {education.isPresent
            ? 'Present'
            : new Date(education.endDate).toLocaleDateString()}
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(education)}
          className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(education)}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const [educations, setEducations] = useState([]);
  const [editEducation, setEditEducation] = useState(null);

  const handleSave = (education) => {
    if (editEducation) {
      setEducations((prev) =>
        prev.map((edu) =>
          edu.collegeName === editEducation.collegeName ? education : edu
        )
      );
      setEditEducation(null);
    } else {
      setEducations([...educations, education]);
    }
  };

  const handleEdit = (education) => {
    setEditEducation(education);
  };

  const handleDelete = (education) => {
    setEducations((prev) =>
      prev.filter((edu) => edu.collegeName !== education.collegeName)
    );
  };

  return (
    <div className="p-6 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <EducationForm onSave={handleSave} initialData={editEducation} />
      <div className="mt-6">
        {educations.map((education) => (
          <EducationCard
            key={education.collegeName}
            education={education}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
