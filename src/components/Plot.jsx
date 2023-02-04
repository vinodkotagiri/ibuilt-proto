import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Builtup from './Builtup'
import { setScaleValue } from '../../redux/features/Plot'

export default function Plot() {
  const [style, setStyle] = useState({ width: 0, height: 0 })
  const { length, breadth, scale } = useSelector((state) => state.plot)
  const dispatch = useDispatch()

  useEffect(() => {
    const width = 0.8 * (parseInt(window.innerWidth) - 380)
    const height = 0.8 * window.innerHeight

    dispatch(setScaleValue({ l: parseInt(width / length), b: parseInt(height / breadth) }))
  }, [length, breadth])

  useEffect(() => {
    makeStyle()
  }, [length, breadth, scale])

  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = parseInt(length) * parseInt(scale.l)
    currStyle['height'] = parseInt(breadth) * parseInt(scale.b)
    setStyle(currStyle)
  }

  return (
    <div style={style} className='bg-white relative'>
      <Builtup />
    </div>
  )
}
