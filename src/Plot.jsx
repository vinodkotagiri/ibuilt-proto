import React, { useEffect } from 'react'
import BuildingArea from './BuildingArea'
import { useDispatch, useSelector } from 'react-redux'
import { setBuiltup } from '../redux/features/RoomSlice'
export default function Plot({ plot, scale, setbacks }) {
	const { plotLength, plotBreadth } = plot
	const { built } = useSelector((state) => state.room)
	const { included } = useSelector((state) => state.room.commonToilet)
	const dispatch = useDispatch()
	const setBedRoomData = () => {}
	const style = {
		width: plotLength * scale,
		height: plotBreadth * scale,
	}
	const claculateOffsets = () => {
		const { left, right, top, bottom } = setbacks
		const length = parseFloat(plotLength - left - right)
		const breadth = parseFloat(plotBreadth - top - bottom)
		dispatch(setBuiltup({ length, breadth }))
	}
	useEffect(() => {
		claculateOffsets()
	}, [plotLength, plotBreadth])

	return (
		<div className='bg-gray-300 flex items-center justify-center' style={style}>
			<BuildingArea built={built} hasCommonToilet={included} />
		</div>
	)
}
