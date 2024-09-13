import React, { useState } from 'react';

const CodingQuestion = ({ question, onScore }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = () => {
        // Simple evaluation logic (you can replace this with a more complex one)
        if (answer.includes('def') && answer.includes('return')) {
            onScore(200); // Full marks for correct answer
        } else {
            onScore(0); // No marks for incorrect answer
        }
    };

    return (
        <div className="mb-6">
            <p className="mb-2">{question}</p>
            <textarea 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)} 
                className="w-full bg-gray-800 text-gray-400 p-2 rounded mb-2"
                rows="6"
            />
            <button 
                className="bg-purple-600 text-white py-1 px-3 rounded mt-2 hover:bg-purple-700 transition-colors"
                onClick={handleSubmit}
            >
                Submit Code
            </button>
        </div>
    );
};

export default CodingQuestion;