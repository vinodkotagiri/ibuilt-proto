import React from 'react'
import Sider from './components/Sider'
import MainCanvas from './components/MainCanvas'
import PlotInputs from './components/PlotInputs'

export default function App() {
  return (
    <div className='flex h-screen w-screen relative overflow-hidden'>
      {/* SIDER */}
      <Sider />
      {/* MAIN */}
      <MainCanvas />
      <PlotInputs />
    </div>
  )
}
