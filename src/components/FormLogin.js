import { useDispatch } from 'react-redux';
import { loggedIn } from '../store/userSlice';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/css/login.css';
import FormButton from './FormButton';
import FormInput from './FormInput';

const Form = props => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [err, setErr] = useState('');
	const [time, setTime] = useState(0);

	const handleSubmit = e => {
		e.preventDefault();
		const obj = { username, password };
		fetch('https://server-e-store.vercel.app/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(obj),
		})
			.then(res => res.json())
			.then(data => {
				if (data.success === true) {
					localStorage.setItem('jwt', JSON.stringify(data.token));
					dispatch(loggedIn(data.token));
					navigate('/home');
				}
			})
			.catch(err => {
				setErr('Wrong Password or Username Entered.');
				setTime(10000);
			});
	};
	if (setTime !== 0) {
		setTimeout(() => {
			setTime(0);
		}, 10000);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<FormInput
					description='Username'
					placeholder='Enter your username'
					type='text'
					value={username}
					onChange={setUsername}
				/>
				<FormInput
					description='Password'
					placeholder='Enter your password'
					type='password'
					value={password}
					onChange={setPassword}
				/>
				<FormButton title='Log in' type='submit' />
			</form>
			{err !== '' && time !== 0 ? (
				<p style={{ textAlign: 'center', color: 'red' }}>{err}</p>
			) : null}
		</div>
	);
};

export default Form;
