import React, {useContext} from 'react'
import { Appcontext } from '../App';

const Letter = ({positionOfLetter, attempValue}) => {

    const {board} = useContext(Appcontext)

    const letter = board[positionOfLetter][attempValue];
  return (
    <div className='letter'>
        {letter}
    </div>
  )
}

export default Letter