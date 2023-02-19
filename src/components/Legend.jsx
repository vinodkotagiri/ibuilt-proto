import React, { useState } from 'react'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
export default function Legend() {
  const [showLegend, setShowLegend] = useState(false)
  const plot = useSelector((state) => state.plot)
  const built = useSelector((state) => state.built)
  if (showLegend)
    return (
      <div className='absolute right-0 top-[60px]'>
        <FaChevronCircleLeft size={32} className='right-0 absolute cursor-pointer hover:scale-110 duration-300' />
      </div>
    )
  else
    return (
      <div className='h-[calc(100%-150px)] w-[250px] bg-slate-800 text-primaryLime fixed right-0 top-[60px] rounded-md overflow-hidden'>
        <div className='text-slate-800  bg-primaryLime w-full px-3  font-semibold h-[60px] flex items-center justify-center'>
          <FaChevronCircleRight
            size={32}
            className='left-0 absolute mx-2 cursor-pointer hover:scale-110 duration-300'
          />
          <div className='text-2xl'>Legend</div>
        </div>
        {/* PLOT DETAILS */}
        <div className='m-3'>
          <div className='font-semibold'>Plot Details</div>
          <div className='bg-primaryLime text-slate-900 px-3'>
            <div className='flex justify-between'>
              <div>Length:</div>
              <div className='font-semibold'> {plot?.length || 0} ft</div>
            </div>
          </div>
          <div className='bg-primaryLime text-slate-900 px-3'>
            <div className='flex justify-between'>
              <div>Breadth:</div>
              <div className='font-semibold'> {plot?.breadth || 0} ft</div>
            </div>
          </div>
          <div className='bg-primaryLime text-slate-900 px-3'>
            <div className='flex justify-between'>
              <div>Area:</div>
              <div className='font-semibold'> {plot?.area || 0} sqft</div>
            </div>
          </div>
        </div>
        {/* BUILT UP DETAILS */}
        <div className='m-3'>
          <div className='font-semibold'>Builtup Details</div>
          <div className='bg-primaryLime text-slate-900 px-3'>
            <div className='flex justify-between'>
              <div>Length:</div>
              <div className='font-semibold'> {built?.length || 0} ft</div>
            </div>
          </div>
          <div className='bg-primaryLime text-slate-900 px-3'>
            <div className='flex justify-between'>
              <div>Breadth:</div>
              <div className='font-semibold'> {built?.breadth || 0} ft</div>
            </div>
          </div>
          <div className='bg-primaryLime text-slate-900 px-3'>
            <div className='flex justify-between'>
              <div>Area:</div>
              <div className='font-semibold'> {built?.area || 0} sqft</div>
            </div>
          </div>
        </div>
      </div>
    )
}
