import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayDetails() {
	const { plot, built } = useSelector((state) => state.room)
	return (
		<div className='flex flex-col gap-2 w-full'>
			<div className='flex mt-3 px-4 w-full gap-2'>
				<div className='font-semibold'>Plot Area:</div>
				<div>{plot.area} sqft.</div>
			</div>
			<div className='flex mt-3 px-4 w-full gap-2'>
				<div className='font-semibold'>Builtup Area:</div>
				<div>{built.area} sqft.</div>
			</div>
		</div>
	)
}
