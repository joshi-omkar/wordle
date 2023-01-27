import React from 'react'
import Key from './Key'

const Keyboard = () => {

  const keysOnFirstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const keysOnSecondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const keysOnThirdRow = ["Z", "X", "C", "V", "B", "N", "M"]

  return (
    <div className='keyboard'>

      <div className='line1'>
        {keysOnFirstRow.map((key)=>{
          return <Key keyValue={key} />
        })}
      </div>

      <div className='line2'>
        {keysOnSecondRow.map((key)=>{
          return <Key keyValue={key} />
        })}
      </div>

      <div className='line3'>
        <Key keyValue={"ENTER"} isBig/>
        {keysOnThirdRow.map((key)=>{
          return <Key keyValue={key} />
        })}
        <Key keyValue={"BACKSPACE"} isBig/>
      </div>

    </div>
  )
}

export default Keyboard