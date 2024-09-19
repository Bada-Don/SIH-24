import { useState } from 'react';

const FilterOption = ({ label, options, value, onChange }) => (
    <div className="mb-4">
        <label className="text-white mb-2">{label}</label>
        <select
            value={value}
            onChange={onChange}
            className="w-full bg-gray-800 text-gray-400 p-2 rounded"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    </div>
);

const Categories = () => {
    const [filters, setFilters] = useState({
        country: '',
        employmentType: '',
        skillset: '',
        category: '',
        level: ''
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const filterOptions = {
        country: [
            { value: '', label: 'Country' },
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' }
        ],
        employmentType: [
            { value: '', label: 'Type of Employment' },
            { value: 'full-time', label: 'Full-time' },
            { value: 'part-time', label: 'Part-time' },
            { value: 'contract', label: 'Contract' },
            { value: 'freelance', label: 'Freelance' }
        ],
        skillset: [
            { value: '', label: 'Choose Skillset' },
            { value: 'javascript', label: 'JavaScript' },
            { value: 'python', label: 'Python' },
            { value: 'react', label: 'React' },
            { value: 'node', label: 'Node.js' }
        ],
        category: [
            { value: '', label: 'Choose Category' },
            { value: 'frontend', label: 'Frontend' },
            { value: 'backend', label: 'Backend' },
            { value: 'fullstack', label: 'Full Stack' },
            { value: 'devops', label: 'DevOps' }
        ],
        level: [
            { value: '', label: 'Choose Level' },
            { value: 'junior', label: 'Junior' },
            { value: 'mid', label: 'Mid-level' },
            { value: 'senior', label: 'Senior' },
            { value: 'lead', label: 'Lead' }
        ]
    };

    return (
        <form className="outer bg-gray-900 p-4 rounded-lg max-sm:hidden">
            <h2 className="text-xl font-bold text-white mb-4">Filters</h2>
            {Object.entries(filterOptions).map(([key, options]) => (
                <FilterOption
                    key={key}
                    label={options[0].label}
                    options={options}
                    value={filters[key]}
                    onChange={(e) => handleFilterChange(key, e.target.value)}
                />
            ))}
            <button
                className="w-full bg-purple-600 text-white py-2 rounded mt-4 hover:bg-purple-700 transition-colors"
                type="button"
                onClick={() => console.log('Filters applied:', filters)}
            >
                Apply Filters
            </button>
        </form>
    );
};

export default Categories;
