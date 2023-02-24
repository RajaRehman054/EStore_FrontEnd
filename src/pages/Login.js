import React from 'react';
import './css/login.css';
import OtherMethods from '../components/OtherMethods';
import Form from '../components/FormLogin';

const Login = () => {
	return (
		<div id='loginform'>
			<FormHeader title='Login' />
			<Form />
			<OtherMethods />
		</div>
	);
};

const FormHeader = props => <h2 id='headerTitle'>{props.title}</h2>;

export default Login;
