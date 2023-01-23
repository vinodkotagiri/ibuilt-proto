import React from 'react'
import Plot from './Plot'
import { useSelector } from 'react-redux'
export default function MainArea() {
	const { plot } = useSelector((state) => state.room)
	const { scale } = useSelector((state) => state.room)
	const { setbacks } = useSelector((state) => state.room)
	return (
		<div className='flex items-center justify-center h-full'>
			<Plot plot={plot} scale={scale} setbacks={setbacks} />
		</div>
	)
}
