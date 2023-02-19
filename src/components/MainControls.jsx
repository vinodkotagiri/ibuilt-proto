import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSelectedRoom } from '../redux/common'

export default function MainControls() {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const { bedrooms } = useSelector((state) => state.rooms)
  const [id, setId] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    setSelectedRoom(
      bedrooms.find((room) => room.id === id),
      dispatch(updateSelectedRoom({ room: 'bedrooms', data: selectedRoom }))
    )
  }, [id, selectedRoom, bedrooms])

  return (
    <div className='w-full flex mt-2'>
      <select className='bg-slate-300 rounded-lg w-1/2 h-[32px] outline-none' onChange={(e) => setId(e.target.value)}>
        <option>Select Room</option>
        <option value={0}>Bedroom-1</option>
        <option value={1}>Bedroom-2</option>
        <option value={2}>Bedroom-3</option>
        <option value={3}>Bedroom-4</option>
      </select>
      <div className='w-1/2 flex flex-col items-start px-3'>
        <div className='flex items-center justify-center gap-2'>
          <input type='radio' name='toilet' defaultChecked />
          <div>Bath+WC</div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input type='radio' name='toilet' />
          <div>Bath</div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input type='radio' name='toilet' />
          <div>WC</div>
        </div>
        <div className='h-[2px] bg-[#d9fc35] w-full' />
        <div className='flex items-center justify-center gap-2'>
          <input type='checkbox' />
          <div>Wardrobe</div>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <input type='checkbox' />
          <div>Balcony</div>
        </div>
      </div>
    </div>
  )
}
