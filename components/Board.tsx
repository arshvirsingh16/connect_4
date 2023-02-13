import React, { useContext } from 'react'
import Column from './Column'
import { useUser } from '../context/UserContext'



const Board = () => {

  


  const [board, setBoard] = React.useState([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]])


  return (
    <div className='bg-blue-700 container max-w-fit p-3 flex gap-2'>
      {board.map((column, index) => {
        return <Column key={index} columnboard={column} columnNumber={index} board={board} setBoard={setBoard}/>
      })
      }
    </div>
  )
}

export default Board