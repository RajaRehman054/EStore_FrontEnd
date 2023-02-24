import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('admin')) {
			navigate('/admin');
		}
	}, []);
	return <Outlet />;
};

export default Admin;
