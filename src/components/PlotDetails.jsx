import React from 'react'
import { useSelector } from 'react-redux'
export default function PlotDetails() {
	const { plot, built, setbacks } = useSelector((state) => state.room)

	return (
		<div className='flex flex-col w-full my-2 border-2 p-3 inset-3 rounded-lg shadow-xl bg-gray-800'>
			<div className='mb-2 font-semibold'>Plot Details</div>
			<div className='flex gap-3'>
				<div>Total Area: </div>
				<div className='text-blue-500 font-semibold'>{plot.area} sqft</div>
			</div>
			<div className='flex gap-3'>
				<div>Builtup Area: </div>
				<div className='text-green-500 font-semibold'>{built.area} sqft</div>
			</div>
			<div className=' mt-2'>
				<div className='font-semibold'>Offsets </div>
				<div className='flex  items-center justify-evenly'>
					<div className='text-red-500 font-semibold'>
						front
						<br />
						{setbacks.bottom} ft
					</div>
					<div className='text-red-500 font-semibold'>
						back
						<br />
						{setbacks.top} ft
					</div>
					<div className='text-red-500 font-semibold'>
						left
						<br />
						{setbacks.left} ft
					</div>
					<div className='text-red-500 font-semibold'>
						right
						<br />
						{setbacks.right} ft
					</div>
				</div>
			</div>
		</div>
	)
}
