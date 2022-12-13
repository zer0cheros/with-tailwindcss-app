import React, { useState } from 'react'
import Cube from './Cube'
import Modal from './Modal'

const Work = () => {
  return (
    <div className='relative w-[90%] h-[80%] m-auto rounded shadow-xl'>
      <h1 className='absolute top-0 left-1/2 z-10 translate-x-[-50%] text-green-600 flex-none text-[3vw] w-auto font-medium'>Projects, click to view info</h1>
      <Cube />
      </div>
  )
}

export default Work