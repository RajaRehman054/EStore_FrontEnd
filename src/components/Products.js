import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import { addCart } from '../store/cartSlice';
import { addPrice } from '../store/priceSlice';
import '.././index.css';

const Products = () => {
	const dispatch = useDispatch();
	const { data: products, status } = useSelector(state => state.product);
	const item = useSelector(state => state.cart);

	const handleAdd = product => {
		dispatch(addCart(product));
		dispatch(addPrice(product.price));
	};

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	if (status === STATUSES.LOADING) {
		return <h2>Loading....</h2>;
	}

	if (status === STATUSES.ERROR) {
		return <h2>Something went wrong!</h2>;
	}
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					padding: '1%',
				}}>
				<h3 style={{ display: 'inline' }}>Your Cart Items are: </h3>
				<h3
					style={{
						display: 'inline',
						color: 'red',
						marginLeft: '1vw',
					}}>
					{item.length}
				</h3>
			</div>
			<div className='productsWrapper'>
				{products.map(product => (
					<div className='card' key={product.id}>
						<img src={product.image} alt='' />
						<h4>{product.title}</h4>
						<h5>{product.price}</h5>
						<button
							onClick={() => handleAdd(product)}
							className='btn'>
							Add to cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
