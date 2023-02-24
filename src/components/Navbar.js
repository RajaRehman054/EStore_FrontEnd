import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '.././index.css';
import { loggedOut } from '../store/userSlice';

const Navbar = () => {
	const dispatch = useDispatch;
	const items = useSelector(state => state.cart);
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('jwt')) {
			navigate('/');
		}
	}, []);

	const handleClick = () => {
		localStorage.removeItem('jwt');
		dispatch(loggedOut());
	};

	return (
		<>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<span className='logo'>E-STORE</span>
				<div>
					<Link className='navLink' to='/home'>
						Home
					</Link>
					<Link className='navLink' to='/home/cart'>
						Cart
					</Link>
					<Link className='navLink' onClick={handleClick} to='/'>
						Log Out
					</Link>
					<span className='cartCount'>
						Cart items: {items.length}
					</span>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navbar;
