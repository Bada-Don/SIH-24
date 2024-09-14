import React from 'react';

const NewJobsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black border border-white hover:border-purple-500 p-6 rounded-lg w-[90%] max-w-lg">
                <h2 className="text-xl font-bold mb-4">New Jobs Available!</h2>
                <p className="mb-4">
                    Based on your excellent performance in the tests, we've handpicked some jobs for you.
                    Check out the job recommendations tailored to your skills.
                </p>
                <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded" onClick={onClose}>
                    View Jobs
                </button>
            </div>
        </div>
    );
};

export default NewJobsModal;
