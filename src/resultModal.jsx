import React, { useEffect, useState } from 'react';

const ResultModal = ({ isOpen, onClose, onPass, attemptNumber }) => {
    if (!isOpen) return null;

    const [results, setResults] = useState({});
    const [totalPercentage, setTotalPercentage] = useState(0);
    const [isPass, setIsPass] = useState(false);

    useEffect(() => {
        // Random score generation
        const randomScores = {
            language: { score: Math.floor(Math.random() * 101), outOf: 100 }, // out of 100
            framework: { score: Math.floor(Math.random() * 201), outOf: 200 }, // out of 200
            nonTech: { score: Math.floor(Math.random() * 101), outOf: 100 }, // out of 100
            aptitude: { score: Math.floor(Math.random() * 101), outOf: 100 }, // out of 100
        };

        const totalScore = Object.values(randomScores).reduce((acc, { score }) => acc + score, 0);
        const totalOutOf = Object.values(randomScores).reduce((acc, { outOf }) => acc + outOf, 0);
        const percentage = Math.floor((totalScore / totalOutOf) * 100);

        setResults(randomScores);
        setTotalPercentage(percentage);

        // Alternate pass/fail based on attemptNumber (odd = fail, even = pass)
        const isSuccess = attemptNumber % 2 === 0;
        setIsPass(isSuccess);
    }, [attemptNumber]);

    const handleClose = () => {
        onClose();
        if (isPass) {
            onPass();  // Trigger job modal if the result is a pass
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black border border-white hover:border-purple-500 p-6 rounded-lg w-[90%] max-w-lg">
                <h2 className="text-xl font-bold mb-4">Test Results</h2>
                <div className="mb-4">
                    <p><strong>Programming Languages:</strong> {results.language?.score} / {results.language?.outOf}</p>
                    <p><strong>Frameworks:</strong> {results.framework?.score} / {results.framework?.outOf}</p>
                    <p><strong>Non-Tech & Communication:</strong> {results.nonTech?.score} / {results.nonTech?.outOf}</p>
                    <p><strong>Aptitude Test:</strong> {results.aptitude?.score} / {results.aptitude?.outOf}</p>
                    <hr className="my-4" />
                    <p><strong>Total Percentage:</strong> {totalPercentage}%</p>
                </div>

                {/* Conditional rendering based on pass/fail */}
                {isPass ? (
                    <p className="text-green-500 font-bold">
                        Congratulations! You scored {totalPercentage}%. You are now eligible for job recommendations.
                    </p>
                ) : (
                    <p className="text-red-500 font-bold">
                        Your score is below 85%. We recommend taking the following courses to improve your skills. 
                        No recommended jobs are available at this time.
                    </p>
                )}

                <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded mt-4" onClick={handleClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ResultModal;
