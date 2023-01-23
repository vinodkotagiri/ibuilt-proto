import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Wall({ thickness, direction, length, position }) {
	// direction=0 parallel to length
	// direction=1 perpendicular to length

	const [style, setStyle] = useState({})
	const { scale } = useSelector((state) => state.room)
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
		if (direction === 0) {
			const height = thickness
			const width = length * scale
			currStyle['width'] = width
			currStyle['height'] = height
		} else {
			const width = thickness
			const height = length * scale
			currStyle['width'] = width
			currStyle['height'] = height
		}
		setStyle(currStyle)
	}
	useEffect(() => {
		makeStyles()
	}, [length, thickness, direction])

	return <div className='bg-black absolute' style={style} />
}
