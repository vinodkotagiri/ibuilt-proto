import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Wall from './Wall'

export default function Room({ room, color, flex }) {
	const selectedRoom = useSelector((state) => state.room[`${room}`])
	const { scale } = useSelector((state) => state.room)
	const { length, breadth, position, walls } = selectedRoom
	const [style, setStyle] = useState({})
	useEffect(() => {
		makeStyle()
	}, [selectedRoom, scale])

	const makeStyle = () => {
		const currStyle = {}
		currStyle['width'] = length * scale
		currStyle['height'] = breadth * scale
		if (!flex) {
			if (position.top !== undefined) currStyle['top'] = position.top
			if (position.left !== undefined) currStyle['left'] = position.left
			if (position.bottom !== undefined) currStyle['bottom'] = position.bottom
			if (position.right !== undefined) currStyle['right'] = position.right
		}
		if (color) currStyle['backgroundColor'] = color
		setStyle(currStyle)
	}

	return (
		<div className={`bg-white absolute`} style={style}>
			{Object.keys(walls).map(
				(wall, index) =>
					walls[`${wall}`] && (
						<Wall
							length={walls[`${wall}`].length * scale}
							thickness={walls[`${wall}`].thickness}
							direction={walls[`${wall}`].direction}
							position={walls[`${wall}`].position}
							hasDoor={walls[`${wall}`].hasDoor}
							doorPosition={walls[`${wall}`].doorPosition}
							key={index}
						/>
					)
			)}
		</div>
	)
}
