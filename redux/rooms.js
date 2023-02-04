import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bedrooms: [
    {
      id: 1,
      length: 8,
      breadth: 8,
      min: 7.5,
      max: 20,
      area: 0,
      walls: {
        front: {},
        back: {},
        left: {},
        right: {}
      },
      position: { x: 0, y: 0 }
    }
  ]
}
const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    updateRoom: (state, action) => {
      const { room, id, length, position, breadth } = action.payload
      if (room === 'bedrooms') {
        state.bedrooms[id - 1].length = length
        state.bedrooms[id - 1].breadth = breadth
        state.bedrooms[id - 1].position = position
      }
    }
  }
})
export const { updateRoom } = roomsSlice.actions
export default roomsSlice.reducer
