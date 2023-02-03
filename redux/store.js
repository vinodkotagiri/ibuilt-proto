import { configureStore } from '@reduxjs/toolkit'
import plotReducer from './features/Plot'
import roomReducer from './features/Rooms'
export const store = configureStore({
  reducer: { plot: plotReducer, rooms: roomReducer }
})
