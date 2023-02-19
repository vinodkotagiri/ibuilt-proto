import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import SetBackInputs from './SetBackInputs'
// import ZoomControls from './ZoomControls'
import { setBuiltup, setPlotDetails } from '../redux/plot'
export default function PlotInputs() {
  const [plotDimensions, setPlotDimensions] = useState({ length: 0, breadth: 0 })
  const [scale, setScale] = useState(20)
  const dispatch = useDispatch()
  const handleBuild = () => {
    dispatch(setPlotDetails({ plotDimensions, scale }))
    const builtLength = parseFloat(plotDimensions.length) - parseFloat(setbacks.left) - parseFloat(setbacks.right)
    const builtBreadth = parseFloat(plotDimensions.breadth) - parseFloat(setbacks.front) - parseFloat(setbacks.back)
    dispatch(setBuiltup({ builtLength, builtBreadth }))
  }

  return (
    <div className='bg-slate-900 h-[48px] right-0  w-[calc(100%-360px)] fixed flex items-center justify-center gap-20 '>
      <div className=' flex bg-white rounded-lg h-[90%]  relative'>
        <div className='text-slate-900 text-xl bg-primaryLime px-3 h-full flex items-center font-semibold rounded-l-lg overflow-hidden'>
          <div className='rounded-l-lg'>Length</div>
        </div>
        <input
          className='h-full w-[150px] outline-none border-2 bg-slate-800 text-white border-primaryLime px-3 text-xl '
          type='number'
          name='length'
          onChange={(e) => setPlotDimensions({ ...plotDimensions, [e.target.name]: e.target.value })}
        />
        <select className='w-[48px] text-lg outline-none bg-primaryLime rounded-r-lg'>
          <option>ft</option>
          <option>m</option>
        </select>
        {length && <SetBackInputs type='length' />}
      </div>

      <div className=' flex bg-white rounded-lg h-[90%] overflow-hidden'>
        <div className='text-slate-900 text-xl bg-primaryLime  px-3 h-full flex items-center rounded-l-lg  font-semibold'>
          <div className='rounded-l-lg'>Breadth</div>
        </div>
        <input
          className='h-full w-[150px] outline-none border-2 bg-slate-800 text-white border-primaryLime px-3 text-xl rounded-r-lg'
          type='number'
          name='breadth'
          onChange={(e) => setPlotDimensions({ ...plotDimensions, [e.target.name]: e.target.value })}
        />
        <select className='w-[48px] text-lg outline-none bg-primaryLime rounded-r-lg'>
          <option>ft</option>
          <option>m</option>
        </select>
        {breadth && <SetBackInputs type='breadth' />}
      </div>
      <button
        className='bg-primaryLime text-slate-900 font-semibold text-2xl px-6 mx-6 py-1 shadow-2xl rounded-xl hover:scale-110 duration-300'
        onClick={handleBuild}>
        Build
      </button>
    </div>
  )
}
