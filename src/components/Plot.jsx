import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Builtup from './Builtup'

export default function Plot() {
	const { plot, scale } = useSelector((state) => state.room)
	const [style, setStyle] = useState({})
	useEffect(() => {
		const currStyle = {
			width: Math.ceil(parseFloat(plot.plotLength) * parseFloat(scale)),
			height: Math.ceil(parseFloat(plot.plotBreadth) * parseFloat(scale)),
		}
		setStyle(currStyle)
	}, [scale, plot])
	return (
		<>
			{!(plot.plotLength > 0 && plot.plotBreadth > 0) ? (
				<div className='flex items-center justify-center'>Enter the plot dimensions to render plot</div>
			) : (
				<div className='bg-black relative' style={style}>
					<Builtup />
				</div>
			)}
		</>
	)
}
