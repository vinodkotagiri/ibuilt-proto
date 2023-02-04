import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Quadrant from './Quadrant'

export default function Builtup() {
  const { builtLength, builtBreadth, scale, setbacks } = useSelector((state) => state.plot)
  let { back, left } = setbacks
  const [style, setStyle] = useState({})
  const makeStyle = () => {
    const width = Math.floor(builtLength * scale)
    const height = Math.floor(builtBreadth * scale)
    const top = Math.floor(back * scale)
    left = Math.floor(left * scale)
    setStyle({ width, height, top, left })
  }
  useEffect(() => {
    makeStyle()
  }, [builtLength, builtBreadth, scale, setbacks])
  return (
    <div className='bg-red-400 absolute' style={style}>
      <Quadrant id={1} />
    </div>
  )
}
