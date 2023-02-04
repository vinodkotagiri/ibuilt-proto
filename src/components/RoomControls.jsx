import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateRoom } from '../../redux/rooms'

export default function RoomControls() {
  const { selectedRoom, positions } = useSelector((state) => state.common)
  const [position, setPosition] = useState(selectedRoom.data.position)
  const [length, setLength] = useState(selectedRoom.data.length)
  const [breadth, setBreadth] = useState(selectedRoom.data.breadth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateRoom({ position, length, breadth, room: selectedRoom.room, id: selectedRoom.data.id }))
  }, [length, breadth, position])
  const handleChange = (e) => {
    const { name, value } = e.target
    setPosition({ ...position, [name]: value })
  }
  console.log(positions)
  return (
    <div className='w-full gap-2 mt-3 flex flex-col'>
      <div className='font-semibold'>Room Controls</div>
      <div className=' font-semibold'>Position</div>
      X:
      <input
        className='cursor-pointer'
        type='range'
        min={Math.min(...positions.x)}
        max={Math.max(...positions.x)}
        step={positions.x[1] - positions.x[0]}
        name='x'
        defaultValue={0}
        onChange={handleChange}
      />
      Y:
      <input
        className='cursor-pointer'
        type='range'
        min={Math.min(...positions.y)}
        max={Math.max(...positions.y)}
        step={positions.y[1] - positions.y[0]}
        name='y'
        defaultValue={0}
        onChange={handleChange}
      />
      <div className=' font-semibold'>Dimensions</div>
      Length:
      <input
        className='cursor-pointer'
        type='range'
        min={selectedRoom.data.min}
        max={selectedRoom.data.max}
        step={1}
        name='length'
        defaultValue={8}
        onChange={(e) => setLength(e.target.value)}
      />
      Breadth:
      <input
        className='cursor-pointer'
        type='range'
        min={selectedRoom.data.min}
        max={selectedRoom.data.max}
        step={1}
        name='breadth'
        defaultValue={8}
        onChange={(e) => setBreadth(e.target.value)}
      />
    </div>
  )
}
