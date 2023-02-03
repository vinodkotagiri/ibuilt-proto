import React from 'react'
import Sider from './Sider'

export default function Layout({ children }) {
	return (
    <div className='flex w-screen h-screen bg-slate-800 '>
      <Sider />
      <main className='w-[calc(100%-380px)] flex items-center justify-center p-3'>{children}</main>
    </div>
  )
}
