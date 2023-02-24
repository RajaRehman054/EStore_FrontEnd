import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Nav = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('jwt')) {
			navigate('/home');
		}
	}, []);
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					backgroundColor: 'black',
					borderRadius: '10px',
				}}>
				<h1
					className='logo'
					style={{ color: 'Yellow', paddingLeft: '2vw' }}>
					E-STORE
				</h1>
				<div>
					<Link
						className='navLink'
						to='/admin'
						style={{ color: 'Yellow' }}>
						Admin
					</Link>
					<Link
						className='navLink'
						to='/'
						style={{ color: 'Yellow' }}>
						Login
					</Link>
					<Link
						className='navLink'
						to='/signup'
						style={{ color: 'Yellow', paddingRight: '2vw' }}>
						SignUp
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Nav;
