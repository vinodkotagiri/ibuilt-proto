import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRoomData } from '../../redux/features/RoomSlice'
import { Slider } from 'antd'

export default function RoomControls({ selectedRoom, title }) {
	const room = useSelector((state) => state.room[`${selectedRoom}`])
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(setRoomData({ room: selectedRoom, data: room }))
	}, [selectedRoom])
	return (
		<div className='mt-3 '>
			<div className='text-center'>{title}</div>
			<div className='flex items-center'>
				Wall1:&nbsp;
				<Slider className='w-1/2' />
				Wall2:&nbsp;
				<Slider className='w-1/2' />
			</div>
		</div>
	)
}
