import React from 'react'
import Sider from './Sider'
import Plot from './Plot'

export default function Layout() {
  return (
    <div className='flex h-screen w-screen'>
      <Sider />
      <div className='flex items-center justify-center w-full'>
        <Plot />
      </div>
    </div>
  )
}
