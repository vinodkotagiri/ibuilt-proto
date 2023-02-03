import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Wall from '../Wall'
export default function Bedroom({ id }) {
  const { bedrooms } = useSelector((state) => state.rooms)
  const [room, setRoom] = useState(bedrooms[id])
  const { scale } = useSelector((state) => state.plot)
  const [style, setStyle] = useState({})
  console.log(room)
  useEffect(() => {
    makeStyle()
  }, [room, scale])
  const makeStyle = () => {
    const currStyle = {}
    currStyle['width'] = parseInt(room.length) * parseInt(scale.l)
    currStyle['height'] = parseInt(room.breadth) * parseInt(scale.b)
    if (room.position.top !== undefined) currStyle['top'] = parseInt(room.position.top)
    else currStyle['bottom'] = parseInt(room.position.bottom)
    if (room.position.left !== undefined) currStyle['left'] = parseInt(room.position.left)
    else currStyle['right'] = parseInt(room.position.right)
    setStyle(currStyle)
  }
  return (
    <div className='bg-orange-500 absolute' style={style}>
      {/* LEFT WALL */}
      <Wall
        length={room.walls.left.length}
        thickness={room.walls.left.thickness}
        direction={1}
        position={{ top: 0, left: 0 }}
        hasDoor={false}
      />
      {/* RIGHT WALL */}
      <Wall
        length={room.walls.right.length}
        thickness={room.walls.right.thickness}
        direction={1}
        position={{ top: 0, right: 0 }}
        hasDoor={false}
      />
      {/* BOTTOM WALL */}
      <Wall
        length={room.walls.bottom.length}
        thickness={room.walls.bottom.thickness}
        direction={0}
        position={{ bottom: 0, left: 0 }}
        hasDoor={true}
        doorPosition={room.walls.bottom.doorPosition}
      />
      {/* TOP WALL */}
      <Wall
        length={room.walls.top.length}
        thickness={room.walls.top.thickness}
        direction={0}
        position={{ top: 0, left: 0 }}
        hasDoor={false}
      />
    </div>
  )
}
