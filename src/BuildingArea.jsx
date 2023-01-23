import React, { useEffect, useState } from 'react'
import Section from './components/Section'
import { useSelector } from 'react-redux'

export default function BuildingArea({ built, hasCommonToilet }) {
	const { length, breadth } = built
	const { scale } = useSelector((state) => state.room)
	const [style, setStyle] = useState({})
	useEffect(() => {
		setStyle({ width: length * scale, height: breadth * scale })
	}, [length, breadth, scale])
	// console.log(length, breadth)
	return (
		<>
			{!(length > 0 && breadth > 0) ? (
				<div className='relative bg-white' style={style}>
					INPUT PLOT DIMENSIONS
				</div>
			) : (
				<div className='relative bg-white' style={style}>
					{/* TOP SECTION */}
					<Section length={length} breadth={parseFloat(breadth / 2)} position='top' hasCommonToilet={hasCommonToilet} />
					{/* BOTTOM SECTION */}
					<Section
						length={length}
						breadth={parseFloat(breadth / 2)}
						position='bottom'
						hasCommonToilet={hasCommonToilet}
					/>
				</div>
			)}
		</>
	)
}
