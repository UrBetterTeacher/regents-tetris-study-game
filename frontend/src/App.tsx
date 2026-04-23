import React from 'react';
import './App.css';
import MainMenu from './components/MainMenu';
import SubjectSelector from './components/SubjectSelector';
import TetrisGame from './components/TetrisGame';
import StudyGuide from './components/StudyGuide';

const App: React.FC = () => {
    return (
        <div className="App">
            <MainMenu />
            <SubjectSelector />
            <TetrisGame />
            <StudyGuide />
        </div>
    );
};

export default App;