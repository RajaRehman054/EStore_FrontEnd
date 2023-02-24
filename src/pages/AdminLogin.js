import React from 'react';
import './css/login.css';
import Form from '../components/FormAdmin';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem('admin')) {
			navigate('/admin/dash');
		}
	}, []);
	return (
		<div id='loginform'>
			<FormHeader title='Admin Interaction' />
			<Form />
			<div style={{ justifyContent: 'center', display: 'flex' }}>
				<p>Go bact to Home Page: </p>
				<Link className='navLink' to='/' style={{ color: 'Red' }}>
					Login
				</Link>
			</div>
		</div>
	);
};

const FormHeader = props => <h2 id='headerTitle'>{props.title}</h2>;

export default AdminLogin;
