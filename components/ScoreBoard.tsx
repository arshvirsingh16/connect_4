import React, { useState } from 'react'

function ScoreBoard() {
    const [p1Score, setp1Score ] = useState(0);
    const [p2Score, setp2Score ] = useState(0);

  return (
    <div>
        <div className='bg-blue-700 w-96 h-96 text-white text-center'>
            SCORE
            <div className='flex'>
            <div className='w-48 h-48 bg-blue-700 border text-white text-center text-9xl'>0</div>
            <div className='w-48 h-48 bg-blue-700 border text-white text-center text-9xl'>0</div>
            </div>
            PLAYER
            <div className='text-white text-9xl'>1</div>
        </div>
    </div>
  )
}

export default ScoreBoard