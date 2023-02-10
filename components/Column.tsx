import React, {useState} from 'react'
import Slot from './Slot'
import { useUser } from '../context/UserContext'

interface ColumnProps {
  columnboard: number[]
  columnNumber: number
  board: number[][]
  setBoard: React.Dispatch<React.SetStateAction<number[][]>>
}

const Column = ({columnboard, columnNumber, board, setBoard}: ColumnProps) => {
  const {turn, setTurn} = useUser()

  const [column, setColumn] = useState(columnboard)

  const updateColumn = () => {
    for(let i = column.length; i >= 0; i--){
      const newColumn = [...column]
      if(column[i] === 0){
        console.log(turn)
        newColumn[i] = turn
        setColumn(newColumn)
        break
      }
    }
    console.log(column)
    updateTurn();
  }

  const updateTurn = () => {
    if(turn === 1){
      setTurn(2)
    } 
    else if (turn === 2){
      setTurn(1)
    }
  }

  return (
    <div className='flex flex-col gap-1 justify-evenly' onClick={updateColumn}>
      {column.map((value) => {
        return <Slot placed={value}/>
      })}
    </div>
  )
}

export default Column