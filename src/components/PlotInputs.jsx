import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setBuiltup, setPlotDetails } from '../../redux/plot'
export default function PlotInputs() {
  const [plotDimensions, setPlotDimensions] = useState({ length: 0, breadth: 0 })
  const [scale, setScale] = useState(20)
  const [setbacks, setSetbacks] = useState({ back: 1.6, left: 1.6, front: 4.6, right: 1.6 })
  const [type, setType] = useState('2 BHK')
  const [activeStyle, setActiveStyle] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPlotDetails({ plotDimensions, scale, type, setbacks }))
    const builtLength = parseFloat(plotDimensions.length) - parseFloat(setbacks.left) - parseFloat(setbacks.right)
    const builtBreadth = parseFloat(plotDimensions.breadth) - parseFloat(setbacks.front) - parseFloat(setbacks.back)
    dispatch(setBuiltup({ builtLength, builtBreadth }))
  }, [plotDimensions, scale, setbacks, type])

  const handleSelectType = (e) => {
    setType(e.target.name)
  }
  return (
    <>
      <div className='py-2 font-semibold'>Plot Dimensions</div>
      <div className=' h-[40px] flex gap-1 rounded-md overflow-hidden bg-slate-900  text-slate-900'>
        <input
          className='w-1/3 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Length(ft)'
          type='number'
          name='length'
          onChange={(e) => setPlotDimensions({ ...plotDimensions, [e.target.name]: e.target.value })}
        />
        <input
          className='w-1/3 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Breadth(ft)'
          type='number'
          name='breadth'
          onChange={(e) => setPlotDimensions({ ...plotDimensions, [e.target.name]: e.target.value })}
        />
        <input
          className='w-1/3 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Scale'
          type='number'
          name='scale'
          defaultValue={20}
          onChange={(e) => setScale(e.target.value)}
        />
      </div>
      {/* SETBACKS */}
      <div className='py-2 font-semibold'>Setbacks</div>
      <div className=' h-[40px] flex gap-1 rounded-md overflow-hidden bg-slate-900 text-slate-900'>
        <input
          className='w-1/4 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Front'
          type='number'
          name='front'
          value={setbacks.front}
          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
        />
        <input
          className='w-1/4 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Back'
          type='number'
          name='back'
          value={setbacks.back}
          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
        />
        <input
          className='w-1/4 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Left'
          type='number'
          name='left'
          value={setbacks.left}
          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
        />
        <input
          className='w-1/4 h-full outline-none px-2 placeholder:text-xs'
          placeholder='Right'
          type='number'
          name='right'
          value={setbacks.right}
          onChange={(e) => setSetbacks({ ...setSetbacks, [e.target.name]: e.target.value })}
        />
      </div>
      {/* TYPE */}
      <div className='py-2 font-semibold'>Select Type</div>
      <div className=' h-[40px] flex gap-1 rounded-md overflow-hidden bg-slate-900 text-slate-900 text-sm'>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='1 BHK'>
          1 BHK
        </button>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='2 BHK'>
          2 BHK
        </button>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='3 BHK'>
          3 BHK
        </button>
        <button className='bg-yellow-400  font-semibold w-1/4' onClick={handleSelectType} name='4 BHK'>
          4 BHK
        </button>
      </div>
    </>
  )
}
