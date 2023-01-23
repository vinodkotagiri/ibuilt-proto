import React, { useState } from 'react'
import UserInputs from './components/UserInputs'
import DisplayDetails from './components/DisplayDetails'
import RoomControls from './components/RoomControls'
export default function Sider() {
	const [flag, setFlag] = useState('')
	return (
		<div className='bg-slate-800 h-full pt-10 text-white flex flex-col items-center '>
			{/* PLOT DIMENSIONS INPUT */}
			<UserInputs />
			<div className='w-full h-[2px] bg-slate-500 mt-4' />
			{/* DISPLAY SETBACKS, PLOT AREA, BUILTUP AREA */}
			<DisplayDetails />
			<div className='w-full h-[2px] bg-slate-500 mt-4' />
			{/* CONTROLS */}
			<div className='flex mt-3 gap-3 flex-wrap px-3'>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('mb1')}>
					Bedroom 1
				</button>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('mb2')}>
					Bedroom 2
				</button>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('lvg')}>
					Living
				</button>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('ktn')}>
					Kitchen
				</button>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('pja')}>
					Pooja
				</button>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('stc')}>
					Staircase
				</button>
				<button className='bg-amber-600 px-2 py-1 rounded-md shadow-2xl hover:scale-110' onClick={() => setFlag('ctl')}>
					Common Toilet
				</button>
			</div>
			{flag === 'mb1' && <RoomControls roomId='mb1' />}
			{flag === 'mb2' && <RoomControls roomId='mb2' />}
			{flag === 'lvg' && <RoomControls roomId='lvg' />}
			{flag === 'ktn' && <RoomControls roomId='ktn' />}
			{flag === 'pja' && <RoomControls roomId='pja' />}
			{flag === 'stc' && <RoomControls roomId='stc' />}
			{flag === 'ctl' && <RoomControls roomId='ctl' />}
		</div>
	)
}
