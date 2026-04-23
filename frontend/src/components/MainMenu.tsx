import React from 'react';

const MainMenu: React.FC = () => {
    const subjects = ['Math', 'Science', 'History', 'English'];

    return (
        <div>
            <h1>Regents Tetris Study Game</h1>
            <h2>Select a Subject:</h2>
            <ul>
                {subjects.map(subject => (
                    <li key={subject}>{subject}</li>
                ))}
            </ul>
        </div>
    );
};

export default MainMenu;