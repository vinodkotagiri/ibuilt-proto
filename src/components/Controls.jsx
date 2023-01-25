import { Select } from 'antd'
import React, { useState } from 'react'
import RoomControls from './RoomControls'
export default function Controls() {
	const [selectedRoom, setSelectedRoom] = useState('')
	const [label, setLabel] = useState('')
	const options = [
		{ value: 'bedroom1', label: 'Bed Room 1' },
		{ value: 'bedroom2', label: 'Bed Room 2' },
		{ value: 'bedroom3', label: 'Bed Room 3' },
		{ value: 'bedroom4', label: 'Bed Room 4' },
		{ value: 'livingRoom', label: 'Living Room' },
		{ value: 'kitchen', label: 'Kitchen' },
		{ value: 'pooja', label: 'Pooja' },
		{ value: 'staircase', label: 'Stair Case' },
	]
	const handleChange = (_, label) => {
		setSelectedRoom(label.value)
		setLabel(label.label)
	}
	return (
		<div className='flex flex-col w-full my-2 border-2 p-3 inset-3 rounded-lg shadow-xl bg-gray-800'>
			<div className='mb-2 font-semibold'>Controls</div>
			<Select defaultValue='Select Room' options={options} onChange={handleChange}></Select>
			<RoomControls selectedRoom={selectedRoom} title={label} />
		</div>
	)
}
