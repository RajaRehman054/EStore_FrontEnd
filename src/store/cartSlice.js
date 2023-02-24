const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addCart(state, action) {
			state.push(action.payload);
		},
		remove(state, action) {
			return state.filter(item => item.id !== action.payload);
		},
		removeAll(state, action) {
			return (state = []);
		},
	},
});

export const { addCart, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
