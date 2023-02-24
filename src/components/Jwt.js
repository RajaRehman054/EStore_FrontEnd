import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../store/userSlice';

const Jwt = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem('jwt')) {
			dispatch(loggedIn(JSON.parse(localStorage.getItem('jwt'))));
		} else {
			navigate('/');
		}
	}, []);
	return <Outlet />;
};

export default Jwt;
