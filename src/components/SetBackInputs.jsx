import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSetbacks } from '../../redux/plot'
export default function SetBackInputs({ type }) {
  const [setbacks, setSetbacks] = useState({ back: 1.6, left: 1.6, front: 4.6, right: 1.6 })
  const dispatch = useDispatch()
  const handleChange = () => {
    if (type === 'length') dispatch(changeSetbacks({ left, right }))
    else dispatch(changeSetbacks({ front, back }))
  }
  return (
    <div className='absolute  top-[36px] w-[320px]  bg-transparent z-50 flex items-center justify-start gap-2 p-3 shadow-2xl rounded-xl'>
      <div className='flex mt-2 text-slate-900 bg-primaryLime px-1 rounded-lg'>Setbacks</div>
      <div className='w-2/3 mt-2 flex items-center justify-center gap-3'>
        <div className='flex w-full border-2 items-center justify-center bg-slate-200 rounded-lg overflow-hidden'>
          <div className='text-xs w-1/2 px-2'>{type === 'length' ? 'Left' : 'Front'}</div>
          <input
            className='w-1/2 outline-none  rounded-lg border-2 border-primaryLime'
            type='number'
            placeholder='Left'
            value={type === 'length' ? setbacks.left : setbacks.front}
            name={type === 'length' ? 'left' : 'front'}
            onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
          />
        </div>
        <div className='flex w-full border-2 items-center justify-center bg-slate-200 rounded-lg overflow-hidden'>
          <div className='text-xs w-1/2 px-2'>{type === 'length' ? 'Right' : 'Back'}</div>
          <input
            className='w-1/2 outline-none  rounded-lg border-2 border-primaryLime'
            placeholder='Right'
            value={type === 'length' ? setbacks.right : setbacks.back}
            name={type === 'length' ? 'right' : 'back'}
            onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}
