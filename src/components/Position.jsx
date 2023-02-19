import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePosition } from '../redux/rooms'

export default function Position() {
  const { selectedRoom, positions } = useSelector((state) => state.common)
  const [position, setPosition] = useState(selectedRoom.data.position)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateRoom({ position, room: selectedRoom.room, id: selectedRoom.data.id }))
  }, [position])
  const handleChange = (e) => {
    const { name, value } = e.target
    setPosition({ ...position, [name]: value })
  }
  return (
    <>
      <div className='w-full flex mt-2 bg-slate-900 text-primaryLime px-3 rounded-lg'>
        <div>Position</div>
      </div>
      <div className='mt-2 font-semibold text-sm'>X-Direction</div>
      <div className='w-full flex gap-3 '>
        <input
          type='range'
          className='w-2/3 cursor-pointer'
          min={Math.min(...positions.x)}
          max={Math.max(...positions.x)}
          step={positions.x[1] - positions.x[0]}
          name='x'
          defaultValue={0}
          onChange={handleChange}
        />
        <input
          input='number'
          className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none'
          defaultValue={0}
        />
      </div>
      <div className='mt-2 font-semibold text-sm'>Y-Direction</div>
      <div className='w-full flex gap-3 '>
        <input
          type='range'
          className='w-2/3 cursor-pointer'
          min={Math.min(...positions.y)}
          max={Math.max(...positions.y)}
          step={positions.y[1] - positions.y[0]}
          value={currentY}
          onChange={(e) => setCurrentY(e.target.value)}
        />
        <input
          input='text'
          className='w-1/3 border-primaryLime border-2 rounded-lg px-3 outline-none'
          defaultValue={0}
        />
      </div>
    </>
  )
}
