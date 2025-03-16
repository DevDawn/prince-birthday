import React from 'react';
import { Terminal, Smile } from 'lucide-react';

const BirthdayWish = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md mb-8">
      <h1 className="text-4xl font-bold text-green-300 mb-4 flex items-center justify-center">
        <Smile className="mr-2" /> Happy Birthday Princeeeeee
      </h1>
      <p className="text-lg text-gray-300 mb-6">
        Happy Birthday Pri,<br />
        You are a very annoying person. I just can't help but like you more.<br />
        Happy Birthdayyyyy
      </p>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="text-green-400" />
            <span className="text-sm text-gray-400">Dart Terminal</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
            {`
            void main() {
              print("Happy Birthday to Prince");
              print("May your day be filled with love, laughter, and all your favorite things.");
              print("Wishing you a year ahead that's as bright and wonderful as you are!");
            }
            `}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BirthdayWish;