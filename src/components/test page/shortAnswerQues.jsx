import React, { useState, useEffect } from 'react';

const ShortAnswerQuestion = ({ question, correctAnswer, onScore }) => {
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        // You might want to add a debounce or delay here to prevent submission on every keystroke
        handleSubmit(); 
    }, [answer]);

    const handleSubmit = () => {
        // Basic answer checking (case-insensitive)
        if (answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            onScore(100); 
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
            {/* Remove the Submit Answer button */}
        </div>
    );
};

export default ShortAnswerQuestion;