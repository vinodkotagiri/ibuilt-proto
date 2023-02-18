import { Select } from 'antd'
import React from 'react'
import MainControls from './MainControls'
import Position from './Position'
import Dimensions from './Dimensions'
import Icons from './Icons'

export default function RoomControl({ id }) {
  const iconType = 'bed'
  return (
    <div className='w-full'>
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold'>Main Controls</div>
      <MainControls />
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold'>Room Controls : Bedroom-1</div>
      <Position />
      <Dimensions />
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold mt-3'>Icons: Bedroom-1</div>
      <Icons iconType={iconType} />
    </div>
  )
}
