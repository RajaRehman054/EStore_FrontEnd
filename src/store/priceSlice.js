const { createSlice } = require('@reduxjs/toolkit');

const priceSlice = createSlice({
	name: 'price',
	initialState: { price: 0 },
	reducers: {
		addPrice(state, action) {
			state.price += Math.ceil(action.payload);
		},
		removePrice(state, action) {
			state.price -= Math.ceil(action.payload);
		},
		removeAllPrice(state, action) {
			state.price = 0;
		},
	},
});

export const { addPrice, removePrice, removeAllPrice } = priceSlice.actions;
export default priceSlice.reducer;
