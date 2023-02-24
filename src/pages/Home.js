import React, { useState } from 'react';
import Products from '../components/Products';
import { useEffect } from 'react';
import '.././index.css';

const Home = () => {
	const [user, setUser] = useState({});
	const fetchData = async () => {
		const res = await fetch('https://server-e-store.vercel.app/user', {
			Method: 'GET',
			headers: {
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('jwt')
				)}`,
			},
		});
		const data = await res.json();
		setUser(data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className='App'>
			<h2 className='heading'>
				Welcome to the Ecommerce Store
				<p style={{ color: 'red', fontWeight: 'bold' }}>
					{user.username}
				</p>
			</h2>
			<section>
				<Products />
			</section>
		</div>
	);
};

export default Home;
