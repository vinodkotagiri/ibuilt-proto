import React from 'react'
import PlotInputs from './PlotInputs'
import Controls from './Controls'
import BHKSelection from './BHKSelection'
export default function Sider() {
  return (
    <div className='w-[380px] flex flex-col text-gray-200 gap-3 px-3'>
      <PlotInputs />
      <BHKSelection />
      <Controls />
    </div>
  )
}
