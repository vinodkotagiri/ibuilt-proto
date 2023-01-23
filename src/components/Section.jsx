import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TopLayout from './TopLayout'
import BottomLayout from './BottomLayout'

export default function Section({ length, breadth, hasCommonToilet, position }) {
	const { scale } = useSelector((state) => state.room)
	const [style, setStyle] = useState({})
	const makeStyles = () => {
		const currStyle = {}
		currStyle['width'] = length * scale
		currStyle['height'] = breadth * scale
		if (position === 'top') currStyle['top'] = 0
		if (position === 'bottom') currStyle['bottom'] = 0
		setStyle(currStyle)
	}
	useEffect(() => {
		makeStyles()
	}, [length, breadth, scale, position])
	return (
		<div className={`${position === 'top' ? 'bg-green-300' : 'bg-red-300'} absolute`} style={style}>
			{position === 'top' ? (
				/* TOP ROOMS */
				<TopLayout length={length} breadth={breadth} hasCommonToilet={hasCommonToilet} />
			) : (
				/* BOTTOM ROOMS */
				<BottomLayout />
			)}
		</div>
	)
}
