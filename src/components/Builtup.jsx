import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Bedroom from './rooms/Bedroom'

export default function Builtup() {
  const { scale, setbacks, built, length, breadth } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  useEffect(() => {
    makeStyle()
  }, [length, breadth, scale])
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = parseInt(built.length) * parseInt(scale.l)
    currStyle['height'] = parseInt(built.breadth) * parseInt(scale.b)
    currStyle['top'] = parseInt(setbacks.top) * parseInt(scale.b)
    currStyle['left'] = parseInt(setbacks.left) * parseInt(scale.l)
    setStyle(currStyle)
  }
  return (
    <div className='bg-yellow-500 absolute' style={style}>
      <div className='flex'>
        <Bedroom id={0} />
        <Bedroom id={1} />
      </div>
    </div>
  )
}
