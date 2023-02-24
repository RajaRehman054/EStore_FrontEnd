import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import './css/dashboard.css';
import UserModal from '../components/UserModal';

export default function Dashboard() {
	const [users, setUsers] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleModal = () => {
		setShow(true);
	};

	const fetchUsers = async () => {
		const res = await fetch('https://server-e-store.vercel.app/allusers', {
			headers: {
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('admin')
				)}`,
			},
		});
		const data = await res.json();
		setUsers(data);
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			<SideBar sign='dash' />
			<div style={{ marginLeft: '15vw' }}>
				<h2>List of All Users</h2>
				{users.map(user => (
					<div className='card' key={user.username}>
						<div className='new'>
							<p>Name: </p>
							<h4>{user.name}</h4>
						</div>
						<div className='new'>
							<p>Username: </p>
							<h4>{user.username}</h4>
						</div>
						<div className='new'>
							<p>Email: </p>
							<h4>{user.email}</h4>
						</div>
						<div className='new'>
							<p>Admin: </p>
							{!user.admin ? <h4>False</h4> : <h4>True</h4>}
						</div>
						<button
							onClick={() => handleModal(user)}
							className='btn'>
							Delete
						</button>
						<UserModal
							show={show}
							user={user._id}
							close={setShow}
							users={fetchUsers}
							handleClose={handleClose}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
