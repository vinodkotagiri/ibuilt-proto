import React from 'react'
import compass from '../assets/svg/compass.svg'
export default function Compass() {
  return (
    <div className='text-red-500 absolute top-10 right-[260px] z-50'>
      <img src={compass} className='w-[60px]' />
    </div>
  )
}
