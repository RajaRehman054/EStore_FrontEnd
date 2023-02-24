import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import userReducer from './userSlice';
import priceReducer from './priceSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		product: productReducer,
		user: userReducer,
		price: priceReducer,
	},
});

export default store;
