import { useState, createContext  } from 'react';
import './App.css';
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { boardForGame } from './WordsOnBoard';

export const Appcontext = createContext();

function App() {
  const [board, setBoard] = useState(boardForGame);
  const [currentAttempt, setCurrentAttempt] = useState({
    attemptNo:0,
    currentLocation:0
  })
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
        <Appcontext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt}} >
          <div className='game'>
            <Board/>
            <Keyboard/>
          </div>
        </Appcontext.Provider>
    </div>
  );
}

export default App;
