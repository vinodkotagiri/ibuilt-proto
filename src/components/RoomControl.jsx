import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import MainControls from './MainControls'
import Position from './Position'
import Dimensions from './Dimensions'
import Icons from './Icons'
import { useSelector } from 'react-redux'

export default function RoomControl({ id, selectedRoom }) {
  const iconType = 'bed'
  const { selected } = useSelector((state) => state.rooms)
  const [room, setRoom] = useState('No Room Selected')
  useEffect(() => {
    if (selected === 0) setRoom('Bedroom-1')
    if (selected === 1) setRoom('Bedroom-2')
    if (selected === 2) setRoom('Bedroom-3')
    if (selected === 3) setRoom('Bedroom-4')
  }, [selected])
  return (
    <div className='w-full'>
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold'>Main Controls</div>
      <MainControls selectedRoom={selectedRoom} />
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold'>Room Controls : {room}</div>
      <Position selectedRoom={selectedRoom} />
      <Dimensions selectedRoom={selectedRoom} />
      <div className='bg-primaryLime w-full px-3 rounded-lg font-bold mt-3'>Icons: {room}</div>
      <Icons iconType={iconType} selectedRoom={selectedRoom} />
    </div>
  )
}
