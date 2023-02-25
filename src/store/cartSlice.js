const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addCart(state, action) {
			state.push(action.payload);
		},
		remove(state, action) {
			var arr = [];
			var check = false;
			var j = 0;
			for (let i = 0; i < state.length; i++) {
				if (state[i].id === action.payload && !check) {
					check = true;
					continue;
				}
				arr[j] = state[i];
				j++;
			}
			return (state = arr);
		},
		removeAll(state, action) {
			return (state = []);
		},
	},
});

export const { addCart, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
