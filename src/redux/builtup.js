import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  length: 0,
  breadth: 0,
  area: null
}
const builtupSlice = createSlice({
  name: 'built',
  initialState,
  reducers: {
    setBuiltDimensions: (state, action) => {
      const { length, breadth } = action.payload
      state.length = parseFloat(length).toFixed(2) > 0 ? parseFloat(length).toFixed(2) : 0
      state.breadth = parseFloat(breadth).toFixed(2) > 0 ? parseFloat(breadth).toFixed(2) : 0
      if (parseFloat(length) > 0 && parseFloat(breadth) > 0)
        state.area = (parseFloat(length) * parseFloat(breadth)).toFixed(2)
      else state.area = 0
    }
  }
})
export const { setBuiltDimensions } = builtupSlice.actions
export default builtupSlice.reducer
