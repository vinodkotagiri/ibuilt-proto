import React from 'react'

export default function MainControls() {
  return (
    <div className='w-full flex mt-2'>
      <select className='bg-slate-300 rounded-lg w-1/2 h-[32px]'>
        <option>Select Room</option>
        <option>Bedroom-1</option>
        <option>Bedroom-2</option>
        <option>Bedroom-3</option>
        <option>Bedroom-4</option>
      </select>
      <div className='w-1/2 flex flex-col items-start px-3'>
        <div className='flex items-center justify-center gap-2'>
          <input type='radio' />
          <div>Bath+WC+Shower</div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input type='radio' />
          <div>Bath+Shower</div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input type='radio' />
          <div>WC</div>
        </div>
        <div className='h-[2px] bg-[#d9fc35] w-full' />
        <div className='flex items-center justify-center gap-2'>
          <input type='checkbox' />
          <div>Wardrobe</div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input type='checkbox' />
          <div>Balcony</div>
        </div>
      </div>
    </div>
  )
}
