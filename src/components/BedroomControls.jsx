import React from 'react'
import { Slider } from 'antd'
export default function BedroomControls({ room }) {
	console.log(room)
	return (
		<div>
			<div className='flex w-full gap-4 items-center'>
				<div>Length: </div>
				<Slider min={10} max={15} className='w-full' />
			</div>
			<div className='flex w-full gap-4 items-center'>
				<div>Breadth: </div>
				<Slider min={10} max={15} className='w-full' />
			</div>
			<div className='font-bold'>Toilet</div>
			<div className='flex w-full gap-4 items-center'>
				<div>Length: </div>
				<Slider min={6} max={10} className='w-full' />
			</div>
			<div className='flex w-full gap-4 items-center'>
				<div>Breadth: </div>
				<Slider min={6} max={10} className='w-full' />
			</div>
			<div className='font-bold'>Balcony</div>
			<div className='flex w-full gap-4 items-center'>
				<div>Length: </div>
				<Slider min={6} max={10} className='w-full' />
			</div>
			<div className='flex w-full gap-4 items-center'>
				<div>Breadth: </div>
				<Slider min={6} max={10} className='w-full' />
			</div>
		</div>
	)
}
