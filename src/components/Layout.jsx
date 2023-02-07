import React from 'react'
import Sider from './Sider'
import Drawing from './Drawing'

export default function Layout() {
  return (
    <div className='flex h-screen w-screen'>
      <Sider />
      <Drawing />
    </div>
  )
}
