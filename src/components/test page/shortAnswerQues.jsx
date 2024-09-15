import React, { useState } from 'react';

const ShortAnswerQuestion = ({ question, correctAnswer, onScore }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = () => {
        // Basic answer checking (case-insensitive)
        if (answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            onScore(100); // Full marks
        } else {
            onScore(0); 
        }
    };

    return (
        <div className="mb-6">
            <p className="mb-2">{question}</p>
            <input 
                type="text" 
                value={answer} 
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full bg-gray-800 text-gray-400 p-2 rounded mb-2" 
            />
            <button 
                className="bg-purple-600 text-white py-1 px-3 rounded mt-2 hover:bg-purple-700 transition-colors"
                onClick={handleSubmit}
            >
                Submit Answer
            </button>
        </div>
    );
};

export default ShortAnswerQuestion;