import React from 'react'
import Plot from './Plot'
import ZoomControls from './ZoomControls'
import Compass from './Compass'

export default function Drawing() {
  return (
    <div className='h-full w-full'>
      <div className='w-full h-full flex items-center justify-center'>
        <Plot />
        {/* <ZoomControls /> */}
        <Compass />
      </div>
    </div>
  )
}
