import React from 'react';
import BirthdayWish from './components/BirthdayWish';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <BirthdayWish />
      <ImageSlider />
    </div>
  );
}

export default App;