import React, { useState } from 'react';

const MCQ = ({ question, options, correctAnswer, onScore }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption === correctAnswer) {
            onScore(100); 
        } else {
            onScore(0); 
        }
        // You might want to add logic to disable the button after submission or provide feedback to the user.
    };

    return (
        <div className="mb-6">
            <p className="mb-2">{question}</p>
            {options.map((option, index) => (
                <div key={index} className="mb-2">
                    <label>
                        <input 
                            type="radio" 
                            value={option} 
                            checked={selectedOption === option} 
                            onChange={handleOptionChange} 
                            className="mr-2"
                        />
                        {option}
                    </label>
                </div>
            ))}
            <button 
                className="bg-purple-600 text-white py-1 px-3 rounded mt-2 hover:bg-purple-700 transition-colors"
                onClick={handleSubmit}
            >
                Submit Answer
            </button>
        </div>
    );
};

export default MCQ;