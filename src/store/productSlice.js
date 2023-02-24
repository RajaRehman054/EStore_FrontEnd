const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
	IDLE: 'idle',
	ERROR: 'error',
	LOADING: 'loading',
});

const productSlice = createSlice({
	name: 'product',
	initialState: {
		data: [],
		status: STATUSES.IDLE,
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = STATUSES.LOADING;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = STATUSES.IDLE;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = STATUSES.ERROR;
			});
	},
});

// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
	const res = await fetch('https://server-e-store.vercel.app/items');
	const data = await res.json();
	return data;
});

export default productSlice.reducer;
