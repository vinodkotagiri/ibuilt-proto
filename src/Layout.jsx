import React from 'react'
import MainArea from './MainArea'
import Sider from './Sider'
export default function Layout() {
	return (
		<div className='flex w-full h-full'>
			<div className='w-1/4 h-full'>
				<Sider />
			</div>
			<div className='w-3/4 h-full'>
				<MainArea />
			</div>
		</div>
	)
}
