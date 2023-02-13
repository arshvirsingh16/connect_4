import React from 'react'

function Users() {

    const [player, setPlayer] = React.useState("Player 1")
    const changePlayer = () =>{
        (turn === 1)? setPlayer("Player 1") : setPlayer("Player 2") 
    }
  return (
    <div>TURN: {player}</div>
  )
}

export default Users