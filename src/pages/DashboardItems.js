import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import ItemModal from '../components/ItemModal';
import { useNavigate } from 'react-router-dom';

export default function DashboardItems() {
	const navigate = useNavigate();
	const [items, setItems] = useState([]);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleModal = () => {
		setShow(true);
	};

	const fetchItems = async () => {
		const res = await fetch('https://server-e-store.vercel.app/items', {
			headers: {
				Authorization: `Bearer ${JSON.parse(
					localStorage.getItem('admin')
				)}`,
			},
		});
		const data = await res.json();
		setItems(data);
	};

	const edit = item => {
		navigate(`/admin/dash/items/${item._id}`);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<div>
			<SideBar sign='items' />
			<div style={{ marginLeft: '15vw' }}>
				<h2>List of All Items</h2>
				<div className='productsWrapper'>
					{items.map(product => (
						<div className='card' key={product._id}>
							<img src={product.image} alt='' />
							<h4>{product.title}</h4>
							<h5>{product.price}</h5>
							<button
								onClick={() => edit(product)}
								className='btn'
								style={{ marginBottom: '10px' }}>
								Edit
							</button>
							<button onClick={handleModal} className='btn2'>
								Delete
							</button>
							<ItemModal
								show={show}
								item={product._id}
								close={setShow}
								items={fetchItems}
								handleClose={handleClose}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
