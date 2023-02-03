import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/svg/door.svg'
export default function Wall({ length, thickness, direction, position, hasDoor, doorPosition }) {
	const [style, setStyle] = useState({})
	const { scale } = useSelector((state) => state.plot)
  useEffect(() => {
    makeStyle()
  }, [length, thickness, direction, scale])
  const makeStyle = () => {
    const currStyle = {}
    if (direction === 0) {
      currStyle['width'] = length * parseInt(scale.l)
      currStyle['height'] = thickness
    } else {
      currStyle['width'] = thickness
      currStyle['height'] = length * parseInt(scale.b)
    }
    if (position.top !== undefined) currStyle['top'] = position.top
    if (position.bottom !== undefined) currStyle['bottom'] = position.bottom
    if (position.left !== undefined) currStyle['left'] = position.left
    if (position.right !== undefined) currStyle['right'] = position.right
    setStyle(currStyle)
  }
  return (
    <div className='bg-slate-700 absolute' style={style}>
      {hasDoor && (
        <div className='w-[50px] bg-white h-[6px] top-0 absolute' style={doorPosition}>
          <img src={logo} className='absolute bottom-0 left-0' />
        </div>
      )}
    </div>
  )
}
