import React, { useEffect, useState } from 'react'
import { InputNumber } from 'antd'
import { setBuiltup, setPlotDimensions, setScale, setSetBacks } from '../../redux/features/RoomSlice'
import { useDispatch } from 'react-redux'
export default function UserInputs() {
	const [plotLength, setPlotLength] = useState(0)
	const [plotBreadth, setPlotBreadth] = useState(0)
	const [scaleValue, setScaleValue] = useState(20)
	const [setBackValues, setSetBackValues] = useState({ top: 1.6, bottom: 4.6, left: 1.6, right: 1.6 })
	const dispatch = useDispatch()
	const calculateBuiltUp = () => {
		const { top, bottom, left, right } = setBackValues
		const length = (parseFloat(plotLength) - parseFloat(left) - parseFloat(right)).toFixed(2)
		const breadth = (parseFloat(plotBreadth) - parseFloat(top) - parseFloat(bottom)).toFixed(2)
		dispatch(setBuiltup({ length, breadth }))
	}
	useEffect(() => {
		dispatch(setPlotDimensions({ length: plotLength, breadth: plotBreadth }))
		dispatch(setScale({ scale: scaleValue }))
		dispatch(setSetBacks(setBackValues))
		calculateBuiltUp()
	}, [plotLength, plotBreadth])
	useEffect(() => {
		dispatch(setSetBacks(setBackValues))
		calculateBuiltUp()
	}, [setBackValues])
	useEffect(() => {
		dispatch(setScale({ scale: scaleValue }))
	}, [scaleValue])
	return (
		<div className='flex flex-col w-full my-2 border-2 p-3 inset-3 rounded-lg shadow-xl bg-gray-800'>
			<div className='flex items-center  w-full gap-2'>
				<div className='font-semibold '>Plot: </div>
				<InputNumber placeholder='Length (ft)' onChange={(value) => setPlotLength(value)} className='' />
				X
				<InputNumber placeholder='Breadth (ft)' onChange={(value) => setPlotBreadth(value)} />
			</div>
			<div className='flex items-center  w-full gap-2 mt-3'>
				<div className='font-semibold '>Scale: </div>
				<InputNumber
					className='w-[50px]'
					placeholder='scale'
					defaultValue={20}
					onChange={(value) => setScaleValue(value)}
				/>
			</div>

			<div className='flex items-center  w-full gap-2 mt-3'>
				<div className='font-semibold '>Offsets: </div>
				<InputNumber
					placeholder='Bottom (ft)'
					defaultValue={setBackValues.bottom}
					onChange={(value) => setSetBackValues({ ...setBackValues, bottom: value })}
				/>
				<InputNumber
					placeholder='Top (ft)'
					defaultValue={setBackValues.top}
					onChange={(value) => setSetBackValues({ ...setBackValues, top: value })}
				/>
				<InputNumber
					placeholder='Left (ft)'
					defaultValue={setBackValues.left}
					onChange={(value) => setSetBackValues({ ...setBackValues, left: value })}
				/>
				<InputNumber
					placeholder='Right (ft)'
					defaultValue={setBackValues.right}
					onChange={(value) => setSetBackValues({ ...setBackValues, right: value })}
				/>
			</div>
		</div>
	)
}
