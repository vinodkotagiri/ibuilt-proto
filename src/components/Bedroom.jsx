import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSelectedRoom } from '../../redux/common'

export default function Bedroom({ id }) {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const { bedrooms } = useSelector((state) => state.rooms)
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  const dispatch = useDispatch()
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = selectedRoom?.length * scale
    currStyle['height'] = selectedRoom?.breadth * scale
    currStyle['top'] = parseInt(selectedRoom?.position.y)
    currStyle['left'] = parseInt(selectedRoom?.position.x)
    setStyle(currStyle)
  }
  useEffect(() => {
    setSelectedRoom(
      bedrooms.find((room) => room.id === id),
      makeStyle()
    )
  }, [id, selectedRoom, bedrooms])
  const handleClick = () => {
    dispatch(updateSelectedRoom({ room: 'bedrooms', data: selectedRoom }))
  }
  console.log(style)
  return (
    <div
      className='bg-white cursor-pointer absolute flex items-center justify-center'
      onClick={handleClick}
      style={style}>
      {selectedRoom?.length} ft X {selectedRoom?.breadth} ft
    </div>
  )
}
