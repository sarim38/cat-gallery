import React, { useState } from 'react';
import CatGalleryEasy from './components/CatGalleryEasy'; // Easy Task
import CatGalleryMedium from './components/CatGalleryMedium'; // Medium Task
import CatGalleryHard from './components/CatGalleryHard'; // Hard Task

function App() {
  const [task, setTask] = useState('easy'); // Default task is 'easy'

  return (
    <div className="font-poppins bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold">Cat Gallery App</h1>
          <div>
            <button
              onClick={() => setTask('easy')}
              className="mx-4 hover:underline text-lg font-medium"
            >
              Easy Task
            </button>
            <button
              onClick={() => setTask('medium')}
              className="mx-4 hover:underline text-lg font-medium"
            >
              Medium Task
            </button>
            <button
              onClick={() => setTask('hard')}
              className="mx-4 hover:underline text-lg font-medium"
            >
              Hard Task
            </button>
          </div>
        </div>
      </nav>

      {/* Render Task Based on State */}
      <div className="py-10">
        {task === 'easy' && <CatGalleryEasy />}
        {task === 'medium' && <CatGalleryMedium />}
        {task === 'hard' && <CatGalleryHard />}
      </div>
    </div>
  );
}

export default App;
