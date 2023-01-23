import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './features/RoomSlice'
export const store = configureStore({
	reducer: { room: roomReducer },
})
