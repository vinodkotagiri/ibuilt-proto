import React from 'react'

export default function Dimensions() {
  return (
    <>
      <div className='w-full flex mt-2 bg-slate-900 text-primaryLime px-3 rounded-lg'>
        <div>Dimensions</div>
      </div>
      <div className='mt-2 font-semibold text-sm'>Length</div>
      <div className='w-full flex gap-3 '>
        <input type='range' className='w-2/3' />
        <input input='text' className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none' />
      </div>
      <div className='mt-2 font-semibold text-sm'>Breadth</div>
      <div className='w-full flex gap-3 '>
        <input type='range' className='w-2/3' />
        <input input='text' className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none' />
      </div>
    </>
  )
}
