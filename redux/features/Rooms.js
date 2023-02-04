import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedRoom: null,
  bedrooms: [
    {
      id: 0,
      minLength: 8,
      maxLength: 16,
      minBreadth: 8,
      maxBreadth: 16,
      length: 12,
      breadth: 12,
      hasToilet: true,
      area: 0,
      position: {
        top: undefined,
        left: undefined,
        bottom: undefined,
        right: undefined
      },
      walls: {
        left: {
          thickness: 6,
          length: 12,
          hasDoor: false
        },
        right: {
          thickness: 6,
          length: 12,
          hasDoor: false
        },
        top: {
          thickness: 6,
          length: 12,
          hasDoor: false
        },
        bottom: {
          thickness: 6,
          length: 12,
          hasDoor: true,
          doorPosition: { right: 5 }
        }
      }
    },
    {
      id: 1,
      minLength: 8,
      maxLength: 16,
      minBreadth: 8,
      maxBreadth: 16,
      length: 12,
      breadth: 12,
      hasToilet: true,
      area: 0,
      position: {
        top: 0,
        left: undefined,
        bottom: undefined,
        right: 0
      },
      walls: {
        left: {
          thickness: 6,
          length: 12,
          hasDoor: false
        },
        right: {
          thickness: 6,
          length: 12,
          hasDoor: false
        },
        top: {
          thickness: 6,
          length: 12,
          hasDoor: false
        },
        bottom: {
          thickness: 6,
          length: 12,
          hasDoor: true
        }
      }
    },
    {
      id: 2,
      minLength: 8,
      maxLength: 16,
      minBreadth: 8,
      maxBreadth: 16,
      length: 16,
      breadth: 16,
      hasToilet: true,
      area: 0,
      position: {
        top: 0,
        left: 0,
        bottom: undefined,
        right: undefined
      },
      walls: {
        left: {
          thickness: 6,
          length: 16,
          hasDoor: false
        },
        right: {
          thickness: 6,
          length: 16
        },
        top: {
          thickness: 6,
          length: 16
        },
        bottom: {
          thickness: 6,
          length: 16
        }
      }
    },
    {
      id: 3,
      minLength: 8,
      maxLength: 16,
      minBreadth: 8,
      maxBreadth: 16,
      length: 16,
      breadth: 16,
      hasToilet: true,
      area: 0,
      position: {
        top: undefined,
        left: undefined,
        bottom: undefined,
        right: undefined
      },
      walls: {
        left: {
          thickness: 6,
          length: 16
        },
        right: {
          thickness: 6,
          length: 16
        },
        top: {
          thickness: 6,
          length: 16
        },
        bottom: {
          thickness: 6,
          length: 16
        }
      }
    }
  ],
  toilets: [
    {
      id: 0,
      desc: 'common',
      minLength: 4,
      maxLength: 7,
      minBreadth: 7,
      maxBreadth: 10,
      length: 5,
      breadth: 8,
      area: 0,
      position: {
        top: undefined,
        left: undefined,
        bottom: undefined,
        right: undefined
      },
      walls: {
        left: {
          thickness: 6,
          length: 16
        },
        right: {
          thickness: 6,
          length: 16
        },
        top: {
          thickness: 6,
          length: 16
        },
        bottom: {
          thickness: 6,
          length: 16
        }
      }
    }
  ]
}
const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setBedroomData: (state, action) => {
      const { id, data } = action.payload
      state.bedrooms[id] = data
    },
    setSelectedRoom: (state, action) => {
      const { id } = action.payload
      state.selectedRoom = state.bedrooms[id]
    }
  }
})
export const { setBedroomData, setSelectedRoom } = roomsSlice.actions
export default roomsSlice.reducer
