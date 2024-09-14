import React from 'react';

const Modal = ({ isOpen, onClose, onAttemptNow }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black border border-white hover:border-purple-500 p-6 rounded-lg w-[90%] max-w-lg">
                <h2 className="text-xl font-bold mb-4">Verify Skills</h2>
                <p className="mb-4">
                    To reflect your technical skills on the profile, please take the relevant skill tests.
                </p>
                <div className='flex gap-5'> 
                    <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded" onClick={onAttemptNow}>
                        Attempt Now
                    </button>
                    <button className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
