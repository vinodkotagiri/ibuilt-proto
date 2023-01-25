import React, { useState } from 'react'
import PlotInputs from './PlotInputs'
import PlotDetails from './PlotDetails'
import Controls from './Controls'
export default function Sider() {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<aside className='w-[380px] bg-slate-900 p-3  text-gray-400'>
			<div className='w-full text-2xl text-center text-gray-400'>iBuilt</div>
			{collapsed ? (
				<div className='flex items-center justify-between'>
					<div>Plot Details</div>
					<div className='font-bold cursor-pointer text-xl' onClick={() => setCollapsed((prev) => !prev)}>
						+
					</div>
				</div>
			) : (
				<div className='relative'>
					<div
						className='absolute top-0 right-4 text-2xl font-bold cursor-pointer'
						onClick={() => setCollapsed((prev) => !prev)}>
						-
					</div>
					<PlotInputs />
					<PlotDetails />
				</div>
			)}
			{/* controls */}
			<Controls />
		</aside>
	)
}
