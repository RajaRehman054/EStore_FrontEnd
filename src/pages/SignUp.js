import React from 'react';
import './css/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from '../components/FormSignUp';

const SignUp = () => {
	return (
		<div id='loginform'>
			<FormHeader title='Login' />
			<Form />
		</div>
	);
};

const FormHeader = props => <h2 id='headerTitle'>{props.title}</h2>;

export default SignUp;
