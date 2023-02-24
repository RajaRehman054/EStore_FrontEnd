const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
	name: 'user',
	initialState: { user: '' },
	reducers: {
		loggedIn(state, action) {
			state.user = action.payload;
		},
		loggedOut(state, action) {
			state.user = '';
		},
	},
});

export const { loggedIn, loggedOut } = userSlice.actions;
export default userSlice.reducer;
