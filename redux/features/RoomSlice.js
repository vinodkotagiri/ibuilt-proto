import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	type: '2BHK',
	facing: 'SOUTH',
	scale: 0,
	plot: {
		plotLength: 0,
		plotBreadth: 0,
		area: 0,
	},
	setbacks: {
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	built: {
		length: 0,
		breadth: 0,
		area: 0,
	},
	bedroom1: {
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
		bathRoom: {
			length: 0,
			breadth: 0,
			area: 0,
			position: {
				top: undefined,
				bottom: undefined,
				left: undefined,
				right: undefined,
			},
			walls: {
				left: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				right: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				top: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				bottom: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
			},
		},
		balcony: {
			length: 0,
			breadth: 0,
			area: 0,
			walls: {
				left: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				right: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				top: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				bottom: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
			},
		},
	},
	bedroom2: {
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
		bathRoom: {
			length: 0,
			breadth: 0,
			area: 0,
			position: {
				top: undefined,
				bottom: undefined,
				left: undefined,
				right: undefined,
			},
			walls: {
				left: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				right: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				top: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				bottom: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
			},
		},
		balcony: {
			length: 0,
			breadth: 0,
			area: 0,
			walls: {
				left: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				right: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				top: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
				bottom: {
					position: {
						top: undefined,
						bottom: undefined,
						left: undefined,
						right: undefined,
					},
					direction: 0, //0 or 1
					length: 0,
					thickness: 0,
				},
			},
		},
	},
	commonToilet: {
		included: false,
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
	},
	living: {
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
	},
	kitchen: {
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
	},
	pooja: {
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
	},
	staircase: {
		length: 0,
		breadth: 0,
		area: 0,
		position: {
			top: undefined,
			bottom: undefined,
			left: undefined,
			right: undefined,
		},
		walls: {
			left: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			right: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			top: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
			bottom: {
				position: {
					top: undefined,
					bottom: undefined,
					left: undefined,
					right: undefined,
				},
				direction: 0, //0 or 1
				length: 0,
				thickness: 0,
			},
		},
	},
}
const roomSlice = createSlice({
	name: 'room',
	initialState,
	reducers: {
		setScale: (state, action) => {
			state.scale = action.payload.scale
		},
		setPlotDimensions: (state, action) => {
			state.plot.plotLength = parseFloat(action.payload.length).toFixed(2)
			state.plot.plotBreadth = parseFloat(action.payload.breadth).toFixed(2)
			if (!(state.plot.plotLength || state.plot.plotBreadth)) state.plot.area = 0
			else state.plot.area = (parseFloat(action.payload.length) * parseFloat(action.payload.breadth)).toFixed(2)
		},
		setSetBacks: (state, action) => {
			state.setbacks.left = parseFloat(action.payload.left).toFixed(2)
			state.setbacks.right = parseFloat(action.payload.right).toFixed(2)
			state.setbacks.top = parseFloat(action.payload.top).toFixed(2)
			state.setbacks.bottom = parseFloat(action.payload.bottom).toFixed(2)
		},
		setBuiltup: (state, action) => {
			state.built.length = parseFloat(action.payload.length)
			state.built.breadth = parseFloat(action.payload.breadth)
			if (state.built.length < 0 || state.built.breadth < 0) state.built.area = 0
			else state.built.area = parseFloat(action.payload.length * action.payload.breadth).toFixed(2)
		},
		setRoomData: (state, action) => {},
	},
})
export const { setPlotDimensions, setScale, setSetBacks, setBuiltup } = roomSlice.actions
export default roomSlice.reducer
