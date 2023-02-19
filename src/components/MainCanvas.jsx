import React from 'react'
import Legend from './Legend'

import Drawing from './Drawing'
import ZoomControls from './ZoomControls'
export default function MainCanvas() {
  return (
    <div className='flex-1 mt-[48px] h-full w-[calc(100%-250px)] bg-black relative'>
      <div className='flex h-full w-full'>
        <Legend />

        <Drawing />
      </div>
    </div>
  )
}
