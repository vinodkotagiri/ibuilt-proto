import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scale: {
    l: 1,
    b: 1
  },
  length: 0,
  breadth: 0,
  area: 0,
  setbacks: {
    top: 1.6,
    bottom: 4.6,
    left: 1.6,
    right: 1.6
  },
  built: {
    length: 0,
    breadth: 0,
    area: 0
  }
}
const plotSlice = createSlice({
  name: 'plot',
  initialState,
  reducers: {
    setScaleValue: (state, action) => {
      state.scale = action.payload
    },
    setPlotDimensions: (state, action) => {
      state.length = action.payload.length
      state.breadth = action.payload.breadth
      if (!(state.length || state.breadth)) state.area = 0
      else state.area = (parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2)
    },
    setSetBacks: (state, action) => {
      const { top, left, bottom, right } = action.payload
      state.setbacks.top = top
      state.setbacks.left = left
      state.setbacks.bottom = bottom
      state.setbacks.right = right
    },
    setBuiltUp: (state, action) => {
      if (action.payload.length > 0 && action.payload.breadth) {
        state.built.length = action.payload.length
        state.built.breadth = action.payload.breadth
        if (state.built.length < 0 || state.built.breadth < 0) state.built.area = 0
        else state.built.area = parseFloat(action.payload.length * action.payload.breadth).toFixed(2)
      }
    }
  }
})
export const { setPlotDimensions, setSetBacks, setBuiltUp, setScaleValue } = plotSlice.actions
export default plotSlice.reducer
