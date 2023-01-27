import React, {useContext} from 'react'
import { Appcontext } from '../App';


const Key = ({ keyValue, isBig }) => {

  const {board, setBoard, currentAttempt, setCurrentAttempt} = useContext(Appcontext)

  const handleOnClickKey=()=>{

    const newBoard = [...board];
    newBoard[currentAttempt.attemptNo][currentAttempt.currentLocation] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, currentLocation: currentAttempt.currentLocation+1})
  }

  return (
    <div className="key" id={isBig ? "big" : ""} onClick={handleOnClickKey}>
      {keyValue}
    </div>
  );
};

export default Key;
