import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, removeAll } from '../store/cartSlice';
import { removePrice, removeAllPrice } from '../store/priceSlice';
import '.././index.css';

const Cart = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.cart);
	const { price } = useSelector(state => state.price);
	const handleRemove = (productId, price) => {
		dispatch(remove(productId));
		dispatch(removePrice(price));
	};

	const handleCheckOut = () => {
		dispatch(removeAll());
		dispatch(removeAllPrice());
	};

	return (
		<div>
			<h3>Cart</h3>
			<div className='cartWrapper'>
				{products.map(product => (
					<div key={product.id} className='cartCard'>
						<img src={product.image} alt='' />
						<h5>{product.title}</h5>
						<h5>{product.price}</h5>
						<button
							className='btn'
							onClick={() =>
								handleRemove(product.id, product.price)
							}>
							Remove
						</button>
					</div>
				))}
			</div>
			<h3>Total Price of your Shopping is:</h3>
			<h4 style={{ color: 'red' }}>{price}</h4>
			{price > 0 ? (
				<button className='btn' onClick={() => handleCheckOut()}>
					CheckOut
				</button>
			) : null}
		</div>
	);
};

export default Cart;
