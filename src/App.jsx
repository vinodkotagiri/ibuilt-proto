import React from 'react'
import Sider from './components/Sider'
import MainCanvas from './components/MainCanvas'

export default function App() {
  return (
    <div className='flex h-screen w-screen'>
      {/* SIDER */}
      <Sider />
      {/* MAIN */}
      <MainCanvas />
    </div>
  )
}
