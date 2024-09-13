import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../navbar';
import Header from "../Header.jsx";
import ResultModal from '../resultModal.jsx';
import MCQ from './mcqQues.jsx';
import CodingQuestion from './codingQues.jsx';

const TestPage = () => {
    const navigate = useNavigate();
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState({
        programming: 0,
        framework: 0,
        nonTech: 0,
        aptitude: 0,
    });

    const calculatePercentage = () => {
        const totalScore = score.programming + score.framework + score.nonTech + score.aptitude;
        const maxScore = 100 + 200 + 100 + 100; // Based on the max scores for each section
        return (totalScore / maxScore) * 100;
    };

    const handleSubmit = () => {
        const percentage = calculatePercentage();
        setShowResult(true);

        // Delay navigation to allow the user to see the result
        setTimeout(() => {
            if (percentage >= 85) {
                navigate('/jobs');
            } else {
                navigate('/profile', { state: { activeTab: 'courses' } });
            }
        }, 3000); // 3 seconds delay
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <NavBar />
            <Header title="Skill Assessment Test" />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Programming Language (100 Marks)</h2>
                <MCQ 
                    question="What is the output of 2 + '2' in JavaScript?"
                    options={['22', '4', 'NaN', 'Error']}
                    correctAnswer="22"
                    onScore={(points) => setScore(prev => ({ ...prev, programming: points }))}
                />

                <h2 className="text-2xl font-bold mb-4 mt-8">Framework (200 Marks)</h2>
                <MCQ 
                    question="Which of the following is a React hook?"
                    options={['useState', 'useEffect', 'useContext', 'All of the above']}
                    correctAnswer="All of the above"
                    onScore={(points) => setScore(prev => ({ ...prev, framework: points }))}
                />
                <CodingQuestion 
                    question="Write a function to reverse a string in Python."
                    onScore={(points) => setScore(prev => ({ ...prev, framework: prev.framework + points }))}
                />

                <h2 className="text-2xl font-bold mb-4 mt-8">Non-Tech & Communication (100 Marks)</h2>
                <MCQ 
                    question="Which of the following is a good practice in communication?"
                    options={['Active listening', 'Interrupting', 'Ignoring', 'Talking over others']}
                    correctAnswer="Active listening"
                    onScore={(points) => setScore(prev => ({ ...prev, nonTech: points }))}
                />

                <h2 className="text-2xl font-bold mb-4 mt-8">Aptitude Test (100 Marks)</h2>
                <MCQ 
                    question="If a train travels 60 miles in 1 hour, how far will it travel in 3 hours?"
                    options={['120 miles', '180 miles', '240 miles', '300 miles']}
                    correctAnswer="180 miles"
                    onScore={(points) => setScore(prev => ({ ...prev, aptitude: points }))}
                />

                <button 
                    className="bg-purple-600 text-white py-2 px-4 rounded mt-8 hover:bg-purple-700 transition-colors"
                    onClick={handleSubmit}
                >
                    Submit Test
                </button>
            </div>
            {showResult && <ResultModal score={score} percentage={calculatePercentage()} onClose={() => setShowResult(false)} />}
        </div>
    );
};

export default TestPage;