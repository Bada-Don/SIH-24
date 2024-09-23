import React, { useState, useEffect } from 'react';

const MCQ = ({ question, options, correctAnswer, onScore }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        // Submit answer whenever selectedOption changes
        if (selectedOption !== null) {
            handleSubmit();
        }
    }, [selectedOption]);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedOption === correctAnswer) {
            onScore(100); 
        } else {
            onScore(0); 
        }
        // You might want to add logic to disable the radio buttons after submission or provide feedback to the user.
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
            {/* Remove the Submit Answer button */}
        </div>
    );
};

export default MCQ;