import React, { useEffect } from 'react'
import RoomControl from './RoomControl'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Sider() {
  const { selected } = useSelector((state) => state.rooms)
  const { bedrooms } = useSelector((state) => state.rooms)
  const [room, setRoom] = useState(null)
  useEffect(() => {
    setRoom(bedrooms[selected])
  }, [selected, bedrooms])
  // console.log(room)
  return (
    <aside className='w-[360px] h-full bg-slate-100 '>
      {/* ROOM CONTROLS */}
      <div className='bg-slate-900 h-[60px] text-lime-500 text-4xl font-bold flex items-center justify-center'>
        <div>iBuiltup</div>
      </div>
      <RoomControl selectedRoom={room} />
    </aside>
  )
}
