import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPlotDimensions, setBuiltUp } from '../../redux/features/Plot'

export default function PlotInputs() {
  const [plotDim, setPlotDim] = useState({ length: 0, breadth: 0 })
  const { top, bottom, left, right } = useSelector((state) => state.plot.setbacks)
  const [built, setBuilt] = useState({})
  const dispatch = useDispatch()
  //update plot dimensions
  useEffect(() => {
    dispatch(setPlotDimensions({ length: plotDim.length, breadth: plotDim.breadth }))
  }, [plotDim])
  //update builtup
  useEffect(() => {
    const builtLength = parseFloat(plotDim.length) - parseFloat(left) - parseFloat(left)
    const builtBreadth = parseFloat(plotDim.breadth) - parseFloat(top) - parseFloat(bottom)
    dispatch(setBuiltUp({ length: builtLength, breadth: builtBreadth }))
  }, [plotDim, top, left, right, bottom])
  return (
    <div className='flex gap-3 mt-6'>
      <Input
        type='number'
        name='length'
        placeholder='Plot Length (ft)'
        onChange={(e) => setPlotDim({ ...plotDim, length: e.target.value })}
      />
      <Input
        type='number'
        name='breadth'
        placeholder='Plot Breadth (ft)'
        onChange={(e) => setPlotDim({ ...plotDim, breadth: e.target.value })}
      />
    </div>
  )
}
