import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavBar from "../components/home page/navbar.jsx";
import Header from "../components/Header.jsx";
import ResultModal from "../components/test page/resultModal.jsx";
import MCQ from "../components/test page/mcqQues.jsx";
import CodingQuestion from "../components/test page/codingQues.jsx";
import ShortAnswerQuestion from "../components/test page/shortAnswerQues.jsx"; 
import { questionsBank } from "../components/test page/questions.js"; // Updated import path

const TestPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState({
        programming: 0,
        framework: 0,
        nonTech: 0,
        aptitude: 0,
    });
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (location.state?.selectedSkills) {
            setSelectedSkills(location.state.selectedSkills);
        }
    }, [location.state]);

    useEffect(() => {
        const generatedQuestions = generateQuestions(selectedSkills);
        setQuestions(generatedQuestions);
    }, [selectedSkills]);

    const generateQuestions = (skills) => {
        const generatedQuestions = [];
        const questionsPerSkill = 5; // Increased to 5 MCQs and 5 Short Answers per skill

        // Add compulsory Non-Tech and Aptitude questions
        generatedQuestions.push(
            ...getRandomQuestions("Non-Tech", questionsPerSkill),
            ...getRandomQuestions("Aptitude", questionsPerSkill)
        );

        skills.forEach((skill) => {
            generatedQuestions.push(
                ...getRandomQuestions(skill, questionsPerSkill, "MCQ"),
                // ...getRandomQuestions(skill, questionsPerSkill, "ShortAnswer")
            );
        });

        return shuffleQuestions(generatedQuestions); // Shuffle all questions together
    };

    // Helper function to get random questions of a specific type
    const getRandomQuestions = (skill, count, type) => {
        const skillQuestions = questionsBank[skill] || [];
        const filteredQuestions = type
            ? skillQuestions.filter((q) => q.type === type)
            : skillQuestions;

        return shuffleQuestions(filteredQuestions).slice(0, count);
    };

    // Helper function to shuffle array (Fisher-Yates Shuffle Algorithm)
    const shuffleQuestions = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const calculatePercentage = () => {
        const totalScore =
            score.programming + score.framework + score.nonTech + score.aptitude;
        const maxScore = 100 + 200 + 100 + 100; // Adjusted max score
        return (totalScore / maxScore) * 100;
    };

    const handleSubmit = () => {
        const percentage = calculatePercentage();
        setShowResult(true);

        setTimeout(() => {
            if (percentage >= 85) {
                navigate("/jobs");
            } else {
                navigate("/profile", { state: { activeTab: "courses" } });
            }
        }, 3000);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <NavBar />
            <Header title="Skill Assessment Test" />
            <div className="container mx-auto p-4">
                {/* Dynamically render questions based on type */}
                {questions.map((questionData, index) => (
                    <div key={index}>
                        {questionData.type === "MCQ" && (
                            <MCQ
                                question={questionData.question}
                                options={questionData.options}
                                correctAnswer={questionData.correctAnswer}
                                onScore={(points) =>
                                    setScore((prev) => ({
                                        ...prev,
                                        programming: prev.programming + points,
                                    }))
                                }
                            />
                        )}
                        {questionData.type === "ShortAnswer" && (
                            <ShortAnswerQuestion
                                question={questionData.question}
                                correctAnswer={questionData.correctAnswer}
                                onScore={(points) =>
                                    setScore((prev) => ({
                                        ...prev,
                                        framework: prev.framework + points,
                                    }))
                                }
                            />
                        )}
                        {questionData.type === "Coding" && (
                            <CodingQuestion
                                question={questionData.question}
                                onScore={(points) =>
                                    setScore((prev) => ({
                                        ...prev,
                                        framework: prev.framework + points,
                                    }))
                                }
                            />
                        )}
                    </div>
                ))}

                <button
                    className="bg-purple-600 text-white py-2 px-4 rounded mt-8 hover:bg-purple-700 transition-colors"
                    onClick={handleSubmit}
                >
                    Submit Test
                </button>
            </div>
            {showResult && (
                <ResultModal
                    score={score}
                    percentage={calculatePercentage()}
                    onClose={() => setShowResult(false)}
                />
            )}
        </div>
    );
};

export default TestPage;