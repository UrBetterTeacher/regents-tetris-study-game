import React from 'react';
import './SubjectSelector.css';  // Importing a CSS file for styling

const subjects = [
  'Math',
  'Science',
  'History',
  'English',
  'Art',
  'Music',
  'Physical Education',
  'Technology'
];

const SubjectSelector = () => {
  return (
    <div className="subject-selector">
      <h2>Select a Subject</h2>
      <div className="grid">
        {subjects.map((subject) => (
          <div key={subject} className="subject-item">
            <h3>{subject}</h3>
            <button className="play-game">Play Game</button>
            <button className="study-guide">Study Guide</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;