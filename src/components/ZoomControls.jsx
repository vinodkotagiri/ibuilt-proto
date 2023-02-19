import React, { useEffect, useState } from 'react'
import { RiZoomInFill, RiZoomOutFill } from 'react-icons/ri'
import { BiReset } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { changeScale } from '../redux/plot'
export default function ZoomControls() {
  const { scale } = useSelector((state) => state.plot)
  const dispatch = useDispatch()
  const [currentScale, setCurrentScale] = useState(scale)
  const handleZoomIn = () => {
    if (currentScale <= 30) setCurrentScale((prev) => prev + 1)
  }
  const handleZoomOut = () => {
    if (currentScale >= 15) setCurrentScale((prev) => prev - 1)
  }
  const handelReset = () => {
    setCurrentScale(20)
  }
  useEffect(() => {
    dispatch(changeScale({ scale: currentScale }))
  }, [currentScale])
  return (
    <div className='absolute bottom-[60px] right-0 flex  w-[250px] h-[60px] items-center justify-center z-50 rounded-lg overflow-hidden'>
      <div className='bg-slate-800 w-1/3 flex items-center h-full justify-center '>
        <BiReset
          size={24}
          className='text-red-500 hover:scale-150 hover:rotate-[-180deg] duration-300 cursor-pointer'
          onClick={handelReset}
        />
      </div>
      <div className='bg-slate-800 w-1/3 flex items-center h-full justify-center '>
        <RiZoomOutFill
          size={24}
          className='text-primaryLime hover:scale-150 duration-300 cursor-pointer'
          onClick={handleZoomOut}
        />
      </div>
      <div className='bg-slate-800 w-1/3 flex h-full items-center justify-center '>
        <RiZoomInFill
          size={24}
          className='text-primaryLime  hover:scale-150 cursor-pointer duration-300'
          onClick={handleZoomIn}
        />
      </div>
    </div>
  )
}
