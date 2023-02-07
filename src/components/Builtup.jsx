import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Quadrant from './Quadrant'

export default function Builtup() {
  const { builtLength, builtBreadth, scale, setbacks, plotLength, plotBreadth } = useSelector((state) => state.plot)
  let { back, left } = setbacks
  const [style, setStyle] = useState({})
  const makeStyle = () => {
    const position = 'absolute'
    const width = Math.floor(builtLength * scale)
    const height = Math.floor(builtBreadth * scale)
    const top = Math.floor(back * scale)
    left = Math.floor(left * scale)
    setStyle({ width, height, position, top, left })
  }
  console.log(scale)
  useEffect(() => {
    makeStyle()
  }, [builtLength, builtBreadth, top, left, scale])

  return (
    <div className='bg-gray-400' style={style}>
      <Quadrant id={1} />
      {/* <Quadrant id={2} /> */}
    </div>
  )
}
