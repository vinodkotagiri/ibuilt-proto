import React from 'react'
import BedroomControls from './BedroomControls'

const map = {
	mb1: 'bedroom1',
	mb2: 'bedroom2',
	lvg: 'living',
	ktn: 'kitchen',
	pja: 'pooja',
	stc: 'staircase',
	ctl: 'commonToilet',
}

export default function RoomControls({ roomId }) {
	return (
		<div className='mt-4 w-full px-6'>
			<div className='uppercase font-bold'>{map[roomId]}</div>
			{roomId === 'mb1' && <BedroomControls room='bedroom1' />}
			{roomId === 'mb2' && <BedroomControls room='bedroom2' />}
			{roomId === 'lvg' && <BedroomControls room='bedroom1' />}
		</div>
	)
}
