
export const eventsSlice = createSlice({
	name: "events",
	initialState: {
		events: [],
		detail: {},
		userIsLogged: false,
	},
	//usando redux toolkits son los reducers son una mezcla de actions y reducers
	reducers: {
		getAllEvents: (state, action) => {
			state.events = action.payload;
		},
		getAllEventsById: (state, action) => {
			state.detail = action.payload;
		},
		logUser: (state, action) => {
			state.userIsLogged = action.payload && true;
		},
	},
});
export const { getAllEvents, getAllEventsById } = eventsSlice.actions; //en .actions guardo las funciones
export default eventsSlice.reducer;
