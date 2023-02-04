import React, { useState } from 'react'

export default function BHKSelection() {
  const [type, setType] = useState('2BHK')
  return (
    <>
      <div className='font-semibold text-xl'>Select bedroom Type</div>
      <div className='flex w-full gap-6 text-slate-800'>
        <button className='bg-yellow-400 px-4 rounded-md py-1 font-semibold'>1BHK</button>
        <button className='bg-yellow-400 px-4 rounded-md py-1 font-semibold'>2BHK</button>
        <button className='bg-yellow-400 px-4 rounded-md py-1 font-semibold'>3BHK</button>
        <button className='bg-yellow-400 px-4 rounded-md py-1 font-semibold'>4BHK</button>
      </div>
    </>
  )
}
