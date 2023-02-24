import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/login.css';
import FormButton from './FormButton';
import FormInput from './FormInput';

const Form = props => {
	const [name, setName] = useState('');
	const [user, setUser] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState('');
	const [time, setTime] = useState(0);

	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		const obj = { name, username: user, email, password };
		fetch('https://server-e-store.vercel.app/signup', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then(res => res.json())
			.then(data => {
				if (!data.err) {
					navigate('/');
				} else {
					setErr(data.err.message);
					setTime(20000);
				}
			});
	};
	if (setTime !== 0) {
		setTimeout(() => {
			setTime(0);
		}, 20000);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FormInput
					description='Full Name'
					placeholder='Enter your Full Name'
					type='text'
					value={name}
					onChange={setName}
				/>
				<FormInput
					description='Username'
					placeholder='Enter your username'
					type='text'
					value={user}
					onChange={setUser}
				/>
				<FormInput
					description='Email'
					placeholder='Enter your email'
					type='email'
					value={email}
					onChange={setEmail}
				/>
				<FormInput
					description='Password'
					placeholder='Enter your password'
					type='password'
					value={password}
					onChange={setPassword}
				/>
				<FormButton title='Sign Up' type='submit' />
			</form>
			{err !== '' && time !== 0 ? (
				<p style={{ textAlign: 'center', color: 'red' }}>{err}</p>
			) : null}
		</div>
	);
};

export default Form;
