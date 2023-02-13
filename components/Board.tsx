import React, { useContext } from 'react'
import Column from './Column'
import { useUser } from '../context/UserContext'



const Board = () => {

  


  const [board, setBoard] = React.useState([[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]])

  const updateBoard = (columnIndex:number, column:number[]) => {
    const newBoard = [...board];
    newBoard[columnIndex] = column;
    setBoard(newBoard);
    if(checkForConnectFour(newBoard)){
      alert('Connect Four!')
    }
  };

  const checkForConnectFour = (board:number[][]) => {
    const rows = board.length;
    const cols = board[0].length;
  
    // Check rows
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (board[row][col] !== 0 &&
            board[row][col] === board[row][col + 1] &&
            board[row][col] === board[row][col + 2] &&
            board[row][col] === board[row][col + 3]) {
          return true;
        }
      }
    }
  
    // Check columns
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows - 3; row++) {
        if (board[row][col] !== 0 &&
            board[row][col] === board[row + 1][col] &&
            board[row][col] === board[row + 2][col] &&
            board[row][col] === board[row + 3][col]) {
          return true;
        }
      }
    }
  
    // Check diagonals (top-left to bottom-right)
    for (let row = 0; row < rows - 3; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (board[row][col] !== 0 &&
            board[row][col] === board[row + 1][col + 1] &&
            board[row][col] === board[row + 2][col + 2] &&
            board[row][col] === board[row + 3][col + 3]) {
          return true;
        }
      }
    }
  
    // Check diagonals (bottom-left to top-right)
    for (let row = 3; row < rows; row++) {
      for (let col = 0; col < cols - 3; col++) {
        if (board[row][col] !== 0 &&
            board[row][col] === board[row - 1][col + 1] &&
            board[row][col] === board[row - 2][col + 2] &&
            board[row][col] === board[row - 3][col + 3]) {
          return true;
        }
      }
    }
  
    return false;
  };

  return (
    <div className='bg-blue-700 container max-w-fit p-3 flex gap-2'>
      {board.map((column, index) => {
        return <Column key={index} columnboard={column} columnNumber={index} updateBoard={updateBoard}/>
      })
      }
    </div>
  )
}

export default Board