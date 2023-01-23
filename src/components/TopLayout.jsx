import React, { useState } from 'react'
import Room from '../rooms/Room'
import { useDispatch, useSelector } from 'react-redux'

export default function TopLayout({ length, breadth, hasCommonToilet }) {
	const { bedroom1 } = useSelector((state) => state.room)
	const dispatch = useDispatch()
	console.log(bedroom1)
	return (
		<div className='relative h-full w-full'>
			<Room
				length={length / 2}
				breadth={breadth}
				position={{ top: 0, left: 0 }}
				walls={{ top: 9, left: 9, right: 6, bottom: 6 }}
				details='bed room-1'
			/>
			<Room
				length={length / 2}
				breadth={breadth}
				position={{ top: 0, right: 0 }}
				walls={{ top: 9, left: 0, right: 6, bottom: 6 }}
				details='bed room-2'
			/>
		</div>
	)
}
