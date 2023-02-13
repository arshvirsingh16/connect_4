import React from 'react'
import { useUser } from '../context/UserContext'

interface SlotProps {
  placed: number
}

const Slot = ({placed} : SlotProps) => {
  let activeDiv = <div className='bg-white border-solid rounded-full grid place-items-center w-24 h-24 my-1'></div>
  if(placed === 1) {
    activeDiv = <div className='bg-red-500 border-solid rounded-full grid place-items-center w-24 h-24 my-1'></div>
  }
  else if(placed === 2) {
    activeDiv = <div className='bg-yellow-400 border-solid rounded-full grid place-items-center w-24 h-24 my-1'></div>
  }
  else{
    activeDiv = <div className='bg-white border-solid rounded-full grid place-items-center w-24 h-24 my-1'></div>
  }
  return (
    <>
    {activeDiv}
    </>
  )
}

export default Slot