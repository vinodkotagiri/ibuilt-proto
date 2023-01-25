import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Room from './Room'
import { updateRoom } from '../../redux/features/RoomSlice'
import Wall from './Wall'
export default function Builtup() {
	const { built, scale, setbacks, commonToilet } = useSelector((state) => state.room)
	const [style, setStyle] = useState({})
	const dispatch = useDispatch()
	console.log(commonToilet)
	useEffect(() => {
		const currStyle = {
			width: Math.ceil(parseFloat(built.length) * parseFloat(scale)),
			height: Math.ceil(parseFloat(built.breadth) * parseFloat(scale)),
			top: Math.ceil(parseFloat(setbacks.top * scale)),
			left: Math.ceil(parseFloat(setbacks.left * scale)),
		}
		setStyle(currStyle)
		MakeRoom('bedroom1')
		MakeRoom('bedroom2')
		MakeRoom('commonToilet')
	}, [built, scale])

	const MakeRoom = (room) => {
		const position = {}
		const walls = {}
		let length, breadth
		if (room === 'bedroom1') {
			position['top'] = 9
			position['left'] = 9
			walls['right'] = { position: { top: 0, right: 0 }, direction: 1, length: (built.breadth - 3) / 2, thickness: 6 }
			walls['bottom'] = {
				position: { bottom: 0, right: 0 },
				direction: 0,
				length: (built.length - 6) / 2,
				thickness: 6,
				hasDoor: true,
				doorPosition: 40,
			}
			walls['top'] = null
			walls['left'] = null
			if (true) length = (built.length / 2 - 0.75 - commonToilet.length / 2).toFixed(2) //(builtlength-outerwalls)/2
			else length = (built.length / 2 - 0.75).toFixed(2)
			breadth = (built.breadth / 2 - 1.5).toFixed(2)
		}
		if (room === 'bedroom2') {
			position['top'] = 9
			position['right'] = 9
			walls['left'] = { position: { top: 0, left: 0 }, direction: 1, length: (built.breadth - 3) / 2, thickness: 6 }
			walls['bottom'] = {
				position: { bottom: 0, right: 0 },
				direction: 0,
				length: (built.length - 6) / 2,
				thickness: 6,
				hasDoor: true,
				doorPosition: 18,
			}
			walls['top'] = null
			walls['right'] = null
			if (true) length = (built.length / 2 - commonToilet.length / 2).toFixed(2) //(builtlength-outerwalls)/2
			else length = (built.length / 2 - 0.75).toFixed(2)
			breadth = (built.breadth / 2 - 1.5).toFixed(2)
		}
		if (room === 'commonToilet') {
			position['top'] = 9
			position['left'] = parseInt(built.length / 2 - commonToilet.length / 2) * scale
			length = 5
			breadth = 7
		}
		dispatch(updateRoom({ room, data: { position, length, breadth, walls } }))
	}
	return (
		<div className={`text-white bg-green-800 absolute`} style={style}>
			{/* TOP WALL */}
			<Wall position={{ top: 0, left: 0 }} thickness={9} direction={0} length={built.length * scale} />
			{/* LEFT WALL */}
			<Wall position={{ top: 0, left: 0 }} thickness={9} direction={1} length={built.breadth * scale} />
			{/* RIGHT WALL */}
			<Room room='bedroom1' color='green' />
			<Room room='commonToilet' />
			<Room room='bedroom2' />
			<Wall position={{ top: 0, right: 0 }} thickness={9} direction={1} length={built.breadth * scale} />
			{/* BOTTOM WALL */}
			<Wall
				position={{ bottom: 0, left: 0 }}
				thickness={9}
				direction={0}
				length={built.length * scale}
				hasDoor={true}
				doorPosition={(built.length / 2) * scale}
			/>
		</div>
	)
}
