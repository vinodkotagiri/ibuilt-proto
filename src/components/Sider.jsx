import React from 'react'
import RoomControl from './RoomControl'

export default function Sider() {
  return (
    <aside className='w-[360px] h-full bg-slate-100 p-3'>
      {/* ROOM CONTROLS */}
      <RoomControl />
    </aside>
  )
}
