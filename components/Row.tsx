import React from 'react'
import Slot from './Slot'

const Row = () => {
  return (
    <div className='flex gap-1 justify-evenly'>
      <Slot/>
      <Slot/>
      <Slot/>
      <Slot/>
      <Slot/>
      <Slot/>
      <Slot/>
    </div>
  )
}

export default Row