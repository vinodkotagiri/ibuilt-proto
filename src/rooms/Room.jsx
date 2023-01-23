import React, { useEffect, useState } from 'react'
import Wall from '../components/Wall'
export default function Room({ length, breadth, position, walls, details }) {
	const [style, setStyle] = useState([])
	const scale = 20
	const makeStyles = () => {
		const currStyle = {}
		if (position?.top !== undefined) {
			currStyle['top'] = position.top
		}
		if (position?.bottom !== undefined) {
			currStyle['bottom'] = position.bottom
		}
		if (position?.left !== undefined) {
			currStyle['left'] = position.left
		}
		if (position?.right !== undefined) {
			currStyle['right'] = position.right
		}
		currStyle['width'] = length * scale
		currStyle['height'] = breadth * scale
		setStyle(currStyle)
	}
	useEffect(() => {
		makeStyles()
	}, [position, length, breadth])

	return (
		<div className='absolute bg-green-300 ' style={style}>
			{/* topwall */}
			<Wall thickness={walls.top} length={length} direction={0} position={{ top: 0, left: 0 }} />
			{/* bottomwall */}
			<Wall thickness={walls.bottom} length={length} direction={0} position={{ bottom: 0, left: 0 }} />
			{/* leftwall */}
			<Wall thickness={walls.left} length={breadth} direction={1} position={{ top: 0, left: 0 }} />
			{/* rightwall */}
			<Wall thickness={walls.right} length={breadth} direction={1} position={{ top: 0, right: 0 }} />
			<div className='flex items-center justify-center h-full w-full'>{details}</div>
		</div>
	)
}
