import React, { useState } from 'react';

const DateInvitation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleResponse = () => {
    setAccepted(true);
  };

  return (
    <div className="text-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg animate-float transition-all duration-300 transform hover:scale-105"
      >
        💌 Special Surprise
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-pink-500">
                {accepted ? "It's a Date! 🎉" : "Special Birthday Request ❤️"}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {!accepted ? (
              <>
                <p className="text-lg text-gray-300 mb-6">
                  Will you go on a date with me?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleResponse}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-lg"
                  >
                    Yes!
                  </button>
                  <button
                    onClick={handleResponse}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-2 rounded-lg"
                  >
                    !NO
                  </button>
                </div>
              </>
            ) : (
              <div className="text-lg text-gray-300">
                See you at Harmonics today, Muah!!!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateInvitation;